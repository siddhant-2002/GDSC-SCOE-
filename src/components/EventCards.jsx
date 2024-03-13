import React from 'react'
import './eventcard.css'

const cardData = [
    {
      src: "/images/cloud.png",
      eventName: "30 Days of Google Cloud",
      date: "2022-01-01",
      borderColor: "#FABD03"
    },
    {
      src: "/images/android.png",
      eventName: "Android Study Jam",
      date: "2022-02-01",
      borderColor: "#EA4235"
    },
    {
      src: "/images/flutter.png",
      eventName: "Flutter Festival",
      date: "2022-03-01",
      borderColor: "#109D58"
    },
    // add more objects as needed
  ];
  
  const EventCards = () => {
    return (
      <div className="card-container">
        {cardData.map((card, index) => (
          <div key={index} className="eventcard" style={{borderColor: card.borderColor}}>
            <div className="card-image">
              <img src={card.src} alt={card.eventName} />
            </div>
            <div className="card-info">
              <span className="event-name">{card.eventName}</span>
              <br />
              <span className="event-date">{card.date}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

export default EventCards