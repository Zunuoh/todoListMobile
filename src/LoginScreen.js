import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome, Ionicons, Feather} from 'react-native-vector-icons'

 const LoginScreen =({navigation})=>{
     const[username, setUsername] = useState("");
     const[password, setPassword] = useState("");

     const handleLogin = () =>{
         if (username == "" || password == ""){
             alert("Kindly fill all fields");
         }
         else{
             alert("Success!")
             navigation.navigate("HomeScreen");

         }
     };
     return(
         <View style={{flex:1, padding:30, backgroundColor:"#413E43"}}>
            <View style={{paddingTop:140, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontSize:40, fontWeight:"600", color:"#ED616B"}}>Sign Up</Text>
            </View>

            <View style={{paddingTop:50}}>
                <Text style={{fontSize:25, color:"#ED616B"}}>E-Mail:</Text>
            </View>
            <View style={{borderWidth:1, height:50,borderColor:"#3A857F", marginTop:30, borderRadius:10, padding:10}}>
                <TextInput
                placeholder="Username"
                onChange={(e)=>setUsername(e)}
                value={username}
                clearTextOnFocus={true}/>
            </View>

            <View style={{paddingTop:60}}>
                <Text style={{fontSize:25, color:"#ED616B"}}>Password:</Text>
            </View>
            <View style={{borderWidth:1, height:50,borderColor:"#3A857F", marginTop:30, borderRadius:10, padding:10}}>
                <TextInput
                placeholder="Password"
                onChange={(e)=>setPassword(e)}
                value={password}
                clearTextOnFocus={true}
                />
            </View>

            <TouchableOpacity style={{width:320, height:50, backgroundColor:"#565258", marginTop:80, justifyContent:"center", alignItems:"center", borderRadius:10, shadowColor: "#ED616B",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}} onPress={()=>handleLogin()}>
                <Text style={{fontSize:20, color:"#3A857F", fontWeight:"bold"}}>SIGN IN</Text>
            </TouchableOpacity>
           
           
            
             
         </View>
     )
 }

 export default LoginScreen;