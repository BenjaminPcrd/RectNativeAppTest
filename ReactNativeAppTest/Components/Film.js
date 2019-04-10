import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class Film extends React.Component {
  render() {
    const film = this.props.film
    return(
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{uri: "image"}}/>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>{film.title}</Text>
            <Text style={styles.voteText}>{film.vote_average}</Text>
          </View>
          <Text style={styles.description} numberOfLines={6}>{film.overview}</Text>
          <Text style={styles.date}>Release the {film.release_date}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    margin: 5,
    backgroundColor: 'gray',
    flex: 1
  },
  contentContainer: {
    flex: 2,
    margin: 5,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  titleText: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  voteText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description: {
    flex: 7,
    fontStyle: 'italic',
    color: '#666666'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    fontSize: 14
  }
});

export default Film
