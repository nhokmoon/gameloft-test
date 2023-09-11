"use client";

import React, { useState, useEffect, useCallback } from "react";
import "./Slider.css";
import CardSliderActive from "../event-promotion/CardSliderActive";
import CardSliderNonActive from "../event-promotion/CardSliderNonActive";

const Slider = ({ promotions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkScreenSize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const slideInterval = setInterval(() => {
      // Auto-scroll to the next slide every 3 seconds
      const nextSlide = (currentSlide + 1) % promotions.length;
      setCurrentSlide(nextSlide);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [currentSlide, promotions.length, checkScreenSize]);

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slide-wrapper">
        {promotions.map((promotion, index) => (
          <>
            {isSmallScreen ? (
              <div key={index} className={`slideMobile ${index === currentSlide ? "active" : ""} `}>
                <div className="promotion-info ml-[1rem] mr-[1rem]">
                  {index === currentSlide ? (
                    <CardSliderActive promotion={promotion} />
                  ) : (
                    <CardSliderNonActive />
                  )}
                </div>
              </div>
            ) : (
              <div key={index} className={`slide ${index === currentSlide ? "active" : ""} `}>
                <div className="promotion-info">
                  {/* <h2>{promotion.title}</h2>
                  {index === currentSlide ? <p>{promotion.description}</p> : <></>} */}
                  <div className="promotion-info ml-[1rem] mr-[1rem]">
                    {index === currentSlide ? (
                      <CardSliderActive promotion={promotion} />
                    ) : (
                      <CardSliderNonActive />
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <div className="pagination">
        {promotions.map((_, index) => (
          <div
            key={index}
            className={`pagination-circle ${index === currentSlide ? "active" : ""}`}
            onClick={() => handlePaginationClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
