import React from 'react'
import './brand.css'
import BT from '../../assets/BT.png'
import NHS from '../../assets/NHS.png'
import UoB from '../../assets/UoB.png'


const Brand = () => {
  return (
    <div className='brand'>
      <div className='brand-title'>
        <h2>Who we work with</h2>
      </div>
      <div className='brand-section__padding'>
        <div>
          <img src={BT} alt='BT' />
        </div>
        <div>
          <img src={NHS} alt='NHS' />
        </div>
        <div>
        <img src={UoB} alt='UoB' />
        </div>
      </div>
    </div>
  )
}

export default Brand