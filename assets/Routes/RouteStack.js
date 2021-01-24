import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer } from 'react-navigation'
import RegistrationComponent from '../Components/RegistrationComponent'
import QRCodeComponent from '../Components/QRCodeComponent'
import ProgressBarComponent from '../Components/ProgressBarComponent'

const screens = {
    RegistrationPage: {
        screen: RegistrationComponent
    },
    QRCodePage: {
        screen: QRCodeComponent
    },
    ProgressBarPage: {
        screen: ProgressBarComponent
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);