import { h, Fragment } from "preact";

import MenuOptions from "./MenuOptions";
import { useUser } from "../features/Auth/useUser";

function Profile({ showMenu, setShowMenu }) {
  const { isUserError, isUserLoading, user } = useUser();

  const onClickHandler = (event) => {
    setShowMenu((showMenu) => !showMenu);
    event.stopPropagation();
  };

  if (isUserError || isUserLoading) return <Fragment> </Fragment>;

  const {
    profilePicture,
    name: fullName,
  }: { profilePicture?: string; name: string } = user.me;
  const name = fullName.replace(/\s/, "+");
  return (
    <Fragment>
      <img
        src={
          profilePicture
            ? profilePicture
            : `https://ui-avatars.com/api/?name=${name}`
        }
        style={{
          position: "absolute",
          right: "5vw",
          top: "0vh",
          borderRadius: "50%",
          height: "35px",
          width: "35px",
          zIndex: 1000,
        }}
        onClick={(event) => {
          onClickHandler(event);
        }}
      />
      {showMenu && <MenuOptions />}
    </Fragment>
  );
}

export default Profile;
