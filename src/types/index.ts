import type { Dispatch, SetStateAction } from "react";

/**
 * Generic type for a state setter function for a string-based state.
 */
export type SetState<T extends string> = Dispatch<SetStateAction<T>>;
