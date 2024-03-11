import React from 'react'
import './content.css'

const Content = () => {
  return (
    <div className='contentDiv'>
        <div className='content1'>
            <span className='content'>
                <span className='g'>G</span>oogle
                
            </span>
            <br />
            <span className='content'>
            <span className='d'>D</span>eveloper
                
            </span>
            <br />
            <span className='content'>
            <span className='s'>S</span>tudent
                
            </span>
            <br />
            <span className='content'>
            <span className='c'>C</span>lub
                
            </span>
            <br />
            <span className='content2'>
                <span className='scoe'>SCOE </span> Pune
            </span>
        </div>

        <div >
            <img className="peoplelogo"
            src="./images/peopleLogo.png" alt="" />
        </div>
    </div>
  )
}

export default Content