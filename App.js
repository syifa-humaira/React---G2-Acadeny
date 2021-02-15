/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Text, StatusBar, SafeAreaView} from 'react-native';

class App extends Component {
  getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return (today = dd + '/' + mm + '/' + yyyy);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
              <Text style={styles.baseText}> Hello !! 안녕하세요 </Text>
              <Text style={styles.secondText}>
                My Simple Biodata {'\n'}
                {'\n'}
                Name : Syifa Humaira {'\n'}
                Date of Birth : 31 January 1997 {'\n'}
                Address : Jl.Cipinang Besar Selatan {'\n'}
                Religion : Islam {'\n'}
                Gender : Female
              </Text>
              <Text style={styles.dateText}>{this.getDate()}</Text>
              <Text style={styles.thirdText}>
                Jobs : Student {'\n'}
                Marital : Single {'\n'}
                Education : Diploma Degrees {'\n'}
                Hobies : Traveling, Photography {'\n'}
                Email : syifa.learn@gmail.com
              </Text>
              <Text style={styles.dateText}>{this.getDate()}</Text>
              <Text style={styles.fourthText}>
                Nasionality : Indonesian {'\n'}
                Working Experiences : 5 years {'\n'}
                Skills : Photoshop, HTML, CI, SQL, Python {'\n'}
                LinkedIn : Syifa Humaira {'\n'}
                Instagram : @faa.memo
              </Text>
        </ScrollView>
      </SafeAreaView>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  dateText:{
    fontSize: 12,
    marginHorizontal: 130,
  },
  tinyLogo: {
    position: 'relative',
    marginHorizontal: 3,
    marginVertical: 3,
    width: 355,
    height: 230,
  },
  baseText: {
    position: 'relative',
    marginHorizontal: 15,
    marginVertical: 5,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
    borderColor: 'pink',
    padding: 4,
    textAlign: 'center',
    backgroundColor: 'grey',
  },
  secondText: {
    position: 'relative',
    marginRight: 30,
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderColor: 'pink',
    borderWidth: 3,
    borderRadius: 3,
    padding: 8,
    backgroundColor: 'grey',
  },
  thirdText: {
    position: 'relative',
    marginLeft: 70,
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderColor: 'skyblue',
    borderWidth: 3,
    borderRadius: 3,
    padding: 6,
    backgroundColor: 'grey',
  },
  fourthText: {
    position: 'relative',
    marginRight: 30,
    marginHorizontal: 5,
    marginVertical: 7,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    borderColor: 'greenyellow',
    borderWidth: 3,
    borderRadius: 3,
    padding: 6,
    backgroundColor: 'grey',
  },
});

export default App;
