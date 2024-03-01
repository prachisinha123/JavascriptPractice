let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1> Hello World! </h1>'; 

let div  = document.createElement('div');   
// This will create an element 'div'
div.innerHTML = '<h1>Hello World!</h1>';
// a.appendChild(div);
// If we have to place a number of elements in a strategy, then we have will use document.createElement
// a.prepend (div);
a.before(div);