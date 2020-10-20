import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {FontAwesome, Ionicons, Feather} from 'react-native-vector-icons';

const TodoItem =({item, pressHandler})=>{
    return(
       <View  style={{display:"flex", flexDirection:"row", borderWidth:1,  borderColor:'#bbb',  borderRadius:10, marginTop:30, padding:10, paddingBottom:20}}>
           <View style={{display:"flex", flex:4}}>
           <Text style={{paddingLeft:16, marginTop:10}}>{item.text}</Text>
           </View>
           <View  >
           <Feather
                    name="trash-2"
                    color="black"
                    size={24}
                    onPress={()=>{pressHandler(item.key)}}
                   />
           </View>
           

       </View>
    )
};

export default TodoItem;
