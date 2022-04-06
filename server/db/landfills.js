import { Query } from "./index";

const allLandfills = () => Query("select * SELECT * FROM dumpsite.landfills");

const oneLandfill = (id) => Query(`SELECT * FROM dumpsite.landfills WHERE id= ?`, [id]);


export default {
    allLandfills,
    oneLandfill
}