import { useState } from 'react'

function AddresserOutput({name, yourAgeRange, yourGender, theirAgeRange, theirGender}) {


    const pronounMap = [
        'Ch\u00E1u',
        'Con',
        'Em',
        {'m': 'Anh', 'f': 'Ch\u7883'},
        {'m': 'Ch\u0250', 'f': 'Co'},
        'B\u0225c',
        {'m': '\u00D4ng', 'f': 'B\u00E0'}
    ];

    // check how much younger/older 

    // check gender

    const addressed = yourAgeRange <= theirAgeRange ? pronounMap[0] : pronounMap[6].m;

    return (
        <div>
            <h2>{name}</h2>
            <h3>will be referred to as: {addressed ?? '???'}</h3>
        </div>
    )
};

export default AddresserOutput;