import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
const screenWidth = Dimensions.get("screen").width;
const LandingScreen = ({navigation}) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [address, setAddress] = useState<Location.Address>();

  const [displayAddress, setDisplayAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMsg("Permission to access location is not granted");
      }

      let location: any = await Location.getCurrentPositionAsync();

      const { coords } = location;

      if (coords) {
        const { latitude, longitude } = coords;
        let addressResponse: any = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        for (let item of addressResponse) {
          let currentAddress = ` 
          ${item.country}
          ${item.city} 
          ${item.street} 
         `;

          setAddress(item);
          setDisplayAddress(currentAddress);
          if(currentAddress.length>0){
            setTimeout(()=>{
           navigation.navigate('BottomNavigator')
            },2000)
          }
          return;
        }
      } else {
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
        <Image
          source={require("../images/delivery_icon.png")}
          style={styles.deliveryIcon}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery adress</Text>
        </View>
        <Text style={styles.addressText}>{displayAddress}</Text>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(243,243,242)",
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: "red",
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  addressTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#7D7D7D",
  },
  addressText: {
    fontSize: 20,
    fontWeight: "200",
    color: "#4F4F4F",
  },

  footer: {
    flex: 1,
  },
  deliveryIcon: {
    width: 120,
    height: 120,
  },
});
