export const SEND_EMAIL_START = 'SEND_EMAIL_START';
export const SEND_EMAIL_ERROR = 'SEND_EMAIL_ERROR';
export const SEND_EMAIL_COMPLETE = 'SEND_EMAIL_COMPLETE';

export const sendEmail = (data) => ({
  type: SEND_EMAIL_START,
  data,
});
