import {
  SET_CURRENT_KANJI_DATA_WHEN_NEXT_PAGE, 
  SET_NEXT_PAGE_KANJI_DATA, 
  SET_PRE_PAGE_KANJI_DATA,
  SET_CURRENT_PAGE_KANJI_DATA,
  START_GET_DATA_KANJI,
  SET_CURRENT_KANJI_DATA_WHEN_PRE_PAGE
} from '../Contants/ActionTypes';

const INITIAL_STATE = {
  dataCurrent: [],
  dataPrePage: [],
  dataNextPage: [],
  isLoadingData: true,
  currentPageNumber: 1,
  flagSwider: true
}
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_GET_DATA_KANJI:
      return Object.assign({}, state, {
        isLoadingData: true
      })
    case SET_CURRENT_KANJI_DATA_WHEN_NEXT_PAGE:
      return Object.assign({}, state, {
        dataPrePage: state.dataCurrent,
        dataCurrent: state.dataNextPage,
        dataNextPage: null,
        currentPageNumber: action.currentPageNumber,
        flagSwider: !state.flagSwider
      })
    case SET_CURRENT_KANJI_DATA_WHEN_PRE_PAGE:
      return Object.assign({}, state, {
        dataNextPage: state.dataCurrent,
        dataCurrent: state.dataPrePage,
        dataPrePage: null,
        currentPageNumber: action.currentPageNumber,
        flagSwider: !state.flagSwider
      })
    case SET_NEXT_PAGE_KANJI_DATA:
      return Object.assign({}, state, {
        dataNextPage: action.data
      })
      case SET_PRE_PAGE_KANJI_DATA:
      return Object.assign({}, state, {
        dataPrePage: action.data
      })
      case SET_CURRENT_PAGE_KANJI_DATA:
      return Object.assign({}, state, {
        dataCurrent: action.data,
        isLoadingData: false
      })
    default:
      return state
  }
}