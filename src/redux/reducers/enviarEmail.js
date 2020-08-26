import {
  SEND_EMAIL_COMPLETE,
  SEND_EMAIL_ERROR,
  SEND_EMAIL_START,
} from '../actions/enviarEmail';

export default function enviarEmail(state = { state: '' }, { type, response }) {
  switch (type) {
    case SEND_EMAIL_START:
      return { state: 'START', sending: true };
    case SEND_EMAIL_ERROR:
      return { state: 'ERROR', sending: false };
    case SEND_EMAIL_COMPLETE:
      return { state: 'COMPLETE', sending: false, response };
    default:
      return state;
  }
}
