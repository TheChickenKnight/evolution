function rotate_and_draw_image(img_x, img_y, img_width, img_height, img_angle){
    imageMode(CENTER);
    translate(img_x+img_width/2, img_y+img_width/2);
    rotate(PI/180*angle);
    image(img, 0, 0, img_width, img_height);
    rotate(-PI / 180 * img_angle);
    translate(-(img_x+img_width/2), -(img_y+img_width/2));
    imageMode(CORNER);
}