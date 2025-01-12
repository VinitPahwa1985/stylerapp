import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../assets/local-image.jpg')} // Path to your local image
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>Hawa Mahal is a palace in Jaipur.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'column', // Ensure the image and text are stacked vertically
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%', // Adjust width to fit content
    borderRadius: 4,
    margin: 8,
    overflow: 'hidden', // Ensure content stays within the card
  },
  cardElevated: {
    backgroundColor: '#ADD8E6',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#DC143C',
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 150, // Adjust height as needed
    borderRadius: 4,
  },
  cardBody: {
    padding: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
    marginVertical: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
});