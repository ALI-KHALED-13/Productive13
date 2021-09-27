import React from 'react';

import MyHeader from './components/myHeader'
import WorkArea from './components/WorkArea'
import AliFooter from './components/AliFooter'


function App(){
    if (!localStorage.getItem("data")){
        localStorage.setItem('data', JSON.stringify({notes: [], lists: [], reminders: []}));
    }
    const data = JSON.parse(localStorage.getItem('data'));

    return (
        <React.Fragment>
            <MyHeader />
            <WorkArea data={data}/>
            <AliFooter />
        </React.Fragment>
    );
}
export default App;


