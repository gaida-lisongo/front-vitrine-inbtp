import getEnvs from './config';

const url = getEnvs.dev.url;

const contactService = {
  contact: async function({ email, objet, message }){
    try {
      const response = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          objet: objet,
          email: email,
          content: message
        })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export default contactService;