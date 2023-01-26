function Input({label, type, name, id, value, handler}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value} onChange={handler} />
        </div>
    )
}

export default Input;