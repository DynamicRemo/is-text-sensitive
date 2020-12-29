// spacing before | for specific words like (anal)ytics
const sensitivePattern = '(anal |sex |gay | lust|xxx|porn|fuck|incest|escort|nude|bitch|horny|milf|lesbian|boob|busty|cum|cunt|dick|fetish|hooter|naked|nude|oral|orgy|pussy|topless|seks|ensest|bokep|liseli)';
const sensitiveRegex = new RegExp(sensitivePattern, 'i');

export let isTextSensitive = function (incomingText: string) {
  if (sensitiveRegex.test(incomingText)) {
    return true;
  } else {
    return false;
  }
};