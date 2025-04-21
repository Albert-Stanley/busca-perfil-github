import LupaIcon from "../assets/lupa-icon.svg";

interface SearchInputProps {
  inputRef: React.RefObject<HTMLInputElement | null>;
  onSearch: () => void;
}

export default function SearchInput({ inputRef, onSearch }: SearchInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex w-full max-w-md mt-8 rounded-[10px] border border-[var(--color-border-grey)] focus-within:ring-2 focus-within:ring-[var(--color-blue-primary)] transition-all duration-200 bg-white">
      <input
        type="text"
        placeholder="Digite um usuário do Github"
        className="flex-1 px-4 py-3.5 text-black font-semibold placeholder-black outline-none bg-white rounded-[10px]"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="bg-[var(--color-blue-primary)] px-4 py-3 flex items-center justify-center rounded-tr-[10px] rounded-[10px] hover:brightness-110 active:brightness-90 transition-all duration-200 cursor-pointer"
        onClick={onSearch}
      >
        <img src={LupaIcon} alt="Ícone de lupa" className="w-5 h-5" />
      </button>
    </div>
  );
}
