import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  HangHoa: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'HangHoa'>;

const HangHoaScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hàng hóa</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="#fff" style={styles.icon} />
          <Icon name="sort" size={24} color="#fff" style={styles.icon} />
          <Icon name="more-vert" size={24} color="#fff" style={styles.icon} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Thêm hàng hóa</Text>
        <Icon name="inventory" size={100} color="#00bfa5" />
      </View>
      <TouchableOpacity style={styles.fab} onPress={() => { /* Logic thêm hàng hóa */ }}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    padding: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#00bfa5',
    fontSize: 24,
    marginBottom: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00bfa5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

export default HangHoaScreen;
