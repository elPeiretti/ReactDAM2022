import * as React from 'react';
import { Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoScreen from './componentes/ListadoScreen';
import EditarScreen from './componentes/EditarScreen';
import { ContextProvider } from './context/TareaContext';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Listado de tareas'>
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
    </ContextProvider>
  );
}

export default App;
