import React, { useEffect, useState } from "react";
import Mycard from "./MyCard"
import "./Carousel.css";
import {useDispatch, useSelector} from "react-redux"
import { getCarosels } from "../Redux/App/action";

export const Carosel = () => {



  let box = document.querySelector(".product-carousel");
  let box2 = document.querySelector(".product-carousel2");
  let box3 = document.querySelector(".product-carousel3");

  const dispatch = useDispatch();
  const allcarosels = useSelector(store => store.AppReducer.allcarosels);


  const carouselSlidePrev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };

  const carouselSlideNext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };
  const btnpressprev = () => {
    let width2 = box2.clientWidth;
    box2.scrollLeft = box2.scrollLeft - width2;
  };
  const btnpressnext = () => {
    let width = box2.clientWidth;
    box2.scrollLeft = box2.scrollLeft + width;
  };
  const thirdCaroselPrev = () => {
    let width = box3.clientWidth;
    box3.scrollLeft = box3.scrollLeft - width;
  };
  const thirdCarouselNext = () => {
    let width = box3.clientWidth;
    box3.scrollLeft = box3.scrollLeft + width;
  };

  useEffect(() => {
    dispatch(getCarosels);
  }, []);
// console.log(allcarosel);
  return (
    <div>
      <div id="satyam">
        <button className="pre-btn" onClick={carouselSlidePrev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={carouselSlideNext}>
          <p>&gt;</p>
        </button>
        <div className="product-carousel">
          {
            allcarosels.carosel1?.map((el) => {
              return <Mycard key={el.id} image={el.img} name={el.name} />;
            })}
        </div>
      </div>

      {/* -------------------------------------------------- */}

      <div id="satyam2">
        <button className="pre-btn2" onClick={btnpressprev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn2" onClick={btnpressnext}>
          <p>&gt;</p>
        </button>
        <div className="product-carousel2">
          {
            allcarosels.carosel2?.map((el) => {
              return <Mycard key={el.id} image={el.img} name={el.name} />;
            })}
        </div>
      </div>

      {/* ------------------------------------------------------   */}

      <div id="satyam2">
        <button className="pre-btn3" onClick={thirdCaroselPrev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn3" onClick={thirdCarouselNext}>
          <p>&gt;</p>
        </button>
        <div className="product-carousel3">
          {
            allcarosels.carosel3?.map((el) => {
              return <Mycard key={el.id} image={el.img} name={el.name} />;
            })}
        </div>
      </div>
    </div>
  );
};
