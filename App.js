import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CutomButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.loginButton, props.style]}
      onPress={props.onPress}
    >
      <MaterialCommunityIcons name={props.iconName} size={28} color="black" />
      <Text style={styles.loginButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const hadleEmailLogin = () => {
    return;
  };

  const hadleGoogleLogin = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>로그인</Text>
      </View>
      <View style={styles.titleBox}>
        <Text style={styles.loginTitle}>Login TEST</Text>
      </View>
      <View style={styles.loginBtnBox}>
        <CutomButton
          title="이메일로 로그인"
          iconName="email"
          onPress={hadleEmailLogin}
          style={styles.emailLogin}
        />
        <CutomButton
          title="구글로 계속하기"
          iconName="google"
          onPress={hadleGoogleLogin}
          style={styles.googleLogin}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
  },
  topBarTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  titleBox: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  loginTitle: {
    fontSize: 70,
    fontWeight: "bold",
  },
  loginBtnBox: {
    flex: 1,
    alignItems: "center",
  },
  loginButton: {
    flexDirection: "row",
    gap: 5,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
