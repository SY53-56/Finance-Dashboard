import RoleSwitcher from "./RoleSwitcher";

function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <RoleSwitcher />
    </div>
  );
}

export default Header;