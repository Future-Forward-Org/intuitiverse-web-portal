/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Session, User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SessionUpdateFormInputValues = {
    name?: string;
    description?: string;
    startDateTime?: string;
    endDateTime?: string;
    sessionCode?: string;
    host?: User;
    attendees?: User[];
};
export declare type SessionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    startDateTime?: ValidationFunction<string>;
    endDateTime?: ValidationFunction<string>;
    sessionCode?: ValidationFunction<string>;
    host?: ValidationFunction<User>;
    attendees?: ValidationFunction<User>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionUpdateFormOverridesProps = {
    SessionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    startDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    endDateTime?: PrimitiveOverrideProps<TextFieldProps>;
    sessionCode?: PrimitiveOverrideProps<TextFieldProps>;
    host?: PrimitiveOverrideProps<AutocompleteProps>;
    attendees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SessionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SessionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    session?: Session;
    onSubmit?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onSuccess?: (fields: SessionUpdateFormInputValues) => void;
    onError?: (fields: SessionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onValidate?: SessionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SessionUpdateForm(props: SessionUpdateFormProps): React.ReactElement;
