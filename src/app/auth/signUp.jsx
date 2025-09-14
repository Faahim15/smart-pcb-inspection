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
import InputField from "../components/auth/InputField";
import PasswordField from "../components/auth/PasswordField";
import ConfirmPassword from "../components/auth/ConfirmPassword";
import AuthButton from "../components/auth/AuthButton";
export default function CreateAccountScreen() {
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
            <View className="mt-[10%]">
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

            {/* Password */}
            <PasswordField />

            {/* Confirm Password */}
            <ConfirmPassword />
            {/* Organization Name */}

            <InputField
              inputConfig={{
                label: "Organization Name",
                placeholder: "Your Company",
                keyboardType: "default",
                autoCapitalize: "words",
                icon: "business-outline",
              }}
            />

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
            <AuthButton
              title="Create Account"
              onPress={() => router.push("/auth/signIn")}
              agreeToTerms={agreeToTerms}
            />

            {/* Divider */}
            <View className="items-center ">
              <Text className="text-gray-500 font-poppins ">
                Or continue with
              </Text>
            </View>

            {/* Social Login Buttons */}
            <View className="flex-row gap-[2%]">
              <TouchableOpacity className="flex-1 h-[56px] bg-white border border-gray-200 rounded-lg items-center justify-center flex-row">
                <Ionicons name="logo-google" size={20} color="#EA4335" />
                <Text className="text-gray-700 font-medium ml-[2%]">
                  Google
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity className="flex-1 h-[56px] bg-white border border-gray-200 rounded-lg items-center justify-center flex-row">
                <Ionicons name="logo-apple" size={20} color="#000000" />
                <Text className="text-gray-700 font-medium ml-[2%]">Apple</Text>
              </TouchableOpacity> */}
            </View>

            {/* Sign In Link */}
            <View className="items-center mb-[4%]">
              <Text className="text-gray-600 font-poppins ">
                Already have an account?{" "}
                <Text className="text-purple-600 font-poppinsMedium ">
                  Sign in
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
