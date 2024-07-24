import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PatientDetails from '../component/PatientDetails';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function PatientProfileWithoutparameter() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <AntDesign name='arrowleft' size={28} color={'black'} />
        <Text style={styles.navbarTitle}>Monitored Patient</Text>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.patientProfileDetails}>
          <FontAwesome5 name='user-circle' size={80} color={'black'} />
          <Text style={styles.patientName}>María Clemente</Text>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Foundation name='female-symbol' size={20} color={'#76BC21'} />
              <Text style={styles.detailText}>Female</Text>
            </View>
            <View style={styles.detailItem}>
              <Fontisto name='date' size={20} color={'#76BC21'} />
              <Text style={styles.detailText}>67 Years</Text>
            </View>
            <View style={styles.detailItem}>
              <MaterialIcons name='bloodtype' size={20} color={'#76BC21'} />
              <Text style={styles.detailText}>O+</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <MaterialIcons name='height' size={20} color={'#76BC21'} />
              <Text style={styles.detailText}>168 cm</Text>
            </View>
            <View style={styles.detailItem}>
            <Foundation name='female-symbol' size={20} color={'#76BC21'} />
              <Text style={styles.detailText}>64 kg</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.addButton}>
          <FontAwesome5 name="file-medical-alt" size={15} color="white" />
          <Text style={styles.addButtonText}>Measure vital signs</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.measurmentDetails}>
          {/* Add measurement details here */}
          <PatientDetails name="Medical history" icon="file-medical" color={'#76BC21'} />
          <PatientDetails name="Health thresholds" icon="history-edu" color={'#76BC21'} />
          <PatientDetails name="Reminders" icon="reminder" color={'#76BC21'} />
        </View>

        <View style={styles.basicDetails}>
          {/* Add basic details here */}
          <View style={{flexDirection :'row' , borderWidth : 1, borderColor : 'red', alignSelf : 'center',padding : 10, width : 300, justifyContent : 'center',alignItems : 'center', borderRadius : 10,backgroundColor : 'white',height : 50}}>
          <Ionicons name='exit-outline' size={20} color={'red'}/>
          <TouchableOpacity>
            <Text style={styles.monintoring}>
                stop Monitoring
            </Text>
          </TouchableOpacity>
          </View>
       
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  navbarTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    paddingLeft: 15,
  },
  secondContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent : 'space-between'
  },
  patientProfileDetails: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    width : '100%'
  },
  patientName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 10,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth : 0.5,
    borderRightColor : 'gray',
    marginRight : 10,
    padding : 3
    
  },
  detailText: {
    marginLeft: 5,
    color: 'black',
    fontSize: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00263E',
    borderRadius: 8,
    width : '100%',
    height : 50,
    marginTop : 10
  },
  addButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center'
  },
  measurmentDetails: {
    // Add styling for measurement details here
    
  },
  basicDetails: {
    marginTop : 20
    // Add styling for basic details here
  },
  monintoring :{
    fontSize : 13,
    fontWeight : 'bold',
    color : 'red'
  }
});