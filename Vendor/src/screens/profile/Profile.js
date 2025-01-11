import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
} from "react-native";
import React, { useContext } from "react";
import Color from "../../constant/Color";
import Icon from "react-native-vector-icons/AntDesign";
import Form from "./Form";
import ValidationScreen from "./ValidationScreen";
import AuthContext from "../../store/authContext";

const Profile = ({ navigation }) => {
  const authCtx = useContext(AuthContext);

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
      }),
    [navigation]
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {authCtx.user.status ? (
          <Pressable style={[styles.list]}>
            <View style={[styles.row, { width: "100%" }]}>
              <View style={styles.dp}></View>
              <View>
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.subTitle}>AC Services</Text>
              </View>
            </View>
            <View
              style={{ marginTop: 20, borderRadius: 10, overflow: "hidden" }}>
              <Button title="Update Profile" color={Color.primary} />
            </View>
          </Pressable>
        ) : (
          <View style={styles.form}>
            <Form />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    color: Color.primary,
    fontSize: 20,
    marginLeft: 5,
  },
  price: {
    color: Color.secondary,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  list: {
    width: "90%",
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    paddingVertical: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  dp: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
  },
  name: {
    marginLeft: 20,
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },
  subTitle: {
    marginLeft: 20,
    fontSize: 15,
    color: "black",
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
});
