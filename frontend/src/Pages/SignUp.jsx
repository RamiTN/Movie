import { Link } from "react-router-dom";

const sendData = async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
    const response = await fetch('http://localhost/movie-app/backend/signUp.php', {
      method: 'POST',
      body: formData
    });


  
  const result = await response.json();
  console.log(result);
}

function SignUp(){
    return (
        <div>
    <fieldset>
        <legend>Create an account and enjoy our features</legend>
        <form onSubmit={sendData}>
            <label htmlFor="email">Enter email :</label>
        <input type="email" name="email" id="email" placeholder="enter your email" required/>
            <label htmlFor="name">Enter name :</label>
        <input type="text" name="name" id="name" placeholder="enter your name" required/>
            <label htmlFor="pwd"> Enter password :</label>
        <input type="password" name="pwd" id="pwd" placeholder="enter your password" required/>
        <input type="submit"/>
        <input type="reset" />
        </form>
        <Link to="/SignIn">Already have an account? SignIn from here</Link>
    </fieldset>
        </div>
    );
}
export default SignUp