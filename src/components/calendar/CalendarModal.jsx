import React, { useState } from 'react'
import Modal from 'react-modal';
import { customStyles } from '../../helpers/center_modal_styles';
import { FormEvent } from './FormEvent';

Modal.setAppElement('#root');

export function CalendarModal() {

  const [isOpen] = useState(true);

  return (
    <Modal
      isOpen={ isOpen }
      // onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={ 200 }
      className='modal'
    >
      
      <FormEvent />
      
    </Modal>
  )
}
