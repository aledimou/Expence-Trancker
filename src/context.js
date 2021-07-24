import React,{useContext, useState} from "react"

const AppContext = React.createContext();

const AppProvider = ({children}) =>{


    
    const [balance, setBalance] = useState(500)
    

    const [totalIncome, setTotalIncome] = useState(500)
    const [totalExpence, setTotalExpence] = useState(0)
    const [history, setHistory] = useState([])
    const [dataForm, setDataForm] = useState({})

    
   if (dataForm) {
       
    if (dataForm.amount >= 0) {
        
       
        setTotalIncome(totalIncome + dataForm.amount)
        setBalance(balance + dataForm.amount)
        const newHistory = {
            id: dataForm.id,
            name: dataForm.text,
            money: dataForm.amount
        }
        setHistory([...history, newHistory])
        setDataForm({})

        
     }
   
     if (dataForm.amount < 0) {
        
       setTotalExpence(totalExpence - dataForm.amount)
       setBalance( dataForm.amount + balance)
       const newHistory = {
        id: dataForm.id,
        name: dataForm.text,
        money: dataForm.amount
    }
    setHistory([...history, newHistory])
       console.log(history);
       setDataForm({})
     }
     
   }else{
       console.log("ERROR");
   }
  



    return (
        <AppContext.Provider value = {{
            balance,
            totalIncome,
            totalExpence,
            history,
            setDataForm
        }}>
            {children}
        </AppContext.Provider>
    )

    

}

//custom hook for to use it global
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppContext, AppProvider};