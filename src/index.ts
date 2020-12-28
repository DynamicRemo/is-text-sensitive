// spacing before | for specific words like (anal)ytics
const sensitivePattern = '(anal |sex |xxx|porn|fuck|escorts|seks|incest|ensest|escort|nude|bitch|horny|milf|lesbian|bokep|gay|liseli)';
const sensitiveRegex = new RegExp(sensitivePattern, 'i');

export let isTextSensitive = function (incomingText: string) {
  if (sensitiveRegex.test(incomingText)) {
    return true;
  } else {
    return false;
  }
};