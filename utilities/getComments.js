function getComments(comments, recipeId) {
  return comments.filter((comment) => comment.recipeId === recipeId);
}

module.exports = getComments;