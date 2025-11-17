import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
        <h1>Welcome to our Movie-app</h1>
        <h5>Sign in and watch movies for free</h5>
        <button><Link to="/SignIn">SignIn</Link></button>
        </div>
    );
}
export default Home