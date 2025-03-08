function InputField({id, placeholder, name}){
    return(
        <input id={id} placeholder={placeholder} name={name} className="w-full outline-none h-10 rounded-lg ps-4 border border-Hot-Pink" required />
    )
}

export default InputField;