import React from 'react';
import Result from '../components/Result';

function ResultIndex(props){
    return(
        <main>
            {props.type === "civs" ? 
            <>
                <h2>Civilizations</h2>
                <ul className='list civilizations'>
                    {Object.keys(props.data).map(key => 
                        <Result key={key} id={key} data={props.data[key]} type={props.type} />
                    )}
                </ul>
            </>
            :
            <>
                <h2>Maps</h2>
                <ul className='list maps'>
                    {Object.keys(props.data).map(key => 
                        <Result key={key} id={key} data={props.data[key]} type={props.type} />
                    )}
                </ul> 
            </>
            }
        </main>
    )
}

export default ResultIndex;
