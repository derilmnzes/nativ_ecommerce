import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { addUsers, loginUser } from "../Redux/features/userSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { styles } from "../styles/AuthStyles";


export default function Auth() {
  const router = useRouter();
  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  const { user } = store.user;

  const [formType, setFormType] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.auth) {
      router.replace("home");
    }
  }, [user]);

  const handleFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    if (formType === "login") {
      dispatch(loginUser(formData))
    } else {
      dispatch(addUsers(formData, setFormType));
    }
  };

  const toggleForm = () => {
    setFormData({ name: "", email: "", password: "" });
    setFormType(formType === "login" ? "signup" : "login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>
            {formType === "login" ? "Login" : "Sign Up"}
          </Text>
        </View>
        {formType === "signup" && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
      
              onChangeText={(value) => handleFormChange("name", value)}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleFormChange("email", value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(value) => handleFormChange("password", value)}
          />
        </View>

        <TouchableOpacity style={styles.toggleButton} onPress={toggleForm}>
          <Text style={styles.toggleButtonText}>
            {formType === "login"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={handleFormSubmit}>
              {formType === "login" ? "Login" : "Sign Up"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
