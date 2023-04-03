import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaAdidas from './Components/Adidas/TenisAdidas';
import TelaNike from './Components/Mizuno/TenisMizuno';
import TelaMizuno from './Components/Nike/TenisNike';


const Nav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name='Adidas' component={TelaAdidas}/>
        <Nav.Screen name='Nike' component={TelaNike}/>
        <Nav.Screen name='Mizuno' component={TelaMizuno}/>
      </Nav.Navigator>
    </NavigationContainer>
  );
}