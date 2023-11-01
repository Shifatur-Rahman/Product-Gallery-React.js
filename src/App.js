import './App.css';
import img1 from "././assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "././assets/img/image1.jpg";
// import img2 from "..//public/assets/img/image2.jpg"
// import img3 from "..//public/assets/img/image3.jpg"
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


function App() {
  const products = [
    {
      id:1,
      name:"chair",
      thumb:img1
    },
    {
      id:2,
      name:"table",
      thumb:img2
    },
    {
      id:1,
      name:"desk",
      thumb:img3
    }
  ]
  return (
    <>
     {/* {
      products.map(singleProduct=>{
        return(
          <DragDropContext>
            <Droppable droppableId="characters">
              <div className="novel">
                <p>{singleProduct.name}</p>
                <img src={process.env.PUBLIC_URL + singleProduct.img} alt="img" />
              </div>
            </Droppable>
          </DragDropContext>
        )
        
      })
     } */}





<ul className="characters">
  {products.map(({id, name, thumb}) => {
    return (
      <li key={id}>
        <div className="characters-thumb">
          <img src={thumb} alt={`${name} Thumb`} />
        </div>
        <p>
          { name }
        </p>
      </li>
    );
  })}
</ul>













    </>
  );
}

export default App;
