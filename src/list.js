import React from 'react';

const List = ({people})=>{
   
    return(
        <div>
            {people.map((person)=>{
            
            return (<div key={person.id} className="person_list">
                        <img className="person_image" src={person.image} alt={person.name}/>
                        <div className="inner_items">
                            <h3>{person.name}</h3>
                            <p>{person.age} years</p>
                        </div>
                    </div> 
                    );
        })}
        </div>
    );
    
};

export default List