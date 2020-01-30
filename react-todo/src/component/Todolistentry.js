import React from 'react';

const Todolistentry = (props) => {
    console.log(props)
    return (
        <div className='todolistentry'>{props.list.todo}</div>
    );
};

export default Todolistentry;