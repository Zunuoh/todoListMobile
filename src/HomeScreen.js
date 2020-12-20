import React, { useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome, Ionicons, Feather } from "react-native-vector-icons";
import TodoItem from "../src/TodoItem";
import AddTodo from "../src/AddTodo";

const HomeScreen = ({ navigation, route }) => {
  //  const {username} = route.params;
  //  const username = navigation.getParam('username');
  //  const {task} = route.params;
  //  const {time} = route.params;

  //  const [todos, setTodos] = useState([
  //      {text: 'buy coffee', key:'1'},
  //      {text: 'create an app', key:'2'},
  //      {text: 'play on the switch', key:'3'}
  //  ]);

  const [todos, setTodos] = useState("");

  const addTask = (NewText) => {
    setTodos((prevTodos) => {
      return [{ text: NewText, key: Math.random().toString() }, ...prevTodos];
      return;
    });
  };

  const deleteTask = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#413E43", padding: 30 }}>
      <View style={{ paddingTop: 70, flexDirection: "row" }}>
        <View style={{ flex: 8 }}>
          <Text style={{ fontSize: 30, color: "#ED616B" }}>Hello, Ama</Text>
          {/* <Text style={{fontSize:30, fontWeight:"500"}}>{username}</Text> */}
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingTop: 10 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#ED616B",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ color: "white" }}>My Day</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#F7F8FA",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "black" }}>Important</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 50,
              backgroundColor: "#ED616B",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "white" }}>Plan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{ padding: 10 }}>
            <AddTodo submitHandler={addTask} />
            <View style={{ paddingTop: 10 }}>
              <Text
                style={{ fontSize: 30, fontWeight: "500", color: "#ED616B" }}
              >
                TASKS
              </Text>
              {/* <Text style={{fontSize:20, fontFamily:"Raleway_200ExtraLight"}}>Tasks</Text> */}
            </View>
            <View>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  //   <Text>{item.text}</Text>
                  <TodoItem item={item} pressHandler={deleteTask} />
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
