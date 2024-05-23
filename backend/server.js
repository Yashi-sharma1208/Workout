// // // require('dotenv').config()

// // const express = require('express')
// // const mongoose = require('mongoose')
// // // const workoutRoutes = require('./routes/workouts')

// // // express app
// // const app = express()

// // // middleware
// // app.use(express.json())

// // // app.use((req, res, next) => {
// // //   console.log(req.path, req.method)
// // //   next()
// // // })

// // // routes
// // // app.use('/api/workouts', workoutRoutes)

// // // const dburl="mongodb+srv://devansh4400:Devansh@mern-app.mehv0r6.mongodb.net/?retryWrites=true&w=majority"
// // const dburl="mongodb+srv://devansh4400:Devansh@mern-app.mehv0r6.mongodb.net/?retryWrites=true&w=majority"
// // // const connectionParams={
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true,
// // // }

// // // connect to db
// // mongoose.connect(dburl)
// //   .then(() => {
// //     console.info('connected to database')
// //     // listen to port
// //     app.listen(4000, () => {
// //       console.log('listening for requests on port', 4000)
// //     })
// //   })
// //   .catch((err) => {
// //     console.log("Error",err)
// //   }); 








//   require('dotenv').config()

//   const express = require('express')
//   const mongoose = require('mongoose')
  // const workoutRoutes = require('./routes/workouts')
  // const userRoutes = require('./routes/user')
  
  // // express app
  // const app = express()
  
  // // middleware
  // app.use(express.json())
  
  // app.use((req, res, next) => {
  //   console.log(req.path, req.method)
  //   next()
  // })
  
  // // routes
  // app.use('/api/workouts', workoutRoutes)
  // app.use('/api/user', userRoutes)
  
//   const dburl="mongodb+srv://devansh4400:Devansh@mern-app.mehv0r6.mongodb.net/?retryWrites=true&w=majority"
  
//   // connect to db
//   mongoose.connect(dburl)
//     .then(() => {
//       console.log('connected to database')
//       // listen to port
//       app.listen(process.env.PORT, () => {
//         console.log('listening for requests on port', process.env.PORT)
//       })
//     })
//     .catch((err) => {
//       console.log(err)
//     }) 
    


// require('dotenv').config()

// const express = require('express')
// const mongoose = require('mongoose')
// const nodemailer = require('nodemailer')
// const bodyParser = require('body-parser')
// const workoutRoutes = require('./routes/workouts')
//   const userRoutes = require('./routes/user')

//   // express app
//   const app = express()
  
//   // middleware
//   app.use(express.json())
  
//   app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
//   })
  
//   // routes
//   app.use('/api/workouts', workoutRoutes)
//   app.use('/api/user', userRoutes)

// // Feedback endpoint
// app.post('/api/feedback', (req, res) => {
//   const { name, email, feedback } = req.body;

//   // Create a transporter object using nodemailer
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME, // Your Gmail address
//       pass: process.env.EMAIL_PASSWORD // Your Gmail password
//     }
//   });

//   // Construct email message
//   const mailOptions = {
//     from: process.env.EMAIL_USERNAME,
//     to: process.env.RECIPIENT_EMAIL, // Recipient email address
//     subject: 'Feedback from your app',
//     text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'An error occurred while sending the email' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.json({ message: 'Feedback sent successfully' });
//     }
//   });
// });

// const dburl = "mongodb+srv://devansh4400:Devansh@mern-app.mehv0r6.mongodb.net/?retryWrites=true&w=majority";

// // connect to db
// mongoose.connect(dburl)
//   .then(() => {
//     console.log('Connected to database');
//     // listen to port
//     app.listen(process.env.PORT || 4000, () => {
//       console.log('Listening for requests on port', process.env.PORT || 4000);
//     });
//   })
//   .catch((err) => {
//     console.error('Error connecting to database:', err);
//   });

require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helmet = require('helmet'); // Security middleware

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// Express app
const app = express();

// Security middleware
app.use(helmet()); // Add security headers

// Body parsing middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // Optionally add URL-encoded parsing

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// Feedback endpoint
app.post('/api/feedback', async (req, res) => {
  const { name, email, feedback } = req.body;

  // Sanitize input (implement here as needed)

  // Validate input (implement here as needed)

  // Create a transporter object using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your preferred email service
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Construct email message
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Feedback from your app',
    text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    console.log('Feedback:', name, email, feedback); // Log successful feedback
    res.json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error.message, error.stack);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Database connection
// const dburl = "mongodb+srv://devansh4400:Devansh@mern-app.mehv0r6.mongodb.net/?retryWrites=true&w=majority"; // Use environment variable for security
// const dburl = process.env.URL

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

// Server startup
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

