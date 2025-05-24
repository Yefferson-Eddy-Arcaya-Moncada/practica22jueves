import {useState} from 'react';
import type {FormEvent} from 'react';

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [comentarios, setComentarios] = useState('');
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>Registro de Estudiante</h2>

      {enviado ? (
        <div style={{ background: '#e0ffe0', padding: '15px', borderRadius: '8px' }}>
          <p><strong>¡Gracias {nombre}!</strong></p>
          <p>Hemos registrado tu correo: <strong>{correo}</strong></p>
          <p><strong>Carrera:</strong> {carrera}</p>
          <p><strong>Comentarios:</strong> {comentarios}</p>
        </div>
      ) : (
        <form onSubmit={manejarEnvio}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="nombre">Nombre completo:</label><br />
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="correo">Correo electrónico:</label><br />
            <input
              id="correo"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="carrera">Carrera o especialidad:</label><br />
            <input
              id="carrera"
              type="text"
              value={carrera}
              onChange={(e) => setCarrera(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="comentarios">Comentarios:</label><br />
            <textarea
              id="comentarios"
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit">Registrar</button>
        </form>
      )}
    </div>
  );
}
