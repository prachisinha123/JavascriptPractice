import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [modalData, setModalData] = useState(null);
  const searchInputRef = useRef(null);

 
    const fetchMovies = async(url) => {
  
      // console.log("Hello");
      
    setLoading(true);
    setError(null); 
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
     
      // setMovies (response.data.data);
      setMovies(response.data.results);
      console.log(response);
      // setNextPage(response.data.data.next);
      setNextPage(response.data.next);
    //   -----------------
    if (response.data && response.data.results && response.data.next) {
        // setMovies(response.data.data);
        setMovies(response.data.results);
        console.log(response);
        // setNextPage(response.data.data.next);
        setNextPage(response.data.next);
        
      } else {
        setError('No data returned or no next page link from the server');
      }
      
    // ---------------
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  const handleRefresh = () => {
   
     fetchMovies('https://demo.onefin.in/api/v1/maya/movies/');
     
  };

  const handleCardClick = (movie) => {
    console.log("hellloooooo");
    setModalData(movie);
    //  const movieModal = new window.bootstrap.Modal(document.getElementById('movieModal'));
    //  movieModal.show();
  };
  // const movieModal = new window.bootstrap.Modal(document.getElementById('movieModal'));
  // movieModal.show();
  // };
   const handleCloseModal = () => {
    setModalData(null);
  };

  const handleSearch = () => {
    const searchText = searchInputRef.current.value;
    if (searchText.length >= 3) {
      // Implement your search logic here
      console.log('Search:', searchText);
    }
  };

  useEffect(() => {
    fetchMovies('https://demo.onefin.in/api/v1/maya/movies/');
  }, []); // Fetch movies on component mount

  return (
    <div>
      <h2 className="movie">Movies Page</h2>
       {loading ? (
        <p>Loading...</p>
       ) : error ? (
         <>
           <p>{error}</p>
           <button className = "btn"  onClick={handleRefresh}>Refresh</button>
         </>
       ) : (
         <>
           <div>
             {/* Search functionality */}
            <input
              type="text"
              placeholder="Search movies..."
              ref={searchInputRef}
              onChange={() => setTimeout(handleSearch, 250)}
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}> 
            {movies.map((movie) => (
              
            
      <div key={movie.uuid} className="movie-card" onClick={() => handleCardClick(movie)} data-bs-target="#movieModal">
       {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieModal">
       Launch demo modal
        </button>  */}
         <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#movieModal">
        
        </button> 
                {/* <img src={`https://ui-avatars.com/https://demo.onefin.in/api/v1/maya/movies/?name=${movie.title}`} alt={movie.title} /> */}
                <img  src={`https://ui-avatars.com/api/?name=${movie.title}`} alt={movie.title} />
                <h3 className = "title">{movie.title}</h3>
                <p className = "text">{movie.description.slice(0, 50)}...</p>
                <p  className = "text">Genres: {movie.genres}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {nextPage && (
        <button className = "btn" onClick={() => fetchMovies(nextPage)}>Load More</button>
      )}
      {modalData && (
        // <div className="modal" id='#movieModal'>
       
        //   {/* <img src={`https://ui-avatars.com/https://demo.onefin.in/api/v1/maya/movies/?name=${modalData.title}`} alt={modalData.title} /> */}
        //   <img src={`https://ui-avatars.com/api/?name=${modalData.title}`} alt={modalData.title} />
        //   <h3>{modalData.title}</h3>
        //   <p>{modalData.description}</p>
        //   <p>Genres: {modalData.genres}</p>
        //   <button className = "btn" onClick={handleCloseModal}>Close</button>
        



// <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div className="modal-dialog">
//     <div className="modal-content">
//       <div className="modal-header">
//         <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div className="modal-body">
//         ...
//       </div>
//       <div className="modal-footer">
//       {/* <button className = "btn" onClick={handleCloseModal}>Close</button> */}
//         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" className="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
  // <div className="modal" id='#movieModal'>
<div className="modal fade" id="movieModal" tabIndex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="movieModalLabel">{modalData.title}</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <p>{modalData.description}</p>
      <p>Genres: {modalData.genres}</p>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>Close</button>
      {/* <button type="button" className="btn btn-primary"> Save changes</button> */}
    </div>
  </div>
</div>
</div> 
// </div>
      )}
    </div>

  );
          
};

export default MoviesPage;







