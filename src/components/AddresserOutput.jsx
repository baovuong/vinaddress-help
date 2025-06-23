import { useState } from 'react'

function AddresserOutput({name, addressed}) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>will be referred to as: {addressed ?? '???'}</h3>
        </div>
    )
};

export default AddresserOutput;