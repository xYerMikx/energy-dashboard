import { userApi } from "@/constants/api";
import { UserApiData } from "@/types/userData.types";
import axios from "axios";
import { cropUser } from "./cropUser";

export const getUserData = async () => {
  const { data } = await axios.get<UserApiData>(userApi);
  const user = `${data.results[0].name.first} ${data.results[0].name.last}`;
  return cropUser(user);
};
