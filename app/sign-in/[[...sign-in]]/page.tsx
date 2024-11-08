import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random?landscape')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="w-full max-w-sm rounded-lg bg-white shadow-lg">
          <SignIn />
        </div>
      </div>
    </div>
  );
}
