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
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id}></MenuItem>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
