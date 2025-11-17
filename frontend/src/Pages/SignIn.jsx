import { Link, useNavigate } from "react-router-dom";

function SignIn(){
    const navigate = useNavigate();

    const sendData = async (e) => {
      e.preventDefault();
      
      try {
        const formData = new FormData(e.target);
        
        const response = await fetch('http://localhost/movie-app/backend/signIn.php', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        console.log('Result:', result);
        
        if (result.status === 'success') {
          navigate('/Dashboard');
        } else {
          alert(result.message);
        }
        
      } catch (error) {
        console.error('Error:', error);
        alert('Network error: ' + error.message);
      }
    }

    return (
        <div>
    <fieldset>
        <legend>Welcome back</legend>
        <form onSubmit={sendData}>
            <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="enter your email" required/>
            <label htmlFor="pwd">Password :</label>
        <input type="password" name="pwd" id="pwd" placeholder="enter your password" required/>
        <input type="submit" />
        </form>
        <Link to="/SignUp">Create account</Link>
    </fieldset>
        </div>
    );
}
export default SignIn