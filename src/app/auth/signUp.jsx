import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function CreateAccountScreen() {
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [organizationName, setOrganizationName] = useState("Your Company");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-gray-50"
    >
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      {/* Header */}
      <View className="items-center mt-[2%] mb-[8%]">
        <View className="w-[60px] h-[60px] bg-purple-600 rounded-2xl items-center justify-center mb-[4%]">
          <Ionicons name="rocket" size={28} color="white" />
        </View>
        <Text className="text-2xl font-poppinsBold text-gray-900 mb-[2%]">
          Create Account
        </Text>
        <Text className="text-gray-600 font-poppins text-sm text-center">
          Join thousands of users and start your journey
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        className="px-[6%]"
      >
        <View className="flex-1 justify-center py-[8%]">
          {/* Form Fields */}
          <View className="gap-[2%]">
            {/* Email Address */}
            <View className="">
              <Text className="text-gray-700 mt-[10%] font-medium mb-[2%]">
                Email Address
              </Text>
              <View className="relative">
                <View className="absolute left-[4%] top-[18px] z-10">
                  <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
                </View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="john@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="w-full h-[56px] bg-white border border-gray-200 rounded-lg pl-[14%] pr-[4%] text-gray-900"
                />
              </View>
            </View>

            {/* Password */}
            <View>
              <Text className="text-gray-700 font-medium mb-[2%]">
                Password
              </Text>
              <View className="relative">
                <View className="absolute left-[4%] top-[18px] z-10">
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="#9CA3AF"
                  />
                </View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  secureTextEntry={!showPassword}
                  className="w-full h-[56px] bg-white border border-gray-200 rounded-lg pl-[14%] pr-[14%] text-gray-900"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  className="absolute right-[4%] top-[18px]"
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password */}
            <View>
              <Text className="text-gray-700 font-medium mb-[2%]">
                Confirm Password
              </Text>
              <View className="relative">
                <View className="absolute left-[4%] top-[18px] z-10">
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color="#9CA3AF"
                  />
                </View>
                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="••••••••"
                  secureTextEntry={!showConfirmPassword}
                  className="w-full h-[56px] bg-white border border-gray-200 rounded-lg pl-[14%] pr-[14%] text-gray-900"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[4%] top-[18px]"
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-off-outline" : "eye-outline"
                    }
                    size={20}
                    color="#9CA3AF"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Organization Name */}
            <View>
              <View className="flex-row items-center mb-[2%]">
                <Text className="text-gray-700 font-medium">
                  Organization Name
                </Text>
                <Text className="text-gray-400 ml-[2%]">(Optional)</Text>
              </View>
              <View className="relative">
                <View className="absolute left-[4%] top-[18px] z-10">
                  <Ionicons name="business-outline" size={20} color="#9CA3AF" />
                </View>
                <TextInput
                  value={organizationName}
                  onChangeText={setOrganizationName}
                  placeholder="Your Company"
                  className="w-full h-[56px] bg-white border border-gray-200 rounded-lg pl-[14%] pr-[4%] text-gray-900"
                />
              </View>
            </View>

            {/* Terms and Conditions */}
            <View className="flex-row items-start mt-[4%]">
              <TouchableOpacity
                onPress={() => setAgreeToTerms(!agreeToTerms)}
                className="mr-[3%] mt-[2px]"
              >
                <View
                  className={`w-[18px] h-[18px] border-2 rounded ${
                    agreeToTerms
                      ? "bg-purple-600 border-purple-600"
                      : "border-gray-300"
                  } items-center justify-center`}
                >
                  {agreeToTerms && (
                    <Ionicons name="checkmark" size={12} color="white" />
                  )}
                </View>
              </TouchableOpacity>
              <Text className="text-gray-600 flex-1 leading-5">
                I agree to the{" "}
                <Text className="text-purple-600">Terms of Service</Text> and{" "}
                <Text className="text-purple-600">Privacy Policy</Text>
              </Text>
            </View>

            {/* Create Account Button */}
            <TouchableOpacity
              onPress={() => router.push("/auth/signIn")}
              className="w-full h-[56px] bg-purple-600 rounded-lg items-center justify-center mt-[6%] flex-row"
            >
              <Text className="text-white font-semibold text-lg mr-[2%]">
                Create Account
              </Text>
              <Ionicons name="arrow-forward" size={20} color="white" />
            </TouchableOpacity>

            {/* Divider */}
            <View className="items-center mt-[0%] mb-[0%]">
              <Text className="text-gray-500">Or continue with</Text>
            </View>

            {/* Social Login Buttons */}
            <View className="flex-row gap-[2%]">
              <TouchableOpacity className="flex-1 h-[56px] bg-white border border-gray-200 rounded-lg items-center justify-center flex-row">
                <Ionicons name="logo-google" size={20} color="#EA4335" />
                <Text className="text-gray-700 font-medium ml-[2%]">
                  Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 h-[56px] bg-white border border-gray-200 rounded-lg items-center justify-center flex-row">
                <Ionicons name="logo-apple" size={20} color="#000000" />
                <Text className="text-gray-700 font-medium ml-[2%]">Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Sign In Link */}
            <View className="items-center  mb-[4%]">
              <Text className="text-gray-600">
                Already have an account?{" "}
                <Text className="text-purple-600 font-medium">Sign in</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
