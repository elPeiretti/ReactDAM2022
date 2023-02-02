import React, { createContext, useState } from "react";
import { Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TareaContext = createContext(null);

export const ContextProvider = ({children}) => {

    const [tareas, setTareas] = useState([]);

    const loadTareas = async () => {
        console.log('cargando tareas...');
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

    const deleteTarea = async (keyAEliminar) => {
        try{
            await AsyncStorage.removeItem(keyAEliminar);
            setTareas(tareas.filter((tarea) => tarea.key != keyAEliminar));
        }
        catch(e){
            console.log(e);
        }
    };

    const updateTarea = async tarea => {

        //para updatear el estado del checkbox
        const tareasCopy = JSON.parse(JSON.stringify((tareas)));
        tareasCopy.find(t => t.key == tarea.key).isChecked = tarea.isChecked;
        
    
        const tareaJson = JSON.stringify(tarea);
        setTareas(tareasCopy);
        await AsyncStorage.setItem(tarea.key, tareaJson);
    };

    const updateTareaText = async (keyPorEditar, tareaEdit) => {
    
        var tarea = tareas.find(t => t.key == keyPorEditar);
        tarea.text = tareaEdit;
        //cambiarlo directamente y que lo que sigue de un error podria ser problematico....
        const tareaJson = JSON.stringify(tarea);
        await AsyncStorage.setItem(tarea.key, tareaJson);
    };

    const updateTareaCheck = async (tarea) => {
        const tareaJson = JSON.stringify(tarea);

        const test = JSON.parse(JSON.stringify((tareas)));
        test.find(t => t.key == tarea.key).isChecked = tarea.isChecked;
        setTareas(test);
        
        await AsyncStorage.setItem(tarea.key, tareaJson);
    };

    return (
        <TareaContext.Provider value={{tareas, addTarea, deleteTarea, loadTareas, updateTarea}}>
            {children}
        </TareaContext.Provider>
    );
}