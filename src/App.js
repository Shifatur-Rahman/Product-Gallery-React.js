import './App.css';
import img1 from "././assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "././assets/img/image1.jpg";
// import img2 from "..//public/assets/img/image2.jpg"
// import img3 from "..//public/assets/img/image3.jpg"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Product from './components/Product';
import { useState } from 'react';


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



// const finalSpaceCharacters = [
//   {
//     id: 'gary',
//     name: 'Gary Goodspeed',
//     thumb: img1
//   },
//   {
//     id: 'cato',
//     name: 'Little Cato',
//     thumb: img2
//   },
//   {
//     id: 'kvn',
//     name: 'KVN',
//     thumb: img3
//   },
//   {
//     id: 'mooncake',
//     name: 'Mooncake',
//     thumb: img1
//   },
//   {
//     id: 'quinn',
//     name: 'Quinn Ergon',
//     thumb: img2
//   }
// ]

// function App() {
//   const [characters, updateCharacters] = useState(finalSpaceCharacters);

//   function handleOnDragEnd(result) {
//     if (!result.destination) return;
//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     updateCharacters(items);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Final Space Characters</h1>
//         <DragDropContext onDragEnd={handleOnDragEnd}>
//           <Droppable droppableId="characters">
//             {(provided) => (
//               <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
//                 {characters.map(({id, name, thumb}, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {(provided) => (
//                         <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                           <div className="characters-thumb">
//                             <img src={thumb} alt={`${name} Thumb`} />
//                           </div>
//                           <p>
//                             { name }
//                           </p>
//                         </li>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </DragDropContext>
//       </header>
//       <p>
//         Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
//       </p>
//     </div>
//   );
// }

// export default App;