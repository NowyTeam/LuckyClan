import Style from "./Sandbox.module.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

//Str
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Sandbox = () => {
  const [toggleState, setToggleState] = useState(1);
  const [headerScroll, setHeaderScroll] = useState(false);
  const [isActiveDis, setIsActiveDis] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (typeof window !== "undefined" && window.scrollY >= 10) {
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    changeBackground();
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const toggleDescription = () => {
    setIsActiveDis(!isActiveDis);
  };

  const ToggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <div className={Style.Page_Wrapper}>
        <div className={Style.container}>
          <div
            className={`${Style.Drop_Box} ${
              headerScroll ? Style.active3 : ""
            }`}>
            <div
              className={
                toggleState === 1 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
              }
              onClick={() => ToggleTab(1)}>
              <FormatListBulletedIcon />
              Команды
            </div>
            <div
              className={
                toggleState === 2 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
              }
              onClick={() => ToggleTab(2)}>
              <SupervisorAccountIcon /> Создатели
            </div>
            <div
              className={
                toggleState === 3 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
              }
              onClick={() => ToggleTab(3)}>
              <AdminPanelSettingsIcon />
              Администрация
            </div>
            <div
              className={
                toggleState === 4 ? Style.Drop_Uvs_Box : Style.Drop_Vs_Box
              }
              onClick={() => ToggleTab(4)}>
              <AppsOutageIcon />
              Идеи
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 1 ? Style.Active_Content : ""
            }`}>
            <div
              className={isActiveDis ? Style.players : Style.player_active}
              onClick={toggleDescription}>
              {isActiveDis ? (
                <div className={Style.Discaption_Active}>
                  <h1>
                    <span>/accept</span> - Принять идею.
                    <ArrowForwardIosIcon />
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure molestias exercitationem harum recusandae id nulla
                    ullam error mollitia nam ea praesentium provident minus
                    facilis, quam veritatis dignissimos distinctio veniam
                    corrupti.
                  </p>
                </div>
              ) : (
                <div className={Style.Discaption}>
                  <h1>
                    <span>/accept</span> - Принять идею.
                    <ArrowForwardIosIcon />
                  </h1>
                </div>
              )}
            </div>
            <div
              className={isActiveDis ? Style.players : Style.player_active}
              onClick={toggleDescription}>
              {isActiveDis ? (
                <div className={Style.Discaption_Active}>
                  <h1>
                    <span>/accept</span> - Принять идею.
                    <ArrowForwardIosIcon />
                  </h1>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure molestias exercitationem harum recusandae id nulla
                    ullam error mollitia nam ea praesentium provident minus
                    facilis, quam veritatis dignissimos distinctio veniam
                    corrupti.
                  </p>
                </div>
              ) : (
                <div className={Style.Discaption}>
                  <h1>
                    <span>/accept</span> - Принять идею.
                    <ArrowForwardIosIcon />
                  </h1>
                </div>
              )}
            </div>
            <div className={Style.players}>
              <h1>
                <span>Bunny</span> - CVA | KaYd0
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Bunny</span> - CVA | SlivRW
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Dragon</span> - CVA | K1rieshich
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Imperator</span> - CVA | Nowy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Gay</span> - CVA | chelovek5614
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Frik</span> - CVA | Lacksy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom}>Pidor</span> - CVA | HeBazar4iks
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom_2}>Svintus</span> - CVA | .Батя
                твоя
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span className={Style.Cusrom_2}>GovnoCoder</span> - CVA | M4RS1
              </h1>
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 2 ? Style.Active_Content : ""
            }`}>
            <div className={Style.players}>
              <h1>
                <StarIcon className={Style.hight} />
                <span className={Style.LeaderLVL4}>The Highest Leader</span> -
                Nowy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <StarIcon />
                <span className={Style.LeaderLVL3}>Highest Leader</span> - CVA |
                AndreyBolgov
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <StarHalfIcon />
                <span className={Style.LeaderLVL2}>Middle Leader</span> - CVA |
                GrishaNeyar
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <StarBorderIcon />
                <span className={Style.LeaderLVL1}>Lowest Leader</span> - CVA |
                KaYd0
              </h1>
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 3 ? Style.Active_Content : ""
            }`}>
            <div className={Style.players}>
              <h1>
                <span>Devoloper</span> - Nowy
              </h1>
            </div>
            <div className={Style.players}>
              <h1>
                <span>Moderator</span> - GrishaNeyar
              </h1>
            </div>
          </div>
          <div
            className={`${Style.Content} ${
              toggleState === 4 ? Style.Active_Content : ""
            }`}>
            <div className={Style.players}>
              <h1>
                <span>Zeaper123</span> - Добавить команду которая будет
                перекидовать в Войс
              </h1>
              <div className={Style.Accept}>
                <Link to="/">
                  <button>Принять</button>
                </Link>
                <Link to="/">
                  <button>Отказ</button>
                </Link>
                <p>
                  <HourglassBottomIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
