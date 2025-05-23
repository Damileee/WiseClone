import { Tabs } from 'expo-router';
import HomeIcon from '../../components/icons/HomeIcon';
import CardsIcon from '../../components/icons/CardsIcon';
import RecipientsIcon from '../../components/icons/RecipientsIcon';
import PaymentsIcon from '../../components/icons/PaymentsIcon';
import { verticalScale } from '../../utils/responsive';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#163300",
        tabBarInactiveTintColor: "#666",
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          paddingHorizontal: verticalScale(12),
          paddingTop: verticalScale(4),
        },
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{ 
          title: "Home", 
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#163300" : "#666"} />
          )
        }} 
      />
      <Tabs.Screen 
        name="cards"
        options={{ 
          title: "Cards", 
          tabBarIcon: ({ focused }) => (
            <CardsIcon color={focused ? "#163300" : "#666"} />
          )
        }} 
      />
      <Tabs.Screen 
        name="recipients"
        options={{ 
          title: "Recipients", 
          tabBarIcon: ({ focused }) => (
            <RecipientsIcon color={focused ? "#163300" : "#666"} />
          )
        }} 
      />
      <Tabs.Screen 
        name="payments"
        options={{ 
          title: "Payments", 
          tabBarIcon: ({ focused }) => (
            <PaymentsIcon color={focused ? "#163300" : "#666"} />
          )
        }} 
      />
    </Tabs>
  );
}