const Dealer = require("../Models/dealers");
// const jwt = require("jsonwebtoken");

const dealerRegisterationHandeler = async (req, res) => {
  try {
    const { first_name, last_name, gst_no, mob_no, email, password } = req.body;

    const emailExists = await Dealer.findOne({ email: email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const dealerRegitered = await Dealer.create({
      first_name,
      last_name,
      gst_no,
      mob_no,
      email,
      password,
    });
    return res.status(201).json({
      dealerRegitered,
      message: "Deler created....",
      token: await dealerRegitered.generateToken(),
      userId: await dealerRegitered._id.toString(),
    });
  } catch (error) {
    console.log("dealer regi error=", error);
  }
};

const logindealers = async (req, res) => {
  try {
    const { email, password } = req.body;
    const dealerExists = await Dealer.findOne({ email: email });
    if (!dealerExists) {
      return res.status(400).json({ message: "dealer alredy exists" });
    }

    const dealercredential = await dealerExists.CheckPassword(password);

    if (dealercredential) {
      return res
        .status(200)
        .json({
          msg: "dealers is login successfully...",
          token: await dealerExists.generateToken(),
          userId: await dealerExists._id.toString(),
        });
    } else {
      return res.status(400).json({ msg: "Incorrect Credential" });
    }
  } catch (error) {
    console.log("dealer login error=", error);
  }
};

module.exports = [dealerRegisterationHandeler, logindealers];
