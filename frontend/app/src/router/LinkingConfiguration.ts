export default {
  prefixes: ["https://app.foodfully.com"],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Nearby: {
            screens: {
              NearbyScreen: "nearby",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "profile",
            },
          },
        },
      },
    },
  },
};
