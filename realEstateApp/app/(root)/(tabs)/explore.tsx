import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link, router, useLocalSearchParams } from "expo-router";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/component/Search";
import { Card, FeaturedCard } from "@/component/Cards";
import Filters from "@/component/Filters";
import { useGlobalContext } from "@/lib/global-provider";
import seed from "@/lib/seed";
import { useAppwrite } from "@/lib/useAppWrite";
import { getLastestProprties, getProperties } from "@/lib/appwrite";
import { useEffect } from "react";
import NoResult from "@/component/NoResult";

export default function Explore() {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();
  const { data: latestProperties, loading: latestPropertiesLoading } =
    useAppwrite({
      fn: getLastestProprties,
    });

  const {
    data: properties,
    loading,
    refetch,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  useEffect(() => {
    refetch({ filter: params.filter!, query: params.query!, limit: 6 });
  }, [params.filter, params.query]);
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={properties}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id} // Fixed: Use `$id` as the key
        numColumns={2}
        contentContainerClassName="pd-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" className="text-primary-30 mt-5" />
          ) : (
            <NoResult />
          )
        }
        ListHeaderComponent={<View></View>}
      ></FlatList>
    </SafeAreaView>
  );
}
