import { useState } from "react";
import RatingIcon from "./RatingIcon";
import classes from "./Ratings.module.css"
const ratingValues=[1,2,3,4,5]
const Ratings=(props)=>{
    const [selectedValue,setSelectedValue]=useState(0);
    const isSelectedHandler=(value)=>{
        setSelectedValue(value)
    }


    return (<section className={classes.ratings}>
        {ratingValues.map((value)=><RatingIcon selectedValue={selectedValue} isSelectedHandler={isSelectedHandler} storeRating={props.storeRating}  key={value} value={value}/>)}
    </section>)
}
export default Ratings;