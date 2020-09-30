import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './src/screens/Search'
import SearchResult from './src/screens/SearchResult';
import MusicPage from './src/screens/MusicPage';
import ErrorSearch from './src/screens/ErrorSearch';
import HistoryPage from './src/screens/HistoryPage';

const Stack = createStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchResult" component={SearchResult} />
          <Stack.Screen name="ErrorSearch" component={ErrorSearch} />
          <Stack.Screen name="MusicPage" component={MusicPage} />
          <Stack.Screen name="HistoryPage" component={HistoryPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
