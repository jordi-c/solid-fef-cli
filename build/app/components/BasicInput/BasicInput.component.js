var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let BasicInputComponent = (() => {
    let _classDecorators = [Component({
            standalone: true,
            selector: 'app-basic-input',
            imports: [FormsModule, CommonModule],
            templateUrl: './BasicInput.component.html',
            styleUrl: './BasicInput.component.scss',
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _inputWrapperClass_decorators;
    let _inputWrapperClass_initializers = [];
    let _inputLabelClass_decorators;
    let _inputLabelClass_initializers = [];
    let _inputLabel_decorators;
    let _inputLabel_initializers = [];
    let _inputLabelInfoClass_decorators;
    let _inputLabelInfoClass_initializers = [];
    let _inputAdditionalInfo_decorators;
    let _inputAdditionalInfo_initializers = [];
    let _inputClass_decorators;
    let _inputClass_initializers = [];
    let _inputType_decorators;
    let _inputType_initializers = [];
    let _inputId_decorators;
    let _inputId_initializers = [];
    let _inputForm_decorators;
    let _inputForm_initializers = [];
    let _inputAccept_decorators;
    let _inputAccept_initializers = [];
    let _inputAlt_decorators;
    let _inputAlt_initializers = [];
    let _inputAutocomplete_decorators;
    let _inputAutocomplete_initializers = [];
    let _inputCapture_decorators;
    let _inputCapture_initializers = [];
    let _inputChecked_decorators;
    let _inputChecked_initializers = [];
    let _inputDirname_decorators;
    let _inputDirname_initializers = [];
    let _inputDisabled_decorators;
    let _inputDisabled_initializers = [];
    let _inputFormaction_decorators;
    let _inputFormaction_initializers = [];
    let _inputFormenctype_decorators;
    let _inputFormenctype_initializers = [];
    let _inputFormmethod_decorators;
    let _inputFormmethod_initializers = [];
    let _inputFormnovalidate_decorators;
    let _inputFormnovalidate_initializers = [];
    let _inputFormtarget_decorators;
    let _inputFormtarget_initializers = [];
    let _inputHeight_decorators;
    let _inputHeight_initializers = [];
    let _inputListId_decorators;
    let _inputListId_initializers = [];
    let _inputListOptions_decorators;
    let _inputListOptions_initializers = [];
    let _inputMax_decorators;
    let _inputMax_initializers = [];
    let _inputMaxlength_decorators;
    let _inputMaxlength_initializers = [];
    let _inputMin_decorators;
    let _inputMin_initializers = [];
    let _inputMinlength_decorators;
    let _inputMinlength_initializers = [];
    let _inputMultiple_decorators;
    let _inputMultiple_initializers = [];
    let _inputName_decorators;
    let _inputName_initializers = [];
    let _inputPattern_decorators;
    let _inputPattern_initializers = [];
    let _inputPlaceholder_decorators;
    let _inputPlaceholder_initializers = [];
    let _inputPopovertarget_decorators;
    let _inputPopovertarget_initializers = [];
    let _inputPopovertargetaction_decorators;
    let _inputPopovertargetaction_initializers = [];
    let _inputReadonly_decorators;
    let _inputReadonly_initializers = [];
    let _inputRequired_decorators;
    let _inputRequired_initializers = [];
    let _inputSize_decorators;
    let _inputSize_initializers = [];
    let _inputSrc_decorators;
    let _inputSrc_initializers = [];
    let _inputStep_decorators;
    let _inputStep_initializers = [];
    let _inputValue_decorators;
    let _inputValue_initializers = [];
    let _inputWidth_decorators;
    let _inputWidth_initializers = [];
    var BasicInputComponent = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _inputWrapperClass_decorators = [Input()];
            _inputLabelClass_decorators = [Input()];
            _inputLabel_decorators = [Input({ required: true })];
            _inputLabelInfoClass_decorators = [Input()];
            _inputAdditionalInfo_decorators = [Input()];
            _inputClass_decorators = [Input()];
            _inputType_decorators = [Input()];
            _inputId_decorators = [Input({ required: true })];
            _inputForm_decorators = [Input()];
            _inputAccept_decorators = [Input()];
            _inputAlt_decorators = [Input()];
            _inputAutocomplete_decorators = [Input()];
            _inputCapture_decorators = [Input()];
            _inputChecked_decorators = [Input({ transform: booleanAttribute })];
            _inputDirname_decorators = [Input()];
            _inputDisabled_decorators = [Input({ transform: booleanAttribute })];
            _inputFormaction_decorators = [Input()];
            _inputFormenctype_decorators = [Input()];
            _inputFormmethod_decorators = [Input()];
            _inputFormnovalidate_decorators = [Input()];
            _inputFormtarget_decorators = [Input()];
            _inputHeight_decorators = [Input({ transform: numberAttribute })];
            _inputListId_decorators = [Input()];
            _inputListOptions_decorators = [Input({ transform: parseIt })];
            _inputMax_decorators = [Input({ transform: numberAttribute })];
            _inputMaxlength_decorators = [Input({ transform: numberAttribute })];
            _inputMin_decorators = [Input({ transform: numberAttribute })];
            _inputMinlength_decorators = [Input({ transform: numberAttribute })];
            _inputMultiple_decorators = [Input({ transform: booleanAttribute })];
            _inputName_decorators = [Input({ required: true })];
            _inputPattern_decorators = [Input()];
            _inputPlaceholder_decorators = [Input()];
            _inputPopovertarget_decorators = [Input()];
            _inputPopovertargetaction_decorators = [Input()];
            _inputReadonly_decorators = [Input({ transform: booleanAttribute })];
            _inputRequired_decorators = [Input({ transform: booleanAttribute })];
            _inputSize_decorators = [Input({ transform: numberAttribute })];
            _inputSrc_decorators = [Input()];
            _inputStep_decorators = [Input()];
            _inputValue_decorators = [Input()];
            _inputWidth_decorators = [Input({ transform: numberAttribute })];
            __esDecorate(null, null, _inputWrapperClass_decorators, { kind: "field", name: "inputWrapperClass", static: false, private: false, access: { has: obj => "inputWrapperClass" in obj, get: obj => obj.inputWrapperClass, set: (obj, value) => { obj.inputWrapperClass = value; } }, metadata: _metadata }, _inputWrapperClass_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputLabelClass_decorators, { kind: "field", name: "inputLabelClass", static: false, private: false, access: { has: obj => "inputLabelClass" in obj, get: obj => obj.inputLabelClass, set: (obj, value) => { obj.inputLabelClass = value; } }, metadata: _metadata }, _inputLabelClass_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputLabel_decorators, { kind: "field", name: "inputLabel", static: false, private: false, access: { has: obj => "inputLabel" in obj, get: obj => obj.inputLabel, set: (obj, value) => { obj.inputLabel = value; } }, metadata: _metadata }, _inputLabel_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputLabelInfoClass_decorators, { kind: "field", name: "inputLabelInfoClass", static: false, private: false, access: { has: obj => "inputLabelInfoClass" in obj, get: obj => obj.inputLabelInfoClass, set: (obj, value) => { obj.inputLabelInfoClass = value; } }, metadata: _metadata }, _inputLabelInfoClass_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputAdditionalInfo_decorators, { kind: "field", name: "inputAdditionalInfo", static: false, private: false, access: { has: obj => "inputAdditionalInfo" in obj, get: obj => obj.inputAdditionalInfo, set: (obj, value) => { obj.inputAdditionalInfo = value; } }, metadata: _metadata }, _inputAdditionalInfo_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputClass_decorators, { kind: "field", name: "inputClass", static: false, private: false, access: { has: obj => "inputClass" in obj, get: obj => obj.inputClass, set: (obj, value) => { obj.inputClass = value; } }, metadata: _metadata }, _inputClass_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputType_decorators, { kind: "field", name: "inputType", static: false, private: false, access: { has: obj => "inputType" in obj, get: obj => obj.inputType, set: (obj, value) => { obj.inputType = value; } }, metadata: _metadata }, _inputType_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputId_decorators, { kind: "field", name: "inputId", static: false, private: false, access: { has: obj => "inputId" in obj, get: obj => obj.inputId, set: (obj, value) => { obj.inputId = value; } }, metadata: _metadata }, _inputId_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputForm_decorators, { kind: "field", name: "inputForm", static: false, private: false, access: { has: obj => "inputForm" in obj, get: obj => obj.inputForm, set: (obj, value) => { obj.inputForm = value; } }, metadata: _metadata }, _inputForm_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputAccept_decorators, { kind: "field", name: "inputAccept", static: false, private: false, access: { has: obj => "inputAccept" in obj, get: obj => obj.inputAccept, set: (obj, value) => { obj.inputAccept = value; } }, metadata: _metadata }, _inputAccept_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputAlt_decorators, { kind: "field", name: "inputAlt", static: false, private: false, access: { has: obj => "inputAlt" in obj, get: obj => obj.inputAlt, set: (obj, value) => { obj.inputAlt = value; } }, metadata: _metadata }, _inputAlt_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputAutocomplete_decorators, { kind: "field", name: "inputAutocomplete", static: false, private: false, access: { has: obj => "inputAutocomplete" in obj, get: obj => obj.inputAutocomplete, set: (obj, value) => { obj.inputAutocomplete = value; } }, metadata: _metadata }, _inputAutocomplete_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputCapture_decorators, { kind: "field", name: "inputCapture", static: false, private: false, access: { has: obj => "inputCapture" in obj, get: obj => obj.inputCapture, set: (obj, value) => { obj.inputCapture = value; } }, metadata: _metadata }, _inputCapture_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputChecked_decorators, { kind: "field", name: "inputChecked", static: false, private: false, access: { has: obj => "inputChecked" in obj, get: obj => obj.inputChecked, set: (obj, value) => { obj.inputChecked = value; } }, metadata: _metadata }, _inputChecked_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputDirname_decorators, { kind: "field", name: "inputDirname", static: false, private: false, access: { has: obj => "inputDirname" in obj, get: obj => obj.inputDirname, set: (obj, value) => { obj.inputDirname = value; } }, metadata: _metadata }, _inputDirname_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputDisabled_decorators, { kind: "field", name: "inputDisabled", static: false, private: false, access: { has: obj => "inputDisabled" in obj, get: obj => obj.inputDisabled, set: (obj, value) => { obj.inputDisabled = value; } }, metadata: _metadata }, _inputDisabled_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputFormaction_decorators, { kind: "field", name: "inputFormaction", static: false, private: false, access: { has: obj => "inputFormaction" in obj, get: obj => obj.inputFormaction, set: (obj, value) => { obj.inputFormaction = value; } }, metadata: _metadata }, _inputFormaction_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputFormenctype_decorators, { kind: "field", name: "inputFormenctype", static: false, private: false, access: { has: obj => "inputFormenctype" in obj, get: obj => obj.inputFormenctype, set: (obj, value) => { obj.inputFormenctype = value; } }, metadata: _metadata }, _inputFormenctype_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputFormmethod_decorators, { kind: "field", name: "inputFormmethod", static: false, private: false, access: { has: obj => "inputFormmethod" in obj, get: obj => obj.inputFormmethod, set: (obj, value) => { obj.inputFormmethod = value; } }, metadata: _metadata }, _inputFormmethod_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputFormnovalidate_decorators, { kind: "field", name: "inputFormnovalidate", static: false, private: false, access: { has: obj => "inputFormnovalidate" in obj, get: obj => obj.inputFormnovalidate, set: (obj, value) => { obj.inputFormnovalidate = value; } }, metadata: _metadata }, _inputFormnovalidate_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputFormtarget_decorators, { kind: "field", name: "inputFormtarget", static: false, private: false, access: { has: obj => "inputFormtarget" in obj, get: obj => obj.inputFormtarget, set: (obj, value) => { obj.inputFormtarget = value; } }, metadata: _metadata }, _inputFormtarget_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputHeight_decorators, { kind: "field", name: "inputHeight", static: false, private: false, access: { has: obj => "inputHeight" in obj, get: obj => obj.inputHeight, set: (obj, value) => { obj.inputHeight = value; } }, metadata: _metadata }, _inputHeight_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputListId_decorators, { kind: "field", name: "inputListId", static: false, private: false, access: { has: obj => "inputListId" in obj, get: obj => obj.inputListId, set: (obj, value) => { obj.inputListId = value; } }, metadata: _metadata }, _inputListId_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputListOptions_decorators, { kind: "field", name: "inputListOptions", static: false, private: false, access: { has: obj => "inputListOptions" in obj, get: obj => obj.inputListOptions, set: (obj, value) => { obj.inputListOptions = value; } }, metadata: _metadata }, _inputListOptions_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputMax_decorators, { kind: "field", name: "inputMax", static: false, private: false, access: { has: obj => "inputMax" in obj, get: obj => obj.inputMax, set: (obj, value) => { obj.inputMax = value; } }, metadata: _metadata }, _inputMax_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputMaxlength_decorators, { kind: "field", name: "inputMaxlength", static: false, private: false, access: { has: obj => "inputMaxlength" in obj, get: obj => obj.inputMaxlength, set: (obj, value) => { obj.inputMaxlength = value; } }, metadata: _metadata }, _inputMaxlength_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputMin_decorators, { kind: "field", name: "inputMin", static: false, private: false, access: { has: obj => "inputMin" in obj, get: obj => obj.inputMin, set: (obj, value) => { obj.inputMin = value; } }, metadata: _metadata }, _inputMin_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputMinlength_decorators, { kind: "field", name: "inputMinlength", static: false, private: false, access: { has: obj => "inputMinlength" in obj, get: obj => obj.inputMinlength, set: (obj, value) => { obj.inputMinlength = value; } }, metadata: _metadata }, _inputMinlength_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputMultiple_decorators, { kind: "field", name: "inputMultiple", static: false, private: false, access: { has: obj => "inputMultiple" in obj, get: obj => obj.inputMultiple, set: (obj, value) => { obj.inputMultiple = value; } }, metadata: _metadata }, _inputMultiple_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputName_decorators, { kind: "field", name: "inputName", static: false, private: false, access: { has: obj => "inputName" in obj, get: obj => obj.inputName, set: (obj, value) => { obj.inputName = value; } }, metadata: _metadata }, _inputName_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputPattern_decorators, { kind: "field", name: "inputPattern", static: false, private: false, access: { has: obj => "inputPattern" in obj, get: obj => obj.inputPattern, set: (obj, value) => { obj.inputPattern = value; } }, metadata: _metadata }, _inputPattern_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputPlaceholder_decorators, { kind: "field", name: "inputPlaceholder", static: false, private: false, access: { has: obj => "inputPlaceholder" in obj, get: obj => obj.inputPlaceholder, set: (obj, value) => { obj.inputPlaceholder = value; } }, metadata: _metadata }, _inputPlaceholder_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputPopovertarget_decorators, { kind: "field", name: "inputPopovertarget", static: false, private: false, access: { has: obj => "inputPopovertarget" in obj, get: obj => obj.inputPopovertarget, set: (obj, value) => { obj.inputPopovertarget = value; } }, metadata: _metadata }, _inputPopovertarget_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputPopovertargetaction_decorators, { kind: "field", name: "inputPopovertargetaction", static: false, private: false, access: { has: obj => "inputPopovertargetaction" in obj, get: obj => obj.inputPopovertargetaction, set: (obj, value) => { obj.inputPopovertargetaction = value; } }, metadata: _metadata }, _inputPopovertargetaction_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputReadonly_decorators, { kind: "field", name: "inputReadonly", static: false, private: false, access: { has: obj => "inputReadonly" in obj, get: obj => obj.inputReadonly, set: (obj, value) => { obj.inputReadonly = value; } }, metadata: _metadata }, _inputReadonly_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputRequired_decorators, { kind: "field", name: "inputRequired", static: false, private: false, access: { has: obj => "inputRequired" in obj, get: obj => obj.inputRequired, set: (obj, value) => { obj.inputRequired = value; } }, metadata: _metadata }, _inputRequired_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputSize_decorators, { kind: "field", name: "inputSize", static: false, private: false, access: { has: obj => "inputSize" in obj, get: obj => obj.inputSize, set: (obj, value) => { obj.inputSize = value; } }, metadata: _metadata }, _inputSize_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputSrc_decorators, { kind: "field", name: "inputSrc", static: false, private: false, access: { has: obj => "inputSrc" in obj, get: obj => obj.inputSrc, set: (obj, value) => { obj.inputSrc = value; } }, metadata: _metadata }, _inputSrc_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputStep_decorators, { kind: "field", name: "inputStep", static: false, private: false, access: { has: obj => "inputStep" in obj, get: obj => obj.inputStep, set: (obj, value) => { obj.inputStep = value; } }, metadata: _metadata }, _inputStep_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputValue_decorators, { kind: "field", name: "inputValue", static: false, private: false, access: { has: obj => "inputValue" in obj, get: obj => obj.inputValue, set: (obj, value) => { obj.inputValue = value; } }, metadata: _metadata }, _inputValue_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _inputWidth_decorators, { kind: "field", name: "inputWidth", static: false, private: false, access: { has: obj => "inputWidth" in obj, get: obj => obj.inputWidth, set: (obj, value) => { obj.inputWidth = value; } }, metadata: _metadata }, _inputWidth_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BasicInputComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        inputWrapperClass = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _inputWrapperClass_initializers, ''));
        inputLabelClass = __runInitializers(this, _inputLabelClass_initializers, '');
        inputLabel = __runInitializers(this, _inputLabel_initializers, void 0);
        inputLabelInfoClass = __runInitializers(this, _inputLabelInfoClass_initializers, '');
        inputAdditionalInfo = __runInitializers(this, _inputAdditionalInfo_initializers, '');
        inputClass = __runInitializers(this, _inputClass_initializers, '');
        inputType = __runInitializers(this, _inputType_initializers, 'text');
        inputId = __runInitializers(this, _inputId_initializers, void 0);
        inputForm = __runInitializers(this, _inputForm_initializers, '');
        inputAccept = __runInitializers(this, _inputAccept_initializers, '');
        inputAlt = __runInitializers(this, _inputAlt_initializers, '');
        inputAutocomplete = __runInitializers(this, _inputAutocomplete_initializers, '');
        inputCapture = __runInitializers(this, _inputCapture_initializers, '');
        inputChecked = __runInitializers(this, _inputChecked_initializers, false);
        inputDirname = __runInitializers(this, _inputDirname_initializers, '');
        inputDisabled = __runInitializers(this, _inputDisabled_initializers, false);
        inputFormaction = __runInitializers(this, _inputFormaction_initializers, '');
        inputFormenctype = __runInitializers(this, _inputFormenctype_initializers, '');
        inputFormmethod = __runInitializers(this, _inputFormmethod_initializers, '');
        inputFormnovalidate = __runInitializers(this, _inputFormnovalidate_initializers, '');
        inputFormtarget = __runInitializers(this, _inputFormtarget_initializers, '');
        inputHeight = __runInitializers(this, _inputHeight_initializers, void 0);
        inputListId = __runInitializers(this, _inputListId_initializers, '');
        inputListOptions = __runInitializers(this, _inputListOptions_initializers, []);
        inputMax = __runInitializers(this, _inputMax_initializers, void 0);
        inputMaxlength = __runInitializers(this, _inputMaxlength_initializers, void 0);
        inputMin = __runInitializers(this, _inputMin_initializers, void 0);
        inputMinlength = __runInitializers(this, _inputMinlength_initializers, void 0);
        inputMultiple = __runInitializers(this, _inputMultiple_initializers, false);
        inputName = __runInitializers(this, _inputName_initializers, void 0);
        inputPattern = __runInitializers(this, _inputPattern_initializers, '');
        inputPlaceholder = __runInitializers(this, _inputPlaceholder_initializers, '');
        inputPopovertarget = __runInitializers(this, _inputPopovertarget_initializers, '');
        inputPopovertargetaction = __runInitializers(this, _inputPopovertargetaction_initializers, '');
        inputReadonly = __runInitializers(this, _inputReadonly_initializers, false);
        inputRequired = __runInitializers(this, _inputRequired_initializers, false);
        inputSize = __runInitializers(this, _inputSize_initializers, void 0);
        inputSrc = __runInitializers(this, _inputSrc_initializers, '');
        inputStep = __runInitializers(this, _inputStep_initializers, '');
        inputValue = __runInitializers(this, _inputValue_initializers, '');
        inputWidth = __runInitializers(this, _inputWidth_initializers, void 0);
        get inputAriaDescribedBy() {
            return this.inputId + '-info';
        }
    };
    return BasicInputComponent = _classThis;
})();
export { BasicInputComponent };
function parseIt(object) {
    return JSON.parse(object);
}
//# sourceMappingURL=BasicInput.component.js.map