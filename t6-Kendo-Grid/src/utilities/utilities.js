import { toast } from "react-toastify";
const toastResult = (successMessage, errorMessage, status) => {
  status === 200 || status === 201
    ? toast.success(successMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    : toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
};
export default toastResult;
