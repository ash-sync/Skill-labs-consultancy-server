const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://mongodb:mongodb@cluster0.y5njkct.mongodb.net/skillLabs-db?retryWrites=true&w=majority&appName=Cluster0';

async function run() {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connected to DB');
    
    const db = mongoose.connection.db;
    
    const collections = ['services', 'destinations', 'countries', 'faqs', 'testimonials', 'bookings'];
    for (const collName of collections) {
      const coll = db.collection(collName);
      const count = await coll.countDocuments();
      console.log(`Collection [${collName}]: ${count} documents`);
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await mongoose.disconnect();
  }
}

run();
