import React, { useState } from 'react';
import { Container, Typography, Box, Grid, MenuItem, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const AnimatedTextField = motion(TextField);

const QuestionPapers = () => {
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');

  const courses = ['B-Tech', 'M-Tech', 'BA', 'MBA', 'BSC', 'MSC', 'BBA'];
  const years = ['1', '2', '3', '4'];
  const semesters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  return (
    <Container maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" gutterBottom sx={{ mt: 4 }}>
          Question Papers
        </Typography>
        <StyledPaper elevation={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <AnimatedTextField
                select
                fullWidth
                label="Select Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                variant="outlined"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {courses.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </AnimatedTextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedTextField
                select
                fullWidth
                label="Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                variant="outlined"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {years.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </AnimatedTextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedTextField
                select
                fullWidth
                label="Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                variant="outlined"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {semesters.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </AnimatedTextField>
            </Grid>
          </Grid>
          <Box mt={4} textAlign="center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                disabled={!course || !year || !semester}
              >
                Search Papers
              </Button>
            </motion.div>
          </Box>
        </StyledPaper>
      </motion.div>
    </Container>
  );
};

export default QuestionPapers;
