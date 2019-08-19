import React from 'react';
import './trending.css';

class Trending extends React.Component {
    constructor() {
      super();
      this.state = {
        results: [
          {
            actual_title: "EndGame",
           backdrop_path: null
          }
        
        ]
      };
    }
  
    componentDidMount() {
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=ba4e5aa62c46206e70e2f6e12a5acb25`)
        .then(res => res.json())
        .then(json => this.setState({results: json.results}));
    }
  
    
  
    render() {
        const { backdrop_path } = this.state.results[0]
  
      if (!backdrop_path) return <div>Images are not fetched yet!</div>

        return(
            <div className="searchContainer"> { this.state.results.map(result => (
               
                <div className="searchResult">
                     <img src={`http://image.tmdb.org/t/p/w500${result.poster_path || result.profile_path}`} alt=""/>
                    <h3>{result.original_title || result.original_name || result.name}</h3>
                    <p></p>
                    <p>POPULARITY: {result.popularity}</p>
                </div>
           ))
            }
            </div> 
        )
    }

}
export default Trending;