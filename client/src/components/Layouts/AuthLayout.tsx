import CoverImage from "../../assets/images/cover.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex">
      {/* left half */}
      <div className="w-1/2">
        <img
          src={CoverImage}
          alt=""
          className="w-full"
          style={{
            height: "800px",
          }}
        />
      </div>
      {/* right half */}
      <div className="w-1/2">{children}</div>
    </div>
  );
}
