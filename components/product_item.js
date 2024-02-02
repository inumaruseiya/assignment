import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

const ProductItem = ({imageuris, name, price, description, category_name}) =>{

  // 画像をスライドできる関数
  const renderImageScrollView = (imageUris) => (
    <ScrollView
      horizontal
      pagingEnabled
      showsVerticalScrollIndicator = {true}
      style={styles.imageScrollView}
    >
      {imageUris.map((uri, index) => (
        <Image key={index.toString()} source={{ uri }} style={styles.image} />
      ))}
    </ScrollView>
  );

    return(
        <View style={styles.box}>
            <View style={styles.moziBox}>
                <Text style={styles.Text}>
                    {name}
                </Text>
                <Text style={styles.Text}>
                  {`¥${price}`}
                </Text>
                <Text style={styles.Text}>
                  {description.replace(/<[^>]+>/g, '').substring(0, 100)}
                </Text>
                <Text style={styles.Text}>
                    {category_name}
                </Text>
            </View>
            <View>
                {/* 画像が二枚以上の時にrenderImageScrollViewを使う処理 */}
                 {imageuris.length > 1
                    ? renderImageScrollView(imageuris)
                    : <Image style={styles.image} source={{ uri: imageuris[0] }} />
                  }
                  
            </View>
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
  
    box:{
      height:200,
      width:"100%",
      borderColor: "lightblue",
      borderWidth: 1,
      flexDirection: 'row',
    },
  
    moziBox:{
      flex: 1,
      padding: 16,
    },
    
    imageScrollView: {
      width: 100, 
      height: 200, 
    },
    image: {
      width: 100, 
      height: 200, 
    },

    Text: {
      fontSize: 16,
    },
  
    subText: {
      fontSize: 12,
      color: "darkblue",
    },
  });