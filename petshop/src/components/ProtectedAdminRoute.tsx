import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: Props) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
