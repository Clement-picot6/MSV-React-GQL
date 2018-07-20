import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import './PageTheme.css';
import Header from '../Header/Header'
import Theme from '../Theme/Theme';


class PageTheme extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: "",
         }
    }

    renderThemes() {
        return this.props.data.allSkillThemes.map(theme => (<Theme theme={theme} key={theme.code} />))
    }

    searchThemes = (search) => {
        const query = gql`
        query SearchThemes($search: String) {
            allSkillThemes(search: $search) {
                name,
                code
            }
        }
        ` 
        this.props.client.query({
            query,
            variables: {
                search
            }
        })
    }

    render() { 
        if (this.props.data.loading) {
            return <div>Loading</div>
        }
        console.log(this.props)
        return ( 
        <div className="container-global">
            <Header handleSubmit={this.searchThemes} />
        <div className="container-bottom">
            <div className="container-bottom-theme">
                {this.renderThemes()}
            </div>
        </div>
    </div>
         )
    }
}

const queryAllSkillThemesName = gql`
    {
        allSkillThemes {
            name,
            code
        }
    }
` 

export default graphql(queryAllSkillThemesName)(withApollo(PageTheme));