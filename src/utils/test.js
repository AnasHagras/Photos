export const tryFilter = (e) => {
  const arr = [1, 2, 3, 4, 5];
  arr
    .filter((e) => {
      return e > 2;
    })
    .map((e) => {
      console.log(e);
    });
};
