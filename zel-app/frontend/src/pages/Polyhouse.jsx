import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Switch,
  Slider,
  FormControlLabel,
  Divider,
  Alert,
} from '@mui/material';
import {
  ThermostatAuto,
  WaterDrop,
  WbSunny,
  Air,
  Settings,
  Timeline,
} from '@mui/icons-material';

// Mock data for demonstration
const initialControls = {
  irrigation: false,
  fans: false,
  lights: false,
  temperature: 25,
  humidity: 60,
};

function ControlCard({ title, icon: Icon, children }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon sx={{ color: 'primary.main', mr: 1 }} />
          <Typography variant="h6">{title}</Typography>
        </Box>
        {children}
      </CardContent>
    </Card>
  );
}

function Polyhouse() {
  const [controls, setControls] = useState(initialControls);

  const handleControlChange = (control, value) => {
    setControls((prev) => ({
      ...prev,
      [control]: value,
    }));
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          Polyhouse Control Center
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Monitor and control your polyhouse environment
        </Typography>
      </Box>

      {/* Active Alerts */}
      <Alert severity="info" sx={{ mb: 3 }}>
        System running normally. Last maintenance check: 2 days ago
      </Alert>

      {/* Main Controls */}
      <Grid container spacing={3}>
        {/* Temperature Control */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="Temperature Control" icon={ThermostatAuto}>
            <Box sx={{ px: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Target Temperature: {controls.temperature}°C
              </Typography>
              <Slider
                value={controls.temperature}
                onChange={(_, value) => handleControlChange('temperature', value)}
                min={15}
                max={35}
                step={0.5}
                marks={[
                  { value: 15, label: '15°C' },
                  { value: 25, label: '25°C' },
                  { value: 35, label: '35°C' },
                ]}
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Current: 24.5°C
                </Typography>
                <Typography variant="body2" color="success.main">
                  Optimal Range
                </Typography>
              </Box>
            </Box>
          </ControlCard>
        </Grid>

        {/* Humidity Control */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="Humidity Control" icon={WaterDrop}>
            <Box sx={{ px: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Target Humidity: {controls.humidity}%
              </Typography>
              <Slider
                value={controls.humidity}
                onChange={(_, value) => handleControlChange('humidity', value)}
                min={40}
                max={80}
                marks={[
                  { value: 40, label: '40%' },
                  { value: 60, label: '60%' },
                  { value: 80, label: '80%' },
                ]}
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary">
                  Current: 65%
                </Typography>
                <Typography variant="body2" color="warning.main">
                  Slightly High
                </Typography>
              </Box>
            </Box>
          </ControlCard>
        </Grid>

        {/* Lighting Control */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="Lighting System" icon={WbSunny}>
            <FormControlLabel
              control={
                <Switch
                  checked={controls.lights}
                  onChange={(e) => handleControlChange('lights', e.target.checked)}
                  color="primary"
                />
              }
              label="Artificial Lighting"
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Light Intensity: 850 lux
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Daily Light Integral: 12.5 mol/m²/day
              </Typography>
            </Box>
          </ControlCard>
        </Grid>

        {/* Irrigation Control */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="Irrigation System" icon={WaterDrop}>
            <FormControlLabel
              control={
                <Switch
                  checked={controls.irrigation}
                  onChange={(e) => handleControlChange('irrigation', e.target.checked)}
                  color="primary"
                />
              }
              label="Automated Irrigation"
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Next Scheduled: 2 hours
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last Watering: 45 minutes ago
              </Typography>
            </Box>
            <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
              View Schedule
            </Button>
          </ControlCard>
        </Grid>

        {/* Ventilation Control */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="Ventilation System" icon={Air}>
            <FormControlLabel
              control={
                <Switch
                  checked={controls.fans}
                  onChange={(e) => handleControlChange('fans', e.target.checked)}
                  color="primary"
                />
              }
              label="Fan System"
            />
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Air Exchange Rate: 12 ACH
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CO2 Level: 412 ppm
              </Typography>
            </Box>
          </ControlCard>
        </Grid>

        {/* System Status */}
        <Grid item xs={12} md={6} lg={4}>
          <ControlCard title="System Status" icon={Settings}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="body2" color="success.main">
                ● All Systems Operational
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Last Maintenance: 2 days ago
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Next Scheduled: 5 days
              </Typography>
              <Button variant="outlined" color="primary" fullWidth sx={{ mt: 2 }}>
                View Maintenance Log
              </Button>
            </Box>
          </ControlCard>
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Timeline />}
        >
          View Analytics
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Settings />}
        >
          System Settings
        </Button>
      </Box>
    </Container>
  );
}

export default Polyhouse;
