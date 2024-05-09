import React, {useEffect, useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import useArticleStore from '../store/store';

function DetailsScreen({navigation}) {
  const [post, setPost] = useState(null);
  const articles = useArticleStore(state => state.articles);

  useEffect(() => {
    setPost(articles[0]);
    console.log('=== wee ===', articles);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{post?.title}</Text>
        <Text style={styles.description}>{post?.body}</Text>
      </View>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between'
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

export default DetailsScreen;
