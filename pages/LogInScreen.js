import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

export default function LogInScreen({ navigation }) {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [user, serUser] = useState([]);

  useEffect(() => {
    fetchUser();
    getUserLogIn();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("https://randomuser.me/api/?seed=lll");
    const json = await response.json();
    let detail = json.results.map((v) => {
      return {
        username: v.login.username,
        sha256: v.login.sha256,
      };
    });
    serUser(detail);
  };

  const logIn = () => {
    let username = user.map((v) => v.username);
    let sha256 = user.map((v) => v.sha256);

    if (userNameInput == username && passwordInput == sha256) {
      setUserLogIn();
      navigation.navigate("homeScreen");
    } else if (!userNameInput) {
      alert("Please enter username.");
    } else if (!passwordInput) {
      alert("Please enter sha256 hashed password.");
    } else {
      alert("Incorrect username or sha256 hashed password.");
    }
  };

  const setUserLogIn = async () => {
    try {
      await AsyncStorage.setItem("UserLogin", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };

  const getUserLogIn = async () => {
    try {
      await AsyncStorage.getItem("UserLogin").then((value) => {
        if (value != null) {
          navigation.navigate("homeScreen");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Log In</Text>
      <TextInput
        placeholder="username"
        value={userNameInput}
        onChangeText={(data) => setUserNameInput(data)}
        style={styles.textInputStyle}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="sha256 hashed password"
        value={passwordInput}
        onChangeText={(data) => setPasswordInput(data)}
        style={styles.textInputStyle}
        secureTextEntry={true}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={logIn}>
        <Text style={styles.buttonTextStyle}>login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
