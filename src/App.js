import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Tu propia tienda de NFT's. Empieza a vender y crecer"
        description="Compra, Guarda, Colleciona NFT's, Intercambia y Gana Crypto. 25mil+ personas utilizan ProNef."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Amigable interfaz de compra y venta"
        description="Experimenta con la interfaz que te ofrece ProNef NFT para comprar, vender y coleccionar NFT's."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Despliegue"
        description="ProNef se desarrollado utilizando Expo, por lo que puede ser utilizado por cualquier dispositivo. Puedes facilmente colocar tu app en las manos de cualquier usuario."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Una creativa manera de mostrar la tienda"
        description="La app contiene dos pantallas. La primera pantalla enlista todos los NFT's mientras que la segunda muestra los detalles de un NFT en especifico."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Hecho con amor por {" "}
        <span className="bold">Dev_JoseG</span>
        </p>
      </div>
    </>
  );
}

export default App;
