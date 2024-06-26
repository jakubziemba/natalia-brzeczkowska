export default function PageHeading({ children }: { children: string }) {
  return (
    <div className="flex justify-center py-16 pb-20 md:pb-24">
      <h1 className="font-serif text-6xl font-[450] text-red">{children}</h1>
    </div>
  );
}
