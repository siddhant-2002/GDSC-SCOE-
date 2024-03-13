import React from 'react'
import './events.css'
import EventSlider from './EventSlider'
import EventCards from './EventCards'





const Events = () => {
  return (
    <div>
        <div>
            <EventSlider/>
        </div>
        <div className='eventheader'>
          Upcoming Events
        </div>

        <div>
          <EventCards/>
        </div>
        
    </div>
  )
}

export default Events