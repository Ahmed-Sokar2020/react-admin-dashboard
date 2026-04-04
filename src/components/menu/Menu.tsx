import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <nav className="menu" aria-label="Sidebar navigation" role="navigation">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="itemTitle">{item.title}</span>

          <ul className="list">
            {item.listItems.map((listItem) => (
              <li key={listItem.id}>
                <Link
                  to={listItem.url}
                  className="listItem"
                  aria-label={listItem.title}
                >
                  <img
                    src={listItem.icon}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <span className="listItemTitle">{listItem.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Menu;
