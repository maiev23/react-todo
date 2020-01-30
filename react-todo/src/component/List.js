import React from 'react';
import Todolistentry from './Todolistentry'
//import ListInput from './ListInput'


const List = (props) => {
    if(props.mode2 ==='read'){
    return (
        <div className='list'>
        <div className="todolist" >{Object.keys(props.data)[0]}</div>
        <button onClick={function(){props.button()}} className="listbutton">+</button>
        {props.data[Object.keys(props.data)[0]].map((i) => <Todolistentry list={i} />)}
        </div>
    )} else{
        return (
            <div className='list'>
            <div className="todolist">{Object.keys(props.data)[0]}</div>
            <button className="listbutton">+</button>
            {props.data[Object.keys(props.data)[0]].map((i) => <Todolistentry list={i}/>)}
            <input onKeyPress={function(e){props.enter(e)}}></input>
            </div>
        )
    }
};

export default List;