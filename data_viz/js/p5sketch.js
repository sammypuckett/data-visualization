function preload() {
    //table is comma separated value "csv"
    //and has no header specifying the columns labels
    table = loadTable("assets/data.csv", "csv", "noHeader");
}

function setup(){
  createCanvas(1250, 660);
  background(0);

  fill(255);
  textStyle(BOLD);
  textSize(29);

  text("Radioactivity on Bart", 50, 200);

  // station text

  textStyle(BOLD);
  textSize(15);
  text("Richmond", 356, 37);

  textStyle(NORMAL);
  textSize(13);
  text("El Cerrito del Norte", 315, 72);
  text("El Cerrito Plaza", 347, 99);
  text("North Berkeley", 366, 126);
  text("Downtown Berkeley", 355, 153);
  text("Ashby", 445, 180);
  text("West Oakland", 375, 257);

  text("Embarcadero", 230, 286);
  text("Montgomery St.", 203, 307);
  text("Powell St.", 225, 329);
  text("Civic Center/UN Plaza", 137, 350);
  text("16th St. Mission", 330, 392);
  text("24th St. Mission", 320, 415);
  text("Glen Park", 310, 438);
  text("Balboa Park", 296, 461);
  text("Daly City", 170, 438);
  text("Colma", 180, 510);
  text("South San Francisco", 123, 540);
  text("San Bruno", 200, 570);
  text("San Francisco International Airport (SFO)", 335, 560);

  textStyle(BOLD);
  textSize(15);
  text("Millbrae", 300, 630);

  textStyle(NORMAL);
  textSize(13);
  text("Rockridge", 548, 209);
  text("Orinda", 555, 160);
  text("Lafayette", 625, 192);
  text("Walnut Creek", 700, 165);
  text("Pleasant Hill/Contra Costa Centre", 495, 113);
  text("Concord", 730, 108);
  text("North Concord/Martinez", 578, 70);

  textStyle(BOLD);
  textSize(15);
  text("Pittsburg/Bay Point", 683, 33);

  textStyle(NORMAL);
  textSize(13);
  text("MacArthur", 530, 230);
  text("19th St./Oakland", 525, 255);
  text("12th St./Oakland City Center", 520, 280);

  text("Lake Merritt", 533, 305);
  text("Fruitvale", 548, 325);
  text("Coliseum", 566, 345);
  text("San Leandro", 578, 365);
  text("Bay Fair", 595, 385);

  text("Castro Valley", 620, 405);
  text("West Dublin/Pleasanton", 665, 445);

  textStyle(BOLD);
  textSize(15);
  text("Dublin/Pleasanton", 715, 400);

  textStyle(NORMAL);
  textSize(13);
  text("Hayward", 630, 465);
  text("South Hayward", 655, 500);
  text("Union City", 680, 537);
  text("Fremont", 610, 590);

  textStyle(BOLD);
  textSize(15);
  text("Warm Springs/South Fremont", 680, 635);

  //train lines!!!!

  stroke(255);
  strokeWeight(7);

  //STANDARD COLOR LINES

  //red line!
  /**stroke(255, 0, 0);
  line(427, 47, 495, 168); //red richmond to ashby, slope = -1.7534
  line(495, 168, 475, 270); //red macarthur to 12th, slope = 1
  line(475, 270, 330, 270); //red under the bay, slope = 0
  line(330, 270, 220, 470); //red embarcadero to daly city, slope = 0.55
  line(220, 470, 307, 605); //red daly city to millbrae, slope = -1.5517

  //yellow line!
  stroke(255, 255, 0);
  line(317, 598, 308, 584); //yellow millbrae to upward bend, slope = -1.5556
  line(308, 584, 320, 562); //yellow upward bend to sfo, slope = 1.8333
  line(320, 562, 295, 564); //yellow sfo to downward bend, slope = 0.08
  line(295, 564, 235, 470); //yellow downward bend to daly city, slope = -1.5667
  line(235, 470, 337, 283); //yellow daly city to embarcadero, slope = 1.8333
  line(337, 283, 497, 283); //yellow under the bay, slope = 0
  line(497, 283, 515, 195); //yellow 12th to macarthur, slope = 3.826
  line(515, 195, 682, 152); //yellow macarthur to walnut creek, slope = 0.2671
  line(682, 152, 740, 48); //yellow walnut creek to pittsburg/baypoint, slope = 1.7931

  //green line!
  stroke(0, 255, 0);
  line(271, 458, 350, 309); //green daly city to embarcadero, slope = 1.8861
  line(350, 309, 490, 309); //green under the bay, slope = 0
  line(490, 309, 700, 610); //green lake merritt to warm springs/south fremont, slope = -1.4333

  //blue line!
  stroke(0, 0, 255);
  line(259, 452, 343, 296); //blue daly city to embarcadero, slope = 1.8571
  line(343, 296, 510, 296); //blue under the bay, slope = 0
  line(510, 296, 596, 417); //blue lake merritt to bay fair, slope = -1.4070
  line(596, 417, 770, 417 )//blue bay fair to west dublin/pleasanton, slope = 0

  //orange line!
  stroke(255, 170, 0);
  line(437, 40, 508, 163); //orange richmond start, slope = -1.75
  line(508, 163, 485, 281); //orange macarthur to 12th, slope = 3.8571
  line(485, 281, 710, 602); //orange 12th to south warm springs/south fremont, slope = -1.4267*/


  //VALUE COLOR LINES
  stroke(table.getRow(0).getNum(1), 110, 220);
  line(427, 47, 437, 65); //red richmond to el cerrito de norte
  line(437, 40, 447, 58); //orange richmond to el cerrito de norte
  stroke(table.getRow(1).getNum(1), 110, 220);
  line(439, 69, 450, 89); //red el cerrito to el cerrito
  line(450, 62, 462, 83); //orange el cerrito to el cerrito
  stroke(table.getRow(2).getNum(1), 110, 220);
  line(453, 94, 465, 115); //red el cerrito to north berkeley
  line(465, 88, 476, 108); //orange el cerrito to north berkeley
  stroke(table.getRow(3).getNum(1), 110, 220);
  line(468, 120, 479, 140); //red north berkeley to downtown berkeley
  line(479, 113, 491, 133); //orange north berkeley to downtown berkeley
  stroke(table.getRow(4).getNum(1), 110, 220);
  line(482, 145, 493, 165); //red downtown berkeley to ashby
  line(494, 138, 505, 158); //orange downtown berkeley to ashby
  stroke(table.getRow(5).getNum(1), 110, 220);
  line(494, 170, 485, 216); //red asbhy to macarthur
  line(508, 162, 498, 217); //orange asbhy to macarthur
  stroke(table.getRow(29).getNum(1), 110, 220);
  line(485, 220, 481, 238); //red macarthur to 19th st.
  line(496, 223, 493, 240); //orange macarthur to 19th st.
  line(508, 226, 505, 242); //yellow macarthur to 19th st.
  stroke(table.getRow(28).getNum(1), 110, 220);
  line(480, 243, 476, 263); //red 19th st. to 12th st.
  line(492, 245, 488, 265); //orange 19th st. to 12th st.
  line(504, 247, 500, 267); //yellow 19th st. to 12th st.
  stroke(table.getRow(27).getNum(1), 110, 220);
  line(475, 270, 437, 270); //red 12th st. to west Oakland
  line(499, 273, 497, 283); //yellow 12th st, to west oakland part 1
  line(497, 283, 437, 283); //yellow 12th st, to west oakland part 2

  stroke(table.getRow(26).getNum(1), 110, 220);
  line(433, 270, 330, 270); //red west oakland to embarcadero part 1
  line(330, 270, 319, 290); //red west oakland to embarcadero part 2
  line(433, 283, 337, 283); //yellow west oakland to embarcadero part 1
  line(337, 283, 330, 296); //yellow west oakland to embarcadero part 2
  line(433, 296, 343, 296); //blue west oakland to embarcadero part 1
  line(343, 296, 340, 302); //blue west oakland to embarcadero part 2
  line(433, 309, 350, 309); //green west oakland to embarcadero part 1
  stroke(table.getRow(25).getNum(1), 110, 220);
  line(316, 295, 309, 308); //red embarcadero to montgomery
  line(327, 301, 320, 314); //yellow embarcadero to montgomery
  line(337, 307, 330, 320); //blue embarcadero to montgomery
  line(348, 313, 341, 326); //green embarcadero to montgomery
  stroke(table.getRow(24).getNum(1), 110, 220);
  line(306, 313, 299, 327); //red montgomery to powell
  line(317, 319, 310, 333); //yellow montgomery to powell
  line(327, 325, 320, 339); //blue montgomery to powell
  line(338, 331, 331, 345); //green montgomery to powell
  stroke(table.getRow(23).getNum(1), 110, 220);
  line(296, 332, 288, 347); //red powell to civic center
  line(307, 338, 299, 353); //yellow powell to civic center
  line(317, 344, 310, 358); //blue powell to civic center
  line(328, 350, 321, 364); //green powell to civic center
  stroke(table.getRow(22).getNum(1), 110, 220);
  line(286, 351, 278, 365); //red civic center to 16th
  line(297, 357, 289, 372); //yellow civic center to 16th
  line(307, 363, 300, 377); //blue civic center to 16th
  line(318, 369, 311, 383); //green civic center to 16th
  stroke(table.getRow(21).getNum(1), 110, 220);
  line(275, 370, 267, 384); //red 16th to 24th
  line(286, 376, 279, 389); //yellow 16th to 24th
  line(297, 382, 290, 395); //blue 16th to 24th
  line(308, 388, 301, 402); //green 16th to 24th
  stroke(table.getRow(20).getNum(1), 110, 220);
  line(265, 388, 258, 401); //red 24th to glen park
  line(277, 393, 270, 406); //yellow 24th to glen park
  line(288, 399, 281, 413); //blue 24th to glen park
  line(299, 405, 292, 419); //green 24th to glen park
  stroke(table.getRow(19).getNum(1), 110, 220);
  line(255, 406, 248, 420); //red glen park to balboa park
  line(267, 412, 260, 425); //yellow glen park to balboa park
  line(278, 418, 271, 431); //blue glen park to balboa park
  line(289, 424, 282, 438); //green glen park to balboa park
  stroke(table.getRow(18).getNum(1), 110, 220);
  line(245, 424, 238, 438); //red balboa park to daly city
  line(257, 430, 249, 444); //yellow balboa park to daly city
  line(268, 436, 261, 450); //blue balboa park to daly city
  line(280, 441, 271, 458); //green balboa park to daly city

  stroke(table.getRow(17).getNum(1), 110, 220);
  line(236, 442, 222, 470); //red daly city to colma part 1
  line(222, 470, 240, 501); //red daly city to colma part 2
  line(247, 448, 236, 470); //yellow daly city to colma part 1
  line(236, 470, 251, 495); //yellow daly city to colma part 2
  stroke(table.getRow(16).getNum(1), 110, 220);
  line(243, 505, 256, 526); //red colma to south sf
  line(253, 498, 265, 517); //yellow colma to south sf
  stroke(table.getRow(15).getNum(1), 110, 220);
  line(258, 529, 270, 548); //red south sf to san bruno
  line(267, 520, 280, 540); //yellow south sf to san bruno


  stroke(200, 110, 220);
  line(273, 553, 307, 605); //red san bruno to millbrae


  stroke(table.getRow(14).getNum(1), 110, 220);
  line(284, 547, 295, 564); //yellow san bruno to sfo part 1
  line(295, 564, 318, 561); //yellow san bruno to sfo part 2
  stroke(table.getRow(13).getNum(1), 110, 220);
  line(319, 565, 308, 584); //yellow sfo to millbrae part 1
  line(308, 584, 317, 598); //yellow sfo to millbrae part 2


  stroke(table.getRow(43).getNum(1), 110, 220);
  line(510, 221, 515, 195); //yellow macarthur to rockridge part 1
  line(515, 195, 538, 189); //yellow macarthur to rockrdige part 2


  stroke(table.getRow(12).getNum(1), 110, 220);
  line(542, 188, 582, 178); //yellow rockridge to orinda
  stroke(table.getRow(11).getNum(1), 110, 220);
  line(586, 176, 626, 166); //yellow orinda to lafayette
  stroke(table.getRow(10).getNum(1), 110, 220);
  line(630, 165, 680, 153); //yellow lafayette to walnut creek
  stroke(table.getRow(9).getNum(1), 110, 220);
  line(684, 150, 697, 126); //yellow walnut creek to pleasant Hill
  stroke(table.getRow(8).getNum(1), 110, 220);
  line(699, 122, 711, 100); //yellow pleasant hill to Concord
  stroke(table.getRow(7).getNum(1), 110, 220);
  line(713, 96, 724, 75); //yellow concord to north Concord
  stroke(table.getRow(6).getNum(1), 110, 220);
  line(727, 71, 739, 48); //yellow north concored to pittsburg

  stroke(table.getRow(38).getNum(1), 110, 220);
  line(437, 309, 490, 309); //green west oakland to frtuivale part 1
  line(490, 309, 499, 321); //green west oakland to frtuivale part 2
  line(438, 296, 510, 296); //blue west oakland to lake merritt part 1
  line(510, 296, 519, 308); //blue west oakland to lake merritt part 2
  stroke(table.getRow(37).getNum(1), 110, 220);
  line(501, 324, 512, 341); //green lake merritt to fruitvale
  line(511, 319, 521, 333); //orange lake merritt to fruitvale
  line(521, 311, 532, 326); //blue lake merritt to fruitvale
  stroke(table.getRow(36).getNum(1), 110, 220);
  line(515, 345, 526, 360); //green fruitvale to coliseum
  line(525, 338, 536, 354); //orange fruitvale to coliseum
  line(535, 330, 546, 346); //blue fruitvale to Coliseum
  stroke(table.getRow(35).getNum(1), 110, 220);
  line(528, 363, 539, 379); //green coliseum to san leandro
  line(539, 357, 550, 373); //orange coliseum to san leandro
  line(548, 349, 559, 365); //blue coliseum to san leandro
  stroke(table.getRow(34).getNum(1), 110, 220);
  line(543, 385, 554, 400); //green san leandro to bay fair
  line(553, 377, 563, 392); //orange san leandro to bay fair
  line(562, 368, 574, 386); //blue san leandro to bay fair
  stroke(table.getRow(33).getNum(1), 110, 220);
  line(556, 404, 606, 475); //green bay fair to hayward
  line(567, 398, 615, 466); //orange bay fair to hayward
  stroke(table.getRow(32).getNum(1), 110, 220);
  line(608, 478, 630, 509); //green hayward to south hayward
  line(619, 472, 640, 502); //orange hayward to south hayward
  stroke(table.getRow(31).getNum(1), 110, 220);
  line(632, 512, 655, 545); //green south hayward to union city
  line(643, 506, 665, 538); //orange south hayward to union city
  stroke(table.getRow(30).getNum(1), 110, 220);
  line(658, 550, 676, 575); //green union city to fremont
  line(669, 543, 686, 568); //orange union city to fremont


  stroke(200, 110, 220);
  line(678, 578, 700, 610); //green fremont to warm springs
  line(689, 572, 710, 602); //orange fremont to warm springs


  stroke(table.getRow(42).getNum(1), 110, 220);
  line(577, 390, 596, 417); //blue bay fair to castro valley part 1
  line(596, 417, 622, 417); //blue bay fair to castro valley part 2
  stroke(table.getRow(41).getNum(1), 110, 220);
  line(626, 417, 718, 417); //blue castro valley to west dublin
  stroke(table.getRow(40).getNum(1), 110, 220);
  line(722, 417, 770, 417); //blue west dublin to dublin/pleasanton

  stroke(table.getRow(39).getNum(1), 110, 220);
  line(486, 272, 485, 280); //orange 12th st. to lake merritt part 1
  line(485, 281, 508, 314); //orange 12th st. to lake merritt part 2

  //stroke(252, 206, 70);


  //station lines!!!

  stroke(255);
  strokeWeight(5);
  line(421, 49, 440, 37); //richmond
  strokeWeight(3);
  line(432, 70, 454, 57); // el cerrito del norte
  line(447, 95, 469, 82); //el cerrito plaza
  line(462, 120, 484, 107); //north berkeley
  line(477, 145, 499, 132); //downtown berkeley
  line(490, 170, 513, 157); //ashby

  line(480, 217, 515, 224); //macarthur
  line(475, 240, 510, 247); //19th st.
  line(470, 265, 505, 272); //12th st.
  line(435, 265, 435, 315); //west oakland

  line(312, 289, 355, 314); //embarcadero
  line(301, 308, 345, 332); //montgomery
  line(292, 327, 335, 351); //powell
  line(281, 345, 325, 369); //civic center
  line(271, 364, 315, 388); //16th st.
  line(262, 382, 305, 406); //24th st.
  line(252, 400, 295, 424); //glen park
  line(242, 418, 285, 442); //balboa park
  strokeWeight(5);
  line(232, 438, 275, 462); //daly city
  strokeWeight(3);
  line(236, 506, 258, 492); //colma
  line(251, 530, 271, 517); //south sf
  line(266, 554, 287, 540); //san bruno
  line(310, 568, 328, 557); //SFO
  strokeWeight(5);
  line(303, 609, 321, 597); //millbrae

  strokeWeight(3);
  line(495, 326, 526, 305); //lake merritt
  line(508, 346, 540, 325); //fruitvale
  line(521, 366, 553, 344); //Coliseum
  line(534, 386, 566, 364); //san Leandro
  line(549, 406, 581, 384); //bay fair
  line(602, 480, 624, 464); //Hayward
  line(625, 516, 648, 500); //south Hayward
  line(650, 552, 672, 536); //union city
  line(672, 582, 695, 565); //fremont
  strokeWeight(5);
  line(695, 615, 717, 598); //warm springs

  strokeWeight(3);
  line(624, 410, 624, 424); //castro Valley
  line(720, 410, 720, 424); //west Dublin
  strokeWeight(5);
  line(772, 410, 772, 424); //dublin/Pleasanton

  strokeWeight(3);
  line(538, 182, 542, 196); //Rockridge
  line(582, 170, 586, 184); //Orinda
  line(626, 158, 630, 172); //lafayette
  line(677, 145, 689, 160); //walnut Creek
  line(691, 120, 705, 128); //pleasant Hill
  line(708, 95, 721, 102); //Concord
  line(720, 70, 733, 78); //north Concord
  strokeWeight(5);
  line(735, 43, 746, 50); //pittsburg


  //index

  strokeWeight(4);
  stroke(255);
  fill(0);
  rect(875, 45, 300, 400)

  strokeWeight(0);
  fill(255);
  textStyle(NORMAL);
  textSize(14);
  text("= 0.9 - 1.1 counts per ten seconds", 922, 110);
  text("= 1.2 - 1.4 counts per ten seconds", 922, 140);
  text("= 1.5 - 1.7 counts per ten seconds", 922, 170);
  text("= 1.8 - 2.0 counts per ten seconds", 922, 200);
  text("= 2.1 - 2.3 counts per ten seconds", 922, 230);
  textStyle(BOLD);
  textSize(16);
  text("Radioactivity Index", 893, 80);
  textStyle(NORMAL);
  textSize(14);
  text("     Counts per ten seconds refers to the \nnumber of alpha and beta particles \ndetected within ten seconds. Although cpm, \ncounts per minute, or cps, counts per \nsecond, are more common, counts per ten \nseconds works the best with the range of \ncollected data.", 890, 280);

  stroke(50, 110, 220);
  fill(50, 110, 220);
  rect(895, 95, 20, 20);

  stroke(100, 110, 220);
  fill(100, 110, 220);
  rect(895, 125, 20, 20);

  stroke(150, 110, 220);
  fill(150, 110, 220);
  rect(895, 155, 20, 20);

  stroke(200, 110, 220);
  fill(200, 110, 220);
  rect(895, 185, 20, 20);

  stroke(250, 110, 220);
  fill(250, 110, 220);
  rect(895, 215, 20, 20);

}

function draw() {
    //nothing here
}
