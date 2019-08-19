import React,{useState, useEffect } from 'react';
import axios from 'axios';
import './searchBox.css';

const SearchBox = () =>{
    const [search,setSearch] = useState('');
    const [searchBut,setSearchBut] = useState('');
    const [searchResult, setSearchResult]= useState([]);
    const handleInputSearch = (e)=>{
        setSearch(e.target.value)
    }
   const handleSearch=(e)=>{
      if(e) e.preventDefault();
       setSearchBut(search);
    console.log(searchBut);
    const fetchData = async () => {
        const result = await axios(`https://api.themoviedb.org/3/search/multi?api_key=ba4e5aa62c46206e70e2f6e12a5acb25&language=en-US&query=${searchBut}&page=1&include_adult=false`);
    
        setSearchResult(result.data.results);
        console.log(searchResult);
    };
    fetchData();
   }
    useEffect(() => {
        handleSearch();
    }, [searchBut]);

    return(
        <div className="searchBox">
            <form  onSubmit={handleSearch} className="containSearch">
            <input placeholder="SEARCH MOVIES AND SHOWS" type="text" onChange={handleInputSearch}/>
            <button type="submit">Search</button>
            </form>
            <div className="searchContainer"> { searchResult.map(result => (
               
                <div className="searchResult">
                     <img src={`http://image.tmdb.org/t/p/w500${result.poster_path || result.profile_path}`} alt=""/>
                    <h3>{result.original_title || result.original_name || result.name}</h3>
                    <p></p>
                    <p>POPULARITY: {result.popularity}</p>
                </div>
           ))
            }
            </div> 
        </div>
   )
}

export default SearchBox;