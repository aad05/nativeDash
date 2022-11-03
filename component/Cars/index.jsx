import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CarComponent({
  img,
  title,
  description,
  customButton,
  simpleButton,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={img}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <View style={[styles.button, styles.buttonCustom]}>
              <Text style={styles.textCustom}>{customButton}</Text>
            </View>
            <View style={[styles.button, styles.buttonSimple]}>
              <Text style={styles.textSimple}>{simpleButton}</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  backgroundImage: {
    flex: 1,
  },
  textContainer: {
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    marginTop: "25%",
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
  },
  buttonWrapper: {
    marginTop: "auto",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSimple: {
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 20,
    marginBottom: "20%",
  },
  buttonCustom: {
    backgroundColor: "#000",
    color: "#fff",
  },
  textSimple: {
    color: "#000",
  },
  textCustom: {
    color: "#fff",
  },
});
