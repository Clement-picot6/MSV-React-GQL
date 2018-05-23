import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import PageTheme from './components/PageTheme/PageTheme';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: 'https://dev.api.monsupervoisin.fr/graphql'
})

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Route path="/" component={PageTheme} />
            </BrowserRouter>
        </ApolloProvider>
    );
  };

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
