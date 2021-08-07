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
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../actions/ui';
import { setActiveNote } from '../actions/events';
import { Fab } from '../components/elements/Fab';

moment.locale('es');
const localizer = momentLocalizer( moment );

export function CalendarScreen() {

  const { events } = useSelector(state => state.event);

  const [view, setView] = useState(localStorage.getItem('lastView') || 'month');
  
  const dispatch = useDispatch();

  const onDoubleClick = (e) => {
    dispatch( uiOpenModal()   );
    dispatch( setActiveNote(e) );
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
      <Fab />
      <CalendarModal />
    </div>
    
  )
}
