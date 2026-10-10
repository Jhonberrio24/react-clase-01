import { useState, useEffect } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setUsuarios(datos);
            })
            .catch((error) => console.error("Error al cargar usuarios:", error));
    }, []);

    return (
        <section style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Lista de Usuarios desde API</h2>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <strong>{usuario.name}</strong> ({usuario.email})
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Usuarios;