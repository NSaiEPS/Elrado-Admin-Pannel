import { toast } from "react-toastify";
import axios from "../../utils/axios";
import { setWorklistLoader, setWorklists } from "../reducers/worklistSlice";
import type { AppDispatch } from "../store";

export const getAllWorklists =
  (successCallback: () => void) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setWorklistLoader(true));
      const response = await axios.get("/worklists");
      if (response?.status) {
        dispatch(setWorklists(response?.data?.data));
      } else {
        toast.error(response?.data?.message);
      }
      if (successCallback) {
        successCallback();
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response);
    } finally {
      dispatch(setWorklistLoader(false));
    }
  };
