import * as React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemTarea from './componentes/ItemTarea';
import { FAB } from 'react-native-paper';


function ListadoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Tareas</Text>
      <ScrollView>
        <ItemTarea text={"milanesa"}/>
        <ItemTarea text={"beste es uno muy largo este es uno muy largo este es uno muy largo este es uno muy largo este es uno muy largo "}/>
      </ScrollView>
      <FAB 
          icon="plus"
          style={styles.fab}
          onPress={() => console.log('Pressed')}
          variant='primary'
          color="white"
        />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListadoScreen'>
        <Stack.Screen name="Listado de tareas" component={ListadoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 15,
    backgroundColor: '#f09f48'
  }
});