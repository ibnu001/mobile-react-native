import React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

export default function SubmitButton({ onSubmit, title, additionalSyle }) {
  return (
    <TouchableHighlight
      underlayColor={"#ff8424"}
      onPress={onSubmit}
      style={[styles.button, additionalSyle]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 13,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
