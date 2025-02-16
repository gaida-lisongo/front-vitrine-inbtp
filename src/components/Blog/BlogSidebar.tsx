"use client"

import { PageProps } from "@/types/blog";
import FileUpload from "../FileUplaod";
import { useRef, useState, use } from "react";

const BlogSidebar = ({ params } : PageProps) => {
    // Récupération de l'ID depuis l'URL
    const { id } = use(params);

    console.log("Current promo ID: ", id);
    return (
      <div className="w-full px-4 lg:w-4/12">
        {/* Search Section */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un cours..."
              className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B]"
            />
            <span className="absolute right-4 top-4">
              <svg width="20" height="20" viewBox="0 0 20 20" className="fill-body-color">
                <path d="M19.0588 18.0647L14.8941 13.9C16.1765 12.3529 16.9412 10.2941 16.9412 8.11765C16.9412 3.64706 13.1765 0 8.47059 0C3.76471 0 0 3.64706 0 8.11765C0 12.5882 3.76471 16.2353 8.47059 16.2353C10.2941 16.2353 12 15.5294 13.4118 14.4118L17.5765 18.5765C17.7647 18.7647 18.0118 18.8235 18.2588 18.8235C18.5059 18.8235 18.7529 18.7647 18.9412 18.5765C19.3176 18.2" />
              </svg>
            </span>
          </div>
        </div>
  
        {/* Filters Section */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Filtres
          </h3>
          
          {/* Semester Filter */}
          <div className="mb-6">
            <h4 className="mb-4 text-base font-medium text-body-color">Semestre</h4>
            <div className="flex flex-col gap-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-5 w-5 rounded border-stroke" />
                <span className="text-body-color">Premier Semestre</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-5 w-5 rounded border-stroke" />
                <span className="text-body-color">Second Semestre</span>
              </label>
            </div>
          </div>
  
          {/* Faculty Filter */}
          <div className="mb-6">
            <h4 className="mb-4 text-base font-medium text-body-color">Faculté</h4>
            <div className="flex flex-col gap-3">
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-5 w-5 rounded border-stroke" />
                <span className="text-body-color">FST</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3 h-5 w-5 rounded border-stroke" />
                <span className="text-body-color">FSEG</span>
              </label>
            </div>
          </div>
        </div>
  
        {/* Registration Form */}
        <div className="mb-8 rounded-md bg-white p-6 shadow-md dark:bg-gray-dark">
          <h3 className="mb-6 text-xl font-semibold text-black dark:text-white">
            Inscription au cours
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
            />
            <input
              type="tel"
              placeholder="Téléphone"
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
              <li className="mb-2">Carte d'identité (scan)</li>
              <li className="mb-2">Photo d'identité récente</li>
              <li className="mb-2">Dernier diplôme obtenu</li>
              <li className="mb-2">Relevé de notes</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <FileUpload />  
            <button className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80">
              Soumettre les documents
            </button>
          </div>
        </div>
      </div>
    );
  };

export default BlogSidebar;