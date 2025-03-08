function Select({ defaultValue, name, list, label }) {

    const newlist = list?.map((item, idx) => {
        return <option value={item} key={idx}>{item}</option>
    })

    return (
        <div className="w-full flex gap-2 items-center">
            {label ? <label className="text-xl">{label}</label> : null}
            <select value={defaultValue} name={name} className="w-full h-10 rounded-lg ps-4 outline-none border border-Hot-Pink cursor-pointer text-xl" required>
                <option disabled>Select an option</option>
                {newlist}
            </select>
        </div>
    )
}

export default Select;