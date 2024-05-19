import React from 'react';
import { Typography, Box, Container, Card, CardContent, CardMedia } from '@mui/material';

const RecentPosts = () => {
  return (
    <Box sx={{ backgroundColor: '#FFD700', py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            color: '#FF5733',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '32px',
            fontWeight: '700',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Our Recent Facebook Posts
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiCard-root': {
              width: '500px',
              mx: '10px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
          }}
        >
          <Card>
            <CardMedia
              component="iframe"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02DjQC1M9UBGynUwrb39TcnLxCdUd8uma7KyqXDQzH7iyXwmM2qhg85pcjy4RejKFal%26id%3D100076230675629&show_text=true&width=500&is_preview=true"
              title="Recent Post 1"
              width="500"
              height="617"
              style={{ border: 'none', overflow: 'hidden' }}
            />
            
          </Card>
          <Card>
            <CardMedia
              component="iframe"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02HojNPvPmApA6zy4zSSLL8kJdAfeaqYnNxPUE4p2hQpbNFVnqs9ntf1LGRo41iREZl%26id%3D100076230675629&show_text=true&width=500&is_preview=true"
              title="Recent Post 2"
              width="500"
              height="742"
              style={{ border: 'none', overflow: 'hidden' }}
            />
        
          </Card>
          <Card>
            <CardMedia
              component="iframe"
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0VMQdnfgqXQv4CwhC5PrymAoYP1vsz8qqgvexMfWUhkJsDH1gYDpnUE1hPVxpESzTl%26id%3D100076230675629&show_text=true&width=500&is_preview=true"
              title="Recent Post 3"
              width="500"
              height="512"
              style={{ border: 'none', overflow: 'hidden' }}
            />
          
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default RecentPosts;
