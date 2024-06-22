export default function RegisterPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div>Register My Athlete</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              First Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              Last Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              Email
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Phone Number"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="text-sm font-medium leading-none text-muted-foreground">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
