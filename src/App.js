import React from 'react';

import MyHeader from './components/myHeader'
const WorkArea = React.lazy(()=> import('./components/WorkArea'));
const AliFooter = React.lazy(()=> import('./components/AliFooter'));



function App(){
    if (!localStorage.getItem("data")){
        localStorage.setItem('data', JSON.stringify({notes: [], lists: [], reminders: []}));
    }
    const data = JSON.parse(localStorage.getItem('data'));

    return (
        <React.Fragment>
            <MyHeader />
            <React.Suspense fallback={<h3>Loading...</h3>}>
                <WorkArea data={data}/>
                <AliFooter />
            </React.Suspense>
        </React.Fragment>
    );
}
export default App;


