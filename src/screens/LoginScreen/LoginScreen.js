import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import SubmitButton from "../../shared/components/SubmitButton";
import loginStyles from "./LoginScreen.style";

import { useSelector } from "react-redux";
import MessageBox from "../../shared/components/MessageBox";
import { TextInput } from "@react-native-material/core";

export default function ProductForm({ login }) {

  const { onAuthenticate, onDismissError } = login()
  const error = useSelector((state) => state.AppReducer.errorMessage)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [inputErrors, setInputErrors] = useState({
    isValidEmail: "",
    isValidPassword: "",
  });

  const validateInputs = () => {
    const errors = {};
    if (email.trim() === "") {
      errors.isValidEmail = "Email is required";
    }
    if (password.trim() === "") {
      errors.isValidPassword = "Password is required";
    }
    return errors;
  };

  useEffect(() => {
    if (error) {
      MessageBox('Error', error.message, onDismissError).showAlert()
    }
  }, [error])

  const submitLogin = () => {
    const errors = validateInputs();

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
    } else {
      // console.log(`email : ${email}, pw: ${password}`);
      onAuthenticate(email, password)
    }
  };

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return (
        <Text style={{ color: "red", marginBottom: 7 }}>{errorValidation}</Text>
      );
    }
  };

  return (
    <View style={loginStyles.container}>

      <View style={loginStyles.logoSection}>
        <Image
          style={{
            width: "80%",
            height: 150,
          }}
          source={{
            uri: 'https://i.pinimg.com/originals/3b/36/4f/3b364fb5ca22e7b9dc2683a6d77ad35c.gif'
          }}
        />
      </View>
      <View style={{ flex: 2, paddingHorizontal: 15 }}>
        <View style={loginStyles.form}>

          <View style={loginStyles.headerForm}>
            <Text style={loginStyles.title}>Login</Text>
          </View>

          <TextInput
            variant="outlined"
            label="Email"
            color='#f56b00'
            keyboardType="email-address"
            helperText="Ex: example@gmail.com"
            value={email}
            onChangeText={(val) => {
              setEmail(val);
              setInputErrors({
                ...inputErrors,
                isValidEmail: "",
              });
            }}
            style={{ marginTop: 16 }}
          />
          {isErrorView(inputErrors.isValidEmail)}

          <TextInput
            variant="outlined"
            label="password"
            color='#f56b00'
            secureTextEntry={true}
            value={password}
            onChangeText={(val) => {
              setPassword(val);
              setInputErrors({
                ...inputErrors,
                isValidPassword: "",
              });
            }}
            style={{ marginVertical: 16 }}
          />
          {isErrorView(inputErrors.isValidPassword)}

          <View
            style={{
              marginVertical: 6,
            }}
          >
            <SubmitButton
              title={"Login"}
              additionalSyle={{ backgroundColor: '#f56b00' }}
              onSubmit={submitLogin}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
