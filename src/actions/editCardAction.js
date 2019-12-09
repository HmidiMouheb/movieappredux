const editCardAction = (
  keyValue,
  newSrc,
  newTitle,
  newYear,
  newDescription,
  newRating
) => ({
  type: "EDIT_CARD",
  payload: {
    keyValue: keyValue,
    newSrc: newSrc,
    newTitle: newTitle,
    newYear: newYear,
    newDescription: newDescription,
    newRating: newRating
  }
});

export default editCardAction;
