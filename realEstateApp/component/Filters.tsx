import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";
const FilterHandler = ({
  item,
  index,
  onPress,
}: {
  item: string;
  index: Number;
  onPress?: () => void;
}) => {
  <TouchableOpacity>
    <View className="bg-red-600 flex flex-row gap-3">
      <Text>{item}</Text>
    </View>
  </TouchableOpacity>;
};

const Filters = () => {
  const param = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    param.filter || "ALL"
  );
  const handleCategory = (category: string) => {};
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <handleCategory key={index} item={item.title} />
      ))}
    </ScrollView>
  );
};

export default Filters;
