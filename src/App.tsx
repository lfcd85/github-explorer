import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import SearchPage from './components/pages/SearchPage';
import client from './apolloClient';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="App">
          <SearchPage />
        </div>
       </ApolloProvider>
    </Provider>
  );
}

export default App;
