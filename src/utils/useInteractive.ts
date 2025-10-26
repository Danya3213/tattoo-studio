"use client"

import {useState} from "react";

export function useInteractive() {
    const [state, setState] = useState({ hover: false, active: false });

    return {
        state,
        eventHandlers: {
            onMouseEnter: () => setState((s) => ({ ...s, hover: true })),
            onMouseLeave: () => setState({ hover: false, active: false }),
            onMouseDown: () => setState((s) => ({ ...s, active: true })),
            onMouseUp: () => setState((s) => ({ ...s, active: false })),
        },
    };
}