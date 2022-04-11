import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../assets/styles";

export default function Card(props) {
  const {
    onPress,
    image,
    firstName,
    lastName,
    email,
    phoneNum,
    onPressDelete,
  } = props;

  return (
    <View style={styles.cardStyle}>
      <TouchableOpacity style={{ flexDirection: "row" }} onPress={onPress}>
        <Image
          style={{ width: 70, height: 70 }}
          source={{
            uri: image,
          }}
        />
        <View style={{ paddingHorizontal: 5, paddingVertical: 3 }}>
          <Text
            style={[styles.cardTextStyle, { fontSize: 18, fontWeight: "bold" }]}
          >
            {firstName} {lastName}
          </Text>
          <Text style={styles.cardTextStyle}>{email}</Text>
          <Text style={styles.cardTextStyle}>{phoneNum}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete} style={styles.cardDeleteStyle}>
        <Image
          style={{ width: 30, height: 30 }}
          source={{
            uri: "https://img.icons8.com/material-rounded/24/000000/filled-trash.png",
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
