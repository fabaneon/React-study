import React from 'react'
import './classfunction.css'

// class Clas extends React.Componenet{
//     render(){
//         return(
//             <div>
//                 class
//             </div>
//         )
//     }
// }
function Funct(){
    return(
        <div>
            function
        </div>
    );
}
function ClassFunction(){
    return(
        <div className="App">
            <div className='Container-App-Main'>
            <div className="App-Main">
                <Funct></Funct>
                {/* <Clas></Clas> */}
            </div>
            </div>
        </div>
    );
}

export default ClassFunction;