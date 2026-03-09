import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.bounding_box}>
      <View style={styles.row}>
        <View style={styles.box}></View>
        <View style={styles.box}><Text style={styles.txt}>O</Text></View>
        <View style={styles.box}><Text style={styles.txt}>O</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}><Text style={styles.txt}>X</Text></View>
        <View style={styles.box}><Text style={styles.txt}>X</Text></View>
        <View style={styles.box}><Text style={styles.txt}>O</Text></View>
      </View>
      <View style={styles.row}>
        <View style={styles.box}><Text style={styles.txt}>X</Text></View>
       <View style={styles.box}></View>
        <View style={styles.box}><Text style={styles.txt}>O</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bounding_box:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor:'#e4ee59'
  },
  box:{
    width:100,
    height:100,
    backgroundColor:'green',
    borderWidth:1,
    borderColor:'black',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    flexDirection:'column',
    textAlign:'center',
  },
  row:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center'
  },

  txt:{
    alignSelf:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:35
  }
});
