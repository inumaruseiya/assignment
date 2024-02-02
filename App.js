import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductItemScreen from './screens/product_item_screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // ルートディレクトリ
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="商品" component={ProductItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


