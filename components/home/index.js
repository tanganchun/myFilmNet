import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

const Home = ({ navigation, count }) => {
  return (
    <View>
      <Text>Home</Text>
      <Text>Count:{count}</Text>
      <Button
        title="跳转至Count"
        onPress={() => {
          navigation.navigate("Count");
        }}
      ></Button>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

const HomeContainer = connect(mapStateToProps)(Home);

export default HomeContainer;
