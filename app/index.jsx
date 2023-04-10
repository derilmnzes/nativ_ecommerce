import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Index() {
  const router = useRouter();

  const [formType, setFormType] = useState('login');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = () => {
    console.log('Submitting form data:', formData);
    router.replace('/Home')
    // TODO: add form submission logic here
  };

  const toggleForm = () => {
    setFormData({ name: '', email: '', password: '' });
    setFormType(formType === 'login' ? 'signup' : 'login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>{formType === 'login' ? 'Login' : 'Sign Up'}</Text>
        </View>
        {formType === 'signup' && (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={formData.name}
              onChangeText={(value) => handleFormChange('name', value)}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleFormChange('email', value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(value) => handleFormChange('password', value)}
          />
        </View>

        <TouchableOpacity style={styles.toggleButton} onPress={toggleForm}>
          <Text style={styles.toggleButtonText}>
            {formType === 'login' ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={handleFormSubmit}>
              {formType === 'login' ? 'Login' : 'Sign Up'}
            </Text>
          </View>
        </View>
    
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '80%',
  },
  heading: {
    marginBottom: 20
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center'
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 18
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  toggleButton:{
    marginBottom:15
  }
});

