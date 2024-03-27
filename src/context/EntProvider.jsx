'use client'
import useInv from "@/hooks/useInv";
import { createContext, useState } from "react"

const EntContext = createContext()

const EntProvider = ({ children }) => {

    const [listEnt, setListEnt] = useState(() => {
        const storedEnt = localStorage.getItem('listEnt');
        return storedEnt ? JSON.parse(storedEnt) : [];
    });

    const { listInv, handleChangeFormItem: handleChangeInvItem  } = useInv()

    const handleAddItem = () => {
        setListEnt(prevList => [
            ...prevList,
            {
                key: prevList.length + 1,
                factura: '',
                fecha: '',
                code: '',
                description: '',
                cantidadEnt: 0,
            }
        ]);
    }

    const handleChangeFormItem = (index, field, value) => {
        if (field === 'code') {
            const itemInInv = listInv.find(item => item.code === value);
            if (itemInInv) {
                setListEnt(prevList => {
                    const updatedList = [...prevList];
                    updatedList[index] = {
                        ...updatedList[index],
                        [field]: value,
                        description: itemInInv.descriptionInv
                    };
                    return updatedList;
                });
            } else {
                setListEnt(prevList => {
                    const updatedList = [...prevList];
                    updatedList[index] = {
                        ...updatedList[index],
                        [field]: value,
                        description: ''
                    };
                    return updatedList;
                });
            }
        } else {
            setListEnt(prevList => {
                const updatedList = [...prevList];
                updatedList[index] = {
                    ...updatedList[index],
                    [field]: value
                };
                return updatedList;
            });
        }

        handleChangeInvItem(index, 'entrada', value);
    };
    
    

    return (
        <EntContext.Provider
            value={{
                listEnt,
                handleAddItem,
                handleChangeFormItem,
            }}
        >
            {children}
        </EntContext.Provider>
    )
}

export {
    EntProvider
}

export default EntContext