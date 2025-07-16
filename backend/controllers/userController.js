const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user:
const loginUser = async (req, res) => {
    const {email, password} = req.body
    const role = req.body.role || 'volunteer'; // Default to volunteer if not provided

    try {
        const user = await User.login(email, password)

        if (user.role !== role) {
            throw Error('User role does not match!');
        }
        
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }
    catch (err) {
        res.status(400).json({error: err.message})
    }
}

// signup user:
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    const role = req.body.role || 'volunteer'; // Default to volunteer if not provided
    if (!role) {
        return res.status(400).json({ error: "Role is required" });
    }

    try {
        const user = await User.signup(email, password, role);
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { signupUser, loginUser }
