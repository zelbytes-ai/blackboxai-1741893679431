import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Divider,
  Alert,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
  Link,
  Grid,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  Login,
  PersonAdd,
  Google,
} from '@mui/icons-material';

function TabPanel({ children, value, index }) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </Box>
  );
}

function Auth() {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    companyName: '',
  });
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For demonstration, we'll just show a validation error
    if (tabValue === 1 && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h4" color="primary" align="center" gutterBottom>
          Welcome to ZelBytes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center">
          Smart Farming & Distribution System
        </Typography>
      </Box>

      <Card sx={{ boxShadow: 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab
              label="Login"
              icon={<Login />}
              iconPosition="start"
            />
            <Tab
              label="Register"
              icon={<PersonAdd />}
              iconPosition="start"
            />
          </Tabs>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}

          <TabPanel value={tabValue} index={0}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Link
                href="#"
                variant="body2"
                sx={{ display: 'block', mt: 1, mb: 2 }}
              >
                Forgot password?
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mb: 2 }}
              >
                Login
              </Button>
            </form>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </form>
          </TabPanel>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<Google />}
            sx={{ mb: 2 }}
          >
            Continue with Google
          </Button>
        </CardContent>
      </Card>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 4 }}
      >
        By continuing, you agree to our{' '}
        <Link href="#" color="primary">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" color="primary">
          Privacy Policy
        </Link>
      </Typography>
    </Container>
  );
}

export default Auth;
