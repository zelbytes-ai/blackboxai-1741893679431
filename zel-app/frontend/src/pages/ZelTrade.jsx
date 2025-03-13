import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Chip,
  Rating,
  IconButton,
  Pagination,
} from '@mui/material';
import {
  Search,
  FilterList,
  ShoppingCart,
  Favorite,
  FavoriteBorder,
  LocalShipping,
} from '@mui/icons-material';

// Mock data for demonstration
const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    price: 45.00,
    unit: 'kg',
    rating: 4.5,
    reviews: 28,
    image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg',
    category: 'Vegetables',
    farmer: 'Green Acres Farm',
    polyhouse: 'Z1',
    stock: 150,
  },
  {
    id: 2,
    name: 'Organic Lettuce',
    price: 35.00,
    unit: 'kg',
    rating: 4.8,
    reviews: 42,
    image: 'https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg',
    category: 'Leafy Greens',
    farmer: 'Sunrise Organics',
    polyhouse: 'Z2',
    stock: 80,
  },
  {
    id: 3,
    name: 'Fresh Cucumbers',
    price: 30.00,
    unit: 'kg',
    rating: 4.3,
    reviews: 35,
    image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg',
    category: 'Vegetables',
    farmer: 'Tech Farm Solutions',
    polyhouse: 'Z3',
    stock: 200,
  },
];

const categories = [
  'All',
  'Vegetables',
  'Fruits',
  'Leafy Greens',
  'Herbs',
  'Microgreens',
];

function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <IconButton
            size="small"
            onClick={() => setIsFavorite(!isFavorite)}
            sx={{ color: 'error.main' }}
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Box>
        
        <Typography variant="body2" color="text.secondary" gutterBottom>
          by {product.farmer}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviews})
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip
            label={product.category}
            size="small"
            color="primary"
            variant="outlined"
          />
          <Chip
            label={`Polyhouse ${product.polyhouse}`}
            size="small"
            color="secondary"
            variant="outlined"
          />
        </Box>

        <Typography variant="h6" color="primary" gutterBottom>
          ₹{product.price}/{product.unit}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Stock: {product.stock} {product.unit}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCart />}
            fullWidth
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function ZelTrade() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          ZelTrade Marketplace
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Fresh produce directly from ZelAI-enabled polyhouses
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FilterList />
                </InputAdornment>
              ),
            }}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Pagination count={10} color="primary" />
      </Box>

      {/* Shipping Information */}
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocalShipping color="primary" />
            <Box>
              <Typography variant="h6" gutterBottom>
                Fast & Reliable Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All products are stored in our ZelBasket warehouses and delivered fresh to your doorstep
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ZelTrade;
