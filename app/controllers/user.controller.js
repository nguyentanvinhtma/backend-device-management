const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.users;

// Create and Save a new Tutorial
exports.login = async (req, res) => {
    try {
        // Get user input
        const { username, password } = req.body;

        // Validate user input
        if (!(username && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, username },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // save user token
            user.token = token;

            // user
            res.status(200).json(user);
        }
        else
            res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
    }
};