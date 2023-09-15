import { StyleSheet } from "react-native";

const productStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingBottom: 8,
        paddingHorizontal: 8,
        // borderWidth: 1,
        // borderColor: 'black',
    },
    imageContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    image: {
        height: 150,
        width: '80%',
        aspectRatio: 1,
    },
    detailContainer: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'space-around',
        // borderWidth: 1,
        // borderColor: 'black',
    },
    productName: {
        fontSize: 24,
        paddingLeft: 3,
        fontWeight: 'bold',
        color: '#f56b00'
    },
    productDetail: {
        fontSize: 16,
        paddingLeft: 3,
        marginTop: 2,
        color: 'black'
    },
    btnBuyNow: {
        marginRight: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f56b00',
        borderRadius: 8,
    },
    textBuyNow: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 14,
    },
})

export default productStyle