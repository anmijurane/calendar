import moment from 'moment';
import React from 'react'

export function CalendarEvent({ event }) {
  const { title, user, start, end } = event;
  return (
    <div>
      <p className="is-strong"> {title } </p>
      <span>{ user.name }</span>  
      <span> Inicia  { moment(start).format('HH:mm') } </span>
      <span> Termina { moment(end).format('HH:mm') } </span>
    </div>
  )
}
