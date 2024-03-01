import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Avatar, Modal } from 'antd';
// import 'antd/dist/antd.css';
import { debounceTime, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

const searchSubject = new Subject();

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [nextPage, setNextPage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = async (pageUrl = 'https://demo.onefin.in/api/v1/maya/movies/') => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(pageUrl, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      setMovies((prevMovies) => [...prevMovies, ...response.data.data]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Click refresh to try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setMovies([]);
    setNextPage(null);
    setLoading(true);
    setError('');
    fetchMovies();
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    searchSubject.next(value);
  };

  const debouncedSearch = useCallback(
    searchSubject.pipe(debounceTime(250), filter((value) => value.length > 3)),
    []
  );

  useEffect(() => {
    const subscription = debouncedSearch.subscribe((value) => {
      // Fetch movies based on the search term
      // Implement your search logic here
      console.log('Search term:', value);
    });

    return () => subscription.unsubscribe();
  }, [debouncedSearch]);

  useEffect(() => {
    fetchMovies();
  }, []); // Run only on component mount

  return (
    <div>
      <h2>Movie List Page</h2>
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      )}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {movies.map((movie) => (
            <div key={movie.uuid} className="movie-card" onClick={() => handleCardClick(movie)}>
              <Avatar size={64} src={`https://ui-avatars.com/api/?name=${movie.title}`} />
              <div>
                <h3>{movie.title}</h3>
                <p>{movie.description && movie.description.slice(0, 50) + '...'}</p>
                <p>{movie.genres}</p>
              </div>
            </div>
          ))}
          {nextPage && <button onClick={() => fetchMovies(nextPage)}>Load More</button>}
        </div>
      )}
      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {selectedMovie && (
          <div>
            <Avatar size={100} src={`https://ui-avatars.com/api/?name=${selectedMovie.title}`} />
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
            <p>{selectedMovie.genres}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MovieListPage;
