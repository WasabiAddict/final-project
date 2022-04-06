import { Query } from "./index";

const allHours = () => Query(" select * from hours join landfills on landfills.id = hours.landfillid");

const filteredHours = (landfillid) => Query("select * from hours where hours.landfillid = ?", [landfillid]);

export default {
    allHours,
    filteredHours
}