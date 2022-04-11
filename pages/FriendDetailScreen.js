import {
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FriendDetailScreen({ route, navigation }) {
  const { details, friends } = route.params;

  const unfriend = async (frie) => {
    try {
      let _friends = friends;

      _friends = _friends.filter((friend) => {
        return friend.name.first !== frie.name.first;
      });
      await AsyncStorage.setItem("Friends", JSON.stringify(_friends));
      navigation.navigate("homeScreen");
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.fdContainer}>
      <Image
        style={styles.fdAvatarStyle}
        source={{ uri: details.picture.large }}
      />
      <Text style={[styles.fdTextStyle, { fontSize: 22, color: "black" }]}>
        {details.name.first} {details.name.last}
      </Text>
      <Text style={styles.fdTextStyle}>{details.email}</Text>
      <Text style={styles.fdTextStyle}>{details.phone}</Text>
      <Text style={styles.fdTextStyle}>{details.gender}</Text>
      <Text style={styles.fdTextStyle}>{details.dob.date}</Text>
      <Text style={styles.fdTextStyle}>{details.dob.age} years old</Text>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => {
          Alert.alert(
            "Alert",
            "Are you sure you want to unfriend this person?",
            [
              { text: "Cancel", style: "cancel" },
              {
                text: "Unfriend",
                onPress: () => unfriend(details),
              },
            ]
          );
        }}
      >
        <Text style={{ color: "blue", fontSize: 22 }}>Unfriend</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
