import React from 'react'
import AllProduct from '../data/AllProduct'

const DisplayData = () => {
  return (
    <>
          <div className='image_gallery'>
              {
                  AllProduct.map((singleProduct, index) => {
                    const customStyle =
                    index === 0
                      ? { width: '400px', height: '400px' } // Adjust these values as needed
                      : {}; // Empty style object for other images
                      return (
                          <div className='single_product' key={singleProduct.id}>
                              <img 
                              src={`${singleProduct.thumb}`} 
                              alt={singleProduct.id}   
                              style={customStyle} 
                              />
                          </div>
                      )
                  })
              }
          </div>
    </>
  )
}

export default DisplayData