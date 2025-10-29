import { useState } from 'react'

export default function ItemForm({ onAdd }) {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre.trim()) return

    // Enviamos datos al componente padre
    onAdd({ nombre: nombre.trim(), cantidad: Number(cantidad) || 1 })

    // Limpiamos el formulario
    setNombre('')
    setCantidad(1)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, marginBottom: '1rem' }}>
      <label>
        Artículo:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Huevos"
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </label>

      <label>
        Cantidad:
        <input
          type="number"
          value={cantidad}
          min={1}
          onChange={(e) => setCantidad(e.target.value)}
          style={{ width: '100%', padding: 8, marginTop: 4 }}
        />
      </label>

      <button
        type="submit"
        style={{
          padding: '8px 12px',
          border: 'none',
          borderRadius: 8,
          background: '#2563eb',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        Agregar
      </button>
    </form>
  )
}
