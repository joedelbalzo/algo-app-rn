import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Image
                style={styles.headerImage}
                source={require('./assets/logorectangle.png')}
            />
            <Text style={{fontSize: 35, color: '#e4e6eb', marginBottom: 45}}>AlgoRhythm</Text>
          
            <Text style={styles.baseText}>Just messing around here... I wanted to see what the process of styling was like, both inline and using sheets... Adding components. That kind of thing.</Text>
          
            <Text style={{marginTop: 45, color: '#e4e6eb'}}>Feel free to delete any of this please.</Text>
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
    paddingTop: '20%'
  },
  contentContainer: {
    width: '70%',
    alignItems: 'center',
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
