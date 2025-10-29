
import React, { Component } from 'react'
import Header from './components/Header'
import ItemForm from './components/ItemForm'
import ItemsList from './components/ItemsList'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    const iniciales = [
      { id: 1, nombre: 'Pan', cantidad: 2 },
      { id: 2, nombre: 'Leche', cantidad: 1 }
    ]
    this.setState({ items: iniciales })
  }

  handleAddItem = (nuevoItem) => {
    const id = this.state.items.length
      ? Math.max(...this.state.items.map(i => i.id)) + 1
      : 1
    const itemConId = { id, ...nuevoItem }

    this.setState(prev => ({
      items: [...prev.items, itemConId]
    }))
  }

  render() {
    const { items } = this.state
    return (
      <div style={{
        maxWidth: 600,
        margin: '2rem auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: 12,
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        background: '#2d2d2d',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <Header />
        <ItemForm onAdd={this.handleAddItem} />
        <ItemsList items={items} />
      </div>
    )
  }
}