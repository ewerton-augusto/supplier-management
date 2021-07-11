import { createGlobalStyle } from "styled-components";
import { primary } from "../UI/colors";

export default createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1.1;
    font-family: 'Montserrat', sans-serif;
    background-color: "#f6f8fc";
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .icon{
    width: 18px;
    height: 18px;
  }

  .icon-hover{
    margin: 0 1rem;
    &:hover,
    &:focus{
      cursor: pointer;
      opacity: .7;
      transform: scale(1.03);
    }
  }

  .success,
  .warning,
  .danger{
    color: #fff;
  }

  .primary{
    background-color: ${primary};
  }

  .success{
    background-color: #5cb85c;
  }

  .warning{
    background-color: #f0ad4e;
  }

  .danger{
    background-color: #d9534f;
  }

  .text-start{
    text-align: left;
  }
  .text-center{
    text-align: center;
  }
  .text-end{
    text-align: right;
  }

  .modal__actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

`;
