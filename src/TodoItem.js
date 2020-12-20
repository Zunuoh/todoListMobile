import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome, Ionicons, Feather } from "react-native-vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderColor: "#bbb",
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
        paddingBottom: 20,
        backgroundColor: "#565258",
        shadowColor: "#ED616B",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}
    >
      <View style={{ display: "flex", flex: 4 }}>
        <Text
          style={{
            paddingLeft: 16,
            marginTop: 18,
            color: "#3A857F",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          {item.text}
        </Text>
      </View>
      <View style={{ marginTop: 18 }}>
        <Feather
          name="trash-2"
          color="#3A857F"
          size={24}
          onPress={() => {
            pressHandler(item.key);
          }}
        />
      </View>
    </View>
  );
};

export default TodoItem;
