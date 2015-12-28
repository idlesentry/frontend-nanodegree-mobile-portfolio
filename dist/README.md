## Running the Page

Open index.html from the main directory and enjoy! Development code is located in the 'development_code' directory.

### Getting started

####Part 1: GULP

1. Installed node.js and npm in order to run GULP within the local directory.
2. Installed 'gulp-uglify', 'gulp-minify-css', and 'gulp-minify-html' in order to minify all of the content for the site.
3. After this used 'gulp-rename' in order to add the prefix 'min.' to the beginning of the new files' names.
4. After deciding against this, the new files were moved into the 'dist' directory and the source files were put into the 'src' directory.
5. After this, installed 'gulp-imagemin' in order to automatically compress all of the image files. The directory name for images in the 'views' directory was changed to 'img' (same as the main directory).

####Part 2: Optimize PageSpeed Score for index.html

1. Decided to asynchronously load 'analytics.js' and 'perfmatters.js' because none of the content was critical to the page loading correctly.
2. Decided to asynchronously load the google font used in the page with some script at the bottom. (Source: https://github.com/typekit/webfontloader)
3. Decided to defer loading of 'print.css' as the content wasn't critical to loading. (Source: http://www.giftofspeed.com/defer-loading-css/)
4. Translated 'style.css' into style tags in header, inlined 'hero' class styles into only div where it applied and put 'content' class into larger 'li' style tag.
5. Resized 'pizzeria.jpg' as it was far too large for how it was being used.

####Part 3: Optimizing FPS for pizza.html

1. Changed querySelectorAll to getElementsByClassName and then set up object with properties for phase and move defined in for loop below
2. Declared variables for scrollTop and length outside of loop in updatePositions function
3. Replaced style.left with transform translateX inside loop in updatePositions function
4. Attempted to move variables 'phase' and 'move' into another loop outside of the translateX, but could only get this to work with style.left
5. Chose to stay with translateX and variables inside loop because js was running quickly but rendering wasn't
5. Resized pizza image and saved to separated image named backgroundPizza.png
6. Removed resizing of backgroundPizza image in generation of sliding pizzas
7. Had to subtract 500 to get proper placement of sliding pizzas on larger screens


