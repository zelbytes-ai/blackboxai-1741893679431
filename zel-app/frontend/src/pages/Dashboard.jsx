import React from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  ThermostatAuto,
  Water,
  WbSunny,
  Co2,
  Warning,
  Warehouse,
  ShoppingCart,
  Agriculture,
} from '@mui/icons-material';

// Mock data for demonstration
const sensorData = {
  temperature: 25.4,
  humidity: 65,
  lightIntensity: 850,
  co2Level: 412,
};

const alerts = [
  { id: 1, type: 'warning', message: 'High humidity in Polyhouse Z1' },
  { id: 2, type: 'info', message: 'Scheduled maintenance for Z2 tomorrow' },
];

const polyhouses = [
  { id: 'Z1', status: 'active', crop: 'Tomatoes', health: 92 },
  { id: 'Z2', status: 'active', crop: 'Lettuce', health: 88 },
  { id: 'Z3', status: 'maintenance', crop: 'Cucumbers', health: 75 },
];

function SensorCard({ title, value, unit, icon: Icon, color }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Icon sx={{ color: color || 'primary.main', mr: 1 }} />
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" color="text.primary" gutterBottom>
          {value}
          <Typography component="span" variant="body1" color="text.secondary">
            {' '}
            {unit}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          ZelAI Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Real-time monitoring and control of your smart farming ecosystem
        </Typography>
      </Box>

      {/* Sensor Readings */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <SensorCard
            title="Temperature"
            value={sensorData.temperature}
            unit="°C"
            icon={ThermostatAuto}
            color="#FF6B6B"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SensorCard
            title="Humidity"
            value={sensorData.humidity}
            unit="%"
            icon={Water}
            color="#4ECDC4"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SensorCard
            title="Light"
            value={sensorData.lightIntensity}
            unit="lux"
            icon={WbSunny}
            color="#FFD93D"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SensorCard
            title="CO2"
            value={sensorData.co2Level}
            unit="ppm"
            icon={Co2}
            color="#95A5A6"
          />
        </Grid>
      </Grid>

      {/* Alerts Section */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Warning sx={{ color: 'warning.main', mr: 1 }} />
            <Typography variant="h6">Active Alerts</Typography>
          </Box>
          {alerts.map((alert) => (
            <Box
              key={alert.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                mb: 1,
                bgcolor: 'background.default',
                borderRadius: 1,
              }}
            >
              <Chip
                label={alert.type}
                color={alert.type === 'warning' ? 'warning' : 'info'}
                size="small"
                sx={{ mr: 2 }}
              />
              <Typography variant="body2">{alert.message}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      {/* Polyhouse Status */}
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Polyhouse Status
      </Typography>
      <Grid container spacing={3}>
        {polyhouses.map((polyhouse) => (
          <Grid item xs={12} sm={6} md={4} key={polyhouse.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    Polyhouse {polyhouse.id}
                  </Typography>
                  <Chip
                    label={polyhouse.status}
                    color={polyhouse.status === 'active' ? 'success' : 'warning'}
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Current Crop: {polyhouse.crop}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Crop Health
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1, mr: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={polyhouse.health}
                        sx={{
                          height: 8,
                          borderRadius: 5,
                          backgroundColor: 'grey.200',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            backgroundColor: polyhouse.health > 90 ? 'success.main' : 'warning.main',
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {polyhouse.health}%
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <IconButton color="primary" sx={{ mb: 1 }}>
                <Agriculture />
              </IconButton>
              <Typography variant="h6">3</Typography>
              <Typography variant="body2" color="text.secondary">
                Active Polyhouses
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <IconButton color="primary" sx={{ mb: 1 }}>
                <Warehouse />
              </IconButton>
              <Typography variant="h6">4</Typography>
              <Typography variant="body2" color="text.secondary">
                ZelBasket Warehouses
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <IconButton color="primary" sx={{ mb: 1 }}>
                <ShoppingCart />
              </IconButton>
              <Typography variant="h6">28</Typography>
              <Typography variant="body2" color="text.secondary">
                Active Orders
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
