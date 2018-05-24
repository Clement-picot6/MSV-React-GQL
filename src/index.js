import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import PageTheme from './components/PageTheme/PageTheme';
import ListCategory from './components/ListCategory/ListCategory'
import ListSkill from './components/ListSkill/ListSkill'
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    uri: 'https://dev.api.monsupervoisin.fr/graphql'
})

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={PageTheme} />
                    <Route path="/allSkillCategories" component={ListCategory} />
                    <Route path="/allSkills" component={ListSkill} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    );
  };

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
