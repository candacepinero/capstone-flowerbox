import { Link } from "react-router-dom";
import Data from "../Data"

import Nav from "../components/Nav"


const Home = () => {
    return (
        <div>
            {Data.map((flower)=> {
                const {name, price, tags, image} = flower
                return (
                    <div className='flower-container'>
                        <img height={100} src={image}/>
                        <div className="info">
                        {name}
                        </div>
                        <div className="price">
                            {price}
                        </div>
                        <div className="tags">
                            {tags.join(" ")}
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}
 export default Home;