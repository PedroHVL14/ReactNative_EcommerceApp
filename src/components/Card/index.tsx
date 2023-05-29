import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { cardCart, cardHome } from "./style";
import {useNavigation } from "@react-navigation/native";
import { icons } from "../../../assets/icons";
import { CardProps } from "../../config/interface";
import { DetailsScreenNavigationProp } from "../../config/types";

import Price from "../Price";
import QuantityButton from "../QuantityButton";
import Favorite from "../Favorite";

const Card: React.FC<CardProps> =({
  id,
  image,
  title,
  price,
  description,
  rating,
  isCart,
  favorite,
  heartIconPress,
  removeButtonPress,
}) => {
  const styles = isCart ? cardCart : cardHome;

  const navigation: DetailsScreenNavigationProp = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Details_Screen", {
      id,
      title,
      price,
      image,
      description,
      rating,
    });
  };

  return (
    <View>
      <Pressable
        style={({ pressed }) => [styles.card, pressed && cardHome.pressed]}
        onPress={handleNavigate}
      >
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.priceContainer}>
          <Price isHome={!isCart}>{price.toString()}</Price>
          {!isCart && (
            <View style={{ width: 35, height: 35 }}>
              <Favorite favorite={favorite} heartIconPress={heartIconPress} />
            </View>
          )}
        </View>
      </Pressable>
      {isCart && (
        <View style={cardCart.remove}>
          <QuantityButton
            isCart={isCart}
            children={icons.minusCart}
            onPress={removeButtonPress}
          />
        </View>
      )}
    </View>
  );
}

export default Card;
