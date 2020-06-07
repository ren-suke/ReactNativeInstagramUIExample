import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const dummyData1 = [
  "aaa",
  "bbb",
  "ccc",
  "ddd",
  "eee"
]

const dummyData2 = [
  "AAA",
  "BBB",
  "CCC",
  "DDD",
  "EEE",
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{flex: 1}}
        data={dummyData1}
        ListHeaderComponentStyle={{height: 100}}
        ListHeaderComponent={StoryListView}
        renderItem={({item}) => 
          <View style={styles.cell}>
            <Text style={styles.text}>{item}</Text>
          </View>
         }
        keyExtractor={(item) => item}
        />
    </SafeAreaView>
  );
}

const StoryListView: React.FC = () => {
  return(
    <View style={{paddingLeft: 20}}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData2}
        renderItem={({item}) =>
          <View style={styles.storyCell}>
            <Text style={styles.text}>{item}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  storyCell: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    padding: 5,
    borderRadius: 50,
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 32,
  }
});
