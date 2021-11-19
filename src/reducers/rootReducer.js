import reducer from './reducer';
import { combineReducers } from 'redux';

// all other reducers should be combined in this root reducer
const appReducer = combineReducers({
    reducer: reducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
};

export default rootReducer;