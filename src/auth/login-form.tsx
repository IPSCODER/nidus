import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import './auth.css';
import CustomInput from '../components/input/Input';

const LoginForm: React.FC = () => {
  const { login } = useAuth();

  const [userState, setUserState] = useState({
    name: '',
    password: ''
  });

  const { name, password } = userState;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserState(prevState => ({ ...prevState, [name]: value }));
  };

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login(userState);
  };

  return (
    <section className='auth-section'>
      <form className='a-form' onSubmit={onLogin}>
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h5" component="h1">
            Login
          </Typography>
        </Box>
        {/* Username Input */}
        <CustomInput  value={name} name={"name"} type='text'
          onChange={changeHandler} placeholder={"Enter Username (eg.Luke Skywalker)"} label={"Enter Username"} />
        {/* Password Input */}
                <CustomInput  value={password} name={"password"} type='password'
          onChange={changeHandler} placeholder={"Enter Password (eg.19BBY) "} label={"Enter Password"} />
        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px', fontSize: '16px' }}
        >
          Sign In
        </Button>
           <Box
                sx={{
                  width: "30%",
                  height: "30%",
                  backgroundColor: "#2E7D3280",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "10%",
                  left: "80%",
                }}
                
              />
              <Box
                sx={{
                  width: "20%",
                  height: "20%",
                  backgroundColor: "#388E3C80",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "40%",
                  left: "60%",
                }}
              />
      </form>
    </section>
  );
};

export default LoginForm;
