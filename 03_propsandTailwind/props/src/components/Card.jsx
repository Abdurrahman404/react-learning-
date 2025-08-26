import React from 'react'

function Card(props) {
  return ( 
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white rounded-lg shadow-md w-80 p-4">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?auto=format&fit=crop&w=927&q=80"
          alt="AirPods"
          className="rounded-md h-48 w-full object-cover mb-4"
        />
        <h2 className="text-lg font-semibold text-gray-800">{props.name}</h2>
        <p className="text-sm text-gray-600 mb-2">$95.00</p>
        <p className="text-sm text-gray-500 mb-4">
          Voice-activated Siri, long battery life, and wireless charging case.
        </p>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>

  )
}

export default Card