import { Query } from "./index";

const allTypes = () => Query("select * from landfilltypes join landfills on landfills.id = landfilltypes.landfillid");

const filteredTypes = (landfillid) => Query("select * from landfilltypes where landfilltypes.landfillid = ?", [landfillid]);



export default {
    allTypes,
    filteredTypes
}