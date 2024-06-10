import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Link, Stack } from 'expo-router';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color="white" />
          {/* onPress={( => {
            NavigationContainer.openDrawer();
          } )} */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kho và Hàng hoá</Text>
        <TouchableOpacity>
          <Icon name="view-grid-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Cửa hàng chính</Text>
      </View>
      <View style={styles.grid}> 
        <Link href="../hang_hoa" style={styles.gridItem} >
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="cube-outline" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Hàng hoá</Text>
          <Text style={styles.gridItemNumber}>0</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../hoa_don" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="file-document-outline" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Hoá đơn</Text>
          <Text style={styles.gridItemNumber}>0</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../thong_ke" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="chart-bar" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Thống kê</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../chi_tieu" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="cash-multiple" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Chi tiêu</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../nhap_hang" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="package-variant-plus" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Vào Nhập hàng</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../ban_hang" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="package-variant-minus" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Vào Bán hàng</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../quet_ma" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="barcode-scan" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Quét mã vạch</Text>
        </TouchableOpacity>
        </Link>
        <Link href="../ho_tro" style={styles.gridItem}>
        <TouchableOpacity style={{width:'100%',height:'100%', justifyContent:'center', alignItems:'center'}}>
          <Icon name="message-question-outline" size={50} color="#000080" />
          <Text style={styles.gridItemText}>Cần hỗ trợ?</Text>
        </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
  subHeader: {
    backgroundColor: '#555',
    padding: 10,
  },
  subHeaderTitle: {
    color: 'white',
    textAlign: 'center',
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    backgroundColor: '#CFCFCF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
  gridItemText: {
    color: '#000080',
    fontSize: 16,
    marginTop: 10,
  },
  gridItemNumber: {
    color: 'lightblue',
    fontSize: 20,
  },
});

export default App;

