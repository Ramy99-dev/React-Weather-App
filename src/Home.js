import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const [location , setLocation ] = useState('');
    const handleSubmit = (e) =>{
         e.preventDefault();
         navigate(`/weather/${location}`)
         
    }
    return ( 
        <div style={{color:'white'}} className="home">
            <h1 className="title">Weather App</h1>
            <small className="description" style={{color:'white'}}>My first React App made with ❤️ </small>
            <form onSubmit={handleSubmit}>
                <div className="form">
                   <input onChange={(e)=>{
                       setLocation(e.target.value);
                   }} type="text" name="" id="" />
                   <button>Search</button>
                </div>
            </form>
        </div>
     );
}
 
export default Home;