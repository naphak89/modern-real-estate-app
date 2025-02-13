import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function AppLayOut() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300"></ActivityIndicator>
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/signIn"></Redirect>;
  }
  return <Slot />;
}
