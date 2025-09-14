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
import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";
import AuthButton from "../components/auth/AuthButton";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* <StatusBar barStyle="light-content" backgroundColor="#4F46E5" /> */}
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView
        className="flex-1 bg-white"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Section */}
        <View className="bg-purple-600 pt-[15%] pb-[8%] px-[6%] items-center">
          <View className="bg-white/20 rounded-full p-[4%] mb-[6%]">
            <Ionicons name="person" size={32} color="white" />
          </View>

          <Text className="text-white text-2xl font-poppinsBold mb-[2%]">
            Welcome Back
          </Text>

          <Text className="text-white/90 font-poppins text-base">
            Sign in to your account
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex-1 px-[6%] pt-[8%]">
          {/* Email Input */}
          {/* <View className="mb-[5%]">
            <Text className="text-gray-700 text-sm mb-[2%] font-medium">
              Email Address
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-lg px-[4%] h-[12%] min-h-[50px]">
              <Ionicons name="mail-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-[3%] text-gray-900 text-base"
                placeholder="Enter your email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
          </View> */}
          <View className="mb-[3%]">
            <InputField
              inputConfig={{
                label: "Email Address",
                placeholder: "john@example.com",
                keyboardType: "email-address",
                autoCapitalize: "none",
                icon: "mail-outline",
              }}
            />
          </View>

          {/* Password Input */}
          <PasswordField />

          {/* Remember Me & Forgot Password */}
          <View className="flex-row mt-[5%] justify-between items-center mb-[0%]">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                className={`w-[18px]  h-[18px] border-2 rounded mr-[3%] items-center justify-center ${
                  rememberMe
                    ? "bg-purple-600 border-purple-600"
                    : "border-gray-300"
                }`}
              >
                {rememberMe && (
                  <Ionicons name="checkmark" size={12} color="white" />
                )}
              </View>
              <Text className="text-gray-600 font-poppins text-sm">
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-purple-600 text-sm font-poppinsMedium">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <View className="mt-[3%]">
            <AuthButton
              title="Sign In"
              agreeToTerms={true}
              onPress={() => router.replace("/home")}
            />
          </View>

          {/* Divider */}
          <View className="flex-row mt-[3%] items-center mb-[0%]">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-[4%] text-gray-500 font-poppins text-sm">
              or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity className="flex-row mt-[3%] items-center justify-center border border-gray-200 rounded-lg h-[12%] min-h-[50px] mb-[0%]">
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text className="ml-[3%] font-poppinsSemiBold text-gray-700 text-base font-medium">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Create Account Link */}
          <View className="flex-row justify-center mt-[2%] mb-[3%]">
            <Text className="text-gray-600 font-poppins text-sm">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Text className="text-purple-600 text-sm font-poppinsMedium ">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View className="flex-row justify-center items-center mb-[4%]">
            <TouchableOpacity className="mr-[6%]">
              <Text className="text-gray-500 font-poppins text-xs">
                Privacy Policy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 font-poppins text-xs">
                Terms of Service
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="text-center font-poppins text-gray-400 text-xs mb-[4%]">
            © 2024 SecureApp. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
