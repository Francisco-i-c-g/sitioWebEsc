import Footer from "../Footer";

export default function OfertaAcademica() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-12 bg-dark p-5 rounded-3">
            <div className="bg-light p-5 rounded-3 border border-3" style={{textAlign:"justify"}}>
              <p className="h2" style={{textAlign:"center"}}>Oferta Academica</p>
              <p>
                El SEMS cuenta con una amplia oferta de programas educativos,
                entre opciones propedéuticas o bivalentes con formación
                tecnológica, en modalidades presencial y mixta. Estos programas
                educativos incorporan el constructivismo y la centralidad en el
                aprendizaje de los estudiantes como aspectos esenciales en el
                diseño y gestión curricular. La propuesta curricular se
                despliega en competencias genéricas, específicas y profesionales
                como conceptos ordenadores que permiten incorporar los
                requerimientos establecidos por el Sistema Nacional de
                Bachillerato.
              </p>
              <p>
                La oferta de educación presencial se compone de 30 planes de
                estudio: el Bachillerato General por Competencias; 16
                bachilleratos tecnológicos y 13 tecnólogos profesionales. En
                estos planes de estudio se incluyen las 2 orientaciones del
                Bachillerato Intercultural Tecnológico, el cual incorpora el
                enfoque intercultural y se ofrece en las comunidades Wiraritari
                del norte de estado de Jalisco.
              </p>
              <p>
                En modalidad mixta se ofrece el Bachillerato General por
                Competencias, así como el Bachillerato Tecnológico en Seguridad
                Ciudadana, que puede gestionarse en modalidad mixta o
                presencial.
              </p>
              <p>
                Al concluir los estudios, todos los programas educativos otorgan
                un certificado de bachillerato, documento que permite a sus
                egresados aspirar a realizar estudios de nivel superior. Las
                opciones que incluyen formación tecnológica otorgan un título
                que acredita la formación profesional correspondiente.
              </p>
              <p>
                La oferta académica de cada una de las escuelas del SEMS, se
                determina en función de su pertinencia a los entornos
                socioeconómicos y demográficos de cada una de las localidades
                donde se cuenta con instalaciones de nivel medio superior.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
