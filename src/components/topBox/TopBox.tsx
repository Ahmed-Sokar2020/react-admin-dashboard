import "./topBox.scss";
import { topDealUsers } from "../../data";

const topBox = () => {
  return (
    <div className="topBox">
      <h2>Top Deals</h2>

      <div className="list">
        {topDealUsers.map((item) => (
          <div className="listItem" key={item.id}>
            <div className="itemContent">
              <div className="userImage">
                <img src={item.img} alt="" loading="lazy" />
              </div>
              <div className="userInfo">
                <span className="userName">{item.username}</span>
                <span className="userEmail">{item.email}</span>
              </div>
            </div>

            <div className="itemAmount">{item.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default topBox;
