import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorCount: 0 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(prevState => ({
      error: error,
      errorInfo: errorInfo,
      errorCount: prevState.errorCount + 1
    }));
    
    // Log the error to an error reporting service
    this.logError(error, errorInfo);
  }

  logError = (error, errorInfo) => {
    // TODO: Replace with actual error reporting service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
    
    // Add timestamp and user context
    const errorContext = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent
    };
    
    console.error('Error Context:', errorContext);
  };

  handleReload = () => {
    window.location.reload();
  };

  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      errorInfo: null 
    });
  };

  render() {
    if (this.state.hasError) {
      const isRecurringError = this.state.errorCount > 1;
      
      return (
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '80vh',
              textAlign: 'center',
              gap: 3
            }}
          >
            <Typography variant="h4" color="error" gutterBottom>
              Oops! Something went wrong
            </Typography>
            
            <Typography variant="body1" color="text.secondary" paragraph>
              {isRecurringError 
                ? "We're experiencing technical difficulties. Our team has been notified."
                : "We apologize for the inconvenience. Please try again."}
            </Typography>
            
            {this.state.error && (
              <Box 
                sx={{ 
                  bgcolor: 'error.light',
                  color: 'error.contrastText',
                  p: 2,
                  borderRadius: 1,
                  maxWidth: '100%',
                  overflow: 'auto'
                }}
              >
                <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                </Typography>
              </Box>
            )}
            
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleRetry}
                disabled={isRecurringError}
                aria-label="Try again"
              >
                Try Again
              </Button>
              
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleReload}
                aria-label="Reload page"
              >
                Reload Page
              </Button>
            </Box>
            
            {isRecurringError && (
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                If the problem persists, please contact support at support@zelbytes.com
              </Typography>
            )}
          </Box>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
