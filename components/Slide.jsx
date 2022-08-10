import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';


export default function Slide() {
    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                    centerMode: false,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true,
                    centerMode: true,
                },
            },
        ],
    };


    return (
        <div>
            <Slider {...settings} className="">
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card1.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card2.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card3.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card8.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card5.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card6.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
                <div className='mx-3'>
                    <Image
                        src="/images/cards/card7.jpg"
                        width="200px"
                        height="296px"
                    />
                </div>
            </Slider>
        </div>
    )
}
