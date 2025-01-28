import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HomePage = () => {
  return (
    <LinearGradient colors={["#1e1e2f", "#121212"]} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.logo}>MyApp</Text>
        <View style={styles.navbar}>
          <TouchableOpacity><Text style={styles.navItem}>Home</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navItem}>About</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.navItem}>Contact</Text></TouchableOpacity>
        </View>
      </View>

      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to MyApp</Text>
        <Text style={styles.heroSubtitle}>Discover content, connect, and grow with us.</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <ScrollView style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <Text style={styles.sectionContent}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod, nisi vel consectetur euismod, nisl nisl aliquam elit, at placerat orci nisl et massa.
        </Text>
      </ScrollView>

      {/* Contact Section */}
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <TextInput style={styles.input} placeholder="Your Name" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Your Email" placeholderTextColor="#888" keyboardType="email-address" />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          placeholderTextColor="#888"
          multiline
        />
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; 2025 MyApp. All rights reserved.</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#1e1e2f",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  navbar: {
    flexDirection: "row",
  },
  navItem: {
    color: "#bbb",
    marginLeft: 20,
    fontSize: 16,
  },
  heroSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heroTitle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroSubtitle: {
    color: "#bbb",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  primaryButton: {
    backgroundColor: "#6c63ff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  aboutSection: {
    backgroundColor: "#222",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    color: "#bbb",
    fontSize: 16,
    lineHeight: 24,
  },
  contactSection: {
    padding: 20,
    margin: 20,
    backgroundColor: "#1e1e2f",
    borderRadius: 8,
  },
  input: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  footer: {
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#666",
    fontSize: 14,
  },
});

export default HomePage;
