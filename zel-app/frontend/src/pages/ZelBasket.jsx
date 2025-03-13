import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  LinearProgress,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Warehouse,
  AcUnit,
  Thermostat,
  Inventory,
  Warning,
  TrendingUp,
  Info,
  Refresh,
} from '@mui/icons-material';

// Mock data for demonstration
const warehouseTypes = {
  S1: { name: 'Normal Storage', icon: Warehouse, color: '#4CAF50' },
  S2: { name: 'Chilled Storage', icon: Thermostat, color: '#2196F3' },
  S3: { name: 'Cool Storage', icon: AcUnit, color: '#9C27B0' },
  S4: { name: 'Frozen Storage', icon: AcUnit, color: '#3F51B5' },
};

const warehouseData = [
  {
    id: 'S1',
    type: 'Normal Storage',
    capacity: 1000,
    occupied: 650,
    temperature: 25,
    humidity: 45,
    alerts: 0,
  },
  {
    id: 'S2',
    type: 'Chilled Storage',
    capacity: 800,
    occupied: 720,
    temperature: 10,
    humidity: 60,
    alerts: 1,
  },
  {
    id: 'S3',
    type: 'Cool Storage',
    capacity: 1200,
    occupied: 800,
    temperature: 15,
    humidity: 55,
    alerts: 0,
  },
  {
    id: 'S4',
    type: 'Frozen Storage',
    capacity: 600,
    occupied: 450,
    temperature: -18,
    humidity: 40,
    alerts: 0,
  },
];

const inventoryItems = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    quantity: 250,
    unit: 'kg',
    warehouse: 'S3',
    status: 'In Stock',
    expiryDate: '2024-02-15',
  },
  {
    id: 2,
    name: 'Organic Lettuce',
    quantity: 150,
    unit: 'kg',
    warehouse: 'S2',
    status: 'Low Stock',
    expiryDate: '2024-02-10',
  },
  {
    id: 3,
    name: 'Fresh Cucumbers',
    quantity: 300,
    unit: 'kg',
    warehouse: 'S3',
    status: 'In Stock',
    expiryDate: '2024-02-12',
  },
];

function WarehouseCard({ data }) {
  const occupancyPercentage = (data.occupied / data.capacity) * 100;
  const type = warehouseTypes[data.id];

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              backgroundColor: type.color,
              borderRadius: '50%',
              p: 1,
              mr: 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <type.icon sx={{ color: 'white' }} />
          </Box>
          <Box>
            <Typography variant="h6">{data.type}</Typography>
            <Typography variant="body2" color="text.secondary">
              Warehouse {data.id}
            </Typography>
          </Box>
          {data.alerts > 0 && (
            <Tooltip title={`${data.alerts} active alerts`}>
              <Warning sx={{ ml: 'auto', color: 'warning.main' }} />
            </Tooltip>
          )}
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Occupancy ({Math.round(occupancyPercentage)}%)
          </Typography>
          <LinearProgress
            variant="determinate"
            value={occupancyPercentage}
            sx={{
              height: 8,
              borderRadius: 5,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 5,
                backgroundColor: 
                  occupancyPercentage > 90 ? 'error.main' :
                  occupancyPercentage > 70 ? 'warning.main' : 'success.main',
              },
            }}
          />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Temperature
            </Typography>
            <Typography variant="body1">
              {data.temperature}°C
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Humidity
            </Typography>
            <Typography variant="body1">
              {data.humidity}%
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function ZelBasket() {
  const [lastUpdated, setLastUpdated] = useState(new Date());

  const handleRefresh = () => {
    setLastUpdated(new Date());
    // In a real application, this would fetch fresh data
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h4" color="primary">
            ZelBasket Warehouses
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </Typography>
            <IconButton onClick={handleRefresh} color="primary">
              <Refresh />
            </IconButton>
          </Box>
        </Box>
        <Typography variant="body1" color="text.secondary">
          Monitor and manage your warehouse inventory
        </Typography>
      </Box>

      {/* Warehouse Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {warehouseData.map((warehouse) => (
          <Grid item xs={12} sm={6} md={3} key={warehouse.id}>
            <WarehouseCard data={warehouse} />
          </Grid>
        ))}
      </Grid>

      {/* Inventory Table */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">
              Current Inventory
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Inventory />}
            >
              Add New Item
            </Button>
          </Box>
          
          <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell>Warehouse</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Expiry Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventoryItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">
                      {item.quantity} {item.unit}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={item.warehouse}
                        size="small"
                        sx={{
                          backgroundColor: warehouseTypes[item.warehouse].color,
                          color: 'white',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={item.status}
                        size="small"
                        color={item.status === 'Low Stock' ? 'warning' : 'success'}
                      />
                    </TableCell>
                    <TableCell>{item.expiryDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp color="primary" />
              <Box>
                <Typography variant="h6">85%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Occupancy Rate
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Info color="primary" />
              <Box>
                <Typography variant="h6">98%</Typography>
                <Typography variant="body2" color="text.secondary">
                  Order Fulfillment Rate
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Warning color="primary" />
              <Box>
                <Typography variant="h6">1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Alerts
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ZelBasket;
