import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        👋 Hi, I'm Nur Muhamad Rum (some know me as Rum). I have been working as
        Web & Mobile Front-end Developer as specially ReactJs for Web
        development, React Native for Android & iOS development. I am on a
        self-taught journey, working full time and studying programming in
        between! I'm currently pursuing a Full-Stack roadmap.
      </Text>
      <Text style={styles.titleGetInTouch}>Please Get In Touch!</Text>
      <View style={styles.descContainer}>
        <Text style={styles.titleDesc}>Website</Text>
        <Text style={styles.subtitleDesc}>
          https://www.nurmuhamadrum.vercel.app
        </Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.titleDesc}>Github</Text>
        <Text style={styles.subtitleDesc}>
          https://github.com/nurmuhamadrum
        </Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.titleDesc}>LinkedIn</Text>
        <Text style={styles.subtitleDesc}>
          https://www.linkedin.com/in/nur-muhamad-rum/
        </Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.titleDesc}>Instagram</Text>
        <Text style={styles.subtitleDesc}>
          https://www.instagram.com/nurmuhamadrum/
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    color: '#000',
    fontSize: 15,
    lineHeight: 24,
  },
  descContainer: {
    marginTop: 10,
  },
  titleGetInTouch: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
  },
  titleDesc: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subtitleDesc: {
    color: '#000',
    fontSize: 16,
    marginTop: 4,
  },
});

export default ProfileScreen;
