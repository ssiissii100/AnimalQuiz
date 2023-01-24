const express = require('express');
const animalsRouter = require('./routes/animals');

const app = express();

// Use the animals router for all /animals routes
app.use('/animals', animalsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});