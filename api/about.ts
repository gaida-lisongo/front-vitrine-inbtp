import getEnvs from './config';

const url = getEnvs.dev.url;

const aboutService = {
  coge: async function(){
    try {
      const response = await fetch(`${url}/about/coge`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  },
  testimonials: async function(){
    try {
      const response = await fetch(`${url}/about/testimonials`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export default aboutService;