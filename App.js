import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { app } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

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

const siginIn = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    console.log("로그인 성공:", user);
    return user; // 로그인 성공 시 사용자 객체 반환
  } catch (error) {
    console.error("로그인 실패:", error.message);
    throw error; // 호출한 곳에서 오류 처리할 수 있게 예외를 던짐
  }
};

export default function App() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const hadleEmailLogin = async () => {
    try {
      const user = await siginIn({ email, password });
      console.log("Logged in:", user);
      setErrorMessage(null); // 오류 메시지 초기화
      // 로그인 성공 후 필요한 작업 수행
    } catch (error) {
      setErrorMessage(error.message); // 오류 메시지 설정
    }
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
      <View style={styles.loginInputBox}>
        <View
          style={{
            width: "80%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Email:</Text>
          {/*
          // TextInput에 null값을 전달하면 에러가 남
          // 초기값을 undefined로 설정
          */}
          <TextInput
            value={email || ""}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.textInput}
          />
        </View>
        <View
          style={{
            width: "80%",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Password:</Text>
          <TextInput
            value={password || ""}
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
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
  loginInputBox: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  loginBtnBox: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
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
