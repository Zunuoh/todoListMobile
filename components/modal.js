import React from 'react';
import {View, Text, Modal} from 'react-native';
import {Feather} from 'react-native-vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ModalScreen = ({modalState, closeModal}) =>{
    return(
       <Modal visible={modalState} animationType="slide" presentationStyle="pageSheet">
            <View style={{flex:1,  padding:30}}>
       <View style={{paddingTop:50, flexDirection:"row"}}>
           <Text style={{fontSize:30, fontWeight:"bold"}}>Payment</Text>
           <Feather style={{paddingLeft:"50%", paddingTop:-1}}  onPress={closeModal}
           name="x-circle"
           size={30}
           color="red"
          
           />
       </View>

       <View style={{backgroundColor:"blue", height:"30%", width:"100%", marginTop:"25%", borderRadius:20}}>
          <View style={{flex:2.5, backgroundColor:"blue", borderTopLeftRadius:20, borderTopRightRadius:20, borderBottomRightRadius:20, padding:10, justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:20, fontWeight:"bold"}}>Total Order</Text>
              <View style={{backgroundColor:"red", width:"80%", height:1, marginTop:10}}/>
          </View>
          <View style={{flex:7, backgroundColor:"white", borderTopLeftRadius:20, borderTopRightRadius:20, padding:10}}>
             
              <View style={{flexDirection:"row", flex:2}}>
                  <Text style={{flex:12}}>LIberty-Chelsea</Text>
                  <Text style={{flex:5}}>GHS 50.00</Text>
              </View>


              <View style={{flex:2, flexDirection:"row"}}>
                  <Text>Number of Tickets</Text>
                  <View style={{flexDirection:"row"}}>
                  <View style={{backgroundColor:"black", width:20, height:20 ,alignItems:"center", marginLeft:"50%"}}>
                  <Feather style={{}}
                  name="minus"
                  size={15}
                  color="red"
                  />
                  </View>
                 
                  <Text style={{paddingLeft:5}}>1</Text>

                  <View style={{marginLeft:10}}>
                  <Feather style={{paddingLeft:3, backgroundColor:"black", width:20, height:20 ,alignItems:"center"}}
                  name="plus"
                  size={15}
                  color="red"
                  />
                  </View>
                  </View>
              </View>


              <View style={{flexDirection:"row", flex:2}}>
                  <Text style={{flex:12}}>Ticket Type</Text>
                  <Text style={{flex:5}}>VIP</Text>
              </View>
            
              
          </View>
          <View style={{flex:1, backgroundColor:"red", borderBottomRightRadius:20, borderBottomLeftRadius:20, padding:10, flexDirection:"row"}}>
              <Text>Total purchase</Text>
              <Text style={{marginLeft:140}}>GHS100</Text>
          </View>
       </View>

       <TouchableOpacity style={{width:190, height:40, backgroundColor:"red", color:"black", borderRadius:5, marginTop:40, justifyContent:"center", alignItems:"center", marginLeft:65}}>
           <Text>BUY TICKET NOW</Text>
       </TouchableOpacity>

      

    </View>
           
    

                    
       </Modal>
   
    );
}

export default ModalScreen;