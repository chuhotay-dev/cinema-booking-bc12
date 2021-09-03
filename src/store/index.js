import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import movieReducer from 'containers/client/Home/module/reducer';
import movieDetailReducer from 'containers/client/MovieDetail/module/reducer';
import thunk from 'redux-thunk';
import authReducer from 'containers/shared/Auth/module/reducer';

const rootReducer = combineReducers({
  movieReducer,
  movieDetailReducer,
  authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
