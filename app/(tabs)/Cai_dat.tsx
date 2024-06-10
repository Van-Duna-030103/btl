import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const settingsOptions = [
  { name: 'Tổng thể', icon: 'cog' },
  { name: 'Giao diện', icon: 'palette' },
  { name: 'Thuộc tính hàng hóa', icon: 'cube-outline' },
  { name: 'Thuộc tính bổ sung', icon: 'plus-box-outline' },
  { name: 'Nhập và xuất Excel', icon: 'file-excel' },
  { name: 'Máy quét mã vạch', icon: 'barcode-scan' },
  { name: 'Giá cả', icon: 'tag-outline' },
  { name: 'Tuỳ chỉnh hoá đơn', icon: 'file-document-edit-outline' },
  { name: 'Số lượng tối thiểu', icon: 'alert-octagon-outline' },
  { name: 'Hồ sơ công ty', icon: 'office-building' },
  { name: 'Sao lưu và khôi phục', icon: 'database-refresh' },
  { name: 'Người dùng', icon: 'account-multiple' },
];

const CaiDatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Kho và Hàng hoá</Text>
        <TouchableOpacity>
          <Icon name="view-grid-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Cửa hàng chính</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {settingsOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <Icon name={option.icon} size={30} color="#00ADB5" />
            <Text style={styles.optionText}>{option.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  scrollViewContent: {
    paddingHorizontal: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  optionText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 15,
  },
});

export default CaiDatScreen;
