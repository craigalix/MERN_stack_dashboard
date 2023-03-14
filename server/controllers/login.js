import OverallStat from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};