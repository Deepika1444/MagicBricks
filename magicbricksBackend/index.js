 
require('dotenv').config()
const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const db=require('./configure/database')
const User=require('./model/user');
const MbsUsers = require('./model/user');
const Cart=require('./model/carteditems')

const authenticateToken=require('./middleware/author')
const app = express();
const port = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

 
db.connect()
const JWT_SECRET =  process.env.JWT_SECRET
if (!JWT_SECRET) {
  console.error("JWT_SECRET is not defined.");
  // Handle the error appropriately, maybe exit the process or throw an error.
}

// Routes
// app.post('/register', async (req, res) => {
//   const { userName, userEmail, userPassword } = req.body;

//   try {
//   const newUser = new User({ userName, userEmail, userPassword });
//     await newUser.save();
//     res.status(201).send("User registered successfully");
    
//   } catch (error) {
//     res.status(400).send(error);
//   }
//   console.log("Registering user with password: ", newUser.userPassword);
//   console.log("Hashed password: ", this.userPassword);
// });
 
// app.post("/Login", (req, res) => {
//   const { email, password } = req.body;
//   console.log( req.body)

 
//   MbsUsers.findOne({ userEmail: email })
//   .then(user => {
//       if (user) {
//         console.log(user)
//           bcrypt.compare(password, user.userPassword, () => {
//             console.log(user.userPassword)
              
//               if (password === user.userPassword) {
//                   res.json("success");
//               } else {
//                   res.json("the password is incorrect");
//               }
//           });
//       } else {
//           res.json("no record existed");
//       }
//   })
//   .catch(err => {
//       console.error("Login error:", err);
//       res.status(500).json("Internal Server Error");
//   });

// });
// app.post('/register', async (req, res) => {
//   const { userName, userEmail, userPassword } = req.body;
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(userPassword, salt);
//     const newUser = new User({ userName, userEmail, userPassword: hashedPassword });
//     await newUser.save();
//     res.status(201).send("User registered successfully");
//   } catch (error) {
//     res.status(400).send(error);
//   }
//   const token = jwt.sign(
//     { id: newUser._id, email: newUser.userEmail },  // Payload can include user ID and email
//     JWT_SECRET,
//     { expiresIn: '24h' }  // Token expires in 24 hours
//   );
// });
app.post('/register', async (req, res) => {
  const { userName, userEmail, userPassword,userNumber ,userId } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    const newUser = new User({ userName, userEmail, userPassword: hashedPassword,userNumber  });
    await newUser.save();
    // Assuming newUser has _id and userEmail fields once saved

    // Sign the JWT token with user's _id and email
    const token = jwt.sign(
      { id: newUser._id, userEmail: newUser.userEmail,userName: newUser.userName },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Send the token along with a success message
    res.status(201).json({ message: "User registered successfully", token: token });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(400).json({ error: error.message });
  }
});
 

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await MbsUsers.findOne({ userEmail: email });
    if (!user) {
      return res.status(404).json("User not found");
    }

    // Properly use bcrypt to compare the hashed password
    const isMatch = await bcrypt.compare(password, user.userPassword);
    if (isMatch) {
      // Create a token
      const token = jwt.sign(
        { id: user._id, email: user.userEmail},  // Payload can include user ID and email
        JWT_SECRET,
        { expiresIn: '2d' }  // Token expires in 24 hours
      );
      // console.log(token
      // )
      res.json({ message: "Login successful", token:token,
       userName: user.userName ,
       userEmail:user.userEmail,
       userNumber:user.userNumber,
       id:user._id});
    } else {
      res.status(401).json("Password is incorrect");
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json("Internal Server Error");
  }
}); 


app.get('/protected-route', authenticateToken, (req, res) => {
  res.json({ message: `Welcome, your email is ${req.user.email}` });
});
app.post('/api/cart', async (req, res) => {
  const { userId, items } = req.body;
  console.log(req.body); 

  try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
          cart = new Cart({ userId, items });
      } else {
          // Optionally clear the old cart items or merge them
          cart.items.push(...items);
      }
      await cart.save();
      res.status(200).json(cart);
      const result = processCartData(req.body);  // Hypothetical function
    if (result.error) {
        return res.status(500).json({ message: "Error processing request", error: result.error });
    }
    res.status(200).json({ message: "Data processed successfully", data: result });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
