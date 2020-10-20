import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {Feather} from 'react-native-vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AddTodo =({navigation, submitHandler})=>{
    const[task, setTask] = useState("")
    const[time, setTime] = useState("")

    const [text, setText] = useState("")
    const changeHandler = (val)=>{
       setText(val);
    }

    return(
        <View >
            {/* <View style={{paddingTop:60, justifyContent:"center", alignItems:"center"}}>
                <Text style={{fontWeight:"800", fontSize:30}}>TASKS</Text>
            </View> */}

            {/* <TextInput style={{borderWidth:1, borderColor:"#b8b8b8", height:40, marginTop:40, paddingLeft:10, borderRadius:10}}
                placeholder="Enter task"
                value={task}
                onChangeText={(e) => setTask(e)}
                />

            <TextInput style={{borderWidth:1, borderColor:"#b8b8b8", height:40, marginTop:40, paddingLeft:10, borderRadius:10}}
                placeholder="Enter time duration"
                value={time}
                onChangeText={(e) => setTime(e)}
                /> */}

                <TextInput style={{marginBottom:10, paddingHorizontal:8, paddingVertical:6, borderBottomWidth:1, borderBottomColor:"#ddd"}}
                placeholder="New todo"
                onChangeText={changeHandler}/>

                <Button onPress={()=>submitHandler(text)} title='add todo' color='coral'/>


            {/* <TouchableOpacity style={{width:310, height:60, backgroundColor:"#6E4FA4", alignItems:"center", justifyContent:"center", marginTop:40,borderRadius:10, flexDirection:"row"}}
            onPress={()=>{navigation.navigate('HomeScreen', {task}, {time})}}>
            <Text style={{marginLeft:20}}>Add</Text>
            </TouchableOpacity> */}
        </View>
    );
}

export default AddTodo;