import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import CarComponent from "./component/Cars";

export default function App() {
  const flatData = [
    {
      img: require("./asset/images/ModelX.jpeg"),
      title: "Model X",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
    {
      img: require("./asset/images/ModelY.jpeg"),
      title: "Model Y",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
    {
      img: require("./asset/images/Model3.jpeg"),
      title: "Model 3",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
    {
      img: require("./asset/images/ModelS.jpeg"),
      title: "Model S",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
    {
      img: require("./asset/images/SolarPanels.jpeg"),
      title: "Solar Panels",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
    {
      img: require("./asset/images/SolarRoof.jpeg"),
      title: "Solar Roof",
      description: "Starting at $6900",
      customButton: "Custom Order",
      simpleButton: "Existing enventory",
    },
  ];
  return (
    <View>
      <FlatList
        data={flatData}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarComponent
            img={item.img}
            title={item.title}
            description={item.description}
            customButton={item.customButton}
            simpleButton={item.simpleButton}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
