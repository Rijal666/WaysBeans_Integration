import {usestate, creatcontext} from "react";

export const globalcontect = creatcontext();

const GlobalProvider = (props) => {
    const [isLogin, setLogin] = usestate(false);

    let state = {
        isLogin,
        setLogin
    }
    return(
        <globalcontect.Provider value={state}>
            {props.children}
        </globalcontect.Provider>
    )
}