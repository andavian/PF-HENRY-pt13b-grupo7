import FormCategories from "../../components/FormCategories/FormCategories";
import FormProducts from "../../components/FormProducts/FormProducts";
import {RiDashboardLine }from "react-icons/ri"
import { Link } from "react-router-dom";
import styles from "./Admin.module.css"

const Admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
      {/* logotipo */}
      <div className={styles.textcontainer}>
        <h1 className={styles.text}>Admin</h1>
      </div>
      {/* menu */}
      <nav>
        <ul>
          <li>
            <Link to="#" className={styles.link}>
              <RiDashboardLine/>
              Dashboard
              </Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default Admin;
