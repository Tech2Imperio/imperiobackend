const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jsw = require("jsonwebtoken");
const { type } = require("os");

const dealerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// password hash middleware
dealerSchema.pre("save", async function (next) {
  const dealerData = this;
  if (!dealerData.isModified("password")) {
    return next();
  }

  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(dealerData.password, salt);
    dealerData.password = hashedPassword;
    return next();
  } catch (error) {
    console.error("Error during password hashing:", error);
    return next(error);
  }
});

//JWT token Creating
dealerSchema.methods.generateToken = async function () {
  try {
    return jsw.sign(
      {
        userId: this._id,
        email: this.email,
      },
      process.env.SECRET_PASS_KEY,
      { expiresIn: "30m" }
    );
  } catch (error) { }
};

// password comapre
dealerSchema.methods.CheckPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Dealer = mongoose.model("dealers", dealerSchema);
module.exports = Dealer;