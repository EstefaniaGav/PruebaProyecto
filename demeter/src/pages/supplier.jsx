import React from 'react'
import { useFetch } from '../hooks/useFetch'

function Supplier() {
  const { data, loading } = useFetch('http://localhost:4003/api/supplier')


  return (
    <div>
      {loading ? (<h1>Cargando...</h1>) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Insumo</th>
              <th>Telefono</th>
              <th>Ciudad</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data?.map(proveedor => {
              return <tr>
                <td>{proveedor.Nombre}</td>
                <td>{proveedor.Apellido}</td>
                <td>{proveedor.Insumo}</td>
                <td>{proveedor.Telefono}</td>
                <td>{proveedor.Ciudad}</td>
                <td>{proveedor.Email}</td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Supplier