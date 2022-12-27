import React from 'react';
import { ScrollView } from 'react-native';
import ItemTarea from './ItemTarea';

const ListadoTareas = () => {

    const tareas = PARATEST.tareas;

    return (
        <ScrollView>
            {tareas.map((t) => (<ItemTarea text={t.texto} isChecked={t.done} key={t.id}/>))}
        </ScrollView>
    );
};

export default ListadoTareas;

const PARATEST = {
    tareas: [
        {id: "1", texto: 'esta es la tarea 1', done: true},
        {id: "2", texto: 'esta es la tarea 2', done: false},
        {id: "3", texto: 'comprar manzanas', done: true},
        {id: "4", texto: 'esta es la tarea mas larga para ver como queda en el listado. uno dos tres cuatro cinco seis.', done: false},
        {id: "5", texto: 'largaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', done: false}
    ]
}