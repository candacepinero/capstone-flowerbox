
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Flowers from "./components/Flowers"
import Data from "./Data"
import "./style.css"

function App() {
  const flowers = Data.map((ele, index) => {
    return (
      <Flowers
      name={ele.name}
      image={ele.image}
      price={ele.price}
      tags={ele.tags}
      key={index}
      />
    );
});
//    console.log('this is Flowers', flowers)
  
  
  
  
  
  return (
    <div>
      <Nav />
      <Header />
      <div className='flower-container'>
      {flowers}
      </div>

    </div>
  );
}





export default App;
