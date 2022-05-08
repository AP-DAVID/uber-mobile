import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux"
import HomeScreen from './screens/HomeScreen';
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './store';
import MapScreen from './screens/MapScreen';

//Set up redux
//

export default function App() {
  
const Stack = createNativeStackNavigator();


  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            
            style={{flex: 1}}
            behavior={Platform.OS === "ios"? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          
          >
            <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,

                  }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                    
                  }}
                />
                </Stack.Navigator>
          </KeyboardAvoidingView>
          

          {/* <HomeScreen /> */}

        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
    
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
