import { elementStyle, elementStyleHover } from './node_modules/nuxbnax_styling_html/index.js';

elementStyle('.text', 'red', 'lightblue', '76px', '20px', '20px solid darkgreen');
elementStyle('.text1', 'red', 'pink', '26px', '20px', 0);
elementStyle('.text2', 'rgb(155 56 175)', '#cec437', '25px', 0, '2px dashed darkblue');  
elementStyle('#text3', 'rgb(55 156 75)', 0, '25px', 0, '2px dashed darkblue');  
elementStyle('#text4', 'rgb(0 0 175)', '#cec437', '25px', 0, '2px dashed darkblue');  
elementStyle('#text5', 'gray', 0, '25px', 0, '2px dashed darkblue');  
elementStyle('.btn1', 'puple', 0, '45px', '10px', '2px solid purle');  
elementStyle('.btn2', 'red', 0, '25px', '15px', 0);  
elementStyle('.btn3', 'gray', 0, '25px', '10px 15px 0', 0);  


elementStyleHover('.text', 'pink', '#000', 0, 1.2);
elementStyleHover('.text1', 'white', 'black', '10px 0px 15px black', 1.8);
elementStyleHover('.text2', 'blue', 'rgb(155 56 175)', '20px 20px 30px red', 0.5);
elementStyleHover('#text3', 'rgb(155 56 175)', 'rgb(155 56 175)', '20px 20px 30px red', 0.5);
elementStyleHover('#text4', '#fff000', 'rgb(155 56 175)', '20px 20px 30px red', 0.5);
elementStyleHover('#text5', 'white', 'rgb(155 56 175)', 0, 0.5);
elementStyleHover('.btn1', 'lightpurle', 'rgb(155 56 175)', '20px 20px 30px red', 0.5);
elementStyleHover('.btn2', 'white', '#449547', '20px 20px 30px red', 0.5);
elementStyleHover('.btn3', 'yellow', '#ea525b', '20px 20px 30px #692b2b', 0.5);