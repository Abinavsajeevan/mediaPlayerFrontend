import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, allVideoApi, getAllCategory, getAllVideoApi, removeCategoryApi, updateCategoryApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


function Categorie({dragOut,setDragOut}) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('')
  const [allCategory, setAllCategory] = useState([])
  const [addStatus, setAddStatus] = useState(false)
  const [updateStatus, setUpdateStatus] = useState(false)

  const handleClose = () => {
    setShow(false)
    setCategoryName('')
  }
  const handleShow = () => setShow(true);

  const handleCategoryAdd = async() => {
    if(categoryName){
    const reqBody = {
      categoryName,
      allVideo: []
    }
    const result = await addCategoryApi(reqBody)
    if(result.status >= 200 && result.status < 300) {
      setCategoryName('')
      handleClose()
      alert('Category added successfully')
      setAddStatus(true)
    }
    }
    else {
      alert('please add a category name')
    }
  }

  const getCategory = async() => {
    const result = await getAllCategory()
    setAllCategory(result.data)
  }
  console.log(categoryName);

  

  const handleDelete = async(id) => {
    await removeCategoryApi(id)
    setAddStatus(true)
  }

  useEffect(()=> {
    setAddStatus(false)
    getCategory()
    setDragOut(false)
    setUpdateStatus(false)
  },  [addStatus, updateStatus, dragOut])

  const dragOver = (e) => {
    e.preventDefault()
  }

  const VideoDrop = async(e, selectedCategory) => {
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(selectedCategory);
    console.log(vDetails);

      if(selectedCategory.allVideo.find(item => item.id == vDetails.id)) {
        alert('duplication');
      }else {
        selectedCategory.allVideo.push(vDetails)
        setUpdateStatus(true)
        const result = await updateCategoryApi(selectedCategory.id, selectedCategory)
        alert('video added successfully')
      }   
      // console.log(selectedCategory.allVideo);

      

  }

  const ondrag = (e, videoId, categoryDetails) => {
    console.log(videoId, categoryDetails);
    const dataShare = {videoId,categoryDetails}
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare))
  }

  return (
    <>
      <h5>Category</h5>
      <button onClick={handleShow} className='btn btn-warning w-100 mt-4' >Add Category</button>

{allCategory?.length>0?   allCategory?.map((item)=>(
   <div className='p-3 border rounded mt-4' droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => VideoDrop(e, item)}>
   <div className='d-flex justify-content-between'><p className='mb-4'>{item.categoryName}</p>
   <button className='btn btn-danger'><FontAwesomeIcon onClick={()=>handleDelete(item.id)} icon={faTrashCan} /></button>
   </div>

  {item?.allVideo?.length > 0? item.allVideo?.map((video) => ( 
    <div draggable onDragStart={(e)=>ondrag(e, video.id, item)}>
      <VideoCard video={video} isPresent ={true} />
      </div>
   
    )): null}

 </div>
))  
    :
    <p className='text-danger mt-5'>No Category Added Yet</p>  
    }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  className='p-3 border rounded'>
            <input type="text" className='form-control' placeholder='Category name' onChange={(e) => setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
   
  )
}

export default Categorie