import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SignIn from "../view/Authen/SignIn";
import SignUp from "../view/Authen/SignUp";
import Verification from "../view/Authen/Verification";
import RequestResetPassword from "../view/Authen/RequestResetPassword";
import Account from "../view/TabScreen/Account";
import ListVocabulary from "../view/TabScreen/ListVocabulary";
import Home from "../view/TabScreen/Home";
import ResetPassword from "../view/Authen/ResetPassword";
import TruyenChem_S1 from "../view/truyenChem/TruyenChem_S1";
import TruyenChem_S2 from "../view/truyenChem/TruyenChem_S2";
import TruyenChem_S3 from "../view/truyenChem/TruyenChem_S3";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigationContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ListVocabulary"
        component={ListVocabulary}
        options={{
          tabBarLabel: "Bộ từ",
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="library-outline" size={size} color={color} />
            );
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="Verification"
          component={Verification}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="RequestResetPassword"
          component={RequestResetPassword}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="TabNavigationContainer"
          component={TabNavigationContainer}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="ListVocabulary"
          component={ListVocabulary}
          options={{ headerShown: false }}
        /> */}

        {/* <Stack.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name="TruyenChem_S1"
          component={TruyenChem_S1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TruyenChem_S2"
          component={TruyenChem_S2}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="TruyenChem_S3"
          component={TruyenChem_S3}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
