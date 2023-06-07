export const loacalMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "Futube";
  res.locals.loggedInUser = req.session.user;
  next();
};
