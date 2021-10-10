import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const detail=[
    {
      name:"sneh",
      pass:"sneh@235"
    }
  ]
   const [username,setusername]=useState();
   const [password,setpassword]=useState();

   const changeinput=()=>{
    
    if(username===detail[0].name && password===detail[0].pass){
      console.log(username);
      console.log(password);
    }
    else{
       console.log("Username is not matching with password");
    }
     
     
   }
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Store</Text>
      <View style={styles.elements} >
          <View style={styles.element}>
            
          <Text style={styles.name}>Username</Text>
          
          <TextInput placeholder={'  eg.snehpatel'} value={username} style={styles.inputs} onChangeText={text=>setusername(text)}></TextInput>
          </View>

          <View style={styles.element}>
          
          <Text style={styles.name}>Password</Text>
          <TextInput placeholder={'  eg.sp274@8186'} value={password} style={styles.inputs} onChangeText={text=>setpassword(text)}></TextInput>
           </View> 
      </View>
       <View style={styles.Buttons}>
      <TouchableOpacity style={styles.button} onPress={()=>changeinput()}>
        <Text style={styles.buttontxt}>
          Signup
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>
          LogIn
        </Text>
      </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
// color: grey;
// border-color: rgb(255 255 255);
// appearance: none;
//     background-color: rgb(255 255 255 / 100%);
//     border-radius: 0px;
//     border: 0px solid white;
//     box-sizing: border-box;
//     font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//     margin: 0px;
//     padding: 0px;
//     resize: none;
//     box-shadow: 2px 2px 5px 1px grey;
// }
// background-color: rgb(246 255 255);





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(246, 255 ,255)',
    alignItems: 'center',
    // justifyContent: 'center',
    fontWeight:'bold',
    // textAlign:'center'
  },

  heading:{
    fontWeight: 'bold',
    color:'black',
    fontSize: 30,
    marginTop: 60
  },

  element:{
    marginTop: 30,
    width:250
  },

  elements:{
    marginTop: 30,
    width:250,
    alignItems:'center'
  },

  inputs:{
    borderColor: 'white',
    borderWidth:2,
    backgroundColor:'rgb(255 ,255 ,255)',
    alignSelf:'center',
    width:250,
    elevation:8,
    shadowColor:'black',
    borderRadius:2
    
  },

  Buttons:{
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    
  },

  button:{
     backgroundColor:'skyblue',
     borderRadius:2,
     elevation:8,
     marginRight:8,
     marginLeft:8,
     width:90,
     height:40,
     textAlign:'center',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:4
  },

  name:{
    fontWeight:'bold',
    marginLeft:4,
    color:'skyblue'
  },

  buttontxt:{
    fontWeight:'bold',
    color:'white'
  }
});
