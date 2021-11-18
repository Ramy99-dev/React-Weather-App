import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import img from './sad_cloud.png'

const Weather = () => {
    const [current , setCurrent] = useState(null)
    const [loc , setLoc] = useState(null)
    const [weather , setWeather] =  useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const {location} = useParams()

    const checkWeather = (weatherConditon) =>{
    
          console.log(weatherConditon)
          if(weatherConditon.includes('snow'))
          {
              setWeather('weather-container snow')
          }
          else if(weatherConditon.includes('rain'))
          {
            setWeather('weather-container rain')
          }
          else if(weatherConditon.includes('Clear'))
          {
            setWeather('weather-container clear')
          }
          else if(weatherConditon.includes('cloudy'))
          {
            setWeather('weather-container cloud')
          }
          else if(weatherConditon.includes('Overcast'))
          {
            setWeather('weather-container overcast')
          }
          else if(weatherConditon.includes('Sunny'))
          {
            setWeather('weather-container sunny')
          }
          else if(weatherConditon.includes('Fog') || weatherConditon.includes('Mist'))
          {
            setWeather('weather-container fog')
          }
    }
    useEffect(()=>{
       if(current != null)
       {
          checkWeather(current.condition.text);
         
       }
        
    },[current])

    useEffect(()=>{
      setTimeout(() => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=01ec38db171b4820b26151544211711&q=${location}&aqi=no`)
        .then((res)=>{
            //console.log("test")
            setIsLoading(false)
            setCurrent(res.data.current)
            setLoc(res.data.location)
        })
        .catch((err)=>{
          setIsLoading(false)
            console.log(err)
        })
      }, 1000);
        
    },[])


   
   
    
    return ( 
        
    <div className={weather} >
        <div className="Templocation">
           {current && <p className="temp">{current.temp_c} °C</p>}
           {loc && <p>{loc.name}</p>}
        </div>
        {isLoading ? <div className="loading"><img src="https://i.pinimg.com/originals/41/5a/82/415a823171c72b69b927de7ba309d51f.gif"/><p>Loading ...</p></div> :  <div>{current ? (<div class="condition"><img src ={current.condition.icon}/><p>{current.condition.text}</p></div>):<div className="notFound"><img src={img} alt="" />
            <p>No Data</p>
        </div>}</div> }  
    </div> 
    );
}
 
export default Weather;