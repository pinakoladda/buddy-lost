import "./index.css";
import BuddyAvatar from "./Images/buddy-avatar.jpg";
import { List } from "../List";
import { Link } from "../Link";
import { useI18n } from "../../hooks/useI18n";

export const Info = () => {
  const { i18n } = useI18n();

  return (
    <div className="info">
      <h3 className="info__header">{i18n('title')}</h3>
      <div className="info__container">
        <img className="info__avatar" src={BuddyAvatar}></img>
        <div className="info__text-container">
          <p className="info__paragraph">
            My name is Nina, this is my true friend Buddy
          </p>
          <p className="info__paragraph">My contacts:</p>
          <List className="info__contacts-list">
            <li className="info__list-item">
              If you in Georgia please call me on this number:
              <Link href="tel: +995598148359">+995598148359</Link>
            </li>
            <li className="info__list-item">
              You can contact me on:
              <Link href="https://t.me/pinakoladda">Telegram</Link>
              <Link href="https://wa.me/995598148359">WhatsApp</Link>
            </li>
            <li className="info__list-item">
              Link to my social media:
              <Link href="https://instagram.com/pina.kolladda">Instagram</Link>
            </li>
          </List>
          <p className="info__paragraph">
            Please contact me as soon as possible! I'm terribly worried 😭
          </p>
        </div>
      </div>
    </div>
  );
};
