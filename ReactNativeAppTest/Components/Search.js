import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class Search extends React.Component {
  render() { // render() {} <=> render = function() {}
    return (
      <View style={styles.container}>
        <TextInput placeholder='Login'/>
        <TextInput placeholder='Password' secureTextEntry={true} textContentType='password'/>
        <Button title='Connect' onPress={() => {}}/>
      </View>
    )
    // () => {} <=> function() {}*
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Search
