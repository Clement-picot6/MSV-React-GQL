import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo';
import Header from '../Header/Header'
import Skill from '../Skill/Skill';

class ListSkill extends Component {
    constructor(props) {
        super(props);
    }
    
    renderSkills() {
        return this.props.data.allSkillCategories[0].Skills.map(skill => (<Skill skill={skill} key={skill.code} />))
    }

    render() { 
        if (this.props.data.loading) {
            return <div>Loading</div>
        }
        
        return ( 
            <div className="container-global">
                <Header />
                <div className="container-bottom">
                    <div className="container-bottom-item">
                        {this.renderSkills()}
                    </div>
                </div>
            </div>
        )
        
        
    }
    
}

    const queryAllSkillsName = gql`
    query SkillsQuery($search: String!){
        allSkillCategories(search: $search) {
            name
            Skills {
                name,
                code,
                Icon {
                    downloadUrl
                }
            }
        }
    }
    `

export default graphql(queryAllSkillsName, {
    options: (props) => ({ variables: { search: props.match.params.category }})
})(withApollo(ListSkill));