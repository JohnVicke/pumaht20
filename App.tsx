import { StatusBar } from "expo-status-bar";
import { values } from "mobx";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { store } from "./store";

//Screens
import LoginScreen from './screens/LoginScreen';
import EnterPinScreen from './screens/EnterPinScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import UserPageScreen from './screens/UserPageScreen';
import ContactScreen from './screens/ContactScreen';
import CalendarScreen from './screens/CalendarScreen';
import InfoPageScreen from './screens/InfoPageScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameActiveScreen from './screens/GameActiveScreen';
import GameLeaderBoardScreen from './screens/GameLeaderBoardScreen';
import GameScoreScreen from './screens/GameScoreScreen';

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
