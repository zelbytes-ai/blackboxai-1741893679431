import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              ZelBytes Private Limited
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Smart Farming & Distribution System
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/polyhouse" color="inherit">
                Polyhouse Management
              </Link>
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              <Link href="/zeltrade" color="inherit">
                ZelTrade Marketplace
              </Link>
            </Typography>
            <Typography variant="body2" component="p">
              <Link href="/zelbasket" color="inherit">
                ZelBasket Warehouses
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
              Email: info@zelbytes.com
            </Typography>
            <Typography variant="body2" component="p">
              Phone: +91 XXXXXXXXXX
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' ZelBytes Private Limited. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
