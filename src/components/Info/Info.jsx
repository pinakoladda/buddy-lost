import "./index.css";
import BuddyAvatar from "./Images/buddy-avatar.jpg";
import BuddyAvatarLavif from "./Images/buddy-avatar-800px.avif";
import BuddyAvatarLwebp from "./Images/buddy-avatar-800px.webp";
import BuddyAvatarLjpg from "./Images/buddy-avatar-800px.jpg";
import BuddyAvatarSavif from "./Images/buddy-avatar-400px.avif";
import BuddyAvatarSwebp from "./Images/buddy-avatar-400px.webp";
import BuddyAvatarSjpg from "./Images/buddy-avatar-400px.jpg";
import { useI18n } from "../../hooks/useI18n";
import { List } from "../List";
import { Link } from "../Link";

export const Info = () => {
  const { i18n, locale } = useI18n();

  const onLocaleChange = (locale) => () => {
    localStorage.setItem("lang", locale);
    window.location.reload();
  };

  return (
    <div className="info">
      <div className="info__language-container">
        <span
          className={`info__language ${
            locale === "en" ? "info__language_active" : ""
          }`}
          onClick={onLocaleChange("en")}
        >
          English
        </span>
        <span
          className={`info__language ${
            locale === "ru" ? "info__language_active" : ""
          }`}
          onClick={onLocaleChange("ru")}
        >
          Russian
        </span>
      </div>
      <h3 className="info__header">{i18n("header")}</h3>
      <div className="info__container">
        <picture>
          <source srcset={BuddyAvatarLavif} />
          <source srcset={BuddyAvatarLwebp} />
          <source srcset={BuddyAvatarLjpg} />

          <source srcset={BuddyAvatarSavif} media="(max-width: 400px)" />
          <source srcset={BuddyAvatarSwebp} media="(max-width: 400px)" />
          <source srcset={BuddyAvatarSjpg} media="(max-width: 400px)" />
          <img className="info__avatar" src={BuddyAvatar} alt="Buddy"></img>
        </picture>
        <div className="info__text-container">
          <p className="info__paragraph">{i18n("paragraph1")}</p>
          <p className="info__paragraph">{i18n("contacts")}</p>
          <List className="info__contacts-list">
            <li className="info__list-item">
              {i18n("contacts2")}
              <Link href="tel: +995598148359">+995598148359</Link>
            </li>
            <li className="info__list-item">
              {i18n("contacts3")}
              <Link href="https://t.me/pinakoladda">Telegram</Link>
              <Link href="https://wa.me/995598148359">WhatsApp</Link>
            </li>
            <li className="info__list-item">
              {i18n("social-media")}
              <Link href="https://instagram.com/pina.kolladda">Instagram</Link>
            </li>
          </List>
          <p className="info__paragraph">{i18n("paragraph2")}</p>
        </div>
      </div>
    </div>
  );
};
