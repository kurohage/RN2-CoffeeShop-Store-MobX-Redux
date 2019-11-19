import React from "react";
import { Icon, Button } from "native-base";
import { withNavigation } from "react-navigation";

function Cart(props) {
  return (
    <Icon
      type="AntDesign"
      name="shoppingcart"
      onPress={() => props.navigation.navigate("CartScreen")}
      style={{ color: "white" }}
    />
  );
}

export default withNavigation(Cart);
