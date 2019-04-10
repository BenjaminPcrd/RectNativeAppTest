import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import Film from './Film'

class Search extends React.Component {
  render() {
    return(
      <View style={styles.main_container}>
        <TextInput style={styles.text_input} placeholder='Title'/>
        <Button title='Search' onPress={() => {}}/>
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Film film={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 30
  },
  text_input: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 5
  }
})

export default Search
