import React, { useEffect } from 'react';
import mongoose from 'mongoose';
import Animals from './Animals.js'

function App() {

  useEffect(() => {
    mongoose.connect('mongodb://root:root@localhost:27017/animalquiz', { useNewUrlParser: true });
  }, []);

  return (
    <div>
      <Animals />
    </div>
  );
}

export default App;