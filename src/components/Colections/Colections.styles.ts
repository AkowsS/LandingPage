import { styled } from "@mui/system";

export const Container = styled("div")(({theme}) =>({
  [theme.breakpoints.down(890)]: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  height: "768px",
  backgroundColor: "#F2F2F2",
  h1: {
    margin: "0",
    paddingTop: "72px",
    paddingBottom: "72px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "48px",
    color: "#000000",
  },
  button: {
    width: "100px",
  },
}));

export const ImageArea = styled("div")(({theme}) =>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  button: {
    border: "0px solid",
    height: "50px",
    width: "50px",
    cursor: "pointer",
    margin: "auto 10px",
    padding: "0",
  },
  ul: {
    width: "720px",
    margin: "0",
    height: "407px",
    listStyle: "none",
    padding: "0",
    display: "-webkit-inline-box",
    overflowX: "hidden",
    div: {
      transition: "transform 0.3s",
      display: "flex",
    },
    li: {
      img: {
        width: "724px",
        height: "383px",
      },
    },
  },
  [theme.breakpoints.down(890)]: {
    width:"580px",
    marginBottom:"20px",
    button:{
      display:"none",
    },
    ul:{
      display: "flex",
      width:"80%!important",
      height:"300px!important",
      li:{
        display:"flex",
        img:{
          height:"300px !important",
          width:"500px !important",
        },
      },
    },
  }, 
  [theme.breakpoints.down(600)]: {
    position:"relative",
    width:"calc(100vw + 20px)!important",
    left:"-20px",
    button:{
      display:"none",
    },
    ul:{
      width:"100%!important",
      li:{
        overflowY:"hidden",
        img:{
          alignItems:"center",
          height:"340px !important",
          width:"640px !important",
        },
      },
    },
  },
}));

export const DivButtons = styled("div")({
  display: "flex",
  justifyContent: "center",
  div:{
    width: "90px",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    width: "20px",
    height: "20px",
    background: "#D9D9D9",
    borderRadius: "10px",
  },
});