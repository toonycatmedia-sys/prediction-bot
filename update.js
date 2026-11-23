const fs = require('fs');

async function updateData() {
    try {
        const response = await fetch('https://sky-predictor-1012593186417.asia-southeast1.run.app/api/wingo-history-30s-1000?);
        const data = await response.json();
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
        console.log('Data updated successfully');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

setInterval(updateData, 5000);
