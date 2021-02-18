import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

function configureStore(): any {
  const store = createStore(
    persistReducer(
      {
        key: 'root',
        // debug: true,
        storage,
        blacklist: ['app'],
      },
      reducer
    ),
    composeWithDevTools(applyMiddleware(thunk))
  );

  console.log('initialState', store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log('restoredState', store.getState());
  });

  return { store, persistor };
}

export default configureStore;
