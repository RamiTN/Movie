import { Link } from "react-router-dom";


function SignUp(){
    return (
        <div>
    <fieldset>
        <legend>Create an account and enjoy our features</legend>
        <form>
            <label htmlFor="email">Enter email :</label>
        <input type="email" name="email" id="email" placeholder="enter your email"/>
            <label htmlFor="pwd"> Enter password :</label>
        <input type="password" name="pwd" id="pwd" placeholder="enter your password"/>
        <input type="submit" />
        <input type="reset" />
        </form>
        <Link to="/SignIn">Already have an account? SignIn from here</Link>
    </fieldset>
        </div>
    );
}
export default SignUp