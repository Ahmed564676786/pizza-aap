import { Link } from "react-router-dom";

function Button({children,type,to,onClick}){

    const base="rounded-full "; 

    const style = {
        name:"ali",
        primary:base + ' px-3 py-2 bg-yellow-400',
        small:base + ' px-3 py-2 bg-yellow-400 ',
        grey :base + "px-3 py-2 bg-stone-700 ",
        link:base + ' text-blue-700'
    }

    if(to){
       return <Link to={to} className={style[type]}>{children}</Link>
    }

    return <button onClick={onClick} className={style[type]} >{children}</button>
}


export default Button;