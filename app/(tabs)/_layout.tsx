import { Tabs } from 'expo-router';
import { Chrome as Home, GraduationCap, Building2, BookOpen, Star, Globe } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        borderTopColor: '#e0e0e0',
      },
      tabBarActiveTintColor: '#1a237e',
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => <Building2 size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: 'Programs',
          tabBarIcon: ({ color, size }) => <BookOpen size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="placements"
        options={{
          title: 'Placements',
          tabBarIcon: ({ color, size }) => <GraduationCap size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          title: 'Reviews',
          tabBarIcon: ({ color, size }) => <Star size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="website"
        options={{
          title: 'Website',
          tabBarIcon: ({ color, size }) => <Globe size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}