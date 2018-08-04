const store = require('../store');

module.exports = function detail (movieId){

  if (movieId){
    let url =  `http://api.themoviedb.org/3/movie/${movieId}?api_key=5899970b9a2017c3f4efcb2b745daa6a`;
    // let url = '/dist/json/detail.json';

    // promise to make a call
    var getDetailData = new Promise((resolve, reject) =>{
      fetch(url).then((data) => {
        return data.json();
      }).then((data) =>{
        resolve(data);
      });
    });

    // On Sucessfull promise resolved, calling the method to render the detais to the page.
    getDetailData.then((response) =>{

      store.dispatch({ 
        type: 'SEARCHING',
        payload: false
      });

      store.dispatch({
        type: 'SEARCH_DETAIL_COMPLETE',
        payload: response
      });
                 
    });
  }

};