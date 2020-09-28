import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
	return (
		<View style={styles.container}>
			<Text>Appen</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
