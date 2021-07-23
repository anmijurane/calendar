
export const onDoubleClick = (e) => {
  console.log(e);
}

export const onSelectEvent = (e) => {
  console.log(e);
}

export const onViewChange = (e) => {
  localStorage.setItem('lastView', e);
}

