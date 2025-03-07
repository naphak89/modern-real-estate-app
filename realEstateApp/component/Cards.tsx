import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface Props {
  onPress?: () => void;
  item: Models.Document;
}

export const FeaturedCard = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={{ uri: image }} className="size-full rounded-2xl"></Image>
      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      ></Image>

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5"></Image>
        <Text className="text-xs font-rubik-bold text-primary-300">
          {rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-rubik-extrabold text-white"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-base font-rubik text-white" numberOfLines={1}>
          {address}
        </Text>
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="color-white font-rubik-extrabold text-xl">
            ${price}
          </Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

//extract image and rating from item (parameter ตัวรับ)
export const Card = ({
  item: { image, rating, name, address, price },
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5"></Image>
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          {rating}
        </Text>
      </View>

      <Image source={{ uri: image }} className="w-full h-40 rounded-lg"></Image>

      <View className="flex flex-col mt-2">
        <Text
          className="text-base font-rubik-bold text-black-300"
          numberOfLines={1}
        >
          {name}
        </Text>

        <Text className="text-xs font-rubik text-black-200" numberOfLines={1}>
          {address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base text-primary-300font-rubik-bold">
            ${price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191d31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
