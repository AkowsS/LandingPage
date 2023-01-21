import { styled } from "@mui/system";

export const Container = styled("div")({
  position:"fixed",
  zIndex:"1000",
  width: "100%",
  height: "55px",
  backgroundColor: "#D9D9D9",
  display: "flex",
  alignItems: "center",
  justifyContent:"space-between",
  PaddingRight: "60px",
  a:{
    textDecoration:"none",
    color:"#000000",
  },
});

export const Logo = styled("div")({
  width: "64px",
  height: "29px",
  display: "flex",
  alignItems: "center", 
  marginLeft: "55px",
});

export const List = styled("li")({
  listStyle:"none",
  cursor: "pointer",
  width: "64px",
  height: "29px",
  margin: "2px 0",
  p: {
    display: "flex",
    justifyContent: "center",
    color: "#FFFFFF",
    background: "#C1C1C1",
    margin: "0px",
  },
});

export const DivMenu = styled("div")({
  position: "relative",
  display: "inline-block",
  p: {
    marginBottom: "0",
  },
  ":hover": {
    div: {
      display: "block !important",
    },
  },
  div: {
    display: "none",
    position: "absolute",
    width: "100px",
  },
});

export const Menu = styled("ul")({
  margin: "0",
  padding: "20px 0",
  backgroundColor: "#C1C1C1",
  alignItems: "center",
  display: "flex", 
  justifyContent: "center",
  flexDirection: "column",
});

export const DivItems = styled("div")(({theme}) => ({
  marginRight: "68px",
  display: "flex",
  [theme.breakpoints.down(890)]: {
    display:"none",
  },
}));

export const Items = styled("p")({
  color: "#000000!important",
  cursor: "pointer",
  marginRight: "34px",
  height: "24px",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
});

export const ResponDiv = styled("div")(({theme}) => ({
  display: "none",
  //position: "relative",
  img: {
      width: "35px",
      height: "40px",
      marginRight: "50px",
    },
  p: {
    marginBottom: "0",
    display: "flex",
    justifyContent: "center",
    color: "#FFFFFF",
    background: "#C1C1C1",
    margin: "0px",
    textAligm:"center",
  },
  ":hover": {
    div: {
      display: "flex !important",
      flexDirection: "column",
      background: "#C1C1C1",
    },
  },
  div: {
    display: "none",
    position: "relative",
    top: "70px",
    right:"20px",
    width: "100px",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down(890)]: {
    display: "block",    
  },
}));