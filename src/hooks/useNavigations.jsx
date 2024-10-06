import { useNavigate } from "react-router-dom";

export const useNavigations = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/tasks/${item.id}`);
  };

  return { handleClick };
};
