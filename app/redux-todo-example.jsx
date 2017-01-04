var redux = require('redux');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {

  switch (action.type){
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'some new search text'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'cat'
});
