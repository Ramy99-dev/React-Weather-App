
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,  Route , Routes  } from "react-router-dom";
import Weather from './Weather';
function App() {
  return (
    <Router>
     <div className="App">
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/weather/:location' element={<Weather/>}/>
         </Routes>
     </div>
    </Router>
  );
}

export default App;
