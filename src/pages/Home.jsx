import React, { useState } from 'react'
import Add from '../components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../components/View'
import Categorie from  '../components/Categorie'
import { Link } from 'react-router-dom'

function Home() {
  const [addVideoStatus, setAddVideoStatus] = useState([])

  const [dragOut, setDragOut] =useState(false)

  return (
    <>
      <div className="d-flex p-5">
        <Add setAddVideoStatus = {setAddVideoStatus}/>
        <h5 className='ms-auto'><Link to={'/watchhistory'}> <span className='hide'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>

      </div>

      <div className="row w-100 p-4">
        <div className="col-md-9">
          <View addVideoStatus = {addVideoStatus} setDragOut={setDragOut} />
        </div>
        <div className="col-md-3 p-4">
          <Categorie setDragOut={setDragOut} dragOut={dragOut} />
        </div>
      </div>
    </>
   
  )
}

export default Home