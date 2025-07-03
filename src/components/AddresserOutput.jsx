import { useState } from 'react'

function AddresserOutput({name, yourAgeRange, gender, theirAgeRange}) {

    const generation = ageRange => Math.floor(ageRange/4);

    const pronounMap = [
        { 'm': 'Ch\u00E1u', 'f': 'Ch\u00E1u' },
        { 'm': 'Em',        'f': 'Em' },
        { 'm': 'B\u1EA1n',       'f': 'B\u1EA1n' },
        { 'm': 'Anh',       'f': 'Ch\u1ECB'},
        { 'm': 'Ch\u00FA',  'f': 'C\u00F4' },
        { 'm': '\u00D4ng',  'f': 'B\u00E0'}
    ];

    // using https://ling-app.com/blog/vietnamese-pronouns/


    const generationDifference = generation(yourAgeRange) - generation(theirAgeRange);
    var addressed = '';

    switch (Math.abs(generationDifference)) {
      case 0:
        // within generation, use em, anh, chi
        addressed = pronounMap[Math.sign(yourAgeRange-theirAgeRange) + 2][gender];
        break;
      case 1:
        // within one generation, use chau, chu, co
        addressed = pronounMap[(yourAgeRange < theirAgeRange ? 0 : 1) * 4][gender];
        break;
      case 2:
        // within two generations, use chau, ong, ba
        addressed = pronounMap[(yourAgeRange < theirAgeRange ? 0 : 1) * 5][gender];
        break;
    }

    return (
        <div>
            <h2>{name}</h2>
            <h3>will be referred to as: {addressed ?? '???'}</h3>
        </div>
    )
};

export default AddresserOutput;