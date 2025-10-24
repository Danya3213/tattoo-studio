import {type ReactElement} from 'react'
import {Feedback} from "./Feedback";

export const FeedbackList = (): ReactElement => {

    return (
        <ul className={"flex items-center justify-between py-19"}>
            <Feedback topTitle={"2k+"} bottomTitle={"задоволених клієнтів"}/>
            <Feedback topTitle={"5"} bottomTitle={"років праці"}/>
            <Feedback topTitle={"2k+"} bottomTitle={"виконаних робіт"}/>
        </ul>
    );
};