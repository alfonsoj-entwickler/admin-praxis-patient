export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className="p-2 my-4 bg-red-700 text-white text-center text-sm font-bold uppercase">
      {children}
    </p>
  );
}
