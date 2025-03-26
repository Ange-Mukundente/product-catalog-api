const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No token, authorization denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    if (!user.isActive) {
      return res
        .status(401)
        .json({ success: false, message: "Account is deactivated" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Token is not valid" });
  }
};