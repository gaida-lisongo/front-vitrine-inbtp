import getEnvs from './config';

interface ContactData {
  email: string;
  objet: string;
  content: string;
}

const url = getEnvs.dev.url;

const contactService = {
  contact: async (data: ContactData) => {
    try {
      const response = await fetch(`${url}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};

export default contactService;