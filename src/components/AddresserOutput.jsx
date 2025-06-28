import { useState } from 'react'

function AddresserOutput({name, yourAgeRange, yourGender, theirAgeRange, theirGender}) {

    
    // calculate addressed

    // check gender

    // check how much younger/older 

    const addressed = yourAgeRange <= theirAgeRange ? "youngster" : "elder";

    return (
        <div>
            <h2>{name}</h2>
            <h3>will be referred to as: {addressed ?? '???'}</h3>
        </div>
    )
};

export default AddresserOutput;