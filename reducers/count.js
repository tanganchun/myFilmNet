const count = (
  state = { count: 0, count1: 0, lists: [], loading: false },
  action
) => {
  // action附带type，payload
  switch (action.type) {
    case "INCREASE":
      console.log("count increase");

      // state只读，需要纯函数修改，但我们不知道什么函数是纯函数，所以需要将原来的对象进行拷贝

      // return {count: state.count + 1};
      // return Object.assign({}, state, { count: state.count + 1 });
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      // return {count1: state.count1 - 1};
      // return Object.assign({}, state, { count1: state.count1 - 1 });
      return { ...state, count1: state.count1 - 1 };
    case "GETLISTS":
      return { ...state, lists: action.payload };
    case "SHOWlOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default count;
