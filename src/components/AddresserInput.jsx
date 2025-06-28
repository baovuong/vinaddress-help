
function AddresserInput({onAgeRangeChange, onGenderChange}) {
    return (
        <div>
        <select name="gender" onChange={onGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Non-Binary</option>
        </select>
        <br/>
        <select name="age-range" onChange={onAgeRangeChange}>
            <option value="1">Child (3 - 12)</option>
            <option value="2">Teenager (13 - 17)</option>
            <option value="3">Young Adult (18 - 25)</option>
            <option value="4">Adult (25 - 65)</option>
            <option value="5">Elderly (65 and older)</option>
        </select>
        </div>
    )
};

export default AddresserInput;