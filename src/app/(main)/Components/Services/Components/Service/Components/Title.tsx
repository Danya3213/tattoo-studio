import {type ReactElement} from 'react'

export const Title = ({title}: {
    title: string,
}): ReactElement => {

    return <h4 className={"m-title mb-2.5"}>{title}</h4>
};