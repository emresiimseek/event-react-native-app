import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Button(props) {
  const {
    text = "Kaydet",
    onPress,
    width = 100,
    color = "blue",
    padding = 10,
    loading = false,
    icon = "",
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={styles.button}
      activeOpacity={0.6}
      style={{
        width: `${width}%`,
        backgroundColor: color,
        alignItems: "center",
        padding,
        marginBottom: 5,
        borderRadius: 5,
      }}
    >
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: 5 }}>
            {props.children ?? <Icon name={icon} size={20} color="white" />}
          </View>
          <Text style={styles.text}>{text} </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default Button;
