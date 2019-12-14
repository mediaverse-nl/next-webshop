

import React, {Component} from 'react'
import Carousel from 'react-multi-carousel';

class HomeSlideShow extends Component {

    render() {
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };

        return (
            <div className="container">
                <style jsx>{`
                    img {
                      width: 100%; 
                    }  
                    li{
                        display:inline-block;
                    }
                `}</style>
                <Carousel responsive={responsive} ssr>

                    <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
                    <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
                    <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
                    <div><img src="https://pawelgrzybek.com/siema/assets/siema--pink.svg" alt="Siema image" /></div>
                    <div><img src="https://pawelgrzybek.com/siema/assets/siema--yellow.svg" alt="Siema image" /></div>
                </Carousel>
            </div>
        );
    }
}

export default HomeSlideShow;