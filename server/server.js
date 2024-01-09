const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

app.get('/api/covid-cases', async (req, res) => {
  try {
    const response = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-line-lists');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching COVID cases:', error.message);
    res.status(500).json({ error: 'Failed to fetch COVID cases' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
