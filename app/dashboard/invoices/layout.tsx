export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Layout Page
      <div>{children}</div>
    </div>
  );
}
