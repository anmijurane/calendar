import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../actions/events';

export function FabDelete() {
  const dispatch = useDispatch();

  const handleClickDeleteEvent = () => {
    dispatch( deleteEvent() );
  }

  return (
    <button
      className="button is-danger fab_delete"
      onClick={ handleClickDeleteEvent }
    >
      <FiTrash />
    </button>
  )
}
