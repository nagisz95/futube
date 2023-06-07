import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, email, username, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", { pageTitle, errorMessage: "Password confirmation does not match." });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", { pageTitle, errorMessage: "This username/email is already taken." });
  }
  await User.create({
    name,
    email,
    username,
    password,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = "Login";
  if (!user) {
    return res.status(400).render("login", { pageTitle, errorMessage: "An account with this usernmae does not exists." });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(400).render("login", { pageTitle, errorMessage: "Wrong password" });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("See profile");
