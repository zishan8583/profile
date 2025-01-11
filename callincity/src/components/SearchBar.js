 
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search For Service"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }
          }
        
        />
         {/* cross Icon, depending on whether the search bar is clicked or not */}
         {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
              setClicked(false);
          }}/>
        )}
        
      </View>
     
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5

  },
  searchBar__unclicked: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'gray',
   
 
  },
  searchBar__clicked: {
    paddingHorizontal: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: 'blue',
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    fontSize: 18,
    width: "90%",
    alignSelf: 'center'
  },
});