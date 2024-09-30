  
//Use a Certificate from a Trusted CA: 
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; //only fpr development
require('dotenv').config()
const mongoose=require("mongoose")
const express = require('express');
const path = require("path");
const multer = require("multer");
const nodemailer=require("nodemailer")
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
//  includes middleware for handling file uploads with Multer, sending emails with Nodemailer, 
//  parsing JSON and URL-encoded bodies with bodyParser, enabling Cross-Origin Resource Sharing (CORS) with cors,
//  and managing JSON Web Tokens (JWT) and password hashing with bcryptjs.


const db=require('./configure/database')
const User=require('./model/user');
const MbsUsers = require('./model/user');
const Cart=require('./model/carteditems')
const authenticateJWT = require('./middleware/author')
const app = express();
const port = 3002;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
 



db.connect()
const JWT_SECRET =  process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined.");

}
 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./uploads/"); // Destination directory for storing uploaded images
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); // Unique filename for each uploaded image
  }
});


// Create multer instance
const upload = multer({ storage: storage });
 

app.post('/register', async (req, res) => {
  const { userName, userEmail, userPassword, userNumber } = req.body; //This line uses destructuring to extract specific properties 
  //(userName, userEmail, userPassword, userNumber) from the request body (req.body).
  // These properties are typically sent in the body of a POST request when a form is submitted.

  try { //The try block is used to wrap code that might throw an error. If an error occurs within this block, it can be caught and handled in the catch block.
    const salt = await bcrypt.genSalt(10);//Here, bcrypt.genSalt(10) generates a salt with a cost factor of 10 asynchronously using the bcrypt library. 
    //The await keyword is used because genSalt returns a Promise,
     //and we're awaiting its resolution before proceeding.
    const hashedPassword = await bcrypt.hash(userPassword, salt);//This line hashes the user's password using the generated salt.
    // It uses bcrypt.hash asynchronously, where userPassword is the password to hash, 
    //and salt is the salt value generated in the previous step.
    const newUser = new User({ userName, userEmail, userPassword: hashedPassword,userNumber});
    //Here, a new instance of a User model (assuming you have a User model defined somewhere in your codebase, possibly connected to a database)
    // is created with the provided user data, including the hashed password.
    await newUser.save(); //This line saves the new user object (with hashed password) to the database. The await keyword is used to wait for the save operation to complete before proceeding.

    
    const token = jwt.sign(
      { id: newUser._id, email: newUser.userEmail },
      JWT_SECRET,
      { expiresIn: '4d' }
    );//This line generates a JSON Web Token (JWT) using the jwt.sign method.
    // It includes the user's ID (newUser._id) and email (newUser.userEmail) in the token payload, signs it with a secret (JWT_SECRET), 
    //and sets an expiration of 4 days ('4d').

    
    res.status(201).json({ message: "User registered successfully", token: token });
    //Finally, if everything succeeds without errors, the server responds with a status code of 201 (Created) and sends a JSON response containing
    // a success message ("User registered successfully") and the generated JWT token.
  } catch (error) {
    console.log(error); 
    res.status(400).json({ error: error.message });
  }
  //If an error occurs during the execution of the try block, it's caught here in the catch block.
  // The error is logged to the console, and the server responds with a status code of 400 (Bad Request) along with a JSON object containing the error message extracted from the caught error (error.message).
  // This allows for proper error handling in case of any issues during user registration.
});

// app.post("/Login", async (req, res) => { //Defines a POST route for the /Login endpoint.
//   const { email, password } = req.body; //Extracts email and password from the request body.

//   try {
//     const user = await MbsUsers.findOne({ userEmail: email }); //Searches for a user in the MbsUsers collection with the provided email.
//     if (!user) {
//       return res.status(404).json("User not found");
//     }

    
//     const isMatch = await bcrypt.compare(password, user.userPassword); //Compares the provided password with the stored hashed password.
//     if (isMatch) {
//       // Create a token
//       const token = jwt.sign(
//         { id: user._id, email: user.userEmail },  
//         JWT_SECRET,
//         { expiresIn: '5m' }  
//       );
    
//       res.json({ message: "Login successful",token:token,
//       userName: user.userName ,
//       userEmail:user.userEmail,
//       userNumber:user.userNumber,
//       id:user._id});
//     } else {
//       res.status(401).json("Password is incorrect");
//     }
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json("Internal Server Error");
//   }
// });



app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await MbsUsers.findOne({ userEmail: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (isMatch) {
      const token = jwt.sign(
        { id: user._id, email: user.userEmail },
        JWT_SECRET,
        { expiresIn: '5m' }
      );

      res.json({
        message: "Login successful",
        token: token,
        userName: user.userName,
        userEmail: user.userEmail,
        userNumber: user.userNumber,
        id: user._id
      });
    } else {
      res.status(401).json("Password is incorrect");
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal Server Error");
  }
});

app.get('/some-protected-endpoint', authenticateJWT, (req, res) => {
  res.json({ message: 'This is a protected endpoint', user: req.user });
});



