import React from 'react';
import { Box, CircularProgress, Typography, LinearProgress } from '@mui/material';

function LoadingSpinner({ 
  message = 'Loading...', 
  variant = 'circular',
  progress = 0,
  fullscreen = false,
  overlay = false,
  timeout = null
}) {
  const [showTimeout, setShowTimeout] = React.useState(false);

  React.useEffect(() => {
    let timer;
    if (timeout) {
      timer = setTimeout(() => {
        setShowTimeout(true);
      }, timeout);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeout]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: fullscreen ? '100vh' : '200px',
        gap: 2,
        ...(overlay && {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(255, 255, 255, 0.9)',
          zIndex: 9999,
        }),
      }}
    >
      {variant === 'circular' ? (
        <CircularProgress 
          color="primary"
          {...(typeof progress === 'number' && { value: progress })}
        />
      ) : (
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <LinearProgress 
            variant={typeof progress === 'number' ? 'determinate' : 'indeterminate'} 
            value={progress} 
          />
        </Box>
      )}
      
      {message && (
        <Typography 
          variant="body1" 
          color="text.secondary"
          align="center"
        >
          {message}
        </Typography>
      )}

      {showTimeout && (
        <Typography 
          variant="body2" 
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          This is taking longer than expected. Please wait...
        </Typography>
      )}
    </Box>
  );

  return overlay ? (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {content}
    </Box>
  ) : content;
}

export default LoadingSpinner;
