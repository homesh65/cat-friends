import React from 'react';

const Search = ({searchchange})=>{
    return(
        <div>
            <input className="bg-light-green b--dashed b--white-70 f4 br3 pa2"
             type="text" 
             placeholder="Search By Name" 
             onChange={searchchange} />
        </div>
    )
}

export default Search;