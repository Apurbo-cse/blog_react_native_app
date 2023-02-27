import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeStack from "./HomeStack";
import { StyleSheet, Animated } from "react-native";
import { colors, sizes } from "../constants/theme";
import Icon from "../components/Icon";
import { Profile } from "../screens";

const tabs = [
  {
    name: "Home",
    screen: HomeStack,
  },
  {
    name: "Search",
    screen: Profile,
  },
  {
    name: "Favorite",
    screen: Profile,
  },
];

const Tab = createBottomTabNavigator();

export default function TabRoute() {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        {tabs.map(({ name, screen }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? colors.primary : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 30,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
