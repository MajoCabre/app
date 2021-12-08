import React, { useState} from 'react';

const FormularioCompra = ({ onClick}) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const nameChange = (event) => {
        setName(event?.target?.value);
    }
    const phoneChange = (event) => {
        setPhone(event?.target?.value);
    }
    const emailChange = (event) => {
        setEmail(event?.target?.value);
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        const dataCompra = {
            buyer: {
                name,
                phone,
                email,
            }
        }

        onClick(dataCompra);
    }

    return (
        <form className="user_form">
        <label>
            <span className="productos">Nombre:</span>
            <input type="text" name="name" value={name} onChange={nameChange} />
        </label>
        <label>
            <span className="productos">Telefono:</span>
            <input type="text" name="phone" value={phone} onChange={phoneChange} />
        </label>
        <label>
            <span className="productos">Email:</span>
            <input type="text" name="email" value={email} onChange={emailChange} />
        </label>

        <div className="contenedor">
            <button className="button confirm_button" onClick={handlerSubmit}>Comprar</button>
        </div>
    </form>
    )
}

export default FormularioCompra;
