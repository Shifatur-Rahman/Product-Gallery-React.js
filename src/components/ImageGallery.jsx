import React, { useState } from 'react';
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

const ImageGallery = () => {
  const [images, setImages] = useState([
    { id: 1, src: image1 },
    { id: 2, src: image2 },
    { id: 3, src: image3 },
    { id: 4, src: image4 },
    { id: 5, src: image5 },
    { id: 6, src: image6 },
    { id: 7, src: image7 },
    { id: 8, src: image8 },
    { id: 9, src: image9 },
    { id: 10, src: image10 },
    { id: 11, src: image11 },
    // Add more image objects as needed
  ]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedImage = images.find((img) => img.id.toString() === id);

    if (draggedImage) {
      const newImages = images.filter((img) => img.id.toString() !== id);
      setImages([...newImages, draggedImage]);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="image-gallery" onDrop={handleDrop} onDragOver={allowDrop}>
      {images.map((image) => (
        <div className='single-image'> 
        <img
          key={image.id}
          src={image.src}
          alt={`Image ${image.id}`}
          onDragStart={(e) => handleDragStart(e, image.id)}
          draggable
        />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
