import React from 'react';
import { connect } from 'react-redux';
import {setTextFilter} from '../actions/filters';

const RecipeListFilter = (props)=>{
  return(
      <div>
          <input className='filter' type='text'
          placeholder='search recipe'
          value={props.filters.text}
        onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
          ></input>
      </div>
  )
}
const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };
  
  export default connect(mapStateToProps)(RecipeListFilter);
  