import React, { createContext } from "react";

export const TareaContext = createContext(null);

export const ContextProvider = (props) => {

    const [tareas, setTareas] = useState([]);

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


    return (
        <TareaContext.Provider value={{tareas, add: addTarea, delete: deleteTarea}}>
            {props.children}
        </TareaContext.Provider>
    );
}