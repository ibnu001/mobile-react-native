import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from '@react-native-material/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { onNavigate } from "../../../navigation/RootNavigation";
import LocalStorage from "../../../utils/LocalStorage";
import PATH from '../../../navigation/NavigationPath';
import productStyle from './Product.style';

export default function Product({ product, createTransactionProps }) {

    const formatPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(product.price);


    const fetchToken = async () => {
        try {
            const token = await LocalStorage().getData('token');
            const customerId = await LocalStorage().getData('customerId');
            const uniqeData = {token: token, customerId: customerId}
            return uniqeData
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };
    
    const onNewTransaction = async () => {
        try {
            const uniqeData = await fetchToken();
            console.log('Token:', uniqeData.token);
            console.log('customerId: ', uniqeData.customerId);
            
            if (!uniqeData.token) {
                onNavigate({
                    routeName: PATH.LOGIN,
                    isReplace: true
                })
            }

            const payload = {
                customerId: uniqeData.customerId,
                orderDetails: [
                    {
                        productPriceId: product.productPriceId,
                        quantity: 1
                    }
                ]
            }

            createTransactionProps(payload)
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <View style={productStyle.container}>

            <View style={productStyle.imageContainer}>
                <Image
                    style={productStyle.image}
                    source={{
                        uri: 'http://10.10.100.212:8080' + product.productImages[0].url
                    }}
                />
            </View>

            <View style={productStyle.detailContainer}>
                <Text style={productStyle.productName}>
                    {product.productName}
                </Text>
                <Text
                    style={[productStyle.productDetail, {
                        backgroundColor: '#f56b00',
                        color: 'white',
                        borderRadius: 4,
                        paddingVertical: 2,
                    }]}>
                    {formatPrice}
                </Text>
                <Text style={[productStyle.productDetail,]}>
                    Stock : {product.stock}
                </Text>

                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <TouchableOpacity style={productStyle.btnBuyNow}
                        onPress={() => onNewTransaction()}
                    >
                        <Text style={productStyle.textBuyNow}>Buy Now</Text>
                    </TouchableOpacity>

                    <IconButton
                        icon={props => <Icon name="cart" {...props} />}
                        color='#f56b00'
                        style={{ borderRadius: 8, borderWidth: 1, borderColor: '#f56b00' }}
                    // onPress={}
                    />
                </View>
            </View>


        </View>
    )
}
