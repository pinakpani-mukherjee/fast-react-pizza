import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem, { Pizza } from "./MenuItem";

export const loader = async (): Promise<Array<Pizza>> => {
  const menu = await getMenu();
  return menu;
};

const Menu = () => {
  const menu = useLoaderData() as Array<Pizza>;
  console.log(menu);
  return (
    <div>
      <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id}></MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
