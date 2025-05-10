import React,{useContext} from 'react';
import { Toast,ToastContainer } from 'react-bootstrap';
import ToastContext from '../context/ToastContext';
const ContactSuccessToast = () => {
let {show,setShow,message}=useContext(ToastContext);
  return (
 <ToastContainer className="position-fixed top-50 start-50 translate-middle p-3"
 style={{ zIndex: 9999 }} >
  <Toast onClose={()=>setShow(false)} show={show} delay={5000} autohide bg='success'>
  <Toast.Header>
    <strong className="me-auto">Success</strong>
  </Toast.Header>
  <Toast.Body className='text-white'>
   {message}
  </Toast.Body>
  </Toast>
 </ToastContainer>
  )
}
export default ContactSuccessToast
