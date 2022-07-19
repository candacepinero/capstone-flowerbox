import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import About from "./routes/about"
import Contact from './routes/contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <Nav/>
 <Header />
   <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
