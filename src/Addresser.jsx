import { useState } from 'react'

function Addresser({name}) {
    return (
        <div>
        <h1>{name}</h1>
        <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non-Binary</option>
        </select>
        <br/>
        <select name="age-range">
            <option value="child">Child (3 - 12)</option>
            <option value="teenager">Teenager (13 - 17)</option>
            <option value="young-adult">Young Adult (18 - 25)</option>
            <option value="adult">Adult (25 - 65)</option>
            <option value="elderly">Elderly (65 and older)</option>
        </select>
        </div>
    )
};

export default Addresser;