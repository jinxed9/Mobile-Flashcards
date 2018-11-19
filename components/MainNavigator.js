import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import Deck from './Deck'
import Quiz from './Quiz'
import AddQuestion from './AddQuestion'
import { purple, white } from '../utils/colors'
import { Constants } from 'expo'

const Tabs = createBottomTabNavigator(
  {
    DeckList: DeckList,
    AddDeck: AddDeck,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        return routeName === 'DeckList' ? (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        ) : (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        );
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: navigation.state.params.title,
      headerStyle: {
        backgroundColor: purple,
        marginTop:(Platform.OS === 'ios') ? 0 : -Constants.statusBarHeight,

      },
    }),
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      title: 'Add Card',
      headerStyle: {
        backgroundColor: purple,
        marginTop:(Platform.OS === 'ios') ? 0 : -Constants.statusBarHeight,
      },
    }),
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
        marginTop:(Platform.OS === 'ios') ? 0 : -Constants.statusBarHeight,
      },
    }),    
  }
});

export default MainNavigator