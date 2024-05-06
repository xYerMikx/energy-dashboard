export const randomize = (): number => {
  const number = +(Math.random() * 50).toFixed(2);
  return Math.ceil(number) < 10 ? randomize() : number;
};
