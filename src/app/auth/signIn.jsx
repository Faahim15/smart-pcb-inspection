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
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

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

          <Text className="text-white text-2xl font-bold mb-[2%]">
            Welcome Back
          </Text>

          <Text className="text-white/90 text-base">
            Sign in to your account
          </Text>
        </View>

        {/* Form Section */}
        <View className="flex-1 px-[6%] pt-[8%]">
          {/* Email Input */}
          <View className="mb-[5%]">
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
          </View>

          {/* Password Input */}
          <View className="mb-[5%]">
            <Text className="text-gray-700 text-sm mb-[2%] font-medium">
              Password
            </Text>
            <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-lg px-[4%] h-[12%] min-h-[50px]">
              <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
              <TextInput
                className="flex-1 ml-[3%] text-gray-900 text-base"
                placeholder="Enter your password"
                placeholderTextColor="#9CA3AF"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="current-password"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="p-[1%]"
              >
                <Ionicons
                  name={showPassword ? "eye-outline" : "eye-off-outline"}
                  size={20}
                  color="#9CA3AF"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me & Forgot Password */}
          <View className="flex-row justify-between items-center mb-[8%]">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                className={`w-[18px] h-[18px] border-2 rounded mr-[3%] items-center justify-center ${
                  rememberMe
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-gray-300"
                }`}
              >
                {rememberMe && (
                  <Ionicons name="checkmark" size={12} color="white" />
                )}
              </View>
              <Text className="text-gray-600 text-sm">Remember me</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text className="text-indigo-600 text-sm font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity className="bg-indigo-600 rounded-lg h-[12%] min-h-[50px] items-center justify-center mb-[6%]">
            <Text className="text-white text-base font-semibold">Sign In</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center mb-[6%]">
            <View className="flex-1 h-[1px] bg-gray-200" />
            <Text className="mx-[4%] text-gray-500 text-sm">
              or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-gray-200" />
          </View>

          {/* Social Login Buttons */}
          <TouchableOpacity className="flex-row items-center justify-center border border-gray-200 rounded-lg h-[12%] min-h-[50px] mb-[4%]">
            <Ionicons name="logo-google" size={20} color="#EA4335" />
            <Text className="ml-[3%] text-gray-700 text-base font-medium">
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-center border border-gray-200 rounded-lg h-[12%] min-h-[50px] mb-[8%]">
            <Ionicons name="logo-apple" size={20} color="#000000" />
            <Text className="ml-[3%] text-gray-700 text-base font-medium">
              Continue with Apple
            </Text>
          </TouchableOpacity>

          {/* Create Account Link */}
          <View className="flex-row justify-center mb-[6%]">
            <Text className="text-gray-600 text-sm">
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity>
              <Text className="text-indigo-600 text-sm font-medium">
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View className="flex-row justify-center items-center mb-[4%]">
            <TouchableOpacity className="mr-[6%]">
              <Text className="text-gray-500 text-xs">Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 text-xs">Terms of Service</Text>
            </TouchableOpacity>
          </View>

          <Text className="text-center text-gray-400 text-xs mb-[4%]">
            © 2024 SecureApp. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
