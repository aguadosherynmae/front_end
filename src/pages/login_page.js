import React, { useState } from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; 
import "../styles/login_page.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    if (email ===  "test@gmail.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials!")
    }
  };

  return (
    <Grid container>
      {/* Left Branding Section */}
      <Grid size={{ lg:6, xl:6}}>        
        <Box className="branding-section">
          <p className="logo-text">
            Ride<span style={{ color: "#4DB6AC", background: "white", padding: "0 10px" }}>Sync</span>
          </p>
          <p className="tagline">
            The Smarter Way to Travel
          </p>
        </Box>
      </Grid>

      {/* Right Login Section */}
      <Grid size={{ lg:6, xl:6}}>        
        <Box className="login-section">
          <p className="login-text">
            LOGIN
          </p>
          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <FormControlLabel
                control={<Checkbox checked={showPassword} onChange={handleShowPassword} />}
                label="Show Password"
              />
              <Link href="#" underline="hover" sx={{ color: "#4DB6AC" }}>
                Forgot Password?
              </Link>
            </Box>
            <Button type="submit" fullWidth className="login-button">
              LOG IN
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
