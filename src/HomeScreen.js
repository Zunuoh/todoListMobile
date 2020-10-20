import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import {FontAwesome, Ionicons, Feather} from 'react-native-vector-icons';
import TodoItem from '../src/TodoItem';
import AddTodo from '../src/AddTodo';

 const HomeScreen =({navigation, route})=>{
     const {name} = route.params;
     const {task} = route.params;
     const {time} = route.params;
   
     const [todos, setTodos] = useState([
         {text: 'buy coffee', key:'1'},
         {text: 'create an app', key:'2'},
         {text: 'play on the switch', key:'3'}
     ]);

     const pressHandler =(key)=>{
         setTodos((prevTodos)=>{
             return prevTodos.filter(todo => todo.key != key);
         })
     }

     
    const submitHandler = (text) =>{
        setTodos((prevTodos)=>{
          return [
              {text:text, key:Math.random().toString()},
              ...prevTodos
          ]
          return
        })
    }
     return(
         <View style={{flex:1, backgroundColor:"#FFFFFF", padding:30}}>
            <View style={{paddingTop:70, flexDirection:"row"}}>
                <View style={{flex:8}}>
                <Text style={{fontSize:30}}>Hello,</Text>
                <Text style={{fontSize:30, fontWeight:"500"}}>{name}</Text>
                </View>
                <View style={{flex:2}}>
                    <Feather style={{paddingLeft:30}}
                    name="plus"
                    color="black"
                    size={34}
                    onPress={()=>{navigation.navigate("AddTodo")}}/>
                </View>
            </View>

            <View style={{flexDirection:"row", paddingTop:10}}>
                <TouchableOpacity style={{width:120, height:50, backgroundColor:"#6E4FA4", justifyContent:"center", alignItems:"center", borderRadius:15}}>
                    <Text style={{color:"white"}}>My Day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:120, height:50, backgroundColor:"#F7F8FA", justifyContent:"center", alignItems:"center", borderRadius:15, marginLeft:10}}>
                    <Text style={{color:"black"}}>Important</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:120, height:50, backgroundColor:"#6E4FA4", justifyContent:"center", alignItems:"center", borderRadius:15, marginLeft:10}}>
                    <Text style={{color:"white"}}>Plan</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingTop:20}}>
                <Text style={{fontSize:20, fontWeight:"500"}}>Tasks</Text>
                {/* <Text style={{fontSize:20, fontFamily:"Raleway_200ExtraLight"}}>Tasks</Text> */}
            </View>
          
            {/* <View style={{width:320, height:90, backgroundColor:"#F7F8FA", borderRadius:10, padding:20, marginTop:20, flexDirection:"row"}}>
                <View style={{flex:7}}>
                <Text style={{fontWeight:"700",fontSize:18}}>{task}</Text>
                <View style={{marginTop:10, flexDirection:"row", alignItems:"center"}}>
                    <Ionicons
                    name="ios-alarm"
                    size={20}
                    color="black"
                    />
                    <Text style={{paddingLeft:10}}>{time}</Text>
                </View>
                </View>
                <View style={{width:20, height:20, borderRadius:30, borderWidth:1, marginTop:15}}/>
            </View> */}

            <View>
                <View style={{padding:10}}>
                    <AddTodo submitHandler={submitHandler}/>
                    <View style={{marginTop:20}}>
                        <FlatList
                           data={todos}
                           renderItem={({item})=>(
                            //   <Text>{item.text}</Text>
                            <TodoItem item={item} pressHandler={pressHandler}/>
                           )}
                        
                        
                        
                        
                        
                        />
                    </View>
                </View>
            </View>



            












         </View>
     )
 }

 export default HomeScreen;