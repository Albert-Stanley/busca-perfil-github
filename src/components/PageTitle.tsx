import GitHubIcon from "../assets/github-icon.svg";
import GitHubLogo from "../assets/github-logo.svg";

export default function PageTitle() {
  return (
    <div className="text-center flex justify-center gap-x-3 mt-5 ">
      <img src={GitHubIcon} alt="Icone GitHub" />
      <h1 className="font-semibold text-6xl">Perfil</h1>
      <img src={GitHubLogo} alt="Logo GitHub" />
    </div>
  );
}
