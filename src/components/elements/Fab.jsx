import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export function Fab() {
  const dispatch = useDispatch();
  
  const handleClickOpenModal = () => { 
    dispatch( uiOpenModal() );
  }

  return (
    <button
      className="button is-primary fab_plus"
      onClick={ handleClickOpenModal }
    >
      <AiOutlinePlus />
    </button>
  )
}
