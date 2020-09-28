import { StatusBar } from "expo-status-bar";
import { values } from "mobx";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { store } from "./store";

export default function App() {
  useEffect(() => {
    setLocalStore(store);
  }, []);

  const [id, setId] = useState(0);
  const [localStore, setLocalStore] = useState(store);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Hello world"
        onPress={() => {
          setId(id + 1);
          store.addTodo(id, "hello");
        }}
      />

      {values(localStore.todos).map((todo: any) => (
        <Text>{todo.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
