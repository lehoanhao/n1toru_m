
import { callApi } from './callApi';
function getListKanji(level, page, callBack){
  try{
    let URL = `https://mazii.net/api/jlptkanji/${level}/100/${page-1}`
    callApi(URL, (result) => callBack(result.results))
  } catch (err){
    alert("ERROR");
  }
}

export default kanjiApi = {
  getListKanji
}