app.post('/api/cart', async (req, res) => {
  const { Id, items } = req.body;

  try {
      let cart = await Cart.findOne({ Id });
      if (!cart) {
          cart = new Cart({ Id, items });
      } else {

          cart.items.push(...items);
      }
      await cart.save();
      res.status(200).json(cart);
      const result = processCartData(req.body); 
    if (result.error) {
        return res.status(500).json({ message: "Error processing request", error: result.error });
    }
    res.status(200).json({ message: "Data processed successfully", data: result });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/api/cart', async (req, res) => {
  const {userId } = req.query; // Get the userId from query parameters

  try {
    const cart = await Cart.findOne({ userId }); // Find the cart by userId
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.status(200).json(cart.items); // Assuming the cart stores an array of items
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve cart" });
  }
});


const properties = [
  // Your property data
  {
      title: "2 BHK Flat",
      price: "1.25cr",
      size: "1413 sqft",
      location: "Whitefield Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
      readytomove: "Ready to move"
  },
  {
      title: "3 BHK Flat",
      price: "84 Lac",
      size: "1150 sqft",
      location: "Whitefield, Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
      readytomove: "Under Construction"
  },
  
        {
            title: "3 BHK Flat",
            price: "1.26cr",
            size: "1149 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
            readytomove: "Under Construction"
        },
        {
            title: "2 BHK Flat",
            price: "1.18cr",
            size: "1140 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
            readytomove: "Under Construction"
        },
        {
            title: "2 BHK Flat",
            price: "1.40cr",
            size: "1918 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
            readytomove: "Under Construction"
        },
        {
            title: "3 BHK Flat",
            price: "1.26cr",
            size: "1149 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
            readytomove: "Under Construction"
        }
  // Add the rest of the property data here
];

app.get('/api/properties', (req, res) => {
  res.json(properties);
});


const properties2 = [
  {
      title: "2 BHK Flat",
      price: "1.25cr",
      size: "1413 sqft",
      location: "Whitefield Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
      readytomove: "Ready to move"
  },
  {
      title: "3 BHK Flat",
      price: "84 Lac",
      size: "1150 sqft",
      location: "Whitefield, Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
      readytomove: "Under Construction"
  },
  {
      title: "3 BHK Flat",
      price: "1.26cr",
      size: "1149 sqft",
      location: "Whitefield Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
      readytomove: "Under Construction"
  },
  {
      title: "2 BHK Flat",
      price: "1.18cr",
      size: "1140 sqft",
      location: "Whitefield Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
      readytomove: "Under Construction"
  },
  {
      title: "2 BHK Flat",
      price: "1.40cr",
      size: "1918 sqft",
      location: "Whitefield Bangalore",
      image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
      readytomove: "Under Construction"
  }
];

app.get('/api/properties2', (req, res) => {
  res.json(properties2);
});


 
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  number:Number,
  // image2: String,
  // image3: String,
  email:String,
  flat: String,
  price: Number,
  sqft: Number,
  address: String
});

const Product = mongoose.model('OwnerUpdated', productSchema);

// Set up multer for file uploads
//   const upload = multer({ dest: 'uploads/' });

// API endpoint to handle product upload
app.post('/upload', upload.single('product'), async (req, res) => {
  try {
    // Save the uploaded image to MongoDB or file system
    const imageUrl = req.file.path; // This is the path where the image is saved
    res.json({ success: true, image_url: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// API endpoint to add a product
app.post('/addproduct', async (req, res) => {
  try {
    // Create a new product instance
    const newProduct = new Product({
      name: req.body.name,
      image: req.body.image,
      // image2: req.body.image2,
      // image3: req.body.image3,
      email:req.body.email,
      flat: req.body.flat,
      price: req.body.price,
      sqft: req.body.sqft,
      number:req.body.number,
      address:req.body.address
    });
    
    // Save the product to the database
    await newProduct.save();
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.get("/allproducts", async (req, res) => {
  try {
      const products = await Product.find();
      res.json(products);
  } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json("Internal Server Error");
    }
});
app.get('/searchproducts', (req, res) => {
  const { query } = req.query;
  const filteredProducts = products.filter(p => p.name.toUpperCase().includes(query.toUpperCase()));
  res.json(filteredProducts);
});

 
// Configure Nodemailer with Gmail credentials
// It creates a transporter object using the nodemailer.createTransport method and 
//provides it with Gmail credentials  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'anikethani123456789@gmail.com',  // Replace with your real email
      pass: 'vbny njyu sjzc kiji'             // Replace with your real app password
  }
});

// Function to send email
const sendEmail = (to, subject) => {
  const otp = Math.floor(100000 + Math.random() * 900000);  // Generate a 6-digit OTP

  const mailOptions = {
      from: 'anikethani123456789@gmail.com',  // This should match the `auth.user`
      to: to,
      subject: subject,
       
      html: `
      <h1>Reset Your Password</h1>
      <p>Your OTP is: ${otp}</p>
      <a href="http://localhost3000/Login">
        <button style="background-color: blue; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
          Reset Password
        </button>
      </a>`
      //   html:`
      // <h1>Reset Your Password</h1>
      // <p>Your OTP is: ${otp}</p>
      // <form action="http://yourbackenddomain.com/reset-password" method="POST">
      //   <input type="hidden" name="email" value="${to}">
      //   <input type="hidden" name="otp" value="${otp}">
      //   <input type="password" name="newPassword" placeholder="Enter your new password" required>
      //   <button type="submit">Reset Password</button>
      // </form>`
  
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          console.log('Error sending mail:', error);
      } else {
          console.log('Email sent:', info.response);
      }
  });
};

// Define the POST route directly in the app for forgot-password
app.post('/forgot-password', (req, res) => {
  console.log('Forgot Password route hit', req.body);
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);  // Generate a 6-digit OTP
  sendEmail(email, 'Reset Your Password', `Your OTP is: ${otp}`);

  // Respond to the client after attempting to send the email
  res.status(200).json({ message: "Email sent, please check your inbox." });
});
 
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});














