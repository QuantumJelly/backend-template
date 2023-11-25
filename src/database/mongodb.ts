import mongoose from 'mongoose';

export const setupMongoDB = (uri: string) => {
  mongoose.connect(uri, {

  });
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
};