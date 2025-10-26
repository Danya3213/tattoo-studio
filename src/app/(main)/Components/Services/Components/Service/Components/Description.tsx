import {type ReactElement} from 'react'

export const Description = ({description}: {
    description: string,
}): ReactElement => {

    return <p className={"paragraph"}>{description}</p>
};