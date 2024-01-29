import { h, Fragment } from "preact";
import { useState } from "preact/hooks";
import MenuOptions from "./MenuOptions";

function Profile() {
  const [showMenu, setShowMenu] = useState(false);
  const onClickHandler = () => setShowMenu((showMenu) => !showMenu);
  return (
    <Fragment>
      <button
        style={{
          display: "inline-block",
          position: "absolute",
          marginLeft: "78%",
          marginBottom: "30px",
        }}
        onClick={onClickHandler}
      >
        <img
          src="https://ui-avatars.com/api/?name=Nabhag+Motivaras"
          style={{
            borderRadius: "50%",
            height: "35px",
            width: "35px",
          }}
        />
      </button>
      {showMenu && <MenuOptions />}
    </Fragment>
  );
}

export default Profile;
