import React, {Component} from 'react';
import {StyleSheet, Text, View, ToolbarAndroid, StatusBar} from 'react-native';
import ViewPager from "@react-native-community/viewpager";
import KeepAwake from "react-native-keep-awake";

class Card extends Component {
  render() {
    const number = this.props.number;

    return (
      <View style={styles.card}>
        <Text style={styles.cardHeader}>{number}</Text>
        <Text style={styles.cardBody}>{number}</Text>
        <Text style={styles.cardFooter}>{number}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    KeepAwake.activate();

    const numbers = [0, 0.5, '1/2', 1, 2, 3, 5, 8, 13, 20, 40, 100, '?'];
    const pages = [];

    numbers.forEach((n, i) => {
      pages.push(
      <View style={styles.page} key={i+1}>
        <Card number={n}></Card>
      </View>
      );
    });

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#102027" barStyle="light-content" />
        <ToolbarAndroid style={styles.toolbar} title="Planning Poker" titleColor="#fff" />

        <ViewPager style={styles.viewPager} initialPage={0}>
          {pages}
        </ViewPager>
      </View>
    );
  }
}

const cardHeaderFooter = {
  flexDirection: 'row',
  fontSize: 25
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f6',
  },
  toolbar: {
    height: 50,
    backgroundColor: '#37474f',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardHeader: {
    ...cardHeaderFooter,
  },
  cardBody: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 150,
    fontWeight: 'bold',
  },
  cardFooter: {
    ...cardHeaderFooter,
    transform: [{rotateZ: '180deg'}]
  }
});
