import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemTarea from './componentes/ItemTarea';

function ListadoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Tareas</Text>
      <ItemTarea text={"milanesa"}/>
      <ItemTarea text={"milanesa"}/>
      <ItemTarea text={"beste es uno muy largo este es uno muy largo este es uno muy largo este es uno muy largo este es uno muy largo "}/>
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listado de tareas" component={ListadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;