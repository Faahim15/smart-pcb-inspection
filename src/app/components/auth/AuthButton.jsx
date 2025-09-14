import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AuthButton({ onPress, title, agreeToTerms }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!agreeToTerms}
      className={`w-full h-[56px] rounded-lg items-center justify-center  flex-row ${
        agreeToTerms ? "bg-purple-600" : "bg-purple-500 opacity-50"
      }`}
    >
      <Text className="text-white font-poppinsMedium text-base mr-[2%]">
        {title}
      </Text>
      <Ionicons name="arrow-forward" size={20} color="white" />
    </TouchableOpacity>
  );
}
