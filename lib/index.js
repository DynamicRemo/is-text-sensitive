"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTextSensitive = void 0;
// spacing before | for specific words like (anal)ytics
var sensitivePattern = '(anal |sex |xxx|porn|fuck|escorts|seks|incest|ensest|escort|nude|bitch|horny|milf|lesbian|bokep|gay|liseli)';
var sensitiveRegex = new RegExp(sensitivePattern, 'i');
var isTextSensitive = function (incomingText) {
    if (sensitiveRegex.test(incomingText)) {
        return true;
    }
    else {
        return false;
    }
};
exports.isTextSensitive = isTextSensitive;
//# sourceMappingURL=index.js.map