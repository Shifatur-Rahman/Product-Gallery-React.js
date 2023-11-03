import React from 'react'
import AllProduct from '../data/AllProduct'
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';


const DisplayData = () => {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="characters">

          {
            (provided) => (
              <div className='characters image_gallery' {...provided.droppableProps} ref={provided.innerRef}>
                {
                  AllProduct.map(({ id, thumb }, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <div className='single_product' key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                            <img
                              src={`${thumb}`}
                              alt={id}
                            />
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
