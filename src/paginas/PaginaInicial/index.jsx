import Cabecalho from "../../components/Cabecalho";
import Menu from "../../components/Menu";
import styles from "./PaginaInicial.module.scss";
import Banner from "../../components/Banner";
import Rodape from "../../components/Rodape";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu /> 
          <Banner/>        
        </section>
      </main>
      <Rodape/>
    </>
  );
}
