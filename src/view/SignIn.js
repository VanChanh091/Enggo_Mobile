import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const SignIn = ({ navigation }) => {
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // show/hide password
  //   const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false); //password co the nhin thay duoc mac dinh la false

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // handle login
  //   const [email, setEmail] = useState("");

  //   const handleLogin = () => {
  //     axios
  //       .get(`https://6627001fb625bf088c071863.mockapi.io/emailLogin`)
  //       .then((response) => {
  //         const data = response.data;
  //         const user = data.find((user) => user.email === email);
  //         if (user) {
  //           console.log("Login successful");
  //           navigation.navigate("TabNavigation");
  //         } else {
  //           console.log("Login failed");
  //         }
  //       });
  //   };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2.7,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../img/logoSplashScreen.png")}
          style={{ marginTop: 12 }}
        ></Image>
        <Text style={{ fontWeight: "bold", fontSize: 35, marginTop: 5 }}>
          Enggo
        </Text>
      </View>

      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "85%", height: "100%", paddingTop: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 26 }}>Sign in</Text>
          <View
            style={{
              width: "100%",
              height: 55,
              borderWidth: 1,
              borderRadius: 12,
              marginTop: 20,
              flexDirection: "row",
              borderColor: "gray",
            }}
          >
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="mail-outline" size={25} color="black" />
            </View>
            <View style={{ flex: 8.5, justifyContent: "center" }}>
              <TextInput
                placeholder="abc@gmail.com"
                style={{
                  color: "gray",
                  fontSize: 18,
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                }}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: 55,
              borderWidth: 1,
              borderRadius: 12,
              marginTop: 18,
              flexDirection: "row",
              borderColor: "gray",
            }}
          >
            <View
              style={{
                flex: 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="lock-closed-outline" size={25} color="black" />
            </View>
            <View style={{ flex: 7, justifyContent: "center" }}>
              <TextInput
                // value={password}
                // onChangeText={setPassword}
                // secureTextEntry={!isPasswordVisible}
                placeholder="Your password"
                style={{
                  color: "gray",
                  fontSize: 18,
                  width: "100%",
                  height: "100%",
                  borderRadius: 12,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                flex: 1.5,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={togglePasswordVisibility}
            >
              <Ionicons
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: 45,
              marginTop: 15,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 6,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 3,
                }}
              >
                <Switch
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  style={{ width: 35, height: 25 }}
                />
              </View>
              <View style={{ flex: 7, marginTop: 5 }}>
                <Text style={{ fontSize: 16, marginLeft: -5 }}>
                  Remember Me
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 4,
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("RequestResetPassword")}
              >
                <Text style={{ fontSize: 16, marginTop: 5 }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            width: "75%",
            height: "100%",
            alignItems: "center",
            // justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              backgroundColor: "#5669fe",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 12,
            }}
            onPress={() => navigation.navigate("TabNavigationContainer")}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
          </TouchableOpacity>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
              fontSize: 18,
              marginTop: 35,
            }}
          >
            OR
          </Text>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 12,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
            }}
          >
            <View
              style={{
                flex: 3,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/google.png")}
                style={{ width: 32, height: 32, resizeMode: "contain" }}
              />
            </View>
            <View style={{ flex: 7 }}>
              <Text style={{ fontSize: 18 }}>Login with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 50,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 12,
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "gray",
            }}
          >
            <View
              style={{
                flex: 3,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../img/fb.png")}
                style={{ width: 32, height: 32, resizeMode: "contain" }}
              />
            </View>
            <View style={{ flex: 7 }}>
              <Text style={{ fontSize: 18 }}>Login with Facebook</Text>
            </View>
          </TouchableOpacity>
          <Text style={{ fontSize: 16, marginTop: 8 }}>
            Don't have an account?
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "#5669fe", fontSize: 16, marginLeft: 5 }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
