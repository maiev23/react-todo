import React from 'react';
import Searchlist from './Searchlist'

const Search = (props) => {
    if(props.mode==='write'){
    return(
            <div className='search'>
            <input value='검색'></input>
            <div>예정됨</div>
            {props.data.map((i) => <Searchlist list={i} />)}
            <input type='text'onChange={function(e){props.Change(e.target.value)}} value={props.init}
                   onKeyPress={function(e){props.enter(e)}}
            ></input>
            <div className='searchbutton'><button onClick={function(){props.button()}}>+</button>목록추가</div>
          </div>
    )} else{
        return(
            <div className='search'>
            <input value='검색'></input>
            <div>예정됨</div>
            {props.data.map((i) => <Searchlist list={i}  />)}
            <div className='searchbutton'><button onClick={function(){props.button()}}>+</button>목록추가</div>
          </div>
    )
    }
}

export default Search;