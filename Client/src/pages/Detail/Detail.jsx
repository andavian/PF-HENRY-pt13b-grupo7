import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getProductById} from "../../redux/actions";

export default function Detail() {
  const detailState = useSelector((state)=>state.details)
  const dispatch = useDispatch()
  const {id}=useParams()
  useEffect(() => {
    dispatch(getProductById(id));
 }, [dispatch,id]);

  return (
    <div>
      <h2>Aca renderiza el detail</h2>
    </div>
  );
}
