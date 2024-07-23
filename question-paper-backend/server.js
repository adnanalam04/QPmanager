require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QuestionPaper = mongoose.model('QuestionPaper', {
  year: String,
  semester: String,
  course: String,
  fileUrl: String,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const { year, semester, course } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const questionPaper = new QuestionPaper({
      year,
      semester,
      course,
      fileUrl,
    });

    await questionPaper.save();
    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file' });
  }
});

app.get('/api/papers', async (req, res) => {
  try {
    const { year, semester, course } = req.query;
    const query = {};
    if (year) query.year = year;
    if (semester) query.semester = semester;
    if (course) query.course = course;

    const papers = await QuestionPaper.find(query);
    res.json(papers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching papers' });
  }
});

app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
