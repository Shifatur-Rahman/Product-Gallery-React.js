import './App.css';
import img1 from "././assets/img/image1.jpg";
import img2 from "./assets/img/image2.jpg";
import img3 from "././assets/img/image1.jpg";
// import img2 from "..//public/assets/img/image2.jpg"
// import img3 from "..//public/assets/img/image3.jpg"

function App() {
  const products = [
    {
      id:1,
      name:"chair",
      img:img1
    },
    {
      id:2,
      name:"table",
      img:img2
    },
    {
      id:1,
      name:"desk",
      img:img3
    }
  ]
  return (
    <>
     <h1>Hello world</h1>
     {
      products.map(singleProduct=>{
        // console.log(singleProduct);
        return(
          <div className="novel"> 
           <p>{singleProduct.name}</p>
        <img src={process.env.PUBLIC_URL + singleProduct.img} alt="img" />
        </div>
        )
        
      })
     }
    </>
  );
}

export default App;
