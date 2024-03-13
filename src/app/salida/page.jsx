'use client'
import React, { useState } from 'react'
import mas from '@/assets/mas.svg';

const Salida = () => {

  const [listSal, setListSal] = useState([]);

  const handleAddItem = () => {
      setListSal(prevList => [
          ...prevList,
          {
              key: prevList.length + 1,
              factura: '',
              fecha: '',
              code: '',
              description: '',
              cantidad: 0,
          }
      ]);
  }

  const handleChangeFormItem = (index, field, value) => {
      setListSal(prevList => {
          const updatedList = [...prevList];
          updatedList[index] = {
              ...updatedList[index],
              [field]: value
          };
          console.log(updatedList);
          return updatedList;
          
      });
  }

  return (
    <div className='py-6 px-10'>
            <div className='flex items-center justify-between gap-2 mb-4'>
                <h1 className='text-bold text-2xl'>Salidas</h1>
                <button className="btn" onClick={handleAddItem}>
                    <img src={mas.src} alt="" />
                    Agregar
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>N° Factura</th>
                            <th>Fecha</th>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {listSal.map((item, index) => (
                            <tr key={index}>
                                <th>{item.key}</th>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.factura}
                                        onChange={e => handleChangeFormItem(index, 'factura', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.fecha}
                                        onChange={e => handleChangeFormItem(index, 'fecha', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.code}
                                        onChange={e => handleChangeFormItem(index, 'code', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.description}
                                        onChange={e => handleChangeFormItem(index, 'description', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.cantidad}
                                        onChange={e => handleChangeFormItem(index, 'cantidad', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    
                </table>
              {listSal.length == 0 && 
                  <p className='text-center text-xl py-6'>Agrega una salida</p>
              }
            </div>
        </div>
  )
}

export default Salida