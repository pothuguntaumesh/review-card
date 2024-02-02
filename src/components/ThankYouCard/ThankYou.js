import Card from "../UI/Card";
import ThankYouIcon from "./ThankYouIcon"
import classes from './ThankYou.module.css'
import ReviewText from "./ReviewText";
const Thankyou=props=>{
    return <Card>
        <div className={classes.center}>
            <ThankYouIcon/>
            <ReviewText ratingValue={props.ratingValue}/>
            <h2 className={classes['white-text']}>Thank You!</h2>
            <p className={classes.paragraph}>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
        </div>
    </Card>
}
export default Thankyou;