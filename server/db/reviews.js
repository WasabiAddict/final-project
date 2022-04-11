import { Query } from "./index";

const allReviews = () => Query("select * from reviews");

const oneRewiew = (id) => Query("select * from reviews where rewiews.id = ?", [id]);

const remove = (id) => Query("delete from reviews where reviews.id = ?", [id]);

const insert = (name, review) => Query("insert into reviews (name, review) values (?, ?)", [name, review]);

const edit = (id, review) => Query("UPDATE reviews SET review = ? WHERE reviews.id = ?", [id, review]);


export default {
    allReviews,
    oneRewiew,
    remove,
    insert,
    edit
}