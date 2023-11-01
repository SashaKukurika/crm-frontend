export const formatDate = (date: Date) => {
  if (!date) {
    return 'null';
  }
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
