import fs from 'fs';

const url = 'https://sky-predictor-1012593186417.asia-southeast1.run.app/api/wingo-history-30s-1000?';

async function updateData() {
  try {
    const res = await fetch(url);
    const jsonData = await res.json();
    fs.writeFileSync('data.json', JSON.stringify(jsonData, null, 2));
    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data:', error);
  }
}

updateData();
setInterval(updateData, 5000);
