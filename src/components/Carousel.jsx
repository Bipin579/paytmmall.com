import React, { useEffect, useState } from "react";
import Mycard from "../Components/MyCard";
import "./Carousal.css";
import {useDispatch,useSelector} from 'react-redux'
import { getData } from "../Redux/App/action";

export const Carosel = () => {

const dispatch=useDispatch();
const caroseldata=useSelector((store) =>store.appReducer)
console.log(caroseldata.data.carosel1);

  let box = document.querySelector(".product-carousel");
  let box2 = document.querySelector(".product-carousel2");
  let box3 = document.querySelector(".product-carousel3");

  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

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
    dispatch(getData);
     setData(caroseldata.data.carosel1);
     setData2(caroseldata.data.carosel2)
     setData3(caroseldata.data.carosel3)
  }, []);

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
          {data.length > 0 &&
            data.map((el) => {
              return <Mycard image={el.img} name={el.name} />;
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
          {data2.length > 0 &&
            data2.map((el) => {
              return <Mycard image={el.img} name={el.name} />;
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
          {data3.length > 0 &&
            data3.map((el) => {
              return <Mycard image={el.img} name={el.name} />;
            })}
        </div>
      </div>
    </div>
  );
};
