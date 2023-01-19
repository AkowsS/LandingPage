import { styled } from "@mui/system";

export const Container = styled("div")(({theme})=>({
  [theme.breakpoints.down(890)]: {
    padding: "0px 30px",    
  },
  height: "713px",
  padding: "90px 63px 0 55px",
  backgroundColor: "#E7E7E7",
  display: "flex",
  justifyContent: "space-between",
}));

export const ImgArea = styled("div")(({theme})=>({
  display: "flex",
  alignItems: "start",
  marginTop: "40px",
  img: {
    width: "40vw",
  },
  [theme.breakpoints.down(890)]: {
    display: "none",    
  },
}));

export const TextArea = styled("div")(({theme})=>({
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "500px",
  div: {
    position: "relative",
    top: "160px",
    h1: {
        fontWeight: 400,
        fontSize: "48px",
        lineHeight: "58px",
        color: "#000000",
        margin: "0",
      },
      h2: {
        fontWeight: 400,
        fontSize: "24px",
        lineHeight: "29px",
        color: "#1E1E1E",
        margin: "0",
      },
      button: {
        width: "100px",
        height: "30px",
        backgroundColor: "#000000",
        borderRadius: "20px",
        p: {
          color: "#FFFFFF",
          margin: "0",
        },
      },
  },
}));