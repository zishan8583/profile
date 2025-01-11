import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Color from "../../constant/Color";
import BaseUrl from "../../constant/BaseUrl";
import AuthContext from "../../store/authContext";
import onPayButtonPress from '../../components/Rez';
import WalletContext from "../../store/walletContext";

const Wallet = ({ isVisible, setIsVisible }) => {
  const [amount, setAmount] = useState(0);

  const authCCtx = useContext(AuthContext);
  const walletCtx = useContext(WalletContext);



  return (
    <Modal animationType={"slide"} transparent={false} visible={isVisible}>
      <View style={{ flexGrow: 1, backgroundColor: Color.primary }}>
      <TouchableOpacity
          onPress={() => setIsVisible(false)}
          style={{ position: 'absolute', top: 20, left: 12, backgroundColor: 'white', borderRadius: 50, padding: 5 }}>
          <Icon name='chevron-left' color={Color.primary} size={18} />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <TextInput
            onChangeText={(text) => setAmount(parseInt(text*100))}
            keyboardType="number-pad"
            placeholder="Enter Amount"
            style={{
              backgroundColor: "white",
              marginVertical: 10,
              width: "60%",
              borderRadius: 5,
            }}
          />

          <TouchableOpacity
            onPress={()=>{
              
              onPayButtonPress(authCCtx.user.id,amount,walletCtx.onRecharge)

              setIsVisible(false);
              
              
              }
              
              }
            style={{
              fontWeight: "bold",
              backgroundColor: Color.secondary,
              color: "white",
              fontSize: 20,
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}>
              Recharge
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
