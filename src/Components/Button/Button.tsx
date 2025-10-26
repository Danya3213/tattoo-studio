import {type ReactElement} from 'react'

export const Button = ({inner, coloring, className, ...props}: {
    inner?: string | ReactElement,
    coloring: "apple" | "transparent" | "black",
    className?: string,
}): ReactElement => {

    return <button className={`${coloring}-button ${className}`} {...props}>{inner}</button>
};