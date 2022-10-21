/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        gradientColorZero: "#a960ee",
        gradientColorOne: "#ff333d",
        gradientColorTwo: "#90e0ff",
        gradientColorThree: "#ffcb57",
        brandgray:{
          DEFAULT:"rgb(66, 84, 102)",
          light:"rgb(66, 84, 102)",
          dark:"rgb(10, 37, 64)",
          darker:"rgb(58, 58, 58)"

        },
        brandblue:{
          DEFAULT:"rgb(99, 91, 255)",
          light:"rgb(0,212,255)",
          dark:"#003ab9"

        },
        brandindigo:{
          light:"rgb(246, 249, 252)"
        }
      },
      container:{
        center:true
      },
      spacing:{
        '30px':"30px",
        '110px':"-110px",
        '25px':"25px"

      },
      fontSize:{
        "13Sz":"0.8125rem", //13px
        "15Sz":"0.9375rem", //15px
        "34Sz":"2.125rem", //34px
        "32Sz":"2rem", //32rem
      },
      letterSpacing:{
        xs1px:"-0.1px",
        xs2px:"-0.2px"
      },
      lineHeight:{
        44:"44px"
      },
      clipPath: {         
          mypolygon1: "polygon(0 6%, 100% 0, 100% 100%, 0% 100%)"   
      },
      fontWeight:{
        externormal:"425"
      }
      ,
      screens:{
        "xss":"396px",

      },
      height:{
        gridContainerHeightXSmall: "374px",
        gridContainerHeightSmall: "474px",
        gridContainerHeightMedium: "654px !important",
        gridContainerHeightLarge: "764px !important",
      }
      ,
      gridTemplateColumns:{
        "gridXsSmall":"112px 141px 58px 38px",
        gridColumnsXSmall: '112px 141px 58px 38px',
        gridColumnsSmall: '253px 392px 201px',
        gridColumnsMedium: '323px 501px 256px',
        gridColumnsLarge: '380px 589px 301px',
      },
      gridTemplateRows:{
        gridRowsXSmall: '107px 87px 125px 185px',
        gridRowsSmall: '70px 157px 97px 333px',
        gridRowsMedium: '86px 201px 126px 425px',
        gridRowsLarge: '101px 235px 148px 500px',
      },
      gridRowStart:{
        'span2':"span 2"
      },
      gridRowEnd:{
        'span2':"span 2"
      },
      maxWidth:{
        maxWidthVisa:'380px',
        maxWidthInvoice:'588px',
        maxWidthPhone:'301px'
      }
      ,
      backgroundImage:{
        backGradient:"background: radial-gradient(var(#a960ee) 40%,var(rgba(144,224,255,0)) 60%) -420px -180px no-repeat,radial-gradient(var(#ffcb57) 23%,var(rgba(255,203,87,0)) 70%) 240px -24px no-repeat,radial-gradient(var(#90e0ff) 30%,var(rgba(144,224,255,0)) 70%) -270px 220px no-repeat,var(#a960ee)",
      },
      content:{
        empty:' '
      }
      
    },
  },
  plugins:  [
      require('tailwind-clip-path'),
    ],
}
