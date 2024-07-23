import React, { useState, useCallback } from 'react';
import { Container, Typography, Box, Button, List, ListItem, ListItemText, Paper, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const UploadContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const DropzoneArea = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
  cursor: 'pointer',
  borderStyle: 'dashed',
  borderColor: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const FileList = styled(List)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false
  });

  const removeFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleUpload = () => {
    if (files.length === 0 || !year || !semester || !course) {
      alert('Please fill all fields and select a PDF file');
      return;
    }
    // Here you would typically send the file and metadata to your server
    console.log('Uploading:', { file: files[0], year, semester, course });
    // Reset form after upload
    setFiles([]);
    setYear('');
    setSemester('');
    setCourse('');
  };

  return (
    <UploadContainer maxWidth="md">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Upload Question Papers
        </Typography>
        <Box mb={4}>
          <TextField
            select
            fullWidth
            label="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            margin="normal"
          >
            {['2021', '2022', '2023', '2024'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            margin="normal"
          >
            {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            margin="normal"
          />
        </Box>
        <DropzoneArea {...getRootProps()}>
          <input {...getInputProps()} />
          <CloudUploadIcon fontSize="large" color="primary" />
          <Typography variant="h6" mt={2}>
            {isDragActive
              ? "Drop the PDF file here"
              : "Drag 'n' drop a PDF file here, or click to select"}
          </Typography>
        </DropzoneArea>
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FileList>
                {files.map((file, index) => (
                  <motion.div
                    key={file.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ListItem>
                      <InsertDriveFileIcon />
                      <ListItemText primary={file.name} secondary={`${file.size} bytes`} sx={{ ml: 2 }} />
                      <Button onClick={() => removeFile(file)} color="secondary">
                        Remove
                      </Button>
                    </ListItem>
                  </motion.div>
                ))}
              </FileList>
            </motion.div>
          )}
        </AnimatePresence>
        <Box mt={4} textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleUpload}
              disabled={files.length === 0 || !year || !semester || !course}
            >
              Upload File
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </UploadContainer>
  );
};

export default Upload;
