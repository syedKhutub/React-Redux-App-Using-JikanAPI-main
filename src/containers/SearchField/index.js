import React, { useState , useEffect } from 'react'
import Header from '../../components/HeaderUI'
import axios from 'axios'
import Body from '../../components/BodyUI'

const SearchField = () => {

  
  const [count,setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [fetchedDataResults,setFetchedDataResults] = useState ([]);
  const [errorFound, setErrorFound] = useState(null);
  const [searchValue,setSearchValue] = useState('naruto');

  
  const fetchProducts = (searchValue , count) => {
    axios
      .get(
        "https://api.jikan.moe/v3/search/anime?page="+count+"&q=" + searchValue + "&limit=16"
      )
      .then (response => {
          let x = response.data.results;
          let updatedResult = fetchedDataResults;
          updatedResult = [...x,...updatedResult]
          setFetchedDataResults(updatedResult); 
      })
      .catch (error => {
            setErrorFound(error)
      })
  }

  useEffect(() => {
    fetchProducts(searchValue,count)}
  ,[]);

  
  
  const handleSubmit = (e,value) => {
      e.preventDefault();
      setShow(true);
      setSearchValue(value);
    fetchProducts(value,count)

  }

  const handleShowMore = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);
        fetchProducts(searchValue,count);
  }
console.log(fetchedDataResults)
  return (
      <div>

      
        <Header submitted={handleSubmit} /> 
        {/* {show && <h1>Requesting:{`https://api.jikan.moe/v3/search/anime?page=${count}&q=$"&limit=16`}</h1>} */}
        <Body results={fetchedDataResults} clicked={handleShowMore}/>
    </div>
  )
}

export default SearchField;
