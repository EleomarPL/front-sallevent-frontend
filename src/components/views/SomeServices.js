const SomeServices = () => {
  return (
    <>
      <article className="row no-gutters mb-3">
        <div className="mb-3 pl-md-5 pr-md-5 col-lg-6 pl-lg-3 pr-lg-3">
          <picture>
            <source
              srcSet={ require('../../img/services/boda.webp').default }
            />
            <img src={ require('../../img/services/boda.png').default }
              alt="Boda" style={ {borderRadius: '30px'} }
              className="img-fluid"
            />
          </picture>
        </div>
        <div className="col-lg-6">
          <h5 className="font-weight-bold">Bodas</h5>
          <p className="text-justify">
            Uno de los servicios más importantes en una boda es el de <span className="font-weight-bold">decoración</span>, ya que la misma reflejara el estilo que tendrá la misma.
            La decoración más habitual es aquellas con flores y velas que se suele apreciar en las iglesias y en los salones de casamiento del registro civil;
            los servicios de decoración para bodas pueden solicitarse en cualquier floristería ya que por lo general, las mismas ofertan paquetes especiales para las bodas.
          </p>
          <h6 className="font-weight-bold">Servicios adicionales</h6>
          <p className="text-justify">
            Cada uno de los servicios que mencionamos suele tener una gran relevancia en las bodas, pero sin duda uno de los más importantes es el de <span className="font-weight-bold">fotografía</span>
            y <span className="font-weight-bold">video</span> que suelen ofrecer los estudios, y es aquí en donde se les presenta un dilema que les resulta difícil de resolver.
            Esto se debe a que se puede contar con amigos o con algún familiar para que se encargue de fotografiar y filmar la boda,
            pero se debe tener en cuenta que esta opción no presentará la calidad deseada en un recuerdo tan importante. Aunque pueda resultar algo costosos, los servicios para bodas de fotografía y
            video contratados ofrecen paquetes que pueden resultar muy originales en cuanto a la presentación del trabajo finalizado.
          </p>
        </div>
      </article>
      <article className="row no-gutters">
        <div className="col-lg-6">
          <h5 className="font-weight-bold">Graduaciones</h5>
          <p className="text-justify">
            Nuestro salón de evento destaca entre las compañías que organizan fiestas de graduación, porque brinda los mejores servicios en una conveniente relación precio/calidad.
            Por esto es el mejor y más solicitado.
          </p>
          <p className="font-weight-bold mb-2">
            Brindamos:
          </p>
          <ul>
            <li>Comida exquisita y de buen gusto.</li>
            <li>Ambientaciones musicales en vivo, con solistas y ensambles de primer nivel.</li>
            <li>Juegos de convivencia que animan al máximo la fiesta, en un ambiente de alegría y seguridad.</li>
          </ul>
          <p className="text-justify">
            Contamos con paquetes de salones para graduaciones acordes a tus gustos, presupuesto y con facilidades de pago.
            La recompensa a todo tu esfuerzo debe ser grande y para lograrlo, contamos con salones y jardines adaptados para que tu celebración sea inolvidable.
          </p>
        </div>
        <div className="pl-md-5 pr-md-5 col-lg-6 pl-lg-3 pr-lg-3">
          <picture>
            <source
              srcSet={ require('../../img/services/luz.webp').default }
            />
            <img
              src={ require('../../img/services/luz.png').default }
              alt="Iluminación" style={ {borderRadius: '30px'} }
              className="img-fluid"
            />
          </picture>
        </div>
      </article>
    </>
  );
};

export default SomeServices;