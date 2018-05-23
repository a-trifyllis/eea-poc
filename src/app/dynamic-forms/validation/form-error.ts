export interface ControlErrorRegistry {
    controlKey: string;
    errors: ValidationError[];
}

export interface ValidationError {
    errorKey: string;
    errorMessage: string;
}

export interface ValidationErrorMessage {
    controlKey: string;
    errors: ValidationError[];
}
