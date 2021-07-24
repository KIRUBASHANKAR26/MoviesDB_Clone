import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { IMG_PATH, SEARCH_API } from '../../API';
import Topbar from '../topbar';
import "./style.css"



const Searchpage = () => {

    const { searchquery } = useParams();
    const [searchData, setsearchData] = useState([])

    useEffect(() => {
        axios(`${SEARCH_API}${searchquery}`)
        .then((res)=> setsearchData(res.data.results))
        .catch((err) => console.log(err))
    }, [])

    console.log(searchData)



    return ( <div>
        <Topbar/>
        {   searchData?.map(({title,release_date,poster_path,overview,id},index)=> 
            
            <div key={index} style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "1rem",marginTop:"1rem"}}>
                
                    <div style={{display: "flex",border: "1px solid rgb(227,227,227)",boxShadow:" 0 2px 8px rgb(0 0 0 / 10%)",borderRadius:"1rem",width:"100%",maxWidth: "75%"}}>
                        <Link className="wrapper" style={{display:"flex"}}  to={`/movie/${id}`}>
                        <img style={{width:"100px",objectFit:"cover",display: "inline-block",float:"left",borderRadius:" 1rem 0 0 1rem"
                        }} 
                        src={`${IMG_PATH}${poster_path}`} 
                        onError={(e)=>{e.target.onerror = null; e.target.src="https://www.dentzap.co.uk/assets/core/img/default-placeholder.png"}}
                        alt={title} title={title}/>
                        <div style={{padding:"0.5rem"}}>
                            <h6 style={{fontSize: "1.3rem",paddingTop: "0.5rem"}}>{title}</h6>
                            <p>{release_date}</p>
                            <p className="limit-line">{overview}</p>
                        </div>
                        </Link> 
                    </div>
                
               
            </div>
             
            )
        }
        
    </div> );
}
 
export default Searchpage;