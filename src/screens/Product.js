import {View, Text, Button, StyleSheet, TextInput, Image, TouchableOpacity, Switch, ScrollView} from 'react-native';
import React, { useState } from "react"

import * as base from "./../resources.js"

const Product = ({ route, navigation }) => {
    const [product, setProduct] = useState(route.params.product)

    const onChangeText = (value, prop) => {
        setProduct({...product, [prop]: value})
    }

    const toggleSwitch = () => {
        setProduct({...product, soldOut: !product.soldOut})
    }

    const SaveChanges = () => {        
        fetch(base.URL + "/items" + product.id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify(product)
        })
            .then(res => {
                if (res.ok) {
                    route.params.onGoBack()
                    navigation.goBack()
                }
            })
    }

    return (
        <ScrollView style={style.container}>    

            <View style={style.field}>
                <Text>title</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "title")}
                    value={product.title}
                />
            </View>

            <View style={style.field}>
                <Text>description</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "description")}
                    value={product.description}
                />
            </View>

            <View style={style.field}>
                <Text>remaining</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "remaining")}
                    value={product.remaining.toString()} 
                    keyboardType='numeric'
                />
            </View>

            <View style={style.field}>
                <Text>soldOut</Text>            
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={product.soldOut ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e" 
                    onValueChange={toggleSwitch} 
                    value={product.soldOut}
                />
            </View>

            <View style={style.field}>
                <Text>imageSrc</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "imageSrc")}
                    value={product.imageSrc}
                />
            </View>

            <View style={style.field}>
                <Text>category</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "category")}
                    value={product.category}
                />
            </View>

            <View style={style.field}>
                <Text>color</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "color")}
                    value={product.color}
                />
            </View>

            <View style={style.field}>
                <Text>price</Text>            
                <TextInput 
                    style={style.textInput}
                    onChangeText={value => onChangeText(value, "price")}
                    value={product.price.toString()}
                    keyboardType='numeric'
                />
            </View>

            <TouchableOpacity onPress={SaveChanges} style={style.button}>
                <Text style={style.buttonText}>Gem</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
        margin: 25
    },
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 25,
        width: 200
    },
    button: {
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    buttonText: {
        color: "white",
    },
    field: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
});



export default Product;