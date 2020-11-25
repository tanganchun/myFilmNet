import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { increase, decrease, fetchList, updateIncrease } from "../../actions";

const Count = (props) => {
  const {
    count,
    count1,
    update,
    loading,
    lists,
    increase,
    decrease,
    fetchList,
    updateIncrease,
  } = props;

  return (
    <View>
      <Text>count:{count}</Text>
      <Text>count1:{count1}</Text>
      <Text>update:{update}</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text>{JSON.stringify(lists)}</Text>
      )}
      <Button title="count++" onPress={increase}></Button>
      <Button title="count1--" onPress={decrease}></Button>
      <Button title="获取数据" onPress={fetchList}></Button>
      <Button title="更新递增" onPress={updateIncrease}></Button>
    </View>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    count: state.count.count,
    count1: state.count.count1,
    lists: state.count.lists,
    loading: state.count.loading,
    update: state.update.update,
  };
};
const mapDispatchToProps = {
  increase,
  decrease,
  fetchList,
  updateIncrease,
};
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(Count);
export default CountContainer;
