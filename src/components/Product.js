import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import img1 from "..//assets/img/image1.jpg";
import img2 from "..//assets/img/image2.jpg";
import img3 from "..//assets/img/image3.jpg";


const Product = () => {

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

      const [characters, updateCharacters] = useState(products);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        updateCharacters(items);
    }

  return (
    <>
    
    <div className="app">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={process.env.PUBLIC_URL + thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">Final Space Wiki</a>
      </p>
    </div>
    
    
    
    </>
  )
}

export default Product