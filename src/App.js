
import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Header from './components/Header/Header.js'
import ProjectDisplay from "./pages/ProjectDisplay";
import Layout from './components/Layout'
import Home from './components/Home'
import { Footer } from "./components/Footer";





function App (){

  return <div className="App">

      <Router>

        <Header/>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="/projects" element={< Projects/>}/>
            <Route path="/experience" element={< Experience/>}/>

          </Route>

          <Route path="/project/:id" element={< ProjectDisplay /> }  />

        </Routes>

        <footer>
          <Footer />
        </footer>


              </Router>







    </div>;




  }






export default App;
