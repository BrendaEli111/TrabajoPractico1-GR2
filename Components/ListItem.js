import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ListItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <View style={styles.imgContainer}>
            <Text style={styles.itemTextId}>{item.id}</Text>
            <Image source={{ uri: "https://c0.klipartz.com/pngpicture/831/88/gratis-png-perfil-de-usuario-iconos-de-la-computadora-interfaz-de-usuario-mistica.png" }} style={styles.itemImage} />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.itemText}>{item.nombre}</Text>
            <Text style={styles.itemTextStatus}>{item.status}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //padding: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#FFF',
        //marginBottom: 10,
        backgroundColor: '#2980b9',
    },
    itemImage: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
    },
    itemText: {
        color: '#fff',
        fontSize: 20,
        //marginRight: 15,
    },
    itemTextId: {
        color: '#fff',
        fontSize: 20,
        marginRight: 40,
    },
    itemTextStatus: {
        color: '#d9d9d9',
        fontSize: 16,
    },
    textContainer: {
        flexDirection: 'column',
    },
    imgContainer: {
        flexDirection: 'row',
    }
});

export default ListItem;
