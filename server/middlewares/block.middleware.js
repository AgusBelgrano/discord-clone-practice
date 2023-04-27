// const sendEmail = require("../utils/sendEmail");

const failedLoginAttemps = {};

const blockMiddleware = (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.address;
  failedLoginAttemps[ip] = failedLoginAttemps[ip] || 0;
  failedLoginAttemps[ip]++;

  if (failedLoginAttemps[ip] > 3) {
    // sendEmail(req.body.email);
    res.status(400).send("Tu dirección de IP ha sido bloqueada");
  } else {
    next();
  }
};

module.exports = blockMiddleware;
