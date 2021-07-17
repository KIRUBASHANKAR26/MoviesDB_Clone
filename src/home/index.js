import React,{ useState, useEffect} from 'react';
import Topbar from '../components/topbar';
import axios from 'axios';
import { API_URL, IMG_PATH, Free_to_watch, Trending_movie } from '../API';
import PopularMovies from '../components/MoviesScroll/popular'
import Freetowatch from '../components/MoviesScroll/freeTowatch';
import "./style.css"
import Trendingmovies from '../components/MoviesScroll/trending';
import Footer from '../components/footer';

const Home = () => {

    const [movies, setMovies] = useState([])
    const [freeMovies, setfreeMovies] = useState([])
    const [trendingMovies, serTrendingMovies] = useState([])
    // Get the data from the API of MoviesDB

    useEffect(() => {    
        axios.get(API_URL)
            .then((res)=>{
                console.log(res.data.results)
                setMovies(res.data.results)
        })
        axios.get(Free_to_watch)
            .then((res)=>{
                console.log(res.data.results)
                setfreeMovies(res.data.results)
        })
        axios.get(Trending_movie)
            .then((res)=>{
                console.log(res.data.results)
                serTrendingMovies(res.data.results)
        })
    }, [])


    return ( <div>
        <Topbar/>
        <h4 style={{paddingTop:"6rem",paddingLeft:"7%"}}>
            What's Popular
        </h4>
        <div className="scrollbar" style={{display:"flex", gap:"1rem",overflowX: "auto",width: "86%",margin:" 0 auto"}}>{
            movies?.map((movie, index) =>
                <React.Fragment  key={index}>
                        <PopularMovies 
                            image={`${IMG_PATH}/${movie.poster_path}`}
                            movieId={movie.id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            rate={movie.vote_average}
                        /> 
                </React.Fragment>   
            )
        }</div>
        <h4 style={{paddingTop:"1rem",paddingLeft:"7%"}}>
            Free TO Watch
        </h4>
        <div className="scrollbar" style={{display:"flex", gap:"1rem",overflowX: "auto",width: "86%",margin:" 0 auto"}}>{
            freeMovies?.map((movie, index) =>
                <React.Fragment  key={index}>
                        <Freetowatch 
                            image={`${IMG_PATH}/${movie.poster_path}`}
                            movieId={movie.id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            rate={movie.vote_average}
                        /> 
                </React.Fragment>   
            )
        }</div>

        <h4 style={{paddingTop:"1rem",paddingLeft:"7%"}}>
                    Trending Movies
        </h4>
        <div className="scrollbar" style={{display:"flex", gap:"1rem",overflowX: "auto",width: "86%",margin:" 0 auto"}}>{
            trendingMovies?.map((movie, index) =>
                <React.Fragment  key={index}>
                        <Trendingmovies 
                            image={`${IMG_PATH}/${movie.poster_path}`}
                            movieId={movie.id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            rate={movie.vote_average}
                        /> 
                </React.Fragment>
            )
        }</div>

        <section className="joinToday-wrapper">
            <h4 style={{fontWeight:"700",fontSize:"2.5rem"}}>
                Join Today
            </h4>
            <p style={{fontSize:"1.3rem"}}>
            Get access to maintain your own <i>custom personal lists, track what you've seen</i> and search and filter for <i> what to watch next</i>—regardless 
            if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, and Voot.
            </p>
            <button className="signIn-btn">SIGN UP</button>
            <ul>
                <li>Enjoy TMDb ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
            </ul>
        </section>
        <Footer/>
    </div> )
}
 
export default Home;