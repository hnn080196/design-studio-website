import { BaseServices } from "base";

class UploadServices extends BaseServices {
  constructor() {
    super();
    this.url = "/admin/upload";
  }
  upload = (payload) => {
    return this.post(this.url, payload);
  };
}
const UploadServices = new UploadServices();

export const uploadImage = (payload) => async (dispatch) => {
  try {
    const response = await UploadServices.upload(payload);
    // dispatch({
    //   type: "LOGIN",
    //   payload: response.data
    // });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
