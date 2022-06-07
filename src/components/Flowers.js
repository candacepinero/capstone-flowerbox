import Data from "../Data"

const Flowers = (props) => {
    return (
        <div>
           <img className="flowers-img" src={props.image}></img>
           <div className="info">
           <p>{props.name}</p>
           <div className="price">
           <p>{props.price}</p>
           </div>
           <p>{props.tags}</p>
           </div>
        </div>
    );
}

export default Flowers;