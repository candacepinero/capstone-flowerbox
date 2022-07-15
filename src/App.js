import './App.css';
import Home from "./routes/home"
import Nav from "./components/Nav"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./style.css"

function App() {
  return (
    <div className="App">
    <Nav/>
    <Header/>
    <Home/>
    <Footer />
    </div>
  );
}

export default App;
