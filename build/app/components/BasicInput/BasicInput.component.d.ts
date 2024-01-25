export declare class BasicInputComponent {
    inputWrapperClass: string;
    inputLabelClass: string;
    inputLabel: string;
    inputLabelInfoClass: string;
    inputAdditionalInfo: string;
    inputClass: string;
    inputType: string;
    inputId: string;
    inputForm: string;
    inputAccept: string;
    inputAlt: string;
    inputAutocomplete: string;
    inputCapture: string;
    inputChecked: boolean;
    inputDirname: string;
    inputDisabled: boolean;
    inputFormaction: string;
    inputFormenctype: string;
    inputFormmethod: string;
    inputFormnovalidate: string;
    inputFormtarget: string;
    inputHeight: number;
    inputListId: string;
    inputListOptions: Option[];
    inputMax: number;
    inputMaxlength: number;
    inputMin: number;
    inputMinlength: number;
    inputMultiple: boolean;
    inputName: string;
    inputPattern: string;
    inputPlaceholder: string;
    inputPopovertarget: string;
    inputPopovertargetaction: string;
    inputReadonly: boolean;
    inputRequired: boolean;
    inputSize: number;
    inputSrc: string;
    inputStep: string;
    inputValue: string;
    inputWidth: number;
    get inputAriaDescribedBy(): string;
}
interface Option {
    label: string;
    value: string;
    disabled?: boolean;
    selected?: boolean;
}
export {};
