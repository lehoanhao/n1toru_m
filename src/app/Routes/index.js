import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from '../Screens/SettingScreen/index';

export default routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomeScreen/>
  },
  {
    path: '/setting',
    main: () => <SettingScreen/>
  }
]