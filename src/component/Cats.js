import React from 'react';
import './Cats.css'

const Cats = (props)=>{
    return (
        <div  className='scroller b--dashed b--white-70 pa4'>
            {props.catlist.map((cats,i) => 
                <div key={i} className="bg-light-green dib br3 pa3 ma2 grow">
                    <img src={`https://robohash.org/${cats.name}?set=set4`} alt={cats.name}/>
                    <h3>{cats.name}</h3>
                    <h3>{cats.email}</h3>
                </div>    
            )}
        </div>
    );
}

export default Cats;