import Card from "../UI/Card"
import StarIcon from "./StarIcon";
import classes from './CenterCard.module.css'
import Ratings from "../RatingSection/Ratings";
import SubmitButton from "../UI/SubmitButton";

const CenterCard=(props)=>{
    
    return (
        <Card>
            <StarIcon/>
            <h2 className={classes['white-text']}>How did we do?</h2>
            <p className={classes.paragraph}>Please let us know how we did with your support request. All feedback is appreciated 
                to help us improve our offering!</p>
            <Ratings storeRating={props.storeRating}/>
            <SubmitButton  formSubmitHandler={props.formSubmitHandler}/>
        </Card>
    )
}
export default CenterCard;