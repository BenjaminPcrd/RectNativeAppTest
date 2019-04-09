import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import SignIn from './SignIn'

class Compo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 100, width: 100, backgroundColor: 'blue' }}><SignIn/></View>
        <View style={{ height: 100, width: 100, backgroundColor: 'green' }}></View>
        <View style={{ height: 100, width: 100, backgroundColor: 'red' }}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
});

export default Compo
