import getEnvs from './config';

const url = getEnvs.dev.url;

export const homeService = {
  section: async function(){
    try {
      const response = await fetch(`${url}/home/sections`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  },
  orientation: async function(){
    try {
      const response = await fetch(`${url}/home/orientations`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  },
  metriques: async function(){
    try {
      const response = await fetch(`${url}/home/metriques`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}