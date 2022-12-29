import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, Keyboard } from 'react-native';
import InputTarea from './InputTarea';
import ItemTarea from './ItemTarea';

function ListadoScreen() {

  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    setTareas([...tareas, tarea]);
    Keyboard.dismiss();
  }

    return (
      <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Tareas</Text>
        <ScrollView>
            {tareas.map((t) => (<ItemTarea text={t.texto} isChecked={t.done}/>))}
        </ScrollView>
        <InputTarea agregarTarea={addTarea}/>
      </SafeAreaView>
    );
}

export default ListadoScreen;

const styles = StyleSheet.create({
    
});