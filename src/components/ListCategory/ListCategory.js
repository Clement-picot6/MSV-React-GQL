import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import './ListCategory.css';
import Header from '../Header/Header'
import Category from '../Category/Category';

class ListCategory extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        if (this.props.data.loading) {
            return <div>Loading</div>
        }

        console.log(this.props)

        return ( 
            <div className="container-global">
                <Header />
                <div className="container-bottom">
                    <div className="container-bottom-item">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        )
        
    }

    renderCategories() {
        return this.props.data.allSkillCategories.map(category => (<Category category={category} key={category.name} />))
    }
}

const queryAllSkillCategoriesName = gql`
    {
        allSkillCategories {
            name 
        }
    }
`
 
export default graphql(queryAllSkillCategoriesName)(withApollo(ListCategory)); 