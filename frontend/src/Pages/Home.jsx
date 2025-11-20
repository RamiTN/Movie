import { Link } from "react-router-dom";


function Home(){
    return (
        <div>
        <h1>Welcome to MovieNight</h1>
        <span style={{ display: 'flex', gap:'60px' ,alignItems:'center',marginLeft:'150px',marginTop:'30px'}}>
        <h5>Sign in and watch movies for free</h5>
        <button className="signin-btn">
  <Link to="/SignIn" className="signin-link">
    <span className="arrow">
    <svg
      xmlns="https://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M4 40.836q7.34-8.96 13.036-10.168t10.846-.365V41L44 23.545L27.882 7v10.167Q18.359 17.242 11.69 24Q5.023 30.758 4 40.836Z"
        clipRule="evenodd"
      ></path>
    </svg>
</span>
  </Link>
</button>

        </span>
        </div>
    );
}
export default Home