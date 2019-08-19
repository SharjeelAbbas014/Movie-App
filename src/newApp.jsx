import React from 'react';
import './App.css';
import Page from './components/page/page';
import Main from './components/mainImg/main'
import SearchBox from './components/searchBox/searchBox';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewApp extends React.Component {
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
      var settingsMain = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
      };
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        autoplay: true,
        arrows: false,
  
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1060,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
return(  
    <div>
<Slider {...settingsMain}>         {this
          .state
          .results
          .map(result => (<Main
            name={result.original_title || result.original_name}
            key={result.id}
            img={`http://image.tmdb.org/t/p/w780${result.backdrop_path}`}/>))}
            </Slider>
            <SearchBox/>
<div className="slideWidth">
  <h2>Trending Movies And Shows</h2>
        <Slider {...settings}>        {this
          .state
          .results
          .map(result => (<Page
            name={result.original_title || result.original_name}
            voteCount={result.vote_count}
            voteAvg={result.vote_average}
            key={result.id}
            img={`http://image.tmdb.org/t/p/w780${result.backdrop_path}`}/>))}
       </Slider>
       </div>
      {console.log(this.state.results)}
      </div>
      );

    }
  }

  export default NewApp;
