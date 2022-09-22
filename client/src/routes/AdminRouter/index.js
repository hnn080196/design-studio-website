import { Navigate, Outlet } from "react-router-dom";
import { TOKEN } from "config/config";
import AdminLayout from "layout/AdminLayout";
export const AdminRoute = ({ children }) => {
  const token = localStorage.getItem(TOKEN);
  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
};
