export const metadata = {
  title: "Policies — WebMaak",
};

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section style={{ padding: "4rem 2rem" }}>{children}</section>;
}
