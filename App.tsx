import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Question from './Question';

export default function App() {
  return (
    <View style={styles.container}>
            <Image
                style={styles.headerImage}
                source={require('./assets/rectangle-white.png')}
            />
            <Text style={styles.titleContainer}>AlgoRhythm</Text>

            <View style={styles.contentContainer}>
            <Question />
          
            <Text>Just messing around here... I wanted to see what the process of styling was like, both inline and using sheets... Adding components. That kind of thing.</Text>
        
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001549',
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: '15%',
  },
  titleContainer:{
    fontSize: 35,
    color: '#e4e6eb',
    paddingBottom: '10%'
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: '#e4e6eb',
    color: 'black',
    height: '100%',
    padding: '10%'
//    borderWidth: 3,
  },
  baseText: {
    color: '#e4e6eb'
  },
  headerImage:{
    width: '70%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  }
});
