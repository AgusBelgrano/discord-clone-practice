const generateTag = () => {
  const tag = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");

  return `#${tag}`;
};

module.exports = {
  generateTag,
};
