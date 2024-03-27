'use client'
import useInv from "@/hooks/useInv";
import { createContext, useState } from "react"

const SalContext = createContext()

const SalProvider = ({children}) => {

    const [listSal, setListSal] = useState(() => {
        const storedSal = localStorage.getItem('listSal');
        return storedSal ? JSON.parse(storedSal) : [];
    });

    const { listInv} = useInv()

    const handleAddItem = () => {
        setListSal(prevList => [
            ...prevList,
            {
                key: prevList.length + 1,
                factura: '',
                fecha: '',
                code: '',
                description: '',
                cantidadSal: 0,
            }
        ]);
    }

    const handleChangeFormItem = (index, field, value) => {
        if (field === 'code') {
            const itemInInv = listInv.find(item => item.code === value);
            if (itemInInv) {
                setListSal(prevList => {
                    const updatedList = [...prevList];
                    updatedList[index] = {
                        ...updatedList[index],
                        [field]: value,
                        description: itemInInv.descriptionInv
                    };
                    return updatedList;
                });
            } else {
                setListSal(prevList => {
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
            setListSal(prevList => {
                const updatedList = [...prevList];
                updatedList[index] = {
                    ...updatedList[index],
                    [field]: value
                };
                return updatedList;
            });
        }

      
    };

    return(
        <SalContext.Provider
            value={{
                listSal,
                handleAddItem,
                handleChangeFormItem,
            }}
        >
            {children}
        </SalContext.Provider>
    )
}

export{
    SalProvider
}

export default SalContext