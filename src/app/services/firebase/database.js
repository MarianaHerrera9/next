import {getFirestore} from "fierebase/firestore";
import conexion from "./index";

const db = getFirestore(conexion);
export default db;
