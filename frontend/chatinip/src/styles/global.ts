import { createGlobalStyle } from "styled-components";

export const GlobalStyleDefault = createGlobalStyle`

// COLORS
    :root {
    --brand-bg: #242424;
    --brand-1: #0A224B;
    --brand-2: #103C87;
    --brand-3: #0071FF;

    --gray-0: #0B0B0B;
    --gray-1: #212121;
    --gray-2: #303030;
    --gray-3: #808080;
    --gray-4: #ADADAD;
    --gray-5: #D4D4D4;
    --gray-6: #E2E2E2;
    --gray-7: #E9E9E9
    --gray-8: #F1F1F1;
    --gray-9: #F8F8F8;
    --gray-10: #FDFDFD;

    --boxShadow: #00000075;

    --black-fixed: #000000;
    --white-fixed: #FFFFFF;

    --alert-1: #CD2B31;
    --alert-2: #FDD8D8;
    --alert-3: #FFE5E5;

    --success-1: #18794E;
    --success-2: #CCEBD7;
    --success-3: #DDF3E4;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

::-webkit-scrollbar {
width: 5px;
background-color: #1b1b1b;
}

/* Set the color and shape of the scrollbar thumb */
::-webkit-scrollbar-thumb {
background-color: #383838;
border-radius: 5px;
}

/* Set the color of the scrollbar thumb on hover */
::-webkit-scrollbar-thumb:hover {
background-color: #555;
}

body {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    color: var(--gray-5);
    background-color: var(--brand-bg);

    min-height: 100vh;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

a {
    font-weight: 500;
    color: var(--brand-3);
    text-decoration: inherit;
}

a:hover {
    color: var(--white-fixed);
}


h1 {
    font-size: 3.2em;
    line-height: 1.0;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

input,
select {
    border-radius: 5px;
    border: 1px solid var(--brand-2);
    padding: 0.6em;
    height: 35px;

    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    text-align: left;
    vertical-align: middle;
    
    background-color: var(--gray-6);
    color: var(--black-fixed);
    transition: border-color 0.25s;
}

input:focus {
    border-color: var(--brand-2);
}

button {
    border-radius: 5px;
    border: 1px solid var(--brand-2);
    height: 35px;

    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    text-align: center;
    vertical-align: middle;
    
    background-color: var(--brand-2);
    color: var(--white-fixed);
    cursor: pointer;
    transition: border-color 0.25s;
}

button:hover {
    border-color: var(--white-fixed);
    background-color: var(--brand-3);
}

button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

li{
    list-style: none;
}

.myToast {
  color: var(--white-fixed);
}

.myToast .Toastify__toast {
  background-color: var(--gray-1);
}

.myToast .Toastify__close-button {
  color: var(--gray-6);
}

`;
