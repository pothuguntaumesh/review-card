import classes from './SubmitButton.module.css'
const SubmitButton=props=>{
    return <div className={classes.btn} onClick={props.formSubmitHandler}>SUBMIT</div>
}
export default SubmitButton;