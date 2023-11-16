
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor=persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
          <Body />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
