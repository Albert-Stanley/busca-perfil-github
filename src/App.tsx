import ellipse1 from "./assets/ellipse1.svg";
import ellipse2 from "./assets/ellipse2.svg";
import dottedLayer from "./assets/Camada_1.svg";
import PageTitle from "./components/PageTitle";
import SearchInput from "./components/SearchInput";

export default function GitHubProfileLayout() {
  return (
    <div className="relative w-full h-screen bg-[#1f1f1f] overflow-hidden flex justify-center items-center">
      {/* Fundo visual esquerdo */}
      <img
        src={ellipse1}
        alt="Efeito visual esquerdo"
        className="absolute top-0 left-0 w-[300px] md:w-[400px] lg:w-[674px] pointer-events-none select-none"
      />

      {/* Camada pontilhada */}
      <img
        src={dottedLayer}
        alt="Camada pontilhada"
        className="absolute top-[20px] left-[20px] w-[120px] h-[110px] md:w-[180px] md:h-[170px] lg:top-[28px] lg:left-[71px] lg:w-[239px] lg:h-[225px] pointer-events-none select-none"
      />

      {/* Fundo visual direito */}
      <img
        src={ellipse2}
        alt="Efeito visual direito"
        className="absolute top-0 right-0 w-[300px] md:w-[400px] lg:w-[674px] pointer-events-none select-none"
      />

      {/* Container preto central */}
      <div className="z-10 bg-black w-[90%] max-w-[1156px] h-[80%] max-h-[537px] rounded-lg p-6 md:p-8 shadow-xl flex flex-col justify-start items-center">
        <PageTitle />
        <SearchInput />
      </div>
    </div>
  );
}
