const asyncHandler = require('express-async-handler');
const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//@desc Register user
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400).json({ message: "Please fill all the fields" })
    }
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400).json({ message: "User already exists" })
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({ __id: user.id, email: user.email })
    } else {
        res.status(400).json({ message: "Invalid user data" })
    }
    // res.json({message:"Registered the user"})
})



//@desc Login user
//@route POST /api/users/login
//@access Public


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Please fill all the fields" })
    }
    const user = await User.findOne({ email });
    //compare password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user._id
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
        res.status(200).json({ accessToken })
    }
    else {
        res.status(400).json({ message: "Invalid email or password" })
    }
})



//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user)
})



module.exports = { registerUser, loginUser, currentUser };