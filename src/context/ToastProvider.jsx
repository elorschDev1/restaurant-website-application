import React,{useState} from 'react';
import ToastContext from './ToastContext';
import PropTypes from "prop-types";

const ToastProvider = ({children}) => {
    let [show,setShow]=useState(false);
    let [message,setMessage]=useState("");
    const triggerToast=(message)=>{
        setMessage(message);
        setShow(true);

    }
    return(
        <ToastContext.Provider value={{message,setMessage,show,setShow,triggerToast}}>{children}</ToastContext.Provider>
    )

}
export default ToastProvider
ToastProvider.propTypes={
    children:PropTypes.node.isRequired
}