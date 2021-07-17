import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const MAIN_CARD_ITEMS = [
    {
        src: require('../assets/images/img-9.jpg'),
        text:'Explore the hidden waterfall deep inside the Amazon jungle',
        label: 'Adventure',
        path: '/services'

    },{
        src: require('../assets/images/img-2.jpg'),
        text:'Travel through the islands of Bali in a private cruise',
        label: 'Luxuray',
        path: '/services'

    }
]

const SUB_CARD_ITEMS = [
    {
        src: require('../assets/images/img-3.jpg'),
        text:'Set sail in the Atlantic Ocean visiting Unchartered Waters',
        label: 'Mystery',
        path: '/services'

    },{
        src: require('../assets/images/img-4.jpg'),
        text:'Experience Football on Top of the Himilayan Mountains',
        label: 'Adventure',
        path: '/products'

    },{
        src: require('../assets/images/img-8.jpg'),
        text:'Ride through the Sahara Desert on a guided camel tour',
        label: 'Adrenaline',
        path: '/sign-up'

    }
]


const Cards = () => {
    return (
        <div className="cards">
            <h1>Check Out These Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        {
                            MAIN_CARD_ITEMS.map((card, key) => (
                                <CardItem 
                                    key={`card_${key}`}
                                    src={card.src}
                                    text={card.text}
                                    label={card.label}
                                    path={card.path}
                                />
                            ))
                        }
                    </ul>
                    <ul className="cards__items">
                    {
                        SUB_CARD_ITEMS.map((card, key) => (
                                <CardItem 
                                    key={`card_${key}`}
                                    src={card.src}
                                    text={card.text}
                                    label={card.label}
                                    path={card.path}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;