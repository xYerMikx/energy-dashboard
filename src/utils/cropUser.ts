const MAX_LENGTH = 13;
export const cropUser = (user: string) => {
  return user.length > MAX_LENGTH ? `${user.slice(0, MAX_LENGTH)}...` : user;
};
