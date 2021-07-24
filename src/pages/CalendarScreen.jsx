import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../helpers/messages';
import moment from 'moment';

import { CalendarEvent } from '../components/calendar/CalendarEvent';
import 'moment/locale/es';
import {
  onSelectEvent,
  onViewChange
} from '../components/calendar/events/all';
import { CalendarModal } from '../components/calendar/CalendarModal';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../actions/ui';

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
  
  const dispatch = useDispatch();

  const onDoubleClick = () => {
    dispatch( uiOpenModal() );
  }

  return (
    <div className="content__calendar">
      <Calendar
        localizer={ localizer }
        events={ events }
        startAccessor='start'
        endAccessor='end'
        messages={ messages }
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
