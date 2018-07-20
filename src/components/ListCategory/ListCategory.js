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
                    <div className="container-bottom-category">
                        {this.renderCategories()}
                    </div>
                </div>
            </div>
        )
        
    }

    renderCategories() {
        return this.props.data.allSkillThemes[0].SkillCategories.map(category => (<Category category={category} key={category.code} />))
    }
}

const queryAllSkillCategoriesName = gql`
query CategoriesQuery($search: String!){
    allSkillThemes(search: $search) {
        name
        SkillCategories {
            name,
            code
        }
    }
}
`

export default graphql(queryAllSkillCategoriesName, {
    options: (props) => ({ variables: { search: props.match.params.theme }})
})(withApollo(ListCategory)); 