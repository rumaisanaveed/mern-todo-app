import { toast } from "react-toastify";

const errorHandler = (error: any) => {
  if (error.response) {
    toast.error(error.response.data.errorMessage || "An error occured.");
  } else if (error.request) {
    toast.error("Request failed. Please try again later.");
  } else {
    toast.error(error.message || "An error occured.");
  }
};

export default errorHandler;
