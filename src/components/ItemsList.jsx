import Item from './Item'

export default function ItemsList({ items }) {
  if (!items || items.length === 0) {
    return <p style={{ color: '#888' }}>No hay artículos. Agrega el primero 👇</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
      {items.map((it) => (
        <Item key={it.id} item={it} />
      ))}
    </ul>
  )
}
