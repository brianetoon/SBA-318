function getComments(comments, recipeId) {
  return comments.filter((comment) => comment.recipeId === recipeId);
}

export default getComments;