import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const pwd = e.target.pwd.value;

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("pwd", pwd);

      const response = await fetch(
        "https://movienight.42web.io/movie-app/backend/signIn.php",
        {
          method: "POST",
          body: formData,
              mode: 'cors', // Add this
    credentials: 'same-origin', // Add this
        }
      );

      const result = await response.json();
      console.log("Result:", result);

      if (result.status === "success") {
        navigate("/Userdash");
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "40px 20px", maxWidth: "500px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>MovieNight</h1>

      <fieldset
        style={{
          border: "1px solid #ccc",
          borderRadius: "12px",
          padding: "30px",
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
            fontSize: "1.2rem",
          }}
        >
          <span>Welcome back</span>
          <Link to="/">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
            >
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z" />
            </svg>
          </Link>
        </legend>

        <form
          onSubmit={sendData}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="email" style={{ fontWeight: 500 }}>
              Enter email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "transparent",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="pwd" style={{ fontWeight: 500 }}>
              Enter password:
            </label>
            <input
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Enter your password"
              required
              style={{
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                fontSize: "14px",
                outline: "none",
                backgroundColor: "transparent",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            <input
              type="submit"
              value={loading ? "Loading..." : "Sign In"}
              style={{
                width: "120px",
                padding: "12px",
                backgroundColor: "transparent",
                color: "green",
                fontSize: "18px",
                border: "1px solid green",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              disabled={loading}
            />
            <input
              type="reset"
              value="Reset"
              style={{
                width: "120px",
                padding: "12px",
                backgroundColor: "transparent",
                color: "red",
                fontSize: "18px",
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

export default SignIn;
