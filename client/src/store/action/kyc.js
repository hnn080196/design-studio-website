import { BaseServices } from "base";

class KYC extends BaseServices {
  constructor() {
    super();
    this.url = "/admin/login";
  }
  login = (payload) => {
    console.log("Call API Login");
    return this.post(this.url, payload);
  };
}
const UserServices = new KYC();

export const loginAction = (payload) => async (dispatch) => {
  try {
    const response = await UserServices.login(payload);
    console.log("success");
    // dispatch({
    //   type: "LOGIN",
    //   payload: response.data
    // });
    // history.push("/");
  } catch (error) {
    console.log("error", error);
    console.error("login action execute error", error.message);
  }
};
