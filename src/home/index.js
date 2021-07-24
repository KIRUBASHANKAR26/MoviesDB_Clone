import React,{ useState, useEffect} from 'react';
import Topbar from '../components/topbar';
import axios from 'axios';
import { API_URL, IMG_PATH, Free_to_watch, Trending_movie } from '../API';
import PopularMovies from '../components/MoviesScroll/popular'
import Freetowatch from '../components/MoviesScroll/freeTowatch';
import "./style.css"
import Trendingmovies from '../components/MoviesScroll/trending';
import Footer from '../components/footer';
import Banner from '../components/topbar/banner';
import Buttongroups from '../components/capsuleButton';

const Home = () => {

    const [movies, setMovies] = useState([])
    const [freeMovies, setfreeMovies] = useState([])
    const [trendingMovies, serTrendingMovies] = useState([])
    const [popularMoviesPage, setPopularMoviesPage] = useState(1)
    const [freeTowatchPage, setFreeTowatchPage] = useState(1)
    const [trendingPage, setTrendingPage] = useState(1)

    useEffect(() => {    
        axios.get(`${API_URL}${popularMoviesPage}`)
            .then((res)=>{
                console.log(res.data.results)
                setMovies(res.data.results)
        })
        axios.get(`${Free_to_watch}${freeTowatchPage}&with_watch_monetization_types=free`)
            .then((res)=>{
                console.log(res.data.results)
                setfreeMovies(res.data.results)
        })
        axios.get(`${Trending_movie}${trendingPage}`)
            .then((res)=>{
                console.log(res.data.results)
                serTrendingMovies(res.data.results)
        })
    },[setMovies,setfreeMovies,serTrendingMovies,popularMoviesPage,freeTowatchPage,trendingPage])

    const getThepage = (e) => {
        let page = e.target.id;
        setPopularMoviesPage(page + 1);
      };

    const freeMoviesPage = (e) => {
        let page = e.target.id;
        setFreeTowatchPage(page + 1);
    };

    const trendPage = (e) => {
        console.log(e.target.id)
        let page = e.target.id;
        setTrendingPage(page + 1);
    }

    return ( <div>
        <Topbar/>
        <Banner/>
        <div style={{paddingTop: "5rem"}} className="column-wrapper">
            <div className="content-wrapper Popular">
                <div className="column">
                    <div className="column-header">
                        <h4>What's Popular</h4>
                        <Buttongroups buttons={["Streaming", "On TV", "For Rent","In theaters"]}
                        doSomethingAfterClick={getThepage}
                        />
                    </div>
                </div>
            </div>
        </div>
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
        <div className="column-wrapper">
            <div className="content-wrapper Popular">
                <div className="column">
                    <div className="column-header">
                        <h4>Free TO Watch</h4>
                        <Buttongroups buttons={["Movies", "TV"]}
                        doSomethingAfterClick={freeMoviesPage}
                        />
                    </div>
                </div>
            </div>
        </div>
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

        <div className="column-wrapper">
            <div className="content-wrapper Popular">
                <div className="column">
                    <div className="column-header">
                        <h4>Trending</h4>
                        <Buttongroups buttons={["Today", "This Week"]}
                        doSomethingAfterClick={trendPage}
                        />
                    </div>
                </div>
            </div>
        </div>
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