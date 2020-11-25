export const increase = () => {
  return {
    type: "INCREASE",
  };
};

export const decrease = () => {
  return {
    type: "DECREASE",
  };
};

export const getListData = (payload) => {
  return {
    type: "GETLISTS",
    payload,
  };
};

export const showLoading = (payload) => {
  return {
    type: "SHOWlOADING",
    payload,
  };
};

/*
1.定义一个函数叫 fetchList
2.这个函数返回一个内容，而这个内容的类型是函数
3.返回的这个函数有一个参数叫 dispatch，事实上这个 dispatch 参数的类型是函数
*/

export function fetchList() {
  return (dispatch) => {
    dispatch(showLoading(true));
    let url = "https://jsonplaceholder.typicode.com/posts?_page=1";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        dispatch(getListData(resJson));
        dispatch(showLoading(false));
      });
  };
}
