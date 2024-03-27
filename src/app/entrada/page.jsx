'use client'
import React, { useEffect, useState } from 'react'
import mas from '@/assets/mas.svg';
import useEnt from '@/hooks/useEnt';

const Entrada = () => {

    const { listEnt, handleAddItem, handleChangeFormItem} = useEnt()

    useEffect(() => {
        localStorage.setItem('listEnt', JSON.stringify(listEnt));
    }, [listEnt]);

    return (
        <div className='py-6 px-3 md:px-10'>
            <div className='flex items-center justify-between gap-2 mb-4'>
                <h1 className='text-bold text-2xl'>Entradas</h1>
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
                        {listEnt.map((item, index) => (
                            <tr key={index}>
                                <th>{item.key}</th>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-green-100 w-full min-w-28"
                                        value={item.factura}
                                        onChange={e => handleChangeFormItem(index, 'factura', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-green-100 w-full min-w-28"
                                        value={item.fecha}
                                        onChange={e => handleChangeFormItem(index, 'fecha', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-green-100 w-full min-w-28"
                                        value={item.code}
                                        onChange={e => handleChangeFormItem(index, 'code', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="input focus:outline-none bg-green-100 w-full min-w-28"
                                        value={item.description}
                                        onChange={e => handleChangeFormItem(index, 'description', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="input focus:outline-none bg-green-100 w-full min-w-28"
                                        value={item.cantidadEnt}
                                        onChange={e => handleChangeFormItem(index, 'cantidadEnt', e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                {listEnt.length == 0 &&
                    <p className='text-center text-xl py-6'>Agrega una entrada</p>
                }

            </div>
        </div>
    )
}

export default Entrada