module.exports = numberGenerator = () => {
  const char = "123456ABCDEFGHI76wndixdzsfszfs2009765210ojfngdBNMUOP";

  const serialLenght = 28;

  let randomKey = "";
  for (let i = 0; i < serialLenght; ++i) {
    let randomSingle = char[Math.floor(Math.random() * char.length)];
    randomKey += randomSingle;
  }
  return randomKey;
};
