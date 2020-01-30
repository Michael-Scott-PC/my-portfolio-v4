// import { POST_CONTACT, ERROR_POST_CONTACT } from './types';
import axiosStrapi from '../api/axiosStrapi';

export const createContact = async values => {
  let message = [];
  try {
    const res = await axiosStrapi.post('/contacts', values);
    if (res.status === 200) {
      message.push(
        'Your message has been sent and I will get back to you ASAP.'
      );
    }
    console.log(message);
    return message;
  } catch (error) {
    console.log(error);
    message.push(
      'There was an issue sending your message. Please contact me directly at msenochs@gmail.com. Thank you.'
    );
  }
};
