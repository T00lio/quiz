import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchFn, handleDefaultError, useMutation } from "../utils";
import { ApiResponse, User, useUser } from "../components/UserContext/UserContext";
import { toast } from "react-toastify";

interface ResetPasswordParams {
  token: string;
  newPassword: string;
}

const ResetPassword = () => {
  const { setUser } = useUser();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const query = new URLSearchParams(useLocation().search);
  const token = query.get("token");
  let navigate = useNavigate();

  const { mutate: resetPassword } = useMutation({
    mutationFn: (variables: ResetPasswordParams): Promise<ApiResponse<User>> =>
      fetchFn("/auth/reset-password", { method: "POST", credentials: "include", requestBody: variables }),
    onSuccess: ({ data }) => {
      setUser(data);
      navigate("/");
    },
    onError: handleDefaultError,
  });

  const handleResetPassword = async (e: any) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!token) toast.error("Token no provided");
    else resetPassword({ token, newPassword });
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetPassword;
