import getEnvs from './config';

const url = getEnvs.dev.url;

export const programmeService = {
    cycles: async function(){
        try {
            const response = await fetch(`${url}/services/cycles`);
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
    niveaux: async function(){
        try {
            const response = await fetch(`${url}/services/niveaux`);
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
    promotions: async function(){
        try {
        const response = await fetch(`${url}/services`);
        const data = await response.json();
        return data;
        
        } catch (error) {
        console.error('Error:', error);
        }
    },
    matieres: async function({ id }){
        try {
            const response = await fetch(`${url}/services/matieres/${id}`);
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
    formulaires: async function({ id }){
        try {
            const response = await fetch(`${url}/services/formulaires/${id}`);
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
    listFrais: async function({ fromId, anneeId }){
        try {
            const response = await fetch(`${url}/services/frais/${fromId}/${anneeId}`, );
            const data = await response.json();
            return data;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
    annees: async function(){
        try {
            const response = await fetch(`${url}/services/annees`);
            const data = await response.json();
            return data;

        } catch (error) {
            console.error('Error:', error);
        }
    },
    inscription: async function(formData){
        try {
            const response = await fetch(`${url}/services/inscription`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const api = await response.json();

            if(api.success && api.data){
                const pdf = api.data.pdf;

                // Créer un blob à partir du PDF
                const pdfBlob = await fetch(
                    `data:application/pdf;base64,${pdf.data}`
                ).then(res => {
                    return res.blob()
                });

                // Télécharger le PDF
                const downloadUrl = window.URL.createObjectURL(pdfBlob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = pdf.filename;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(downloadUrl);
            }
            return api;
        
        } catch (error) {
            console.error('Error:', error);
        }
    },
}
