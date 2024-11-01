/*
This is course assignment by Ossi Kauppi, TIK23KM
Made for Introduction to Mobile Services
*/

import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";

import AddWorkout from './components/addWorkout';
import ViewWorkout from './components/viewWorkout';
import Settings from './components/settings';

import { WorkoutProvider } from './Context/myContext';
import { useState } from 'react';


export default function App() {

  const Drawer = createDrawerNavigator();
  const [workout, setWorkout] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkout(prevWorkouts => [...prevWorkouts, newWorkout]);
  };

  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Drawer.Navigator >
          <Drawer.Screen name="Add workout" component={AddWorkout} />
          <Drawer.Screen name="View workouts" component={ViewWorkout} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}

