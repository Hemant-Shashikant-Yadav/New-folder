import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BTECH_PROGRAMS = [
  { id: 1, name: 'Mechanical Engineering', code: '628361210', intake: 120, year: 1999 },
  { id: 2, name: 'Computer Science & Engineering', code: '628324210', intake: 180, year: 2001 },
  { id: 3, name: 'Electrical Engineering', code: '628329310', intake: 120, year: 2004 },
  { id: 4, name: 'Civil Engineering', code: '628319110', intake: 60, year: 2010 },
  { id: 5, name: 'Aeronautical Engineering', code: '628300210', intake: 60, year: 2013 },
  { id: 6, name: 'Food Technology', code: '628350310', intake: 30, year: 2019 },
  { id: 7, name: 'Artificial Intelligence and Data Science', code: '628326310', intake: 60, year: 2021 },
  { id: 8, name: 'Computer Science & Engg. (Internet of Things and Cyber Security Including Block Chain Technology.)', code: '628392010', intake: 60, year: 2021 },
];

const OTHER_PROGRAMS = [
  { id: 1, name: 'Bachelor of Business Administration (BBA)', code: '', intake: 60, year: 2024 },
  { id: 2, name: 'Bachelor of Computer Application (BCA)', code: '', intake: 60, year: 2024 },
];

function ProgramTable({ title, data }) {
  return (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>{title}</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerCell, { flex: 0.5 }]}>Sr. No</Text>
          <Text style={[styles.headerCell, { flex: 2 }]}>Programs</Text>
          <Text style={[styles.headerCell, { flex: 1 }]}>Program Code</Text>
          <Text style={[styles.headerCell, { flex: 1 }]}>Intake</Text>
          <Text style={[styles.headerCell, { flex: 0.8 }]}>Year</Text>
        </View>
        {data.map((program) => (
          <View key={program.id} style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 0.5 }]}>{program.id}</Text>
            <Text style={[styles.cell, { flex: 2 }]}>{program.name}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{program.code || '-'}</Text>
            <Text style={[styles.cell, { flex: 1 }]}>{program.intake}</Text>
            <Text style={[styles.cell, { flex: 0.8 }]}>{program.year}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function Programs() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Academic Programs</Text>
        <ProgramTable title="B.Tech Programs" data={BTECH_PROGRAMS} />
        <ProgramTable title="Other Programs" data={OTHER_PROGRAMS} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a237e',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
  },
  tableContainer: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#1a237e',
    padding: 15,
    fontFamily: 'Inter_600SemiBold',
  },
  table: {
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#1a237e',
    fontSize: 14,
    paddingHorizontal: 5,
    fontFamily: 'Inter_700Bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 10,
  },
  cell: {
    fontSize: 14,
    paddingHorizontal: 5,
    color: '#424242',
    fontFamily: 'Inter_400Regular',
  },
});