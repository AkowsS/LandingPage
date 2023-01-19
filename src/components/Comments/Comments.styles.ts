import { styled } from "@mui/system";

export const Container = styled("div")(({theme}) =>({
  [theme.breakpoints.down(890)]: {
    height:"auto",
  },
  height: "768px",
  backgroundColor: "#E7E7E7",
  h1:{
    margin: "0",
    paddingTop: "60px",
    paddingBottom: "46px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "48px",
    color: "#000000",
  },
}));

export const CardAreaDiv = styled("div")(({theme})=>({
  display:"flex",
    justifyContent:"center",
  [theme.breakpoints.down(890)]: {
    flexDirection:"column",
    alignItems:"center",
  },
}));

export const CardArea = styled("div")(({theme})=>({
  [theme.breakpoints.down(890)]: {
    height:"250px",
  },
  margin:"0 50px",
  flexDirection:"column",
  width: "280px",
  justifyContent: "flex-start !important",
  height: "380px",
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  img: {
    borderRadius:"25px",
    backgroundColor:"#D9D9D9",
    width:"50px",
    height:"50px",
  },
  div:{
    justifyContent: "flex-start !important",
    height:"50px",
    display:"flex", 
    padding:"30px 0 20px 30px",
    div:{
      marginLeft: "10px",
      padding: "0",
      display: "block",
    },
  },
}));

export const CardUser = styled("p")({
  margin:"0",
  padding:"0 !important",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#000000",
});

export const CardMail = styled("p")({
  padding:"0",
  margin:"0",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#4E4E4E",
});

export const CardAreaSecondary = styled("div")(({theme})=>({
  [theme.breakpoints.down(890)]: {
    height:"250px",
    margin:"20px 0",
  },
  marginTop:"30px",
  flexDirection:"column",
  width: "280px",
  justifyContent: "flex-start !important",
  height: "350px",
  backgroundColor: "#FFFFFF",
  borderRadius: "20px",
  img: {
    borderRadius:"25px",
    backgroundColor:"#D9D9D9",
    width:"50px",
    height:"50px",
  },
  div:{
    height:"50px",
    display:"flex",
    justifyContent: "flex-start !important",
    padding:"30px 0 20px 30px",
    div:{
      marginLeft: "10px",
      padding: "0",
      display: "block",
    },
  },
}));

export const CardText = styled("div")({
  padding:"19px 0 0 30px !important",
  display:"block",
  width:"215px",
  height:"133px !important",
  fontSize:"16px",
  lineHeight:"19px",
  fontWeight:400,
});

export const DivLine = styled("div")({
  padding: "0 !important",
  margin:"0 auto",
  display: "block",
  width: "214px",
  height: "2px !important",
  background: "#000000",
});