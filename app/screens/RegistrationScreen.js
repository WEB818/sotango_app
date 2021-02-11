import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import { Header } from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  username: Yup.string().min(3).max(15).required().label("Username"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegistrationScreen(props) {
  return (
    <Screen style={styles.container}>
      <Header style={styles.header}>SoTango</Header>
      <Image style={styles.logo} source={require("../assets/dancers.png")} />
      <Form
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmation: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          icon="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          name="password"
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register Account" />
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegistrationScreen;
