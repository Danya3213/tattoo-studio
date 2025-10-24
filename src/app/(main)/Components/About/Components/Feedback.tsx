import {type ReactElement} from 'react'

export const Feedback = ({topTitle, bottomTitle}: {
    topTitle: string;
    bottomTitle: string;
}): ReactElement => {

    return (
        <li>
            <h3 className={"l-title font-medium mb-1.25 text-center"}>{topTitle}</h3>
            <h4 className={"paragraph leading-none"}>{bottomTitle}</h4>
        </li>
    );
};