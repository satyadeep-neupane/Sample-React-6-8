function Input({label, type, name, id, value, handler, error}) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input type={type} name={name} id={id} value={value} onChange={handler} />
            {error && <p style={{"color": "red"}}>{error}</p>}
        </div>
    )
}

export default Input;