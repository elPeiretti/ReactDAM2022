import * as React from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoScreen from './componentes/ListadoScreen';
import EditarScreen from './componentes/EditarScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListadoScreen'>
        <Stack.Screen 
          name="Listado de tareas"
          component={ListadoScreen}
          options={({navigation}) => ({
            headerRight: () => (
            <Button
              title="editar"
              color='#f09f48'
              onPress={()=>navigation.navigate("Editar tarea")}
            />
          )})}
        />
        <Stack.Screen
          name="Editar tarea"
          component={EditarScreen}
          options={{title:""}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
