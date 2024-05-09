import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import useArticleStore from '../store/store';

function HomeScreen({navigation}) {
  const addArticle = useArticleStore(state => state.addArticle);
  const [posts, setPosts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setPosts(response.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  _handlerGoToDetail = value => {
    addArticle(value);
    navigation.navigate('Details');
  };

  return (
    <ScrollView style={styles.container}>
      {isloading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          {posts.map((value, key) => {
            return (
              <TouchableOpacity
                key={key}
                style={styles.cardContainer}
                onPress={() => _handlerGoToDetail(value)}>
                <Text style={styles.title}>{value?.title}</Text>
                <Text style={styles.description}>{value?.body}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 24
  },
  description: {
    marginTop: 10,
    lineHeight: 24
  },
});

export default HomeScreen;
