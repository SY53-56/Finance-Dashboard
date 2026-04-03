import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

function RoleSwitcher() {
  const { role, setRole } = useContext(AppContext);

  return (
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="px-3 cursor-pointer py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
    >
      <option value="viewer">👁️ Viewer</option>
      <option value="admin"><Link to='/add'>⚙️ Admin</Link></option>
    </select>
  );
}

export default RoleSwitcher;