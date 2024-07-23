import React, { useEffect } from 'react';
import { Container, Typography, Box, Grid, Button, Paper, Avatar, List, ListItem, ListItemIcon, ListItemText, IconButton, Link } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { styled } from '@mui/system';
import { useInView } from 'react-intersection-observer';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SearchIcon from '@mui/icons-material/Search';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(https://img.freepik.com/free-vector/question-marks-background_78370-2896.jpg?w=996&t=st=1721152994~exp=1721153594~hmac=aaf04b7ce4013b4fbabbeb3ee371fa6d0b93b95b5dabb4a9b3f1f20473a8f98e)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: theme.palette.background.paper,
}));

const FeatureCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const StatisticBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const AnimatedTypography = ({ children, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <Typography {...props}>{children}</Typography>
    </motion.div>
  );
};

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(6, 0),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Home = () => {
  const statistics = [
    { label: 'Question Papers', value: '1000+' },
    { label: 'Registered Users', value: '5000+' },
    { label: 'Downloads', value: '10,000+' },
    { label: 'Courses Covered', value: '50+' },
  ];

  const features = [
    { title: 'Easy Upload', description: 'Quickly upload and organize question papers with just a few clicks.', icon: <CloudUploadIcon fontSize="large" /> },
    { title: 'Smart Search', description: 'Find the exact question paper you need with our advanced search functionality.', icon: <SearchIcon fontSize="large" /> },
    { title: 'Secure Access', description: 'Ensure that only authorized users can access sensitive academic materials.', icon: <LockIcon fontSize="large" /> },
  ];

  const benefits = [
    'Centralized repository for all question papers',
    'Time-saving search and retrieval',
    'Improved collaboration among educators',
    'Enhanced exam preparation for students',
  ];

  return (
    <>
      <HeroSection>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Welcome to Question Paper Manager
            </Typography>
            <Typography variant="h5" paragraph>
              Streamline your academic resources with ease
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </motion.div>
          </motion.div>
        </Container>
        <motion.div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Typography variant="body2">Scroll to explore</Typography>
        </motion.div>
      </HeroSection>

      {/* Statistics Section */}
      <Box component={motion.div} 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <AnimatedTypography variant="h3" align="center" gutterBottom>
            Platform Statistics
          </AnimatedTypography>
          <Grid container spacing={4}>
            {statistics.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <StatisticBox elevation={3}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1">
                    {stat.label}
                  </Typography>
                </StatisticBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <ContentSection>
        <Container maxWidth="lg">
          <AnimatedTypography variant="h3" align="center" gutterBottom>
            Our Features
          </AnimatedTypography>
          <Grid container spacing={6}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <FeatureCard
                  whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main' }}>
                      {feature.icon}
                    </Avatar>
                  </Box>
                  <AnimatedTypography variant="h5" gutterBottom align="center">
                    {feature.title}
                  </AnimatedTypography>
                  <AnimatedTypography variant="body1" align="center">
                    {feature.description}
                  </AnimatedTypography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ContentSection>

      {/* Benefits Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <AnimatedTypography variant="h3" align="center" gutterBottom>
            Why Choose Us?
          </AnimatedTypography>
          <List>
            {benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={benefit} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Revolutionize Your Question Paper Management?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Join thousands of educators and students who are already benefiting from our platform.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Now
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Footer Section */}
      <FooterSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2">
                Question Paper Manager is your go-to platform for streamlining academic resources. We're committed to making education more accessible and efficient.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Box>
                <FooterLink href="/" variant="body2" display="block">Home</FooterLink>
                <FooterLink href="/papers" variant="body2" display="block">Question Papers</FooterLink>
                <FooterLink href="/upload" variant="body2" display="block">Upload</FooterLink>
                <FooterLink href="/contact" variant="body2" display="block">Contact Us</FooterLink>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Connect With Us
              </Typography>
              <Box>
                <IconButton color="inherit" aria-label="Facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Instagram">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <Typography variant="body2">
              © {new Date().getFullYear()} Question Paper Manager. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </FooterSection>
    </>
  );
};

export default Home;
