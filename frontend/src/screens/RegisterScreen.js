import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

import { Box, Button, Container, TextField, Typography } from "@mui/material";

function LoginScreen() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
      setMessage("Creating Account");
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [userInfo, navigate]);
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexGrow: 1,
          height: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={submitHandler}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Register
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Confirm Password"
              margin="normal"
              name="password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              have an account? <Link to={"/"}>Register</Link>
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {message}
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
}

export default LoginScreen;
