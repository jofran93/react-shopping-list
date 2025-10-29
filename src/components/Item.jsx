export default function Item({ item }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 12px',
        border: '1px solid #444',
        borderRadius: 10,
        background: '#1f1f1f',
        color: '#f5f5f5',
        fontWeight: '500',
      }}
    >
      <span>
        <strong style={{ color: '#fff' }}>{item.nombre}</strong>
        <span style={{ color: '#ccc' }}> × {item.cantidad}</span>
      </span>
    </li>
  )
}

