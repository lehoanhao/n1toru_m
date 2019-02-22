import {
  START_GET_DATA_KANJI,
  SET_NEXT_PAGE_KANJI_DATA,
  SET_CURRENT_PAGE_KANJI_DATA,
  SET_PRE_PAGE_KANJI_DATA,
  SET_CURRENT_KANJI_DATA_WHEN_NEXT_PAGE,
  SET_CURRENT_KANJI_DATA_WHEN_PRE_PAGE
} from "../Contants/ActionTypes";
import kanjiApi from '../Api/kanjiApi';
import JlptLevel from '../Contants/JlptLevel';
import { getPreNextPage } from '../Utils/PageNumber';

export const nextPage = (pageNumber) => {
  let newPage = getPreNextPage(pageNumber)
  return dispatch => {
    dispatch(setCurrentDataHandleNextPage(pageNumber))
    kanjiApi.getListKanji(JlptLevel.N1, newPage.nextPage, (resJson) => {
      dispatch(setNextPageKanjiData(resJson))
    })
  }
}

export const prePage = (pageNumber) => {
  let newPage = getPreNextPage(pageNumber)
  return dispatch => {
    dispatch(setCurrentDataHandlePrePage(pageNumber))
    kanjiApi.getListKanji(JlptLevel.N1, newPage.prePage, (resJson) => {
      dispatch(setPrePageKanjiData(resJson))
    })
  }
}

export const getDataListKanji = (currentPage) => {
  console.log(currentPage)
  let page = getPreNextPage(currentPage)
  return dispatch => {
    dispatch(startGetData())
    kanjiApi.getListKanji(JlptLevel.N1, currentPage, (resJson) => {
      dispatch(setCurrentPageKanjiData(resJson))
    })
    kanjiApi.getListKanji(JlptLevel.N1, page.prePage, (resJson) => {
      dispatch(setPrePageKanjiData(resJson))
    })
    kanjiApi.getListKanji(JlptLevel.N1, page.nextPage, (resJson) => {
      dispatch(setNextPageKanjiData(resJson))
    })
  }
}

const startGetData = () => ({
  type: START_GET_DATA_KANJI
})

const setCurrentDataHandleNextPage = (pageNumber) => ({
  type: SET_CURRENT_KANJI_DATA_WHEN_NEXT_PAGE,
  currentPageNumber: pageNumber,
})

const setCurrentDataHandlePrePage = (pageNumber) => ({
  type: SET_CURRENT_KANJI_DATA_WHEN_PRE_PAGE,
  currentPageNumber: pageNumber,
})

const setNextPageKanjiData = (data) => ({
  type: SET_NEXT_PAGE_KANJI_DATA,
  data
})

const setCurrentPageKanjiData = (data) => ({
  type: SET_CURRENT_PAGE_KANJI_DATA,
  data
})

const setPrePageKanjiData = (data) => ({
  type: SET_PRE_PAGE_KANJI_DATA,
  data
})