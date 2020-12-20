import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const AddTodo = ({ navigation, submitHandler }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            marginBottom: 10,
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: "#3A857F",
            marginTop: 20,
            height: 50,
            borderRadius: 10,
            width: 245,
          }}
          placeholder="New todo"
          onChangeText={changeHandler}
          clearTextOnFocus={true}
          color="white"
        />
        <TouchableOpacity
          style={{ marginLeft: 15, marginTop: 18 }}
          onPress={() => submitHandler(text)}
        >
          <Feather name="plus-square" size={50} color="#3A857F" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodo;
