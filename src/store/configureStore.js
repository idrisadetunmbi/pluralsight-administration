import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];
if (process.env.NODE_ENV === 'developemnt') {
  middleware.push(reduxImmutableStateInvariant());
}

export default initialState => createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware),
);
