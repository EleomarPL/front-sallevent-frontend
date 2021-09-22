import { Suspense, lazy } from 'react';

import CarouselHome from '../../components/views/CarouselHome';
const CardContentHome = lazy(() => import('../../components/cards/CardContentHome'));
import SpinnerLoading from '../../components/common/SpinnerLoading';

import { dataContentDown } from '../../data/public/home';

const Home = () => {
  return (
    <>
      <CarouselHome />
      <Suspense fallback={ <SpinnerLoading /> }>
        <section className="container-fluid p-lg-4">
          { dataContentDown &&
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
      </Suspense>
    </>
  );
};

export default Home;