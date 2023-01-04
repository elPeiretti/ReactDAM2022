import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, View, Modal, KeyboardAvoidingView, TextInput} from 'react-native';
import ItemTarea from './ItemTarea';
import AsyncStorage from '@react-native-async-storage/async-storage';

function EditarScreen() {

  const [tareas, setTareas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [tareaEdit, setTareaEdit] = useState();
  const [tareaAModificar, setTareaAModificar] = useState();

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

  useEffect(() => {loadTareas()},[]);

  const deleteTarea = (keyAEliminar) => {
    setTareas(tareas.filter((tarea) => tarea.key != keyAEliminar));
  };

  const openEditar = (tareaPorEditar) => {
    console.log("editar");
    setTareaEdit(tareaPorEditar);
    setTareaAModificar(tareaPorEditar);
    setModalVisible(true);
  };

  const guardarEdicion = () => {
    // TODO
    var aux = tareas;
    aux.forEach(t => {
        if (t.texto == tareaAModificar){
            t.texto = tareaEdit;
        }
    });
    setTareas(aux);
    setModalVisible(false);
  };

    return (
      <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>

        <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
            <KeyboardAvoidingView style={styles.vistaCentrada}>
                <View style={styles.modal}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.editor} 
                            value={tareaEdit}
                            onChangeText={texto => setTareaEdit(texto)}
                        />
                    </View>
                    <TouchableOpacity onPress={guardarEdicion}>
                        <View style={styles.buttonGuardar}>
                            <Text style={{color:'#FFFFFF', fontSize: 16}}>Guardar cambios</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <View style={styles.buttonCancelar}>
                            <Text style={{color:'#FFFFFF', fontSize: 16}}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Modal>

        <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Editar tareas</Text>
        <ScrollView>
            {tareas.map((t) => (
                <View style={styles.containerTarea}>
                    <ItemTarea text={t.text} isChecked={t.isChecked} id={t.key}/>
                    <TouchableOpacity onPress={() => openEditar(t.texto)}>
                        <View style={styles.buttonEditar}>
                            <Text style={{color:'#FFFFFF', fontSize: 12}}>editar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> deleteTarea(t.key)}>
                        <View style={styles.buttonBorrar}>
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
    containerTarea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        minHeight: 30,
        flex: 1,
    },
    buttonBorrar:{
        height: 20,
        width: 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#ff5f5f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonEditar:{
        height: 20,
        width: 50,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#f09f48',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vistaCentrada: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modal:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    editor: {
        flex: 1,
        borderColor: '#000000',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderRadius: 12,
        paddingHorizontal: 10,
        color: '#000'
    },
    buttonGuardar: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#f09f48',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    buttonCancelar: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#ff5f5f',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
});