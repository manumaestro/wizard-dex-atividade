"use client";

import { ToastContainer} from "react-toastify";
import  "react-toastify/dist/ReactToastify.css";

    export default function ToastProvider() {
        return (
            <ToastContainer
            position="bottom-rigth"
            autoCloser={2500}
            theme="dark"
            />
        )
    }
