const jwt = require("jsonwebtoken");
const { RequestError } = require("../helpers");
const { users: operations } = require("../services");

const secret = process.env.SECRET;

const auth = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [tokenType = "", token = ""] = authorization.split(" ");

    if (tokenType !== "Bearer" || !token) {
      throw RequestError(401, "Not authorized");
    }

    try {
      const { _id } = jwt.verify(token, secret);
      const user = await operations.authUser(_id);

      if (!user || user.token !== token) {
        throw RequestError(401, "Not authorized");
      }

      req.user = user;

      next();
    } catch (error) {
      error.status = 401;
      next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
