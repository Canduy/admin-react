import "./featured.scss";
import { MoreVert, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amout">$420</p>
        <p className="desc">
           Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
            <div className="item">
                <div className="itemTitle">Target</div>
                <div className="itemResult positive">
                    <KeyboardArrowDownOutlined  fontSize="small"/>
                    <div className="resultAmout">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last week</div>
                <div className="itemResult negative">
                    <KeyboardArrowUpOutlined  fontSize="small"/>
                    <div className="resultAmout">$12.4k</div>
                </div>
            </div>
            <div className="item">
                <div className="itemTitle">Last month</div>
                <div className="itemResult negative">
                    <KeyboardArrowUpOutlined  fontSize="small"/>
                    <div className="resultAmout">$12.4k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
