'use client'
import React, { useEffect, useState } from 'react';
import mas from '@/assets/mas.svg';

const Inventario = () => {
    const [listInv, setListInv] = useState([]);

    const handleAddItem = () => {
        setListInv(prevList => [
            ...prevList,
            {
                key: prevList.length + 1,
                code: '',
                description: '',
                initialStock: 0,
                entrada: 0,
                salida: 0,
                finalStock: 0
            }
        ]);
    }

    const handleChangeFormItem = (index, field, value) => {
        setListInv(prevList => {
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
