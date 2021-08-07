import moment from "moment";
import { types } from "../types/types";

const initialState = {
  events: [
    {
      title: 'Examen Final',
      start: moment().toDate(),
      end: moment().add(1, 'days').toDate(),
      notes: [''],
      user: {
        _id: 856533,
        name: 'Andres Jurado',
      }
    },
  ],
  activeEvent: null
}

export function calendarReducer( state = initialState, action ) {
  
  switch (action.type) {
    case types.eventAddNew:
      console.log(action);
      return {
        ...state,
        events: [ ...state.events, action.payload ]
      }
    case types.eventSetActive:
      return {
        ...state,
        activeEvent: action.payload,
      }

    case types.eventUpdate:
      return {
        ...state,
        events: state.events.map(
          evnt => ( evnt.id == action.payload.id) ? action.payload : evnt
        )
      }

    default:
      return state;
  }
  
}
