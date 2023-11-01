import './App.css';
import img1 from "././assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "././assets/img/image1.jpg";
// import img2 from "..//public/assets/img/image2.jpg"
// import img3 from "..//public/assets/img/image3.jpg"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Product from './components/Product';


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
    <div className='App'>
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

  <Product />



      {/* <DragDropContext>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
              {products.map((singlePro) => {
                return (
                  <Draggable key={singlePro.id} draggableId={singlePro.id} index={singlePro.index}>
                    {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div className="characters-thumb">
                          <img src={singlePro.thumb} alt={`${singlePro.name}`} />
                        </div>
                        <p>
                          {singlePro.name}
                        </p>
                      </li>
                    )}
                  </Draggable>
                );
              })}

            </ul>
          )}
        </Droppable>
      </DragDropContext> */}


    </div>
  );
}

export default App;
