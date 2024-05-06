/*
* dev: Viki
* ig: @moe.sazumiviki
* gh: github.com/sazumivicky
* site: www.sazumiviki
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(express.static('public'));

app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});