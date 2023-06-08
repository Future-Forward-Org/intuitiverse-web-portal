/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MagicCodeCreateFormInputValues = {
    titleText?: string;
    descriptionText?: string;
    apiAlias?: string;
    apiResource?: string;
};
export declare type MagicCodeCreateFormValidationValues = {
    titleText?: ValidationFunction<string>;
    descriptionText?: ValidationFunction<string>;
    apiAlias?: ValidationFunction<string>;
    apiResource?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MagicCodeCreateFormOverridesProps = {
    MagicCodeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    titleText?: PrimitiveOverrideProps<TextFieldProps>;
    descriptionText?: PrimitiveOverrideProps<TextFieldProps>;
    apiAlias?: PrimitiveOverrideProps<TextFieldProps>;
    apiResource?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MagicCodeCreateFormProps = React.PropsWithChildren<{
    overrides?: MagicCodeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MagicCodeCreateFormInputValues) => MagicCodeCreateFormInputValues;
    onSuccess?: (fields: MagicCodeCreateFormInputValues) => void;
    onError?: (fields: MagicCodeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MagicCodeCreateFormInputValues) => MagicCodeCreateFormInputValues;
    onValidate?: MagicCodeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MagicCodeCreateForm(props: MagicCodeCreateFormProps): React.ReactElement;
