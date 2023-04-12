# React Native Expo

This is a React Native Expo project for an e-commerce mobile app.

## Prerequisites

Before getting started, make sure you have the following software installed on your development environment:

- Node.js and npm: You can download and install Node.js and npm from the official Node.js website (https://nodejs.org/).
- Expo CLI: You can install Expo CLI globally using npm with the following command: `npm install -g expo-cli`.
- Android Studio: If you plan to run the app on an Android virtual device, you'll need to have Android Studio installed. You can download and install Android Studio from the official Android Studio website (https://developer.android.com/studio).
- JDK: You'll need to have the Java Development Kit (JDK) installed on your development environment. You can download and install JDK from the official Oracle website (https://www.oracle.com/java/technologies/javase-jdk14-downloads.html).

## Getting Started

Follow the steps below to get started with the project:

1. Clone the repository to your local machine: `git clone [repository URL]`.
2. Navigate to the project directory: `cd react-native-expo-ecommerce`.
3. Install the dependencies: `npm install`.
4. Update the base URL: By default, the app is configured to use `https://mywebsite-40j0.onrender.com/` as the base URL. If you want to use a different base URL, you can update it in the `config/baseurl.js` file.
5. Start the Expo development server: `expo start`.
6. Open Android Studio and create a virtual device: Follow the instructions in the Android Studio documentation (https://developer.android.com/studio/run/managing-avds) to create a virtual device for running the app.
7. Run the app on the virtual device: Once the virtual device is created, you can run the app on the virtual device by selecting it in the Android Studio AVD Manager and clicking on the "Play" button.
8. Scan the QR code with Expo Go app: On the Expo development server, a QR code will be displayed. Scan this QR code with the Expo Go app on your physical device, or follow the instructions in the Expo documentation (https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and) to run the app on an iOS or Android device.

## Installing npm Packages

If you need to install additional npm packages for the project, you can do so using the following command:

```bash
npm install [package-name]
