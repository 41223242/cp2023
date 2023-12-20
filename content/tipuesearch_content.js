var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n\n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n\n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n\n    return 0;\n} \n clear \n cd downloads \n cc gnuplot_ex1.c \n ./a.out \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue);\n\nint main() {\n    // width 3: height 2\n    int width = 1200;\n    int height = (int)(width*2.0 / 3.0);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_roc_flag(img);\n\n    FILE *outputFile = fopen("./roc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n\nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    int sun_radius = (int)(width/8);\n\n    // Colors for the flag\n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color\n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes\n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue\n\n    // 繪製紅色矩形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n\n    // 繪製藍色矩形區域\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n\n    // 繪製太陽\n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue);\n}\nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) {\n    float angle = 0;\n    int numRays = 12; // 光芒的數量\n\n    gdPoint points[3]; // 三個頂點的陣列\n\n    for (int i = 0; i < numRays; i++) {\n        angle = i * (2 * M_PI / numRays);\n        float x1 = center_x + cos(angle) * sun_radius;\n        float y1 = center_y + sin(angle) * sun_radius;\n\n        // 調整兩個底邊頂點的位置\n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5);\n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5);\n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5);\n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5);\n\n        // 設定多邊形的三個頂點\n        points[0].x = (int)x1;\n        points[0].y = (int)y1;\n        points[1].x = (int)x2;\n        points[1].y = (int)y2;\n        points[2].x = (int)x3;\n        points[2].y = (int)y3;\n\n        gdImageFilledPolygon(img, points, 3, white);\n    }\n  //外圈\n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, blue);\n  \n    // 繪製太陽內部\n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, white);\n} \n \n clear \n cd downloads \n cc gd_roc_flag.c -lgd -lm \n ./a.out \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n\nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    draw_usa_flag(img);\n\n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n}\n\nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n\n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n\n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n\n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n\n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n\n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n\n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n\n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n\n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n\n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n\n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n\n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n clear \n cd downloads \n cc gd_usa_flag.c -lgd -lm \n ./a.out \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '#include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \xa0 \n void   draw_japan_flag(gdImagePtr img); \n void   draw_white_sun(gdImagePtr img,  int   center_x,  int   center_y,  int   sun_radius,  int   white,  int   red ); \n \xa0 \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // width 3: height 2 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 int   height = 2 * width / 3; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 draw_japan_flag(img); \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/japan_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \xa0 \n void   draw_japan_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, white ; \n \xa0\xa0\xa0\xa0 int   center_x =\xa0 0.5 * width; \n \xa0\xa0\xa0\xa0 int   center_y =\xa0 0.5 * height; \n \xa0\xa0\xa0\xa0 int   sun_radius = 145 ; \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // Colors for the flag \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 242, 0, 0);  // Red color \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // White stripes \n \xa0 \xa0 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製白色矩形區域 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, white); \n \xa0 \xa0 \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 // 繪製太陽內部 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red); \n } \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_chinese_flag(gdImagePtr img); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 int   width = 300;  // 國旗寬度 \n \xa0\xa0\xa0\xa0 int   height = 200;  // 國旗高度 \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePtr im = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(im, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 draw_chinese_flag(im); \n \xa0 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/proc_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "打开输出文件时出错。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePngEx(im, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(im); \n \xa0 \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n // 声明 draw_star 函数 \n void   draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color,  double   rotation_angle); \n \xa0 \n void   draw_chinese_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0\xa0\xa0\xa0 int   red, yellow; \n \xa0 \n \xa0\xa0\xa0\xa0 // 國旗顏色 \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 255, 0, 0);  // 紅色背景 \n \xa0\xa0\xa0\xa0 yellow = gdImageColorAllocate(img, 255, 255, 0);  // 黃色星星 \n \xa0 \n \xa0\xa0\xa0\xa0 // 畫紅色背景 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, red); \n \xa0 \n \xa0\xa0\xa0\xa0 // 設置星星的大小和位置 \n \xa0\xa0\xa0\xa0 int   star_size = ( int )(0.28 * height); \n \xa0\xa0\xa0\xa0 int   star_x = ( int )(0.165 * width); \n \xa0\xa0\xa0\xa0 int   star_y = ( int )(0.265 * height); \n \xa0 \n \xa0\xa0\xa0\xa0 // 畫大星星 \n \xa0\xa0\xa0\xa0 draw_star(img, star_x, star_y, star_size, yellow, 11.0); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製小星星，位置根據實際國旗比例計算 \n \xa0\xa0\xa0\xa0 double   radius = 0.15 * height; \n \xa0\xa0\xa0\xa0 double   angle = 360 / 7 * M_PI / 179.0; \n \xa0\xa0\xa0\xa0 double   rotation = -M_PI / 7.5; \n \xa0\xa0\xa0\xa0 int   cx = ( int )(0.32 * width); \n \xa0\xa0\xa0\xa0 int   cy = ( int )(0.27 * height); \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i = -1; i < 3; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   x = ( int )(cx + radius *  cos (i * angle + rotation)); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 int   y = ( int )(cy + radius *  sin (i * angle + rotation)); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 draw_star(img, x, y, 19, yellow, M_PI / 5.0); \n \xa0\xa0\xa0\xa0 } \n } \n \xa0 \n void   draw_star(gdImagePtr img,  int   x,  int   y,  int   size,  int   color,  double   rotation_angle) { \n \xa0\xa0\xa0\xa0 gdPoint points[10]; \n \xa0 \n \xa0\xa0\xa0\xa0 // 计算星形的五个外点和五个内点 \n \xa0\xa0\xa0\xa0 double   outer_radius = size / 2; \n \xa0\xa0\xa0\xa0 double   inner_radius = size / 6; \n \xa0\xa0\xa0\xa0 double   angle = M_PI / 5.0; \n \xa0 \n \xa0\xa0\xa0\xa0 for   ( int   i = 0; i < 10; i++) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double   radius = (i % 2 == 0) ? outer_radius : inner_radius; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 double   theta = rotation_angle + i * angle; \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].x = x + radius *  cos (theta); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 points[i].y = y + radius *  sin (theta); \n \xa0\xa0\xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // 使用 gdImageFilledPolygon 绘制星形 \n \xa0\xa0\xa0\xa0 gdImageFilledPolygon(img, points, 10, color); \n } \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n void   draw_uk_flag(gdImagePtr img); \n void   fillTriangle(gdImagePtr img,  int   x1,  int   y1,  int   x2,  int   y2,  int   x3,  int   y3,  int   color); \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 // 设置国旗的宽和高 \n \xa0\xa0\xa0\xa0 int   width = 1200; \n \xa0\xa0\xa0\xa0 int   height = width / 2; \n \xa0 \n \xa0\xa0\xa0\xa0 // 创建图像 \n \xa0\xa0\xa0\xa0 gdImagePtr img = gdImageCreateTrueColor(width, height); \n \xa0\xa0\xa0\xa0 gdImageAlphaBlending(img, 0); \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制英国国旗 \n \xa0\xa0\xa0\xa0 draw_uk_flag(img); \n \xa0 \n \xa0\xa0\xa0\xa0 // 将图像保存到文件 \n \xa0\xa0\xa0\xa0 FILE   *outputFile =  fopen ( "./../images/uk_flag.png" ,  "wb" ); \n \xa0\xa0\xa0\xa0 if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 fprintf (stderr,  "打开输出文件时发生错误。\\n" ); \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 return   1; \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 gdImagePngEx(img, outputFile, 9); \n \xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0 gdImageDestroy(img); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \xa0 \n \xa0 \n \xa0 \n void   draw_uk_flag(gdImagePtr img) { \n \xa0\xa0\xa0\xa0 int   width = gdImageSX(img); \n \xa0\xa0\xa0\xa0 int   height = gdImageSY(img); \n \xa0 \n \xa0\xa0\xa0\xa0 int   red, white, blue; \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(img, 204, 0, 0);\xa0\xa0\xa0\xa0\xa0\xa0  // 红色 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(img, 255, 255, 255);  // 白色 \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(img, 0, 0, 153);\xa0\xa0\xa0\xa0\xa0  // 蓝色 \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, 0, width, height, blue); \n \xa0 \n \xa0 \n \xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 int   line_thickness = 100; \n \xa0\xa0\xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0\xa0\xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制白色斜线 \n \xa0\xa0\xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 600; \n \xa0\xa0\xa0\xa0 x2 = 1200; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 0; \n \xa0\xa0\xa0\xa0 x2 = 1200; \n \xa0\xa0\xa0\xa0 y2 = 600; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n } \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 int   line_thickness = 33; \n \xa0\xa0\xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色斜线 \n \xa0\xa0\xa0\xa0 x1 = 566; \n \xa0\xa0\xa0\xa0 y1 = 300; \n \xa0\xa0\xa0\xa0 x2 = 1166; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 1233; \n \xa0\xa0\xa0\xa0 y1 = 600; \n \xa0\xa0\xa0\xa0 x2 = 633; \n \xa0\xa0\xa0\xa0 y2 = 300; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 566; \n \xa0\xa0\xa0\xa0 y1 = 300; \n \xa0\xa0\xa0\xa0 x2 = -33; \n \xa0\xa0\xa0\xa0 y2 = 0; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0 \n \xa0\xa0\xa0\xa0 x1 = 600; \n \xa0\xa0\xa0\xa0 y1 = 316.5; \n \xa0\xa0\xa0\xa0 x2 = 0; \n \xa0\xa0\xa0\xa0 y2 = 616.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red); \n \xa0\xa0 } \n \xa0\xa0 { \n \xa0\xa0 int   line_thickness = 33; \n \xa0\xa0 gdImageSetThickness(img, line_thickness); \n \xa0 \n \xa0\xa0 int   x1, y1, x2, y2, x3, y3; \n \xa0 \n \xa0\xa0 // 绘制\xa0 斜线 \n \xa0\xa0 x1 = 0; \n \xa0\xa0 y1 = 600; \n \xa0\xa0 x2 = 1200; \n \xa0\xa0 y2 = 0; \n \xa0\xa0 gdImageLine(img, x1, y1, x2, y2, red ); \n \xa0 \n \xa0 \n \xa0\xa0 x1 = 1200; \n \xa0\xa0\xa0\xa0 y1 = 16.5; \n \xa0\xa0\xa0\xa0 x2 = 600; \n \xa0\xa0\xa0\xa0 y2 = 316.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0 \n \xa0\xa0 x1 = 0; \n \xa0\xa0\xa0\xa0 y1 = 583.5; \n \xa0\xa0\xa0\xa0 x2 = 600; \n \xa0\xa0\xa0\xa0 y2 = 283.5; \n \xa0\xa0\xa0\xa0 gdImageLine(img, x1, y1, x2, y2, white); \n \xa0 \n \xa0 \n \xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制白色十字 \n \xa0\xa0\xa0\xa0 int   cross_width = width / 32; \n \xa0\xa0\xa0\xa0 int   cross_arm_width = width / 32; \n \xa0\xa0\xa0\xa0 int   center_x = width / 2; \n \xa0\xa0\xa0\xa0 int   center_y = height / 2; \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white); \n \xa0 \n \xa0\xa0\xa0\xa0 // 绘制红色十字 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red); \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red); \n } \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n #define WIDTH 900 \n #define HEIGHT 600 \n #define FILENAME "south_korea_flag.png" \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 gdImagePtr im; \n \xa0\xa0\xa0\xa0 FILE   *pngout; \n \xa0\xa0\xa0\xa0 int   white, black, red, blue; \n \xa0 \n \xa0\xa0\xa0\xa0 im = gdImageCreate(WIDTH, HEIGHT); \n \xa0 \n \xa0\xa0\xa0\xa0 white = gdImageColorAllocate(im, 255, 255, 255); \n \xa0\xa0\xa0\xa0 black = gdImageColorAllocate(im, 0, 0, 0); \n \xa0\xa0\xa0\xa0 red = gdImageColorAllocate(im, 205, 0, 0); \n \xa0\xa0\xa0\xa0 blue = gdImageColorAllocate(im, 0, 56, 168); \n \xa0 \n \xa0\xa0\xa0\xa0 // Background (white) \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white); \n \xa0 \n \xa0\xa0\xa0\xa0 // Blue Circle (Yin-Yang Symbol) \n \xa0\xa0\xa0\xa0 gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc); \n \xa0 \n \xa0\xa0\xa0\xa0 // Red Circle (Yin-Yang Symbol) \n \xa0\xa0\xa0\xa0 gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc); \n \xa0 \n \xa0\xa0 int   circleX = 385;\xa0\xa0\xa0  // 圓心的 X 座標 \n \xa0\xa0 int   circleY = 262.5;\xa0\xa0  // 圓心的 Y 座標 \n \xa0\xa0 int   circleRadius = 75;\xa0\xa0\xa0\xa0  \n \xa0 \n \xa0\xa0 // 繪製圓形 \n \xa0\xa0 gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red); \n \xa0 \n \xa0\xa0 int   circleX2 = 515;\xa0\xa0\xa0  // 圓心的 X 座標 \n \xa0 \n \xa0 int   circleY2 = 337.5; \n \xa0 \n \xa0\xa0 // 繪製圓形 \n \xa0\xa0 gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue); \n \xa0 \n \xa0\xa0 { \n \xa0 \n \xa0 \n \xa0\xa0 // 起點和終點位置 \n \xa0 \n \xa0\xa0 int   startX = 340;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY = 90;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX = 200;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY = 260;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth = 23;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX, startY, endX, endY, black); \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black); \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black); \n \xa0 \n \xa0\xa0 int   startX2 = 213;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY2 = 270;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX2 = 133;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY2 = 210;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth2 = 25;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +10); \n gdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth ); \n gdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n gdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +12); \n gdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white); \n } \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 // 起點和終點位置 \n \xa0 \n \xa0\xa0 int   startX = 330;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY = 520;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX = 190;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY = 350;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth = 23;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX, startY, endX, endY, black); \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black); \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black); \n \xa0 \n \xa0\xa0 int   startX2 = 213;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY2 = 330;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX2 = 133;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY2 = 390;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth2 = 25;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +8); \n \xa0\xa0 gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +10); \n gdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth ); \n gdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n gdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +14); \n gdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageSetThickness(im, lineWidth -10); \n gdImageLine(im, 232, 426, 206, 448, white); \n \xa0 \n \xa0\xa0 } \n \xa0 \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 // 起點和終點位置 \n \xa0 \n \xa0\xa0 int   startX = 564;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY = 520;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX = 704;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY = 350;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth = 23;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX, startY, endX, endY, black); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black); \n \xa0 \n gdImageSetThickness(im, lineWidth -10); \n gdImageLine(im, 624, 400, 734, 490, white); \n \xa0 \n \xa0\xa0 int   startX2 = 553;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY2 = 330;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX2 = 633;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY2 = 390;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth2 = 25;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +8); \n \xa0\xa0 gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +10); \n gdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n gdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +30); \n gdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white); \n \xa0\xa0 } \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 // 起點和終點位置 \n \xa0 \n \xa0\xa0 int   startX = 330;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY = 520;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX = 190;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY = 350;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth = 23;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX, startY, endX, endY, black); \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black); \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black); \n \xa0 \n \xa0\xa0 int   startX2 = 213;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY2 = 330;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX2 = 133;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY2 = 390;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth2 = 25;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +8); \n \xa0\xa0 gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +10); \n gdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth ); \n gdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n gdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +14); \n gdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageSetThickness(im, lineWidth -10); \n gdImageLine(im, 232, 426, 206, 448, white); \n \xa0 \n \xa0\xa0 } \n \xa0\xa0 { \n \xa0\xa0\xa0\xa0 // 起點和終點位置 \n \xa0 \n \xa0\xa0 int   startX = 564;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY = 97;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX = 704;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY = 267;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth = 23;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX, startY, endX, endY, black); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageSetThickness(im, lineWidth -10); \n gdImageLine(im, 624, 212, 734, 118, white); \n \xa0 \n \xa0\xa0\xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n \xa0\xa0 gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black); \n \xa0 \n \xa0\xa0 int   startX2 = 553;\xa0\xa0\xa0  \n \xa0\xa0 // 線的起點 X 座標 \n \xa0 \n \xa0\xa0 int   startY2 = 277;\xa0\xa0  \n \xa0\xa0 // 線的起點 Y 座標 \n \xa0 \n \xa0\xa0 int   endX2 = 633;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 X 座標 \n \xa0 \n \xa0\xa0 int   endY2 = 217;\xa0\xa0\xa0\xa0  \n \xa0\xa0 // 線的終點 Y 座標 \n \xa0 \n \xa0\xa0 int   lineWidth2 = 25;\xa0  // 線的寬度 \n \xa0 \n \xa0\xa0 // 繪製線段 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +8); \n \xa0\xa0 gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth +10); \n gdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white); \n \xa0 \n \xa0\xa0 gdImageSetThickness(im, lineWidth); \n gdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageSetThickness(im, lineWidth +30); \n gdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white); \n \xa0 \n \xa0\xa0 } \n \xa0 \n \xa0\xa0\xa0\xa0 // Save image \n FILE   *outputFile =  fopen ( "./../images/korea_flag.png" ,  "wb" ); \n if   (outputFile == NULL) { \n \xa0\xa0\xa0\xa0 fprintf (stderr,  "Error opening the output file.\\n" ); \n \xa0\xa0\xa0\xa0 return   1; \n } \n \xa0\xa0 gdImagePngEx(im, outputFile, 9); \n \xa0\xa0\xa0\xa0\xa0\xa0 fclose (outputFile); \n \xa0\xa0\xa0\xa0\xa0\xa0 gdImageDestroy(im); \n \xa0\xa0\xa0\xa0\xa0\xa0 return   0; \n \xa0\xa0 } \n \n \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w12', 'text': '#include <stdio.h> #include <gd.h> #include <math.h> \n git checkout main int main() {  int width = 800;  int height = 600; \n gdImagePtr img = gdImageCreateTrueColor(width, height);  gdImageAlphaBlending(img, 0); \n FILE *outputFile = fopen("hellogd.png", "wb");  if (outputFile == NULL) { \n fprintf(stderr, "Error opening the output file.\\n"); \n return 1;  } \n int red = gdImageColorAllocate(img, 255, 0, 0);  int blue = gdImageColorAllocate(img, 0, 0, 255);  int black = gdImageColorAllocate(img, 0, 0, 0);  int white = gdImageColorAllocate(img, 255, 255, 255);  // 長方形塗色  gdImageFilledRectangle(img, 0, 0, width, height, white);  gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue);  // 橢圓形塗色  gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red);  // 橢圓形畫線  gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red);  // 畫直線  gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue); \n // 多邊形畫線  gdPoint points[4];  points[0].x = (int)width/4;  points[0].y = (int)height*3/4;  points[1].x = points[0].x + 100;  points[1].y = points[0].y;  points[2].x = points[1].x;  points[2].y = points[1].y + 100;  points[3].x = points[2].x - 100;  points[3].y = points[2].y;  gdImagePolygon(img, points, 4, black); \n // 多邊形塗色  gdPoint points2[4];  points2[0].x = (int)width/3;  points2[0].y = (int)height/2;  points2[1].x = points2[0].x + 100;  points2[1].y = points2[0].y;  points2[2].x = points2[1].x;  points2[2].y = points2[1].y + 100;  points2[3].x = points2[2].x - 150;  points2[3].y = points2[2].y;  gdImageFilledPolygon(img, points2, 4, red); \n gdImagePngEx(img, outputFile, 9);  fclose(outputFile);  gdImageDestroy(img);  return 0; } \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'W13', 'text': '', 'tags': '', 'url': 'W13.html'}, {'title': 'w14', 'text': '', 'tags': '', 'url': 'w14.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};