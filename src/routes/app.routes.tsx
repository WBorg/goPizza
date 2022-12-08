import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from '@screens/Login'
import { PizzaSize } from '@screens/PizzaSize'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="chooseSize" component={PizzaSize} />
    </Navigator>
  )
}
