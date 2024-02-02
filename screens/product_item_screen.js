import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductItem from '../components/product_item';

// databaseにあるproduct_listとcategory_listを取得
const products = require('../database/product_list_database.json').product_list;
const categories = require('../database/category_list_database.json').category_list;

export default function ProductItemScreen() {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    // カテゴリidとidを紐づける処理
    const productListWithCategory = products.map(product => {
      const category = categories.find(cat => cat.id === product.category_id);
      return {
        ...product,
        category_name: category ? category.category_name : "カテゴリーなし"};
    });
    setCombinedData(productListWithCategory);
    console.log(productListWithCategory);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={combinedData}
        renderItem={({ item }) => (
          <ProductItem
          // propsの受け渡し
            imageuris={item.images.map(img => img.url)}
            name={item.name}
            price={item.price}
            description={item.description}
            category_name={item.category_name}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
