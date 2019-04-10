import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class Film extends React.Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{uri: "image"}}/>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Title</Text>
            <Text style={styles.voteText}>Vote</Text>
          </View>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.date}>Date</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
    flexDirection: 'row',
    backgroundColor: 'grey'
  },
  image: {
    backgroundColor: 'blue',
    flex: 1
  },
  contentContainer: {
    backgroundColor: 'green',
    flex: 2,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'orange'
  },
  titleText: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 20,
    flexWrap: 'wrap'
  },
  voteText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 26
  },
  description: {
    backgroundColor: 'red',
    flex: 3,
    fontStyle: 'italic'
  },
  date: {
    backgroundColor: 'purple',
    flex: 1,
    textAlign: 'right',
    fontSize: 14
  }
});

export default Film
