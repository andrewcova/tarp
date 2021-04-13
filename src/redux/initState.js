const initState = () => {
  const init = {
    countRarp: 0,
    imgs: [],
    coment: '',
    selectStatus: '',
  }
  return JSON.parse(localStorage.getItem('store')) || init
}


export default initState
