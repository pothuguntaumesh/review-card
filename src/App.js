import { useState } from "react";
import CenterCard from "./components/CenterCard/CenterCard";
import Background from "./components/UI/Background";
import Thankyou from "./components/ThankYouCard/ThankYou";

  var ratingValue=0;
function App() {
  
  const [isFormSubmitted, setIsFormSubmitted]=useState(false); 
  // const [isRated,setIsRated]=useState(false);
  // const[ratingValue,setRatingValue]=useState(0)
  const formSubmitHandler=()=>{
    console.log("Form submit clicked")
    setIsFormSubmitted(true)
  }
  const storeRating=(value)=>{
    ratingValue=value
    console.log(ratingValue)
    // setIsRated(true)
}
  return (
    <Background>
      {!isFormSubmitted && <CenterCard  storeRating={storeRating} formSubmitHandler={formSubmitHandler}></CenterCard>}
      {isFormSubmitted && <Thankyou ratingValue={ratingValue}></Thankyou>}
    </Background>)
};

export default App;
