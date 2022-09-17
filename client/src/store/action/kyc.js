import { BaseServices } from "base";

class KYC extends BaseServices {
  constructor() {
    super();
    this.url = "/admin/login";
  }
  login = (payload) => {
    return this.post(this.url, payload);
  };
}
const UserServices = new KYC();

export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await UserServices.login(payload);
    dispatch({
      type: "LOGIN",
      payload: response.data
    });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
