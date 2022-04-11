import { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../components/Card";

export default function HomeScreen({ navigation }) {
  const [friends, setFriends] = useState([]);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    getFriends();
  }, [friends]);

  const getFriends = async () => {
    try {
      await AsyncStorage.getItem("Friends").then((value) => {
        return value != null ? setFriends(JSON.parse(value)) : setFriends([]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const storeFriends = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?seed=lll&page=1&results=25"
      );
      const json = await response.json();
      await AsyncStorage.setItem("Friends", JSON.stringify(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFriends = async () => {
    try {
      await AsyncStorage.removeItem("Friends");
    } catch (error) {
      console.log(error);
    }
  };

  const unfriend = async (frie) => {
    try {
      let _friends = friends;

      _friends = _friends.filter((friend) => {
        return friend.name.first !== frie.name.first;
      });
      await AsyncStorage.setItem("Friends", JSON.stringify(_friends));
      setIsRender(isRender ? false : true);
      // setIsRender((prevIsRender) => !prevIsRender);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("UserLogin");
      navigation.navigate("logInScreen");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{ margin: 10, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={[styles.titleText, { marginRight: "19%" }]}>
          Freind's List
        </Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Alert", "Are you sure you want to log out?", [
              { text: "Cancel", style: "cancel" },
              { text: "Log Out", onPress: logOut },
            ]);
          }}
        >
          <Text style={{ color: "blue", fontSize: 15 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button title="store" onPress={storeFriends} />
        <Button title="delete" onPress={deleteFriends} />
      </View>
      <ScrollView>
        {friends
          ? friends.map((v, i) => {
              return (
                <Card
                  key={i}
                  onPress={() =>
                    navigation.navigate("friendDetailScreen", {
                      details: v,
                      friends: friends,
                    })
                  }
                  image={v.picture.large}
                  firstName={v.name.first}
                  lastName={v.name.last}
                  email={v.email}
                  phoneNum={v.phone}
                  onPressDelete={() => {
                    Alert.alert(
                      "Alert",
                      "Are you sure you want to unfriend this person?",
                      [
                        { text: "Cancel", style: "cancel" },
                        { text: "Unfriend", onPress: () => unfriend(v) },
                      ]
                    );
                  }}
                />
              );
            })
          : null}
      </ScrollView>
    </SafeAreaView>
  );
}
