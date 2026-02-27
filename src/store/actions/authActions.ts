import { toast } from "react-toastify";
import axios from "../../utils/axios";
import { setAuthLoader, setLoginInfo } from "../reducers/authSlice";
import type { AppDispatch } from "../store";

export const postLogin =
  (data: any, successCallback: () => void) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setAuthLoader(true));
      const response = await axios.post("/auth/login", data);
      if (response?.status) {
        dispatch(setLoginInfo(response?.data));
        localStorage.setItem(
          "elrado_access_token",
          response?.data?.accessToken,
        );
      }
      if (successCallback) {
        // toast.success("Login successful for your kind of work assistant");
        toast.success(response?.data?.message);
        successCallback();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response);
    } finally {
      dispatch(setAuthLoader(false));
    }
  };
