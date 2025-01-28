function filterById(arr, id) {
  return arr.filter((obj) => obj.id === id) || null;
}

export default filterById;