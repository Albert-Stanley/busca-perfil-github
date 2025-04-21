type UserProfileProps = {
  avatarUrl: string;
  name: string;
  bio: string;
};

export function UserProfile({ avatarUrl, name, bio }: UserProfileProps) {
  return (
    <div className="w-full max-w-[804px] h-auto md:h-[257px] rounded-[25px] bg-[var(--color-gray-200)] flex flex-col md:flex-row items-center md:items-start gap-6 border px-4 py-4 md:px-6">
      <img
        src={avatarUrl}
        alt={`Avatar de ${name}`}
        className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] rounded-full border-2 border-[var(--color-blue-primary)] object-cover"
      />
      <div className="flex flex-col justify-center gap-2 text-center md:text-left">
        <h2 className="text-[22px] md:text-[28px] font-bold text-[var(--color-blue-primary)]">
          {name}
        </h2>
        <p className="text-[16px] md:text-[18px] text-black">
          {bio || "Este usuário não possui biografia."}
        </p>
      </div>
    </div>
  );
}
