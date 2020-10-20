import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome, Ionicons, Feather} from 'react-native-vector-icons'

 const LoginScreen =(props)=>{
     return(
         <View style={{flex:1, padding:30, backgroundColor:"#FFFFFF"}}>
             <Feather
             name="arrow-right"
             size={24}
             color="black" style={{paddingLeft:280, paddingTop:10}} onPress={()=>{props.navigation.push('ActivityScreen')}}/>
             <View style={{paddingTop:20, paddingLeft:15, justifyContent:"center", alignItems:"center"}}>
                 <Image source={require('../assets/cartoon1.jpeg')} style={{width:390, height:390}}/>
             </View>
             <View style={{paddingTop:40, display:"flex", alignItems:"center", justifyContent:"center"}}>
                 <Text style={{fontSize:30}}>Organize your works</Text>
             </View>
             <View style={{alignItems:"center", justifyContent:"center"}}>
                 <Text style={{paddingTop:15, fontSize:20}}>Let's organize your works with priority</Text>
                 <Text style={{paddingTop:10, fontSize:20}}>and do everything without stress</Text>
             </View>
            
            <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row", marginTop:30}}>
            <View style={{width:10, height:10, borderRadius:30, backgroundColor:"red"}}/>
            <View style={{width:10, height:10, borderRadius:30, backgroundColor:"gray", marginLeft:10}}/>
            </View>

            {/* <TouchableOpacity style={{width:310, height:60, backgroundColor:"#F7F8FA", alignItems:"center", justifyContent:"center", marginTop:20,borderRadius:10, flexDirection:"row"}}>
              <FontAwesome
              name="facebook-square"
              style={30}
              color="black" style={{marginRight:60}}/>
               <Text style={{marginLeft:5, fontSize:15}}>Continue with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:310, height:60, backgroundColor:"#F7F8FA", alignItems:"center", justifyContent:"center", marginTop:20,borderRadius:10, flexDirection:"row"}}>
              <Ionicons
              name="logo-google"
              style={26}
              color="black" style={{marginRight:60}}/>
               <Text style={{marginLeft:20}}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width:310, height:60, backgroundColor:"#F7F8FA", alignItems:"center", justifyContent:"center", marginTop:20,borderRadius:10, flexDirection:"row"}}>
              <FontAwesome
              name="facebook-square"
              style={30}
              color="black" style={{marginRight:60}}/>
               <Text style={{marginLeft:20}}>Continue with email</Text>
            </TouchableOpacity> */}

           
            
             
         </View>
     )
 }

 export default LoginScreen;