import React, { useState } from 'react';
import { FaRegSave } from 'react-icons/fa';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';

const startDate = moment().milliseconds(0).second(0);
const endDate = moment().milliseconds(0).second(0).add(1, 'hours');

export function FormEvent() {

  const [startDateEvent, setStartDateEvent] = useState(startDate.toDate());
  const [endDateEvent, setEndDateEvent] = useState(endDate.toDate());

  const [formValues, setFormValues] = useState({
    title: '',
    start: startDateEvent,
    end: endDateEvent,
    notes: '',
  });

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

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    console.log('====================================');
    console.log(formValues);
    console.log('====================================');

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
        </div>
      </div>
      
      <div className="field">
        <label className="label">Inicio del Evento</label>
        <div className="control">
          <DateTimePicker
            onChange={ handleChangeStartEvent }
            value={ start }
          />
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
        </div>
      </div>

      <div className="field">
        <button className="button is-link is-fullwidth">
          <span className="icon">
            <FaRegSave />
          </span>
          <span> Guardar </span>
        </button>
      </div>

    </form>
  )
}
