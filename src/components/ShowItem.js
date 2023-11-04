import React, { useState } from 'react'
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import AllProductsImage from "../../src/data/AllProduct.js"
import "./Style.css"
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

import { makeStyles } from "@material-ui/core";


const ShowItem = () => {
  const classes = gridStyle();
   const [items, setItems] = useState(AllProductsImage);
   
const onSortEnd = (oldIndex, newIndex) => {
  setItems((array) => arrayMove(array, oldIndex, newIndex));
};


  return (
    <>
    
    
    <SortableList
      onSortEnd={onSortEnd}
      className={classes.root}
      draggedItemClassName={classes.dragged}
    >
      {items.map(({ id, thumb }) => (
        <SortableItem key={id}>
          <div 
          className={classes.item}
          // className='single_product'
          >
            <img
              className={classes.image}
              alt={id}
              src={thumb}
              imgProps={{ draggable: false }}
            />
            </div>
        </SortableItem>
      ))}
    </SortableList>



    
    </>
  )
}

export default ShowItem;

const gridStyle = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: "10px"
  },
  item: {
    border: "1px solid #bdc3c7",
    borderRadius: "10px"
  },
  image: {
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    borderRadius: "10px"
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  dragged: {
    boxShadow:
      "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
    "& button": {
      opacity: 0
    }
  }
});