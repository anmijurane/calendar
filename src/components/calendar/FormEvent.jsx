import React, { useEffect, useState } from 'react';
import { FaRegSave } from 'react-icons/fa';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import { useDispatch, useSelector } from 'react-redux';
import { addNewEvent, updateEvent } from '../../actions/events';
import { uiCloseModal } from '../../actions/ui';

const startDate = moment().milliseconds(0).second(0);
const endDate = moment().milliseconds(0).second(0).add(1, 'hours');

export function FormEvent() {

  const dispatch = useDispatch();
  const [startDateEvent, setStartDateEvent] = useState(startDate.toDate());
  const [endDateEvent, setEndDateEvent] = useState(endDate.toDate());
  const { activeEvent } = useSelector(state => state.event);

  const [formValues, setFormValues] = useState({
    title: '',
    start: startDateEvent,
    end: endDateEvent,
    notes: '',
  });

  const initialUIState = {
    isValid: false,
    title: { isAnError: false, messageInfo: '', },
    start: { isAnError: false, messageInfo: '', },
    end:   { isAnError: false, messageInfo: '', },
    notes: { isAnError: false, messageInfo: '', },
  }

  const [UIFormErr, setUIFormErr] = useState(initialUIState)

  const { title, start, end, notes } = formValues; 

  const handleChangeInputValues = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleChangeStartEvent = (time) => {
    setFormValues({
      ...formValues,
      start: time
    })
    setStartDateEvent(time);
  }

  const handleChangeEndEvent = (time) => {
    setFormValues({
      ...formValues,
      end: time
    })
    setEndDateEvent(time);
  }

  useEffect(() => {
    if ( activeEvent ) setFormValues( activeEvent )
  }, [activeEvent, setFormValues]);

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    const momentStart = moment( start );
    const momentEnd = moment( end );

    if( momentStart.isSameOrAfter( momentEnd ) ) {
      setUIFormErr({
        ...UIFormErr,
        end:{ isAnError: true, messageInfo: 'Tiene que ser mayor que la fecha de inicio' }
      })
      return null;
    }
    if (title.length < 1) {
      setUIFormErr({
        ...UIFormErr,
        title:{ isAnError: true, messageInfo: 'Tiene que tener mas de 1 caracter' }
      })
      return null;
    }
    if (notes.length <= 0) {
      setUIFormErr({
        ...UIFormErr,
        notes: { isAnError: true, messageInfo: 'Tiene que tener mas de 1 caracter' }
      })
      return null;
    }
   
    setUIFormErr({
      ...initialUIState,
      isValid: true
    });

    if ( activeEvent ) {
      dispatch( updateEvent( formValues ) );
    } else {
      dispatch( addNewEvent({
        ...formValues,
        id: new Date().getTime(),
        user: {
          _id: 856533,
          name: 'Andres Jurado',
        }
      }) );
    }
    dispatch( uiCloseModal() );
    return null;
  }

  return (
    <form className='box form__event' onSubmit={handleSubmitEvent} >

      <div className="field">
        <label className="label">Titulo</label>
        <div className="control">
          <input 
            className="input is-primary"
            type='text'
            name='title'
            value={ title }
            onChange={ handleChangeInputValues }
          />
          {UIFormErr.title.isAnError && (
            <p className="help is-danger"> { UIFormErr.title.messageInfo } </p>
          )}
        </div>
      </div>
      
      <div className="field">
        <label className="label">Inicio del Evento</label>
        <div className="control">
          <DateTimePicker
            onChange={ handleChangeStartEvent }
            value={ start }
          />
          {UIFormErr.start.isAnError && (
            <p className="help is-danger"> { UIFormErr.start.messageInfo } </p>
          )}
        </div>
      </div>

      <div className="field">
        <label className="label">Termino del Evento</label>
        <div className="control">
          <DateTimePicker
            onChange={ handleChangeEndEvent }
            value={ end }
            minDate={ start }
            locate='es'
          />
          {UIFormErr.end.isAnError && (
            <p className="help is-danger"> { UIFormErr.end.messageInfo } </p>
          )}
        </div>
      </div>

      <div className="field">
        <small className="label"> Descripcion Corta </small>
        <div className="control">
          <textarea
            className="textarea is-primary"
            value={ notes }
            name='notes'
            onChange={ handleChangeInputValues }
          ></textarea>
          {UIFormErr.notes.isAnError && (
            <p className="help is-danger"> { UIFormErr.notes.messageInfo } </p>
          )}
        </div>
      </div>

      <div className="field">
        <button
          className="button is-link is-fullwidth"
        >
          <span className="icon">
            <FaRegSave />
          </span>
          <span> Guardar </span>
        </button>
      </div>

    </form>
  )
}
