import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import ListadoTareas from './ListadoTareas';

function ListadoScreen() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>Tareas</Text>
        <ListadoTareas/>
        <FAB 
            icon="plus"
            style={styles.fab}
            onPress={() => console.log('Pressed')}
            variant='primary'
            color="white"
          />
      </SafeAreaView>
    );
}

export default ListadoScreen;

const styles = StyleSheet.create({
    fab: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      margin: 15,
      backgroundColor: '#f09f48'
    },
});