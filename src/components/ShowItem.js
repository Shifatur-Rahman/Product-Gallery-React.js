import React, {useState} from 'react'
import image1 from "../assets/images/image-1.webp"
import image2 from "../assets/images/image-2.webp"
import image3 from "../assets/images/image-3.webp"
import image4 from "../assets/images/image-4.webp"
import image5 from "../assets/images/image-5.webp"
import image6 from "../assets/images/image-6.webp"
import image7 from "../assets/images/image-7.webp"
import image8 from "../assets/images/image-8.webp"
import image9 from "../assets/images/image-9.webp"
import image10 from "../assets/images/image-10.jpeg"
import image11 from "../assets/images/image-11.jpeg"
import { DragDropContext,Droppable,Draggable } from 'react-beautiful-dnd';

const AllProduct =[
    {
        id: "one",
        thumb: image1
    },
    {
        id: "two",
        thumb: image2
    },
    {
        id: "three",
        thumb: image3
    },
    {
        id: "four",
        thumb: image4
    },
    {
        id: "five",
        thumb: image5
    },
    {
        id: "six",
        thumb: image6
    },
    {
        id: "seven",
        thumb: image7
    },
    {
        id: "eight",
        thumb: image8
    },
    {
        id: "nine",
        thumb: image9
    },
    {
        id: "ten",
        thumb: image10
    },
    {
        id: "elevene",
        thumb: image11
    }
]

const ShowItem = () => {
    const [characters, updateCharacters] = useState(AllProduct);

    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(characters);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCharacters(items);
    }
  return (
    <>
     {/* <div className="image_gallery">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="thumb">
                            <img src={thumb} alt={`${id} Thumb`} />
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
    </div> */}



     
    </>
  )
}

export default ShowItem