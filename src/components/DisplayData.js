import React, {useState} from 'react'
import AllProducts from '../data/AllProduct'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';

const DisplayData = () => {
  const [char, setChar] = useState(AllProducts)

  let handleOnChange = (result) => {
    if (!result.destination) return;
    const items = Array.from(char);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setChar(items);
  }
  return (
    <>

      <DragDropContext onDragEnd={handleOnChange}>
        <Droppable droppableId="characters">

          {
            (provided) => (
              <div className='characters image_gallery' {...provided.droppableProps} ref={provided.innerRef}>
                {
                  char.map(({ id, thumb }, index) => {
                    return (
                      <Draggable  direction="vertical" key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className='single_product'>
                            <img
                              src={`${thumb}`}
                              alt={id}
                            />
                            </div>
                            </div>
                        )}
                      </Draggable>
                    )
                  })
                }
                {provided.placeholder}

              </div>

            )
          }

        </Droppable>
      </DragDropContext>




    </>
  )
}

export default DisplayData




// custom style
                            {/* <div style={customStyle}>  */}
                            // const customStyle =
                    // index === 0
                    //   ? { className:"myProducts" }
                    //   : {className:"myItems"};
