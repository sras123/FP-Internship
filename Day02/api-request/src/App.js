import {Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Async from './Pages/Async';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/async" element={<Async/>}/>
    </Routes>
    </div>
  )
}

export default App;
