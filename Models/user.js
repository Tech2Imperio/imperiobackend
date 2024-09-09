// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     organizationName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     phone: {
//       type: String,
//       required: true,
//     },
//     streetAddress: {
//       type: String,
//       required: true,
//     },
//     website: {
//       type: String,
//       default:'User Not Provideing',

//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     stateProvince: {
//       type: String,
//       required: true,
//     },
//     zipPostalCode: {
//       type: String,
//       required: true,
//     },
//     typeOfProductsOrIndustry: {
//       type: String,
//       required: true,
//     },
//     numberOfYearsInBusiness: {
//       type: String,
//       required: true,
//     },
//     HowMuchAmountcanyouinvestindealership: {
//       type: String,
//       default:' dealer not filled',

//     },
//     Howmuchareacanyouprovidefordisplay: {
//       type: String,
//       default:'dealer not filled',

//     },
//   },
//   { timestamps: true }
// );
// // Pre-save hook to ensure fields are initialized if not provided
// userSchema.pre('save', function(next) {
//   if (!this.website) {
//     this.website = '';
//   }
//   if (!this.HowMuchAmountcanyouinvestindealership) {
//     this.HowMuchAmountcanyouinvestindealership = '';
//   }
//   if (!this.Howmuchareacanyouprovidefordisplay) {
//     this.Howmuchareacanyouprovidefordisplay = '';
//   }
//   next();
// });

// const Dealertdata = mongoose.model("dealerdb", userSchema);

// module.exports = Dealertdata;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    organizationName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      default: "User Not Providing", // Default value set here
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    stateProvince: {
      type: String,
      required: true,
    },
    zipPostalCode: {
      type: String,
      required: true,
    },
    typeOfProductsOrIndustry: {
      type: String,
      required: true,
    },
    numberOfYearsInBusiness: {
      type: String,
      required: true,
    },
    HowMuchAmountcanyouinvestindealership: {
      type: String,
      default: "Dealer Not Filled", // Default value set here
      required: false,
    },
    Howmuchareacanyouprovidefordisplay: {
      type: String,
      default: "Dealer Not Filled", // Default value set here
      required: false,
    },
  },
  { timestamps: true }
);

// Pre-save hook to ensure fields are initialized if not provided
userSchema.pre("save", function (next) {
  if (!this.website) {
    this.website = "User Not Providing"; // Ensure default value if not provided
  }
  if (!this.HowMuchAmountcanyouinvestindealership) {
    this.HowMuchAmountcanyouinvestindealership = "Dealer Not Filled"; // Ensure default value if not provided
  }
  if (!this.Howmuchareacanyouprovidefordisplay) {
    this.Howmuchareacanyouprovidefordisplay = "Dealer Not Filled"; // Ensure default value if not provided
  }
  next();
});

const Dealertdata = mongoose.model("dealerdb", userSchema);

module.exports = Dealertdata;
