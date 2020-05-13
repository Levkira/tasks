import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
// import Shop from './tasks/week-5/Shop';
// import store from './tasks/week-5/redux/store';
import GistExplorer from './tasks/week-6/GistExplorer';
import store from './tasks/week-6/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GistExplorer />
      </div>
    </Provider>

  );
}

export default App;
