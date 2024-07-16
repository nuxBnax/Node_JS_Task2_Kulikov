nuxbnax_styling_html module for html by nuxBnax.

# Description

This module you can use for easy stylization html elements.
## ! ! ! Don't forget to type="module" in your html document after adding script ! ! !

It has only 2 functions:
1. elementStyle(elementClass, color, background, fontFamily, padding, border), where:

	elementClass - class of element. Don't forget (.) before className, or (#) for id
	color - color of element color of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)'...)
	background - background of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)'...)
	fontFamily - fontFamily of element ('2px','5px','12px'...)
	padding - padding of element('0 10px', '10px 0', '10px 15px 16px', '10px 24px 16px'...)
	border - border of element ('2px solid red'...)

2. elementStyleHover(elementClass, color, background, boxShadow, transition), where:

	elementClass - class of element. Don't forget (.) before className, or (#) for id
 	color - color of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)')
 	background - background of element ('red', 'blue', '#000', '#cec727', 'rgb(155 56 175)')
 	boxShadow - boxShadow of element ('20px 20px 30px red', '10px 0px 15px grey'... and more -> https://active-vision.ru/icon/box-shadow/ or https://cssgenerator.org/box-shadow-css-generator.html ) 
 	transition - you need just a number like(1, 0.5, 1.5, 0.3...) to set timeout

Also you can just hover on function to see info and examples to ease coding.

# Installation

npm i nuxbnax_styling_html 


# Examples

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

# GitHub link

https://github.com/nuxBnax/Node_JS_HTML_style.git

