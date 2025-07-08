import {toast} from "react-hot-toast";

export const ToastSuccess = (msg) => {
    toast.success(msg,{
        position: "bottom-right",
    })
}

export const ToastError = (msg) => {
    toast.error(msg, {
        position: "bottom-right",
    })
}