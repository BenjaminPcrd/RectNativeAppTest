import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import Film from './Film'
import { getFilmsFromApiWithSearchText } from '../API/TMDBApi'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchedText = ""
    this.state = {
      films: []
    }
  }

  _loadFilms() {
    //console.log(this.searchedText)
    if(this.searchedText.length > 0) {
      getFilmsFromApiWithSearchText(this.searchedText).then(data => {
        //console.log(data)
        this.setState({ films: data.results })
      });
    }
  }

  render() {
    return(
      <View style={styles.main_container}>
        <TextInput
          style={styles.text_input}
          placeholder='Title'
          onChangeText={(text) => this.searchedText = text}
        />
        <Button title='Search' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
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
