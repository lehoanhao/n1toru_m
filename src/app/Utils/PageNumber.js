const MAX_PAGE = 12

export const getPreNextPage = (currentPage) => {
  var result = {
    prePage: MAX_PAGE,
    nextPage: 2
  }
  if(currentPage != 1){
    if(currentPage === 12){
      result = {
        prePage: 11,
        nextPage: 1
      }
    }
    else {
      result = {
        prePage: currentPage - 1,
        nextPage: currentPage + 1
      }
    }
  }
  return result
}