import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import SearchPage from './components/pages/SearchPage';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchPage />
      </div>
    </Provider>
  );
}

export default App;
