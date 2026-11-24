import type { Dispatch, SetStateAction } from "react";

/**
 * A state setter function for a string-based state.
 * @typeParam T - The string type stored in the state.
 */
export type SetState<T extends string> = Dispatch<SetStateAction<T>>;
