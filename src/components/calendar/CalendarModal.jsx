import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { customStyles } from '../../helpers/center_modal_styles';
import { FormEvent } from './FormEvent';

Modal.setAppElement('#root');

export function CalendarModal() {

  const { openModal:isOpen } = useSelector( state => state.ui );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch( uiCloseModal() );
  }

  return (
    <Modal
      isOpen={ isOpen }
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={ 200 }
      className='modal'
      
    >
      
      <FormEvent />
      
    </Modal>
  )
}
