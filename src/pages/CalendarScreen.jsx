import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../helpers/messages';
import moment from 'moment';

import { CalendarEvent } from '../components/calendar/CalendarEvent';
import 'moment/locale/es';
import {
  onDoubleClick,
  onSelectEvent,
  onViewChange
} from '../components/calendar/events/all';
import { CalendarModal } from '../components/calendar/CalendarModal';

moment.locale('es');
const localizer = momentLocalizer( moment );

const events = [
  {
    title: 'Examen Final',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: [''],
    user: {
      _id: 856533,
      name: 'Andres Jurado',
    }
  }
];

export function CalendarScreen() {

  const [view, setView] = useState(localStorage.getItem('lastView') || 'month');
  
  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#5a7b9c',
      borderRadius: '0px',
      opacity: 0.8,
      display: 'block',
    }

    return { style }
  }

  return (
    <div className="content__calendar">
      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor='start'
        endAccessor='end'
        messages={ messages }
        eventStyleGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onView={ (view) => {
          onViewChange(view);
          setView(view);
        } }
        onSelectEvent={ onSelectEvent }
        onDoubleClickEvent={ onDoubleClick }
        view={ view }
      />
      <CalendarModal />
    </div>
    
  )
}
