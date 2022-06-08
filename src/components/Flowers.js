import Data from "../Data"

const Flowers = (props) => {
    return (
        <div>
           <img className="flowers-img" src={props.image}></img>
           
           <div className="info">
          <div className="name">
           <p>{props.name}</p>
           </div>
           <div className="price">
           <p>${props.price}</p>
           </div>
           
           <div className="tags">
           <p>{props.tags.join(" ")}</p>
            </div>
           
           </div>
        </div>
    );
}

export default Flowers;