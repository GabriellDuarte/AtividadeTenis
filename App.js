import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaAdidas from './Components/Adidas/TenisAdidas';
import TelaNike from './Components/Nike/TenisNike';
import TelaMizuno from './Components/Mizuno/TenisMizuno';


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