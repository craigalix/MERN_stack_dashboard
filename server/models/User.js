import mongoose from "mongoose";

// const joi = require("joi");
// const passwordComplexity = require("joi-password-complexity")

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

// const validate = (data) => {
//   const schema = joi.object({
//     name: joi.string().required().label("Name"),
//     password: passwordComplexity().required().label("Password")
//   });
//   return schema.validate(data)
// };

// export default {User, validate};

export default User;
