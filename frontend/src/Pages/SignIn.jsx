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
          navigate('/Userdash');
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
  
  <h1 style={{marginBottom:"40px"}}>MovieNight</h1>
  <fieldset
    style={{
      height: "auto",
      maxWidth: "500px",
      margin: "auto",
      padding: "30px",
      border: "1px solid #ccc",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      backgroundColor: "transparent",
    }}
  >
<legend
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 10px",
    fontSize: "1.2rem",
  }}
>
  <span>Welcome back</span>

  <span><Link to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="2.2em"
      height="2.2em"
    >
      <path
        fill="white"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12z"
      ></path>
    
    </svg></Link>
  </span>
</legend>


    <form onSubmit={sendData} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label htmlFor="email" style={{ marginBottom: "5px", fontWeight: "500" }}>
          Enter email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            backgroundColor: "transparent",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <label htmlFor="pwd" style={{ marginBottom: "5px", fontWeight: "500" }}>
          Enter password:
        </label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          placeholder="enter your password"
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
            backgroundColor: "transparent",
            width: "100%",
            outline: "none",
          }}
        />
      </div>

<div style={{ display: "flex", gap: "15px", marginTop: "10px",justifyContent:"space-between", }}>
  <input className="submit"
    type="submit"
    value="Register"
    style={{
      width: "120px",        // smaller width
      padding: "12px",
      backgroundColor: "transparent",
      color: "green",
      fontSize: "20px",
      fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
      border: "1px solid green",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  />
  <input className="cancel"
    type="reset"
    value="Reset"
    style={{
      width: "120px",        
      padding: "12px",
      backgroundColor: "transparent",
      color: "red",
      fontSize: "20px",
      fontFamily: "Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif",
      border: "1px solid red",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  />
</div>

    </form>

    <Link
      to="/SignUp"
      style={{
        marginTop: "20px",
        textAlign: "center",
        color: "#007BFF",
        textDecoration: "none",
        fontSize: "14px",
      }}
    >
      Don't have an account yet? Create account
    </Link>
  </fieldset>
</div>

    );
}
export default SignIn