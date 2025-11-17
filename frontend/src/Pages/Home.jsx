import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
        <h1>Welcome to our Movie-app</h1>
        <span style={{ display: 'flex', gap:'60px' ,alignItems:'center',marginLeft:'150px',marginTop:'30px'}}>
        <h5>Sign in and watch movies for free</h5>
        <button><Link to="/SignIn">SignIn</Link></button>
        </span>
        </div>
    );
}
export default Home