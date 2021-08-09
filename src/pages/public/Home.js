import React from 'react';

import CarouselHome from '../../components/views/CarouselHome';
import CardContentHome from '../../components/cards/CardContentHome';

import { dataContentDown } from '../../data/public/home';

const Home = () => {
  return (
    <>
      <CarouselHome />
      { dataContentDown &&
        <section className="container-fluid p-lg-4">
          {
            dataContentDown.map( object =>
              <CardContentHome
                key={ object.nameImage }
                nameImage={ object.nameImage }
                information={ object.information }
                isImageLeft={ object.isImageLeft }
              />
            )
          }
        </section>
      }
    </>
  );
};

export default Home;