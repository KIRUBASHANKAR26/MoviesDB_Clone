import React,{ useEffect,useState } from 'react';
import "./style.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { moviesDB_URL, API_KEY, IMG_PATH, YOUTUBE_URL} from '../../API';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ReactPlayer from "react-player";
import Topbar from '../topbar';



const Moviesdetails = () => {
    const { movieid } = useParams();
    const [movieData, setMovieData] = useState([])
    const [youtubeKey, setYoutubeKey] = useState([])
    const [trailerPlayer, settrailerPlayer] = useState(false)
    const [casts, setCasts] = useState([])

     useEffect(() => {
        axios(`${moviesDB_URL}/movie/${movieid}?api_key=${API_KEY}&language=en-US`)
        .then((res) => setMovieData(res.data))
        .catch((err)=> console.log(err));

        //YouTube key
        axios(`${moviesDB_URL}/movie/${movieid}/videos?api_key=${API_KEY}`)
        .then((res) => {setYoutubeKey(res.data.results[0].key)
        })
        .catch((err)=> console.log(err));

        //cast and crew

        axios(`${moviesDB_URL}/movie/${movieid}/credits?api_key=${API_KEY}`)
        .then((res) => setCasts(res.data.cast))

     }, [])

     ///-----------Convert the time, Minutes to hour
    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        return `${h + "h"}${m + "m"}`;
    }
    const playTrailer = () => {
        console.log("youtubeKey",youtubeKey)
        settrailerPlayer(!trailerPlayer)
    }
    const closeButton = () => {
        settrailerPlayer(trailerPlayer)
    }
    

    return ( <div>
        <Topbar/>
        {
            movieData && 
            <div className="movie-infos">
                <div className="left">
                    <img style={{width:"300px"}} src={`${IMG_PATH}/${movieData.poster_path}`} alt={movieData.title} title={movieData.title}/>
                    <img className="bg-image" src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieData.backdrop_path}`} alt={movieData.title}/>
                </div>
                <div className="right">
                    <h1>{movieData.title}</h1>
                    <div>{movieData.release_date}
                        <span>{
                        movieData.genres?.map((genre,index) => <ul key={index} style={{listStyleType:"none",display:"inline-block"}}>
                            <li>{genre.name}</li>
                        </ul>)
                        }</span>
                        <span>{convertMinsToHrsMins(movieData.runtime)}</span>
                    </div>
                    <div className="button-content">
                        <div className="progrees-bar" style={{width: "70px", height: "70px", borderRadius: "50%", boxShadow: "0px 0px 2px 3px #032541", background: "#081C22",display:"inline-block"}}>
                            <CircularProgressbar value={`${movieData.vote_average * 10}`} text={`${movieData.vote_average * 10}%`}
                            styles={{
                                trail: {
                                stroke: '#d6d6d6',
                                strokeLinecap: 'butt',
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                                },
                                text: {
                                fill: '#fff',
                                fontSize: "1.7rem",
                                fontWeight:"600"
                                }               
                            }}
                            />
                        </div>
                        <button>
                            <span style={{padding: "0.8rem 0.6rem"}} class="material-icons">
                                format_list_bulleted
                            </span>
                        </button>
                        
                        <button>
                            <span style={{padding: "0.8rem 0.6rem"}} class="material-icons">
                                favorite
                            </span>
                        </button>
                        
                        <button>
                            <span  style={{padding: "0.8rem 0.6rem"}} class="material-icons">
                                bookmark
                            </span>
                        </button>
                        
                        <button>
                            <span style={{padding: "0.8rem 0.6rem"}} class="material-icons">
                                grade
                            </span>
                        </button>
                        <div style={{cursor:"pointer",fontSize:"1.3rem", display:"inline-block",marginLeft:"1rem"}} onClick={playTrailer}><i className="fas fa-play"></i>
                            Play Trailer
                            <div className={trailerPlayer?"close-button active":"close-button"}>
                                Trailer Player
                                <button onClick={closeButton}><i style={{textAlign:"right"}}className="far fa-window-close"></i></button>
                            </div>
                            {
                                trailerPlayer && <ReactPlayer
                                url={`${YOUTUBE_URL}${youtubeKey}`}
                                className='react-player'
                                controls
                                width='50%'
                                height='80%'
                                />
                            }
                            
                            
                        </div>
                        
                    </div>    
                    <p style={{paddingTop:"1rem"}}>OVERVIEW:<br/>{movieData.overview}</p>
                </div>
            </div>
        }
        {/* <div>
            {
                casts.map((cast) => console.log(cast))
            }
        </div> */}
    </div> );
}
 
export default Moviesdetails;