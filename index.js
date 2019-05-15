module.exports = function l2Norm (vector) {
  if (!Array.isArray(vector)) {
    throw new Error('`vector` is expected to be an array.');
  }

  vector = vector.reduce(function computeL2Norm(acc, element) {
    return acc + Math.pow(element, 2);
  }, 0);

  return Math.sqrt(vector);
};
