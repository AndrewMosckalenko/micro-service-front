import { api } from "../../api";
import { USER_WHO_AM_I_PATH } from "../../paths";

export function getWhoAmIRequest() {
  return api.get(USER_WHO_AM_I_PATH);
}
