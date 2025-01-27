function findById(arr, id) {
  return arr.find((obj) => obj.id === id) || null;
}

export default findById;