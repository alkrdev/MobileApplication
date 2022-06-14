import React from "react";
import { Appbar, Menu } from 'react-native-paper';

const NavigationBar = (props) => {
    return (
      <Appbar.Header>
        {props.back ? <Appbar.BackAction onPress={props.navigation.goBack} /> : <Menu
            anchor={
              <Appbar.Action icon="menu" color="white" onPress={() => props.navigation.navigate('Menu')} />
            }>
        </Menu>}
        <Appbar.Content title={props.options.title}/>
      </Appbar.Header>
    );
  }

export default NavigationBar;

