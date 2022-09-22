import axios from "axios";
import { BaseServices } from "base";
import { TOKEN } from "config/config";

import Swal from "sweetalert2";
export const loginAction = (payload) => async (dispatch) => {
  try {
    // const response = await UserServices.login(payload);
    axios
      .post("/admin/login", payload)
      .then((res) => {
        const { data } = res;
        localStorage.setItem(TOKEN, data.token);
        Swal.fire("Đăng Nhập Thành Công", "You clicked the button!", "success").then((result) => {
          if (result.isConfirmed) {
            window.history.replaceState({}, "", "/");
          }
        });
      })
      .catch((e) => {
        console.log("e", e);
      });

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
