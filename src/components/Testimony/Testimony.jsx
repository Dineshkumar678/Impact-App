import React, { useState } from 'react';
import './Testimony.css';
import CarouselItem from './CarouselItem';

function Testimony() {
    const [activeIndex, setActiveIndex] = useState(0);

    const data = [
        {
            id: 1,
            name: "Nikhil Khandelwal",
            description: "Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line",
            img: "/testimony/person.png"
        },
        {
            id: 2,
            name: "Dinesh Kumar",
            description: "Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line",
            img: "/testimony/dinesh.png"

        },
        // {
        //     id: 3,
        //     name: "Sunil Kumar",
        //     description: 'Wiktionary has grown beyond a standard dictionary and now includes a thesaurus, a rhyme guide, phrase books, language statistics and extensive appendices. We aim to include not only the definition of a word, but also enough information to really understand it. Thus etymologies, pronunciations, sample quotations, synonyms, antonyms and translations are included.',
        //     img: "/testimony/women.png"

        // },
        // {
        //     id: 4,
        //     name: "Rinu Saini",
        //     description: "Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line Select the walking man icon & start walking second line",
        //     img: "/testimony/dinesh.png"

        // },
    ];

    const goToPrevSlide = () => {
        setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
    };

    const goToNextSlide = () => {
        setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className='testimony'>
            <div className='testimonycontent'>
                <div className='profilecontent'>
                    <CarouselItem data={data[activeIndex]} />
                </div>

                <div className='testimonybutton'>
                    <button className='left' onClick={goToPrevSlide}>
                        <img src='/testimony/leftarrow.png' alt='Left Arrow' />
                    </button>
                    <button className='right' onClick={goToNextSlide}>
                        <img src='/testimony/rightarrow.png' alt='Right Arrow' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Testimony;
