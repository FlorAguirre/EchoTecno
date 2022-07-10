import { useState, createContext, useContext } from "react"

const Notification = ({mensaje, severity}) => {

    const notificationStyle = {
        position: 'absolute',
        top:120,
        right:5,
        width:'auto',
        height:'auto',
        backgroundColor: severity === 'error'? 'red': 'rgb(238, 196, 255)',
        color:'black',
        padding:'10px 20px 10px 20px',
        borderRadius:'10px',
        fontWeight: 'bold',
    }



    if(mensaje ==='') return

    return (
        <div style={notificationStyle}>   
            {mensaje}
        </div>
    )
}


const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {

    const[msgConfig, setMsgConfig] = useState ({
        severity: 'success',
        mensaje: '',

    })

    const setNotification = (sev, msg) => {
        setMsgConfig({ severity: sev, mensaje: msg})
        setTimeout(() => {
            setMsgConfig({...msgConfig, mensaje: ''})
        },3000)
    }

    return (
        <NotificationContext.Provider value= {setNotification}>
 
    <Notification mensaje={msgConfig.mensaje} severity={msgConfig.severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
