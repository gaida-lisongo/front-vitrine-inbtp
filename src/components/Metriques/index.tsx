"use client";

import { use, useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { homeService } from "@/api/home";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    courses: 0,
    promotions: 0
  });
  const [metriques, setMetriques] = useState(null);

  useEffect(() => {
    homeService.metriques()
    .then((api) => {
      setMetriques(api.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  const targetStats = {
    students: 1500,
    courses: 120,
    promotions: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 secondes pour l'animation
    const steps = 50;
    const interval = duration / steps;

    const animate = (data) => {
      
      if (!data) return;
      for (let i = 0; i <= steps; i++) {
        setTimeout(() => {
          setAnimatedStats({
            students: Math.round((data.etudiants / steps) * i),
            courses: Math.round((data.matieres / steps) * i),
            promotions: Math.round((data.promotions / steps) * i)
          });
        }, interval * i);
      }
    };

    // Démarrer l'animation lorsque le composant est visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate(metriques);
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(document.getElementById("stats-section"));

    return () => observer.disconnect();
  }, [metriques]);

  return (
    <section id="stats-section" className="relative py-16 md:py-20 lg:py-28 -mt-6">
      <div className="container">
      <div className="mt-0 grid grid-cols-1 gap-8 md:grid-cols-3">
        {metriques && [
        {
          value: animatedStats.students,
          label: "Étudiants",
          symbol: "+"
        },
        {
          value: animatedStats.courses,
          label: "Cours",
          symbol: "+"
        },
        {
          value: animatedStats.promotions,
          label: "Promotions",
          symbol: ""
        }
        ].map((stat, index) => (
        <div
          key={index}
          className="wow fadeInUp relative z-10 rounded-xl bg-white px-8 py-10 shadow-2xl transform transition-transform hover:scale-105 dark:bg-[#1D2144]"
          data-wow-delay={`0.${index + 1}s`}
        >
          <div className="flex flex-col items-center justify-center">
          <h3 className="mb-2 text-4xl font-bold text-black dark:text-white">
            {stat.value}
            <span className="text-primary">{stat.symbol}</span>
          </h3>
          <p className="text-lg font-medium text-dark-text">{stat.label}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Stats;