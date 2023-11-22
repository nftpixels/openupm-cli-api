const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

// Route to install openUPM
app.get('/install-openupm', (req, res) => {
  exec('sudo npm install -g openupm-cli', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Failed to install openUPM' });
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.json({ message: 'openUPM installed successfully' });
  });
});

// Route to uninstall openUPM
app.get('/uninstall-openupm', (req, res) => {
  exec('npm uninstall -g openupm-cli', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Failed to uninstall openUPM' });
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.json({ message: 'openUPM uninstalled successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
