import React from 'react';
import MyHeader from './components/myHeader'
import WorkArea from './components/WorkArea'
import AliFooter from './components/AliFooter'

function App(){
    //useeffect on mount to fetch from localSorage
    return (
        <React.Fragment>
            <MyHeader />
            <WorkArea />
            <AliFooter />
        </React.Fragment>
    );
}
export default App;


