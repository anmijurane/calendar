import React from 'react'

export function CalendarEvent({ event }) {
  const { title, user } = event;
  console.log(event);
  return (
    <div>
      <p className="title"> {title } </p>
      <span>{ user.name }</span>  
    </div>
  )
}
