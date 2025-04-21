import GitHubIcon from "../assets/github-icon.svg";
import GitHubLogo from "../assets/github-logo.svg";

export default function PageTitle() {
  return (
    <div className="text-center flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-x-3 mt-5">
      <img
        src={GitHubIcon}
        alt="Ícone GitHub"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-[58px] md:h-[58px]"
      />
      <h1 className="font-semibold text-4xl sm:text-6xl">Perfil</h1>
      <img
        src={GitHubLogo}
        alt="Logo GitHub"
        className="w-28 sm:w-36 md:w-40 lg:w-[160px] h-auto"
      />
    </div>
  );
}
