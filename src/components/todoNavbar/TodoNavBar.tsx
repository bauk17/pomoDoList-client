import * as styled from "./styles";
import { CiCircleInfo } from "react-icons/ci";

type Props = {
  onInfoClick: () => void;
  howToUse: () => void;
};

export function TodoNavBar({ onInfoClick, howToUse }: Props) {
  return (
    <>
      <styled.NavBarWrapper>
        <styled.NavBarLogo>
          Pom
          <img src="tomate.svg" alt="tomate" width={30} height={30} />
          DoList
        </styled.NavBarLogo>
        <div style={{ display: "flex" }}>
          <CiCircleInfo
            size={35}
            color="white"
            style={{ cursor: "pointer", marginRight: 20 }}
            onClick={onInfoClick}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
            }}
          >
            <h3 onClick={howToUse}>How to use it</h3>
            <img
              src="tomate.svg"
              alt="tomate"
              width={17}
              height={17}
              style={{ marginLeft: 12 }}
            />
          </span>
        </div>
      </styled.NavBarWrapper>
    </>
  );
}
