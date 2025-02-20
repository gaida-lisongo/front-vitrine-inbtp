"use client";

import { homeService } from "@/api/home";
import { useState, useEffect } from "react";
import Link from 'next/link';

function Sections() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    homeService.section()
    .then((api) => {
      let data = []

      api.data.map((section) => {
        data.push({
          id: section.id,
          title: section.designation,
          href: section.url
        })
      })

      setSections(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
      {
        sections && sections.map((section) => (
          <Link
            key={section.id}
            href={`https://${section.href}`}
            title="Section"
            target="_blank"
            className="rounded-xl inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
          >
            {section.title}
          </Link>
        ))
      }
      {/* <Link
        href="https://nextjstemplates.com/templates/saas-starter-startup"
        className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
      >
        🔥 Get Pro
      </Link> */}
      {/* <Link
        href="https://github.com/NextJSTemplates/startup-nextjs"
        className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
      >
        Section 1
      </Link> */}
    </div>

  );
  
}

export default Sections;