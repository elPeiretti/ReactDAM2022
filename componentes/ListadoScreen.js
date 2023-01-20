import React, { useContext, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import InputTarea from './InputTarea';
import ItemTarea from './ItemTarea';
import { useIsFocused } from '@react-navigation/native';
import { TareaContext } from '../context/TareaContext';

function ListadoScreen() {

  const isFocused = useIsFocused();

  const {
    tareas,
    addTarea,
    loadTareas
  } = useContext(TareaContext);


  useEffect(() => {if (isFocused) loadTareas()},[isFocused]);

    return (
      <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Tareas</Text>
        <ScrollView>
            {tareas.map((t) => (<ItemTarea text={t.text} isChecked={t.isChecked} id={t.key}/>))}
        </ScrollView>
        <InputTarea agregarTarea={addTarea}/>
      </SafeAreaView>
    );
}

export default ListadoScreen;

const styles = StyleSheet.create({
    
});