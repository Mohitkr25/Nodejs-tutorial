const register = function (username) {
  console.log(`User ${username} has been register`);
};
const login = (username, password) => {
  console.log(`User ${username} is logged in`);
};
module.exports = {
  register,
  login,
};
