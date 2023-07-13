const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://abhinavdwivedi1001:abhinav21@cluster0.bjf5zkq.mongodb.net/civil_website?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('Connected to MongoDB');
  
      const Faculty = mongoose.model('Faculty', new mongoose.Schema({}), 'faculty');
  
      const facultyData = await Faculty.find({}).exec();
      global.faculty = facultyData;
      const Btech2020 = mongoose.model('Btech2020', new mongoose.Schema({}), 'BTech2020');
  
      const B2020data = await Btech2020.find({}).exec();
      global.B2020Data = B2020data;
      const Btech2021 = mongoose.model('Btech2021', new mongoose.Schema({}), 'BTech2021');
  
      const B2021data = await Btech2021.find({}).exec();
      global.B2021Data = B2021data;

      const Btech2022 = mongoose.model('Btech2022', new mongoose.Schema({}), 'BTech2022');
      const B2022data = await Btech2022.find({}).exec();
      global.B2022Data = B2022data;

      const Mtech2021 = mongoose.model('Mtech2021', new mongoose.Schema({}), 'Mtech2021');
      const M2021data = await Mtech2021.find({}).exec();
      global.M2021Data = M2021data;

      const Mtech2022 = mongoose.model('Mtech2022', new mongoose.Schema({}), 'Mtech2022');
      const M2022data = await Mtech2022.find({}).exec();
      global.M2022Data = M2022data;

      const Cproject = mongoose.model('cproject', new mongoose.Schema({}), 'completedProject');
      const cpdata = await Cproject.find({}).exec();
      global.cpdata = cpdata;

      console.log(cpdata);
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); // Exit the process with an error
    }
  };
  
  module.exports = mongoDB;