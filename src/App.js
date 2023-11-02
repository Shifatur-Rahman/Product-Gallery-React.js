import './App.css';
import img1 from "././assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "././assets/img/image1.jpg";
import DisplayData from './components/DisplayData';

function App() {
  const products = [
    {
      id:1,
      thumb:img1
    },
    {
      id:2,
      thumb:img2
    },
    {
      id:1,
      thumb:img3
    }
  ]

  return (
    <div className='App'>

  {/* <Product /> */}

  <DisplayData />


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


