
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { allVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: '',
    imageUrl: '',
    embedLink:''

})



console.log(videoDetails);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleUpload = async(e) => {
    e.preventDefault();
    const {caption, imageUrl,embedLink} = videoDetails
    if(!caption || !imageUrl || !embedLink) {
      toast.info("please fill the form completely")
    }else {
      const result = await allVideoApi(videoDetails)
   
    console.log(result);
    if(result.status >=  200 && result.status < 300) {
      toast.success('Video Added successfully')
      handleClose()
      setAddVideoStatus(result.data)
    }else {
      toast.error('something went wrong')
      console.log(result);
    }
    }

    

  }

  const getLink = (e) => {
    const link = e.target.value
    console.log(link);
    if(link.startsWith('https://youtu.be')) {
      setVideoDetails({...videoDetails, embedLink:`https://www.youtube.com/embed/${link.slice(17,28)}`})
    }else {
      setVideoDetails({...videoDetails, embedLink:`https://www.youtube.com/embed/${link.slice(-11)}`})
    }
  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h2>Upload new video </h2>
        <button className='btn fs-5' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} /></button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3'>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video Caption' name='caption' onChange = {(e) => {setVideoDetails({...videoDetails,caption:e.target.value})
              }} />
            </div>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video Image' name = 'img' onChange = {(e) => {setVideoDetails({...videoDetails,imageUrl:e.target.value})
              }} />
            </div>
            <div className='mb-2'>
              <input type="text" className='form-control' placeholder='Video Url' name = 'url' onChange={(e) => getLink(e)}  />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={(e)=>handleUpload(e)}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer posititon='top-center' theme='colored' autoClose= '5000' />
    </>
  )
}

export default Add