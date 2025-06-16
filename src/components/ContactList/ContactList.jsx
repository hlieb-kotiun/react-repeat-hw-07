import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <h3>Name</h3>
        <h3>Phone</h3>
      </li>
      {filteredContacts.map((item) => {
        return <Contact key={item.id} {...item} />;
      })}
    </ul>
  );
};
export default ContactList;
