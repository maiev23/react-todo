import React, { Component } from 'react';

class Searchlist extends Component {
    render() {
        return (
            <div>
                <div className='searchlist'>{Object.keys(this.props.list)[0]} </div>
            </div>
        );
    }
}

export default Searchlist;