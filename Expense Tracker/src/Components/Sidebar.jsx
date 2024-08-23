import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdSwitchAccount } from "react-icons/md";
import User from "./User";
const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="user">
        <User />
      </div>
      <ul className="navitems">
        <li>
          <Link>
            <span>
              <MdDashboard />
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>
              <AiOutlineTransaction />
            </span>
            <span>Transactions</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>
              <MdSwitchAccount />
            </span>
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
