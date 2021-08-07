import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { messages } from '../helpers/messages';
import moment from 'moment';

import { CalendarEvent } from '../components/calendar/CalendarEvent';
import 'moment/locale/es';
import {
  onViewChange
} from '../components/calendar/events/all';
import { CalendarModal } from '../components/calendar/CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../actions/ui';
import { setActiveNote } from '../actions/events';
import { Fab } from '../components/elements/Fab';
import { FabDelete } from '../components/elements/FabDelete';

moment.locale('es');
const localizer = momentLocalizer( moment );

export function CalendarScreen() {

  const { events, activeEvent } = useSelector(state => state.event);

  const [view, setView] = useState(localStorage.getItem('lastView') || 'month');
  
  const dispatch = useDispatch();

  const onDoubleClick = (e) => {
    dispatch( uiOpenModal()   );
    dispatch( setActiveNote(e) );
  }
  
  const onSelectEvent = (e) => {
    dispatch( setActiveNote(e) );
  }

  const onSelectSlot = (e) => {
    dispatch( setActiveNote() );
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
        onSelectSlot={ onSelectSlot }
        selectable={ true }
        view={ view }
      />
      <Fab />
      { activeEvent && <FabDelete /> }
      <CalendarModal />
    </div>
    
  )
}
