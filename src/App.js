import './App.css';
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Hero/>
      <Gallery/>
    </Router> 
  );
}
export default App;
