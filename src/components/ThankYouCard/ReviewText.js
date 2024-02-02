import classes from './ReviewText.module.css'
const ReviewText=(props)=>{
    return <div className={classes.background}>
        <p>You selected {props.ratingValue} out of 5</p>
    </div>

}
export default ReviewText;