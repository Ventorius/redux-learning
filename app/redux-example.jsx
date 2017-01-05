var redux = require('redux');
var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...'
  }else if(state.map.url){
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>'

  }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.changeName('Seba'));

store.dispatch(actions.addHobby('Running'))
store.dispatch(actions.addHobby('Swimming'))
store.dispatch(actions.removeHobby(2))

store.dispatch(actions.addMovie('Conjuring', 'horror'))
store.dispatch(actions.addMovie('Mad Max', 'action'))
store.dispatch(actions.addMovie('Dumb and Dumber', 'comedy'))
store.dispatch(actions.removeMovie(2))
