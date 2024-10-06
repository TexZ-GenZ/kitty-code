import { Link } from "expo-router";
import { Text, View } from "react-native";

// import './test'; // Add this to include the test

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={'./splash'}> <Text>Splash</Text> </Link>
      {/* <Link href={'/rough'}> <b>Rough</b> </Link> */}
    </View>
  );
}
