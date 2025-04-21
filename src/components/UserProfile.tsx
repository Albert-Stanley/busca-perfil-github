type UserProfileProps = {
  avatarUrl: string;
  name: string;
  bio: string;
};

export function UserProfile({ avatarUrl, name, bio }: UserProfileProps) {
  return (
    <div className="w-[804px] h-[257px] rounded-[25px] bg-[var(--color-gray-200)] flex items-center gap-6 border  px-6 py-4">
      <img
        src={avatarUrl}
        alt={`Avatar de ${name}`}
        className="w-[220px] h-[220px] rounded-full border-2 border-[var(--color-blue-primary)] object-cover"
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="text-[28px] font-bold text-[var(--color-blue-primary)]">
          {name}
        </h2>
        <p className="text-[18px] text-black">
          {bio || "Este usuário não possui biografia."}
        </p>
      </div>
    </div>
  );
}
