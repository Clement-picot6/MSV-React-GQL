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
        return this.props.data.allSkills.map(skill => (<Skill skill={skill} key={skill.name} />))
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
    {
        allSkills {
            name
        }
    }
    `

export default graphql(queryAllSkillsName)(withApollo(ListSkill));