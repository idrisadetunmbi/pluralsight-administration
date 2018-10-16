import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, reduxImmutableStateInvariant()),
);
