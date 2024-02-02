// import { useState } from "react"
import classes from "./RatingIcon.module.css"

const RatingIcon=props=>{
    const onClickHandler=()=>{
        props.isSelectedHandler(props.value)
        props.storeRating(props.value)
    }
    const styleClasses= props.selectedValue===props.value?`${classes['rating-container']} ${classes['fill-orange']}`:`${classes['rating-container']}`;
    return <div className={styleClasses} onClick={onClickHandler}>{props.value}</div>
}
export default RatingIcon;