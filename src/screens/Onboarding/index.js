import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';

const Onboarding = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleFinish = () => {
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {currentPage === 1 && (
        <View>
          <Text style={styles.title}>Ferdito Adi Prasetyo</Text>
          <Button
            title="Lanjut"
            customStyle={{width: '50%'}}
            onPress={handleFinish}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default Onboarding;
