import { Tabs } from "expo-router"
import { View } from "react-native"

import colors from "@/assets/themes/lightThemeColors"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons"

export default function RootLayout() {
  function iconContainerStyle(focused: boolean): object {
    return {
      backgroundColor: focused && colors.gray,
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 10,
      width: 43,
      height: 35,
      marginTop: 10,
      alignItems: "center",
    }
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='search'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <SimpleLineIcons
                name='magnifier'
                size={24}
                color={focused ? colors.orange : colors.darkerGray}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='orders'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <FontAwesome
                name='sticky-note-o'
                size={24}
                color={focused ? colors.orange : colors.darkerGray}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <MaterialCommunityIcons
                name='dots-square'
                size={24}
                color={focused ? colors.orange : colors.darkerGray}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='favorites'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <Ionicons
                name='heart-outline'
                size={24}
                color={focused ? colors.orange : colors.darkerGray}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={iconContainerStyle(focused)}>
              <FontAwesome
                name='user-circle'
                size={24}
                color={focused ? colors.orange : colors.darkerGray}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  )
}
