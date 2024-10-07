import { Button } from "./components/Button";
import { useNavigations } from "./hooks/useNavigations";
import { tasksButton } from "./utils/data";
import ss1 from "./assets/ss1.png";
import ss2 from "./assets/ss2.png";

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
