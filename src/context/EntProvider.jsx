'use client'
import { createContext, useState } from "react"

const EntContext = createContext()

const EntProvider = ({children}) => {

    const [listEnt, setListEnt] = useState(() => {
        const storedEnt = localStorage.getItem('listEnt');
        return storedEnt ? JSON.parse(storedEnt) : [];
    });

    const handleAddItem = () => {
        setListEnt(prevList => [
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
        setListEnt(prevList => {
            const updatedList = [...prevList];
            updatedList[index] = {
                ...updatedList[index],
                [field]: value
            };
            console.log(updatedList);
            return updatedList;

        });
    }


    const extractCode = () => {
        return listEnt.map(item => ({
            code: item.code,
            description: item.description
        }));
    };

    const extractData = extractCode();

    return(
        <EntContext.Provider
            value={{
                listEnt,
                handleAddItem,
                handleChangeFormItem,
                extractData,
            }}
        >
            {children}
        </EntContext.Provider>
    )
}

export{
    EntProvider
}

export default EntContext