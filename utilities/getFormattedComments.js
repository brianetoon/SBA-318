function getFormattedComments(comments, users) {
  return comments.map((comment) => {
    const user = users.find((user) => user.id === comment.userId);
    return {
      ...comment,
      user: user ? user : null,
    };
  });
}

export default getFormattedComments;