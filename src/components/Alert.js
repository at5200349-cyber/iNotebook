import React from 'react'

const Alert = ({message, type}) => {
    if(!message){
        return null;
    }
  return (
   <>
   <div
      className={`px-4 py-3 rounded mb-4 ${
        type === "success"
          ? "bg-green-100 border border-green-400 text-green-700"
          : type === "error"
          ? "bg-red-100 border border-red-400 text-red-700"
          : type === "warning"
          ? "bg-yellow-100 border border-yellow-400 text-yellow-700"
          : "bg-blue-100 border border-blue-400 text-blue-700"
      }`}
    >
      {message}
    </div>
   </>
  )
}

export default Alert
