import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Shop from './tasks/week-5/Shop';
import store from './tasks/week-5/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Shop />
      </div>
    </Provider>

  );
}

export default App;
