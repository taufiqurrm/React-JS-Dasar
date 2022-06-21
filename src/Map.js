import React from 'react'

const makanans = [
    {
        nama : 'soto',
        harga : 10000
    },
    {
        nama : 'bakso',
        harga : 15000
    },
    {
        nama : 'Kelang',
        harga : 50000
    },
]

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <ul>
          {makanans.map((makanan) => ( 
             <li>{makanan.nama} - Harga: {makanan.harga}</li>
          ))}
      </ul>
    </div>
  )
}

export default Map
