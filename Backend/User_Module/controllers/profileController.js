const Profile = require("../models/profileModel");

// exports.createUser = async (req, res) => {
//   try {
//     const user = new Profile(req.body);
//     await user.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating user" });
//   }
// };

exports.createUser = async (req, res) => {
  try {
    console.log("Creating user...");
    const user = new Profile({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    console.log("User created:", user);
    await user.save();
    console.log("User saved to database");
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Error creating user" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await Profile.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting user" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user" });
  }
};
