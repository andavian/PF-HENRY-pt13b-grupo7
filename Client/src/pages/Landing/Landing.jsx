
import style from "./Landing.module.css";


const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.containertext}>
        <div>
          <div className={style.box}>
            <h2 className={style.title}>
            Bienvenidos
            </h2>
            <p className={style.text}>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

           
            <button
              className={style.button}
              onClick={() => (window.location.href = "../Home")}
            >
              ¡Ir a la app!
            </button>
          </div>
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Landing;
