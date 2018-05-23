import React, { Component } from 'react';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: ""
         }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.search);
    }

    render() { 
        return ( 
            <div className="container-top">
                <h3>de quoi as-tu besoin ?</h3>
                <div className="echap">X</div>
                <div className="separator"></div>
                <form onSubmit={this.handleSubmit}>
                    <input type="search" name="" id="" placeholder="Décris ton besoin..." onChange={event => this.setState({search: event.target.value})} />
                </form>
            </div>
         )
    }
}
 
export default Header;