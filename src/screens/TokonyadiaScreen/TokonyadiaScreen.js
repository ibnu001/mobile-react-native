import React, { useEffect } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import { tokonyadiaStyles } from './TokonyadiaScreen.style'
import { onNavigate } from '../../navigation/RootNavigation'
import PATH from '../../navigation/NavigationPath'
import { useDispatch } from 'react-redux'
import setProducts from '../../store/Product/ProductAction'
import ProductList from './components/ProductList'
import LocalStorage from '../../utils/LocalStorage'

export default function TokonyadiaScreen({ product }) {

  const { onLoadProducts, onCreateTransaction } = product()
  const dispatch = useDispatch()

  const moveToAccount = () => {
    onNavigate({
      routeName: PATH.LOGIN,
      isReplace: false
    })
  }

  const loadDataProducts = async () => {
    const products = await onLoadProducts()
    dispatch(setProducts(products.data))
  }

  const createTransaction = async (payload) => {
    await onCreateTransaction(payload)
    loadDataProducts()
  }

  const logout = async () => {
    await LocalStorage().removeData('token')
  }

  useEffect(() => {
    loadDataProducts()
  }, [])

  return (
    <View style={tokonyadiaStyles.container}>

      <View style={tokonyadiaStyles.headerContainer}>
        <Image
          style={{
            height: 200,
          }}
          source={{
            uri: 'https://i.pinimg.com/originals/27/e2/62/27e26205db49226a2efc3fe01c792f8d.gif'
          }}
        />
      </View>

      <View style={tokonyadiaStyles.listTitleContainer}>
        <Text style={tokonyadiaStyles.listTitle} >
          Our Product
        </Text>

        <TouchableOpacity style={tokonyadiaStyles.btnLogout} onPress={() => logout()}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={tokonyadiaStyles.listContainer}>
        <ProductList createTransaction={createTransaction} />
      </View>

      <View style={tokonyadiaStyles.tabBarContainer}>

        <TouchableOpacity style={tokonyadiaStyles.tabBarButton}>
          <Text style={tokonyadiaStyles.tabBarText}>Product</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tokonyadiaStyles.tabBarButton}
          onPress={moveToAccount}
        >
          <Text style={tokonyadiaStyles.tabBarText}>Account</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

