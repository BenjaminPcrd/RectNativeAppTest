import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native'
import Film from './Film'
import { getFilmsFromApiWithSearchText } from '../API/TMDBApi'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.searchedText = ""
    this.state = {
      films: [],
      isLoading: false
    }
  }

  _loadFilms() {
    //console.log(this.searchedText)
    if(this.searchedText.length > 0) {
      this.setState({
        isLoading: true
      })
      getFilmsFromApiWithSearchText(this.searchedText).then(data => {
        //console.log(data)
        this.setState({
          films: data.results ,
          isLoading: false
        })
      });
    }
  }

  _displayLoading() {
    if(this.state.isLoading) {
      return(
        <View style={styles.loading_container}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
  }

  render() {
    //console.log(this.state.isLoading)
    return(
      <View style={styles.main_container}>
        <TextInput
          style={styles.text_input}
          placeholder='Title'
          onChangeText={(text) => this.searchedText = text}
          onSubmitEditing={() => this._loadFilms()}
        />
        <View style={styles.button_container}>
          <Button
            title='Search'
            color='green'
            onPress={() => this._loadFilms()}
          />
        </View>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Film film={item}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 40
  },
  text_input: {
    marginRight: 10,
    marginLeft: 10,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5
  },
  button_container: {
    margin: 10
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 150,
    bottom: 0,
    alignItems: 'center'
  }
})

export default Search
