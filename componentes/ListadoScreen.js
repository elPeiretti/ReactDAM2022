import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, Keyboard } from 'react-native';
import InputTarea from './InputTarea';
import ItemTarea from './ItemTarea';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

function ListadoScreen() {

  const [tareas, setTareas] = useState([]);
  const isFocused = useIsFocused();


  const loadTareas = async () => {
    console.log('cargando tareas... (listadoscreen)');
    try{
      const keys = await AsyncStorage.getAllKeys();
      const res = await AsyncStorage.multiGet(keys);

      if (res !== null){
        console.log(res.map( t => JSON.parse(t[1])));
        setTareas(res.map( t => JSON.parse(t[1])));
      }
    }
    catch(e){
      console.log(e);
    }
  }

  const addTarea = async (tarea) => {
    
    try{
      //es lo mas simple que se me ocurrio
      const keys = await AsyncStorage.getAllKeys();
      var max = '0';
      for (var i=0; i<keys.length; i++){
        if (keys[i]>max)
          max = keys[i];
      }
      const newKey = (max+1).toString();

      tarea = {...tarea, key: newKey};

      await AsyncStorage.setItem(newKey, JSON.stringify(tarea));
      setTareas([...tareas, tarea]);
    }
    catch(e){
      console.error(e);
    }
    Keyboard.dismiss();
  }

  useEffect(() => { if (isFocused) loadTareas()},[isFocused]);

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