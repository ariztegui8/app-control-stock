'use client'
import React, { useEffect, useState } from 'react';
import mas from '@/assets/mas.svg';
import useInv from '@/hooks/useInv';

const Inventario = () => {
    // const [listInv, setListInv] = useState([]);

    const {listInv, handleAddItem, handleChangeFormItem} = useInv()

    useEffect(() => {
        localStorage.setItem('listInv', JSON.stringify(listInv));
    }, [listInv]);

    // const [formStorage, setFormStorage] = useState(null)

    // useEffect(() => {
    //   const storedForm = localStorage.getItem('form');
    //   if (storedForm) {
    //     setFormStorage(JSON.parse(storedForm))
    //     console.log('Datos del localStorage:', formStorage);
    //   } else {
    //     console.log('No se encontraron datos en el localStorage');
    //   }
    // }, []);


    return (
        <div className='py-6 px-10'>
            <div className='flex items-center justify-between gap-2 mb-4'>
                <h1 className='text-bold text-2xl'>Inventario</h1>
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
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Strock Inicial</th>
                            <th>Entradas</th>
                            <th>Salidas</th>
                            <th>Stock Final</th>
                        </tr>
                    </thead>

                    <tbody>
                        {listInv.map((item, index) => (
                            <tr key={index}>
                                <th>{item.key}</th>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.code}
                                        onChange={e => handleChangeFormItem(index, 'code', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.description}
                                        onChange={e => handleChangeFormItem(index, 'description', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.initialStock}
                                        onChange={e => handleChangeFormItem(index, 'initialStock', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.entrada}
                                        onChange={e => handleChangeFormItem(index, 'entrada', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.salida}
                                        onChange={e => handleChangeFormItem(index, 'salida', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-gray-50 w-full min-w-28"
                                        value={item.finalStock}
                                        onChange={e => handleChangeFormItem(index, 'finalStock', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {listInv.length == 0 &&
                    <p className='text-center text-xl py-6'>Agrega un inventario</p>
                }
            </div>
        </div>
    )
}

export default Inventario;
