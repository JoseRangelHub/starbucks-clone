import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Bienvenido (a)☕</Text>
    </View>
  );
}

function ScanScreen() {
  return (
    <View>
      <Text>Starbucks cards</Text>
    </View>
  );
}

function OrderScreen() {
  return (
    <View>
      <Text>Ordena</Text>
    </View>
  );
}

function GiftsScreen() {
  return (
    <View>
      <Text>Tarjeta de Regalo</Text>
    </View>
  );
}

function StoresScreen() {
  return (
    <View>
      <Text>Tiendas</Text>
    </View>
  );
}

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Escanear"
        component={ScanScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ordena"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="coffee-to-go"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Regalos"
        component={GiftsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tiendas"
        component={StoresScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
