import { Query } from "./index";

const allLandfilltypes = () => Query("select * from landfilltypes join landfills on landfills.id = landfilltypes.landfillid");

const filteredTypes = (landfillid) => Query("select * from landfilltypes where landfilltypes.landfillid = ?", [landfillid]);



export default {
    allLandfilltypes,
    filteredTypes
}