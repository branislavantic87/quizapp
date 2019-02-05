import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import MainScreen from './components/MainScreen';
import Quiz from './components/Quiz';
import { Result } from './components/Result';

const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='root'>
                    <Scene hideNavBar key={'Home'} component={MainScreen} inital />
                </Scene>
                <Scene hideNavBar key={'Quiz'}>
                    <Scene hideNavBar key={'Quiz'} component={Quiz} />
                </Scene>
                <Scene hideNavBar key={'Result'} component={Result} />
            </Stack>
        </Router>
    )
}

export default RouterComponent;