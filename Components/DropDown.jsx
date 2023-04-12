import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomDropdown = ({ label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    onSelect(item);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.labelContainer}>
        <View
          style={{
           position:'absolute',
           right:10,
           top:10
          }}
        >
        <AntDesign name={!isOpen ? "down" : "up"} size={24} color="gray" />
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              style={styles.itemContainer}
            >
              <Text style={styles.itemLabel}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    marginTop: 20,
  },
  labelContainer: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    backgroundColor: "white",
  },
  label: {
    color: "gray",
    fontWeight: "500",
  },
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
  itemLabel: {
    color: "black",
    fontWeight: "500",
  },
  selectedItemContainer: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    backgroundColor: "white",
  },
  selectedItemLabel: {
    color: "black",
  },
});

export default CustomDropdown;
