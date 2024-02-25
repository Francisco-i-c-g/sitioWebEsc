import Footer from "../Footer";
import img4 from "../imgBody/prapaImg.webp";
import img1 from "./valores.jpg";
import img2 from "./ethics.png";
import img3 from "./premio.jpg";
import img5 from "./Bien-Comun.png";
import img6 from "./Sana-Convivencia.png";

function footerOne() {
  return <Footer />;
}

export default function InfoPrepa() {
  const textoHis =
    "La Escuela Nacional Preparatoria desde su origen es una Institución" +
    "de caracter público y modelo educativo de la enseñanza media" +
    "superior, respondiendo satisfactoriamente a los retos y demandas de" +
    "la sociedad en su conjunto. Forma parte del sistema educativo" +
    "mexicano y es uno de los dos sistemas de bachillerato de la UdeG.";

  const textVal =
    "La base educativa de cualquier preparatoria de altura. " +
    "Motiva a los estudiantes a dar lo mejor de sí mismos en el estudio, " +
    "lo que más tarde se traduce a otros ámbitos de su vida";

  const textEti =
  "Es el conjunto de valores morales que guían el comportamiento de los alumnos, como la honestidad, la responsabilidad, la justicia y el respeto. La formación ética busca que los alumnos sean personas íntegras, conscientes y críticas.";

  const textTra =
  "Es la motivación de realizar las tareas con esmero, dedicación y calidad, buscando siempre la mejora continua y la satisfacción personal. El trabajo bien hecho implica también el trabajo en equipo, la colaboración y la comunicación efectiva.";

  const textBien =
  "Es la actitud de servicio y solidaridad que implica reconocer las necesidades de la sociedad y participar activamente en su solución. La contribución al bien común implica también el cuidado del medio ambiente y el respeto a la diversidad.";

  const textSana =
  " Es la capacidad de relacionarse con los demás de manera cordial, pacífica y respetuosa, reconociendo y valorando las diferencias y las opiniones ajenas. La sana convivencia favorece el clima escolar, el aprendizaje y el desarrollo emocional."
  return (
    <>
      <div
        className="container bg-dark p-5"
        style={{
          marginTop: "10rem",
          marginBottom: "10rem",
          borderRadius: "20px",
        }}
      >
        <div className="h-1 bg-darg">Sobre Nosotros</div>
        <div className="row">
          <CardPrepa img={img4} text={textoHis} title="Historia" />
          <CardPrepa img={img1} text={textVal} title="Excelencia Académica" />
          <CardPrepa img={img2} text={textEti} title="Formacion Etica" />
        </div>
        <div className="row mt-3">
          <CardPrepa img={img3} text ={textTra} title="Trabajo Bien Hecho" />
          <CardPrepa img={img5} text ={textBien} title="Contribucion al Bien Comun" />
          <CardPrepa img={img6} text ={textSana} title="Sana Convivencia"/>
        </div>
      </div>

      {footerOne()}
    </>
  );
}

function CardPrepa(props) {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
