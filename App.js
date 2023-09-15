import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import DepProvider from './src/context/DependencyContext';
import apiClient from './src/services/ApiClient';
import Loading from './src/shared/components/Loading';
import configureStore from './src/store/Store';
import AppNavigation from './src/navigation/RootNavigator';

export default function App() {
  const store = configureStore()

  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <DepProvider services={{ apiClient: apiClient }}>
          <AppNavigation />
          <Loading />
        </DepProvider>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 35
  },
});
