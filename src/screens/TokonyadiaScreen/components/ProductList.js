import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import Product from './Product'

export default function ProductList({ createTransaction }) {

    const products = useSelector((state) => state.ProductReducer.products)

    return (
        <FlatList
            data={products.data}
            renderItem={({ item }) => (
                <Product product={item} createTransactionProps={createTransaction} />
            )}
            keyExtractor={(item) => item.productId.toString()}
            ListEmptyComponent={() =>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>Empty Product List</Text>
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f56b00',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        margin: 16,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },

})