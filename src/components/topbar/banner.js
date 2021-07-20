import React from 'react';
import "./style.css";

const Banner = () => {
    return ( <div className="banner-wrapper">
    <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg" alt="banner-img"/>
    <h2>Welcome.</h2>
    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
    <form className="search-wrapper">
      <input type="text" placeholder="Search..."/>
      <button type="submit">Search</button>
    </form>
  </div> );
}
 
export default Banner;