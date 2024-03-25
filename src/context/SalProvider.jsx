'use client'
import { createContext, useState } from "react"

const SalContext = createContext()

const SalProvider = ({children}) => {

    const [listSal, setListSal] = useState(() => {
        const storedSal = localStorage.getItem('listSal');
        return storedSal ? JSON.parse(storedSal) : [];
    });

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