'use client'
import { createContext, useState } from "react"

const InvContext = createContext()

const InvProvider = ({children}) => {

    const [listInv, setListInv] = useState(() => {
        const storedList = localStorage.getItem('listInv');
        return storedList ? JSON.parse(storedList) : [];
    });

    const handleAddItem = () => {
        setListInv(prevList => [
            ...prevList,
            {
                key: prevList.length + 1,
                code: '',
                descriptionInv: '',
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

    const descripInv = () => {
        return listInv.map(item => ({
            description: item.descriptionInv
        }));
    };

    const descriptionDataInv = descripInv();

    return(
        <InvContext.Provider
            value={{
                listInv,
                handleAddItem,
                handleChangeFormItem,
                descriptionDataInv,
            }}
        >
            {children}
        </InvContext.Provider>
    )
}

export{
    InvProvider
}

export default InvContext