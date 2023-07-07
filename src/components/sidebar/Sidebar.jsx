import Menu from "../menu/Menu";
import { categories } from "../../data/categories.json";
import { Wrapper } from "./Styles";
import Search from "../search";

const Sidebar = () => {
  return (
    <Wrapper>
      <div>
        <h1>Category</h1>
        <Search></Search>
        {categories.map((category) => {
          return <Menu key={category.id} categories={category}></Menu>;
        })}
      </div>
    </Wrapper>
  );
};

export default Sidebar;
