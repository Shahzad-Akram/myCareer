import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const useRedirect = () => {
  const [role] = useSelector((state) => state.auth.user.role);

  const { roleName } = role;

  const history = useHistory();

  useEffect(() => {
    if (roleName === "student") {
      history.push("/");
    } else if (roleName === "admin") {
      history.push("/admin");
    } else if (roleName === "reviewer") {
      history.push("/readReview");
    }
  }, [roleName, history]);
};
