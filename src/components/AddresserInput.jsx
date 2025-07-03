
function AddresserInput({ageRanges, genders, onAgeRangeChange, onGenderChange}) {
    return (
        <div>
        <select name="gender" onChange={onGenderChange}>
            {genders.map(gender => (<option value={gender[0].toLowerCase()}>{gender}</option>))}
        </select>
        <br/>
        <select name="age-range" onChange={onAgeRangeChange}>
            {ageRanges.map(ageRange => (<option value={ageRange.value}>{ageRange.name}</option>))}
        </select>
        </div>
    )
};

export default AddresserInput;