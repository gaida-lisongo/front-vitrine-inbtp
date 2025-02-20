"use client"

import { PageProps } from "@/types/blog";
import FileUpload from "../FileUplaod";
import { useRef, useState, use, useEffect } from "react";
import { programmeService } from "api/service";
import { upload } from "./uplaod.action";
import getsEnv from "../../../api/config";

const flexApi = getsEnv.flexData;

const BlogSidebar = ({ params } : PageProps) => {
    // Récupération de l'ID depuis l'URL
    const { id } = use(params);
    const [formulaire, setFormulaire] = useState<{
      id?: number;
      title?: string;
      description?: string;
      anneeAcad?: string;
      date?: string;
      folder?: string;
      anneeId?: number;
      promotionId?: number;
    }>({});
    
    const [annexes, setAnnexes] = useState([]);
    const [frais, setFrais] = useState([]);
    const [nom, setNom] = useState("");
    const [postnom, setPostnom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [lieuNaissance, setLieuNaissance] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");    
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      const url = await upload(formulaire.folder, selectedFile);
      
      let payload = {
        nom, 
        postnom, 
        prenom, 
        sexe, 
        dateNaissance, 
        lieuNaissance, 
        email, 
        telephone, 
        adresse, 
        url,
        orderNumber: null,
        frais: frais
      }


      switch (formulaire.folder) {
        case '/inscription':
          const refTransaction = `${formulaire.promotionId}.${formulaire.anneeId}.${nom}.${prenom}.${new Date().getTime()}`;

          console.log("Ref: ", refTransaction);
          fetch(flexApi.url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": flexApi.token
            },
            body: JSON.stringify({
              merchant: flexApi.merchant,
              type: flexApi.type,
              currency: flexApi.currency,
              amount: frais.reduce((acc, curr) => acc + curr.montant, 0),
              callbackUrl: flexApi.callbackUrl,
              description: "Paiement des frais d'inscription",
              reference: refTransaction,
              phone: telephone,
            })
          })

          .then((response) => response.json())
          .then((api) => {
            console.log(api);
            if (api.code == 0) {
              const { orderNumber } = api
              payload.orderNumber = orderNumber;
              console.log("request: ", payload);   

              programmeService.inscription(payload)
              .then((api) => {
                let tours : number = 20;
                
                const intervalId = setInterval(() => {
                  tours--;
                  console.log("Inscription: ", api);
                  console.log("Tours: ", tours);
                  if(tours == 0) {
                    console.log("stop checking");
                    clearInterval(intervalId);

                    return;
                  }

                }, 1000);
              })
              .catch((error) => {
                console.error(error);
              });
            } else {       
            }
          })
          .catch((error) => {
            console.error(error)
          });
        
          break;
      
        default:
          break;
      }
      // try {
      //   const response = await fetch(`${url}/services/inscription`, {
      //     method: "POST",
      //     body: formData,
      //   });
      //   const data = await response.json();
      //   console.log(data);
      // } catch (error) {
      //   console.error("Error:", error);
      // }
    };

    console.log("Current promo ID: ", id);
    useEffect(() => {
        // Requête API pour récupérer les détails du cours
        programmeService.formulaires({ id })
        .then((api) => {
            console.log("Formulaires: ", api.data);
            setFormulaire({
              id: api.data[0].id,
              title: api.data[0].designation,
              description: api.data[0].description,
              anneeAcad: `${api.data[0].debut} - ${api.data[0].fin}`,
              date: api.data[0].date_creation.split("T")[0],
              folder: api.data[0].folder,
              anneeId: api.data[0].id_annee,
              promotionId: api.data[0].id_promotion,              
            });

            setAnnexes(api.data[0].annexes.split(";"));

            programmeService.listFrais({ fromId: api.data[0].id, anneeId: api.data[0].id_annee })
            .then((api) => {
                const a = api.data.map((item: any) => ({ id: item.id, designation: item.frais, montant: parseFloat(item.prix) }));
                setFrais(a);
            })
            .catch((error) => {
                console.error(error);
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    useEffect(() => {
      console.log("Formulaire ", formulaire);
    }, [formulaire]);

    useEffect(() => {
      console.log("Annexes ", annexes);
    }, [annexes]);
    
    useEffect(() => {
      console.log("Frais ", frais);
    }, [frais]);

    useEffect(() => {
      console.log("File ", selectedFile);
    }, [selectedFile]);
    return (
      <div className="w-full px-4 lg:w-4/12">
        {/* Search Section */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            {formulaire.title}
          </h3>
          <div className="text-body-color">
            {formulaire.description}
          </div>
        </div>
  
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Frais à payer
          </h3>
          
          <div className="mb-6">
            <div className="flex flex-col gap-4">
              {frais.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <span className="text-body-color">{item.designation}</span>
                  <span className="font-medium text-primary">{item.montant.toLocaleString()} USD</span>
                </div>
              ))}
                <div className="flex items-center justify-between pb-2">
                  <span className="font-semibold text-black dark:text-white">Total Général</span>
                  <span className="font-semibold text-primary">
                    {frais.reduce((acc, curr) => acc + curr.montant, 0).toLocaleString()} USD
                  </span>
                </div>
              </div>
            </div>
          </div>
  
  
        {/* Registration Form */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            {formulaire.anneeAcad}
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nom"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
              onChange={(e) => setNom(e.target.value)}
              value={nom}
            />
            <input
              value={postnom}
              onChange={(e) => setPostnom(e.target.value)}
              type="text"
              placeholder="Post-nom"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              type="text"
              placeholder="Prénom"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <select
              value={sexe}
              onChange={(e) => setSexe(e.target.value)}
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            >
              <option value="">Sélectionnez le sexe</option>
              <option value="M">Masculin</option>
              <option value="F">Féminin</option>
            </select>
            <input
              value={dateNaissance}
              onChange={(e) => setDateNaissance(e.target.value)}
              type="date"
              placeholder="Date de naissance"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              value={lieuNaissance}
              onChange={(e) => setLieuNaissance(e.target.value)}
              type="text"
              placeholder="Lieu de naissance"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              type="tel"
              placeholder="Téléphone"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              type="text"
              placeholder="Adresse physique"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
          </form>
        </div>
  
        {/* Document Upload Section */}
        <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Documents Requis
          </h3>
          <div className="mb-6">
            <p className="mb-4 text-sm text-body-color">Documents à fournir:</p>
            <ul className="list-inside list-disc text-sm text-body-color">
            {
              annexes.map((annexe, index) => (
                <li key={index} className="mb-2">{annexe}</li>
              ))
            }
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <FileUpload selectedFile={selectedFile} setSelectedFile={setSelectedFile} />  
            <button 
              className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80"
              onClick={handleSubmit}>
              Soumettre les documents
            </button>
          </div>
        </div>
      </div>
    );
  };

export default BlogSidebar;