import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Minhas" description="experiências" />

      <section>
        <ExperienciaItem
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsum dolor sdsadas it amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Front-sasend"
          description="Lorem ipsum sss dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Frondsa dsa t-end"
          description="Lorem idsadas psum dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
        <ExperienciaItem
          year="2022"
          title="Dev Front-end"
          description="Lorem ipsumdsada  dolor sit amet, consectetur adipiscing elit. Aliquam"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
