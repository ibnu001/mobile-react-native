import { ActivityIndicator, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {

    const isLoading = useSelector((state) => state.AppReducer.isLoading)

    return (
        isLoading && (
            <Modal transparent={true} >
                <View style={styles.modalBackground}>
                    <ActivityIndicator size={80} color="#f56b00" />
                </View>
            </Modal>
        )
    )
}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})