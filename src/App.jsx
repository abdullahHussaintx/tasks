import { Button } from "./components/Button";
import { useNavigations } from "./hooks/useNavigations";
import { tasksButton } from "./utils/data";

export const App = () => {
  const { handleClick } = useNavigations();

  return (
    <div className=" flex flex-col gap-5 h-screen justify-center items-center">
      {tasksButton.map((item) => (
        <Button
          onClick={() => handleClick(item)}
          key={item.id}
          title={item.title}
        />
      ))}
    </div>
  );
};
