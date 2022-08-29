import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Photo } from './Photo';
import './Slider.css';

function Slider(toggle: boolean) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = Photo.length;
    console.log(toggle);
    const autoScroll = true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let slideInterval: string | number | NodeJS.Timer | undefined;
    const intervalTime = 4000;

    function auto() {
        if (toggle) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
        //지정된 시간마다 currentSlide를 업데이트.
    }

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1
            // currentSlide 배열전체만큼 증가했을땐 0으로 루프
            // 아니라면 +1
        );
    };

    useEffect(() => {
        if (autoScroll) {
            auto(); //토글이 true라면 currentSlide업데이트
        }
        return () => {
            clearInterval(slideInterval); //setInterval을 클리어 시켜줘서 재렌더링 되어도 업데이트 횟수를 한번만 하게함
        };
    }, [currentSlide]);

    return (
        <>
            <div className="slider">
                {Photo.map((slide, index) => {
                    return (
                        <div
                            className={
                                index === currentSlide
                                    ? 'slidecurrent'
                                    : 'slide'
                            }
                            //currentSlide가 map을 한바퀴돌때 맞는 index를 찾으면 slidecurrent div 생성
                            key={index}
                        >
                            {index === currentSlide && (
                                <img
                                    className="images"
                                    src={slide.image}
                                    alt="slide"
                                />
                                //위에서 생성된 div 안에다 currentSlide와 맞는 Photo배열의 index안에잇는 image를 생성
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
//컨텐츠를 함수로 생성해보기.
//배열 데이터 컴포넌트로 또만들어보기
export default Slider;
