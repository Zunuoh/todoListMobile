import React, { useState } from 'react';
import {View, Text, TextInput, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesome, Ionicons, Feather} from 'react-native-vector-icons'; 
import ModalScreen from '../components/modal';


 const ActivityScreen =({navigation})=>{
     const[name, setName] = useState("")
     const[task, setTask] = useState("")
     const[modalState, setModalState] = useState(false);

     const openModal = ()=>{
         setModalState(true)
     }
     const closeModal = () =>{
         setModalState(false)
     }
     return(
         <View style={{flex:1, backgroundColor:"white", padding:40}}>
             <View style={{paddingTop:60}}>
                 <Text style={{fontWeight:"bold", fontSize:30}}>Hello there, thank you for signing up with us. Kindly enter your name in the field provided!</Text>
             </View>
            <View style={{paddingTop:60}}>
                <Text style={{fontWeight:"800"}}>ENTER NAME:</Text>
                <TextInput style={{borderWidth:1, borderColor:"#b8b8b8", height:40, marginTop:40, paddingLeft:10, borderRadius:10}}
                placeholder="Name"
                value={name}
                onChangeText={(e) => setName(e)}
                clearTextOnFocus={true}
                />

                
                   
                   {/* <View style={{paddingTop:"20%"}}>
                   <Feather style={{paddingLeft:30}} onPress={openModal}
                    name="plus"
                    color="black"
                    size={34}
                    // onPress={()=>{navigation.navigate("TaskScreen")}}
                    />
                    <ModalScreen closeModal={closeModal} modalState={modalState}/>
                   </View>
                    */}

            <TouchableOpacity style={{width:290, height:60, backgroundColor:"#6E4FA4", alignItems:"center", justifyContent:"center", marginTop:60, borderRadius:10, flexDirection:"row"}}
            onPress={()=>{navigation.navigate('HomeScreen', {name})}}>
            <Text style={{fontWeight:"800"}}>NEXT</Text>
            </TouchableOpacity>
            </View>
            
             
         </View>
     )
 }

 export default ActivityScreen;