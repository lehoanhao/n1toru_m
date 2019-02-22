export function callApi(url, callBack){
  console.log(url)
  fetch(url)
  .then(res => responseResult(res))
  .then((responseJson) => {
    return callBack(responseJson);
  })
  .catch(err => console.log(err))
}

const responseResult = res => {
  switch (res.status) {
    case 200:
      return res.json()
    case 502:
    console.log(res)
      return null
    default:
      return null
  }
}