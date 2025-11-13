import { Link } from "react-router-dom";


function SignIn(){
    return (
        <div>
    <fieldset>
        <legend>Welcome back</legend>
        <form action="#">
            <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="enter your email"/>
            <label htmlFor="pwd">Password :</label>
        <input type="password" name="pwd" id="pwd" placeholder="enter your password"/>
        <input type="submit" />
        </form>
        <Link to="/SignUp">Create account</Link>
    </fieldset>
        </div>
    );
}
export default SignIn