import React, { useState } from 'react'
import {connect} from 'react-redux'
import Header from '../../components/HeaderUI'
import axios from 'axios'
import { fetchDataRequest, fetchDataSuccess, fetchDataError , incrementCount , showMore } from "../../store/actions/action";
import Body from '../../components/BodyUI'

const SearchField = (props) => {

  
  // const [count,setCount] = useState(1);
  // const [show, setShow] = useState(false);
  // const [fetchedDataResults,setFetchedDataResults] = useState ([]);
  // const [errorFound, setErrorFound] = useState(null);
  const [searchValue,setSearchValue] = useState('');

  let count = props.count;
  const fetchProducts = (searchValue , count) => {
  
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?page="+count+"&q=" + searchValue + "&limit=16"
      )
      .then (response => {
          // let x = response.data.results;
          // let updatedResult = fetchedDataResults;
          // updatedResult = [...x,...updatedResult]
          // setFetchedDataResults(updatedResult); 
          
          props.onFetchDataSuccess(response.data.results)
        
      })
      .catch (error => {
            // setErrorFound(error)
          
            props.onFetchDataError(error);
      })
  }

 

  
  
  const handleSubmit = (e,value) => {
    
      e.preventDefault();
      props.onShowMore()
      setSearchValue(value);
    fetchProducts(value,count)

  }

  const handleShowMore = () => {
        props.onCount();
        fetchProducts(searchValue,count);
  }

  return (
      <div>

      
        <Header submitted={handleSubmit} /> 
        {/* {show && <h1>Requesting:{`https://api.jikan.moe/v3/search/anime?page=${count}&q=$"&limit=16`}</h1>} */}
        <Body results={props.item} clicked={handleShowMore}/>
    </div>
  )
}

const mapStateToProps = state => ({
  item: state.item,
  loading: state.loading,
  error: state.error,
  count: state.count
})

const mapDispatchToProps = dispatch => {
  return ({
      onFetchDataSuccess: (results) => dispatch(fetchDataSuccess(results)),
      onFetchDataError: (error) => dispatch(fetchDataError(error)),
      onFetchDataRequest: () => dispatch(fetchDataRequest()),
      onCount: () => dispatch(incrementCount()),
      onShowMore: () => dispatch(showMore())
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchField);
