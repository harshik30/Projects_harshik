import React from 'react';

const SearchBox =(props)=>{
    return (
        <div className='col col-sm-4'>
            <input 
            className='form-control' 
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder='Type to Search....'
            ></input>
            <button className="m-3 p-3" onClick={props.getMovieRequest}>search</button>
        </div>
    );
};

export default SearchBox;