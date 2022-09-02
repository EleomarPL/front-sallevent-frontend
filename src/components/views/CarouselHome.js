import { dataCarousel } from '../../data/public/home';

const CarouselHome = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0" className="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5" aria-label="Slide 6"></button>
      </div>
      <div className="carousel-inner">
        { dataCarousel &&
          dataCarousel.map( (object, index) =>
            <div
              key={ object.title }
              className={ `carousel-item ${index === 0 ? 'active' : ''}` }
            >
              <picture>
                <source
                  srcSet={ require(`../../img/home/content-carousel/${object.nameImg}.webp`) }
                  className="img-responsive d-block w-100"
                  style={ { objectFit: 'cover' } }
                  height="500px"
                />
                <img
                  src={ require(`../../img/home/content-carousel/${object.nameImg}.png`) }
                  className="img-responsive d-block w-100"
                  style={ { objectFit: 'cover' } }
                  alt={ object.title }
                  height="500px"
                />
              </picture>
              <div className="carousel-caption d-none d-md-block">
                <h5>{ object.title }</h5>
                { object.description &&
                  <p>{ object.description }</p>
                }
              </div>
            </div>
          )
        }
      </div>
      <button className="carousel-control-prev" type="button"
        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button"
        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselHome;