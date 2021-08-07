import { types } from "../types/types";

export const setActiveNote = ( eventActive = null ) => ({
  type: types.eventSetActive,
  payload: eventActive,
});

export const addNewEvent = ( event ) => ({
  type: types.eventAddNew,
  payload: event,
})

export const updateEvent = ( event ) => ({
  type: types.eventUpdate,
  payload: event,
});

