import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Button } from 'react-native';
import InputTarea from './InputTarea';
import ItemTarea from './ItemTarea';

function EditarScreen() {

  const [tareas, setTareas] = useState([{texto: "una tarea", done: true}]);

  const deleteTarea = (tareaPorEliminar) => {
    setTareas(tareas.filter((tarea) => tarea.texto != tareaPorEliminar));
  };

    return (
      <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Editar tareas</Text>
        <ScrollView>
            {tareas.map((t) => (
                <View style={styles.container}>
                    <ItemTarea text={t.texto} isChecked={t.done}/>
                    <TouchableOpacity onPress={()=> deleteTarea(t.texto)}>
                        <View style={styles.button}>
                            <Text style={{color:'#FFFFFF', fontSize: 12}}>eliminar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>
      </SafeAreaView>
    );
}

export default EditarScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        minHeight: 30,
    },
    button:{
        height: 20,
        width: 50,
        borderRadius: 5,
        backgroundColor: '#ff5f5f',
        alignItems: 'center',
        justifyContent: 'center'
    }
});