import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";
import './App.css'
import ResponsiveAppBar from "./components/NavBar.jsx";
import NowPlaying from "./components/NowPlaying.jsx";
import Results from "./components/Results.jsx";
import Error from './components/Error.jsx';

function HomePage () {
    const navigate = useNavigate();

    return (
        <div
        style={{
            height: '50vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '10px'
        }}
        >
            <h1 className="title">Welcome to the Movie Database</h1>
            <button
                onClick={() => navigate('/now-playing')}
                className="now-playing-button"
                style={{
                    padding: '12px 20px',
                    fontSize: '1.1rem',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: '#f50057',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
               Now Playing
            </button>
        </div>
    )
}
function App() {


  return (
    <>
        <Router>
          <ResponsiveAppBar/>
           <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/now-playing" element={<NowPlaying />} />
               <Route path="*" element={<Error />} />
               <Route path="/results" element={<Results />}/>
           </Routes>
        </Router>
    </>
  )
}

export default App
