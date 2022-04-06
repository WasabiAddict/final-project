// This is an example of what would go in this file. Feel free to delete/overwrite these contents and rename the file. Remember to make a seperate file for each database table!

import { Query } from "./index";

const allprices = () => Query("select * from admissioncategories join landfills on landfills.id = admissioncategories.landfillid");

const filteredPrices = (landfillid) => Query("select * from admissioncategories where admissioncategories.landfillid = ?", [landfillid]);


export default {
    allprices,
    filteredPrices
}