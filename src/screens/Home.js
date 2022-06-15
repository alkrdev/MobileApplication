import {View,  StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Appbar, Menu, Button, Divider } from 'react-native-paper';


import React, { useEffect, useState } from 'react';


const Home = ({ navigation }) => {
    const [products, setProducts] = useState([])

    const Refresh = () => {
        fetch("https://lionfish-app-dfibs.ondigitalocean.app/items")
            .then(res => res.json())
            .then(json => setProducts(json))
    }

    const GoToProduct = (product) => {
        navigation.navigate('Product', { 
            product,
            onGoBack: Refresh,
        })
    }
    
    useEffect(() => {
        Refresh()
    }, [])

    return (
        <ScrollView style={style.container}>
            <Text style={style.title}>Produkter</Text>
            <Divider style={style.productDivider} />
            
            
            {products.map((product, index) => {
                return <View key={index}>
                    <TouchableOpacity onPress={() => GoToProduct(product)} style={style.product}>
                        <Text style={style.productTitle}>{product.title}</Text>
                        <Text style={style.productDescription}>{product.description}</Text>
                        <Divider style={style.productDivider} />
                    </TouchableOpacity>
                </View>
            })}


            {/* <Button style={style.button}>hello
            </Button> */}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    title: {
        fontSize: 32,
        marginBottom: 25
    },
    productTitle: {
        fontSize: 20,
        marginBottom: 12
    },
    productDescription: {
        fontSize: 14,
        color: "grey"
    },
    container: {
        padding: 25
    },
    product: {
    },
    productDivider: {
        marginTop: 25,
        marginBottom: 25,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    button: {
        margin: 10,
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 14,
        letterSpacing: 1.3,
        textAlign: "center",
        textTransform: "uppercase",
        color: "rgba(98, 0, 238, 1)",
        borderRadius: 4,
        border: "1 solid rgba(98, 0, 238, 1)",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: "80%"
    }
});

export default Home;