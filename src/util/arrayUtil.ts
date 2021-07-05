// https://stackoverflow.com/a/12646864
export const shuffleArray = <T>(arrayIn: T[]): T[] => {
  for (let i = arrayIn.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayIn[i], arrayIn[j]] = [arrayIn[j], arrayIn[i]];
  }
  return arrayIn;
};
