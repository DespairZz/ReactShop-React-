import { combineReducers } from 'redux';
import filtersReducer from './filters';
import phonesReducer from './phones';

const rootReducer = combineReducers({
  filters: filtersReducer,
  phones: phonesReducer,
});

export default rootReducer