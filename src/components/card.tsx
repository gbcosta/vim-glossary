export const Card = ({
  children,
  commandName,
}: {
  children: string;
  commandName: string;
}) => {
  return (
    <div
      className="rounded-sm p-2 min-w-48 shadow-[0_2px_12px_0_rgba(0,0,0,0.3)] border-zinc-300"
      style={{ fontFamily: "Fira Code" }}
    >
      <div className="flex flex-col gap-1 items-center text-lg">
        <span className="font-bold">{commandName}</span>
        <span>{children}</span>
      </div>
    </div>
  );
};
