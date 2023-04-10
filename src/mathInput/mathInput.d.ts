import React from "react";
import { MathField } from "../types/types";
import { KeyId } from "../keyboard/keys/keys";
import { KeyProps } from "../keyboard/keys/key";
import { ToolbarTabIds } from "../keyboard/toolbar/toolbarTabs";
type Props = {
    numericToolbarKeys?: (KeyId | KeyProps)[];
    numericToolbarTabs?: ToolbarTabIds[];
    alphabeticToolbarKeys?: (KeyId | KeyProps)[];
    setMathfieldRef?: (mf: MathField) => void;
    initialLatex?: string;
    setValue?: (s: string) => void;
    divisionFormat?: "fraction" | "obelus";
    style?: React.CSSProperties;
    size?: "small" | "medium";
    rootElementId?: string;
};
export declare const MathInput: ({ numericToolbarKeys, numericToolbarTabs, alphabeticToolbarKeys, setValue, setMathfieldRef, style, initialLatex, rootElementId, divisionFormat, size, }: Props) => JSX.Element;
export {};
