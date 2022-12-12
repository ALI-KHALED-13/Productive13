import React from 'react';

import MyHeader from './components/MyHeader'
const WorkArea = React.lazy(()=> import('./components/WorkArea'));
const Footer = React.lazy(()=> import('./components/Footer'));



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
                <Footer />
            </React.Suspense>
        </React.Fragment>
    );
}
export default App;


