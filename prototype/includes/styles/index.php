<?php
header("Content-type: text/css");

$color = array("red_lighten-5" => "#ffebee", "red_lighten-4" => "#ffcdd2", "red_lighten-3" => "#ef9a9a", "red_lighten-2" => "#e57373", "red_lighten-1" => "#ef5350", "red" => "#f44336", "red_darken-1" => "#e53935", "red_darken-2" => "#d32f2f", "red_darken-3" => "#c62828", "red_darken-4" => "#b71c1c", "red_accent-1" => "#ff8a80", "red_accent-2" => "#ff5252", "red_accent-3" => "#ff1744", "red_accent-4" => "#d50000", "pink_lighten-5" => "#fce4ec", "pink_lighten-4" => "#f8bbd0", "pink_lighten-3" => "#f48fb1", "pink_lighten-2" => "#f06292", "pink_lighten-1" => "#ec407a", "pink" => "#e91e63", "pink_darken-1" => "#d81b60", "pink_darken-2" => "#c2185b", "pink_darken-3" => "#ad1457", "pink_darken-4" => "#880e4f", "pink_accent-1" => "#ff80ab", "pink_accent-2" => "#ff4081", "pink_accent-3" => "#f50057", "pink_accent-4" => "#c51162", "purple_lighten-5" => "#f3e5f5", "purple_lighten-4" => "#e1bee7", "purple_lighten-3" => "#ce93d8", "purple_lighten-2" => "#ba68c8", "purple_lighten-1" => "#ab47bc", "purple" => "#9c27b0", "purple_darken-1" => "#8e24aa", "purple_darken-2" => "#7b1fa2", "purple_darken-3" => "#6a1b9a", "purple_darken-4" => "#4a148c", "purple_accent-1" => "#ea80fc", "purple_accent-2" => "#e040fb", "purple_accent-3" => "#d500f9", "purple_accent-4" => "#aa00ff", "deep-purple_lighten-5" => "#ede7f6", "deep-purple_lighten-4" => "#d1c4e9", "deep-purple_lighten-3" => "#b39ddb", "deep-purple_lighten-2" => "#9575cd", "deep-purple_lighten-1" => "#7e57c2", "deep-purple" => "#673ab7", "deep-purple_darken-1" => "#5e35b1", "deep-purple_darken-2" => "#512da8", "deep-purple_darken-3" => "#4527a0", "deep-purple_darken-4" => "#311b92", "deep-purple_accent-1" => "#b388ff", "deep-purple_accent-2" => "#7c4dff", "deep-purple_accent-3" => "#651fff", "deep-purple_accent-4" => "#6200ea", "indigo_lighten-5" => "#e8eaf6", "indigo_lighten-4" => "#c5cae9", "indigo_lighten-3" => "#9fa8da", "indigo_lighten-2" => "#7986cb", "indigo_lighten-1" => "#5c6bc0", "indigo" => "#3f51b5", "indigo_darken-1" => "#3949ab", "indigo_darken-2" => "#303f9f", "indigo_darken-3" => "#283593", "indigo_darken-4" => "#1a237e", "indigo_accent-1" => "#8c9eff", "indigo_accent-2" => "#536dfe", "indigo_accent-3" => "#3d5afe", "indigo_accent-4" => "#304ffe", "blue_lighten-5" => "#e3f2fd", "blue_lighten-4" => "#bbdefb", "blue_lighten-3" => "#90caf9", "blue_lighten-2" => "#64b5f6", "blue_lighten-1" => "#42a5f5", "blue" => "#2196f3", "blue_darken-1" => "#1e88e5", "blue_darken-2" => "#1976d2", "blue_darken-3" => "#1565c0", "blue_darken-4" => "#0d47a1", "blue_accent-1" => "#82b1ff", "blue_accent-2" => "#448aff", "blue_accent-3" => "#2979ff", "blue_accent-4" => "#2962ff", "light-blue_lighten-5" => "#e1f5fe", "light-blue_lighten-4" => "#b3e5fc", "light-blue_lighten-3" => "#81d4fa", "light-blue_lighten-2" => "#4fc3f7", "light-blue_lighten-1" => "#29b6f6", "light-blue" => "#03a9f4", "light-blue_darken-1" => "#039be5", "light-blue_darken-2" => "#0288d1", "light-blue_darken-3" => "#0277bd", "light-blue_darken-4" => "#01579b", "light-blue_accent-1" => "#80d8ff", "light-blue_accent-2" => "#40c4ff", "light-blue_accent-3" => "#00b0ff", "light-blue_accent-4" => "#0091ea", "cyan_lighten-5" => "#e0f7fa", "cyan_lighten-4" => "#b2ebf2", "cyan_lighten-3" => "#80deea", "cyan_lighten-2" => "#4dd0e1", "cyan_lighten-1" => "#26c6da", "cyan" => "#00bcd4", "cyan_darken-1" => "#00acc1", "cyan_darken-2" => "#0097a7", "cyan_darken-3" => "#00838f", "cyan_darken-4" => "#006064", "cyan_accent-1" => "#84ffff", "cyan_accent-2" => "#18ffff", "cyan_accent-3" => "#00e5ff", "cyan_accent-4" => "#00b8d4", "teal_lighten-5" => "#e0f2f1", "teal_lighten-4" => "#b2dfdb", "teal_lighten-3" => "#80cbc4", "teal_lighten-2" => "#4db6ac", "teal_lighten-1" => "#26a69a", "teal" => "#009688", "teal_darken-1" => "#00897b", "teal_darken-2" => "#00796b", "teal_darken-3" => "#00695c", "teal_darken-4" => "#004d40", "teal_accent-1" => "#a7ffeb", "teal_accent-2" => "#64ffda", "teal_accent-3" => "#1de9b6", "teal_accent-4" => "#00bfa5", "green_lighten-5" => "#e8f5e9", "green_lighten-4" => "#c8e6c9", "green_lighten-3" => "#a5d6a7", "green_lighten-2" => "#81c784", "green_lighten-1" => "#66bb6a", "green" => "#4caf50", "green_darken-1" => "#43a047", "green_darken-2" => "#388e3c", "green_darken-3" => "#2e7d32", "green_darken-4" => "#1b5e20", "green_accent-1" => "#b9f6ca", "green_accent-2" => "#69f0ae", "green_accent-3" => "#00e676", "green_accent-4" => "#00c853", "light-green_lighten-5" => "#f1f8e9", "light-green_lighten-4" => "#dcedc8", "light-green_lighten-3" => "#c5e1a5", "light-green_lighten-2" => "#aed581", "light-green_lighten-1" => "#9ccc65", "light-green" => "#8bc34a", "light-green_darken-1" => "#7cb342", "light-green_darken-2" => "#689f38", "light-green_darken-3" => "#558b2f", "light-green_darken-4" => "#33691e", "light-green_accent-1" => "#ccff90", "light-green_accent-2" => "#b2ff59", "light-green_accent-3" => "#76ff03", "light-green_accent-4" => "#64dd17", "lime_lighten-5" => "#f9fbe7", "lime_lighten-4" => "#f0f4c3", "lime_lighten-3" => "#e6ee9c", "lime_lighten-2" => "#dce775", "lime_lighten-1" => "#d4e157", "lime" => "#cddc39", "lime_darken-1" => "#c0ca33", "lime_darken-2" => "#afb42b", "lime_darken-3" => "#9e9d24", "lime_darken-4" => "#827717", "lime_accent-1" => "#f4ff81", "lime_accent-2" => "#eeff41", "lime_accent-3" => "#c6ff00", "lime_accent-4" => "#aeea00", "yellow_lighten-5" => "#fffde7", "yellow_lighten-4" => "#fff9c4", "yellow_lighten-3" => "#fff59d", "yellow_lighten-2" => "#fff176", "yellow_lighten-1" => "#ffee58", "yellow" => "#ffeb3b", "yellow_darken-1" => "#fdd835", "yellow_darken-2" => "#fbc02d", "yellow_darken-3" => "#f9a825", "yellow_darken-4" => "#f57f17", "yellow_accent-1" => "#ffff8d", "yellow_accent-2" => "#ffff00", "yellow_accent-3" => "#ffea00", "yellow_accent-4" => "#ffd600", "amber_lighten-5" => "#fff8e1", "amber_lighten-4" => "#ffecb3", "amber_lighten-3" => "#ffe082", "amber_lighten-2" => "#ffd54f", "amber_lighten-1" => "#ffca28", "amber" => "#ffc107", "amber_darken-1" => "#ffb300", "amber_darken-2" => "#ffa000", "amber_darken-3" => "#ff8f00", "amber_darken-4" => "#ff6f00", "amber_accent-1" => "#ffe57f", "amber_accent-2" => "#ffd740", "amber_accent-3" => "#ffc400", "amber_accent-4" => "#ffab00", "orange_lighten-5" => "#fff3e0", "orange_lighten-4" => "#ffe0b2", "orange_lighten-3" => "#ffcc80", "orange_lighten-2" => "#ffb74d", "orange_lighten-1" => "#ffa726", "orange" => "#ff9800", "orange_darken-1" => "#fb8c00", "orange_darken-2" => "#f57c00", "orange_darken-3" => "#ef6c00", "orange_darken-4" => "#e65100", "orange_accent-1" => "#ffd180", "orange_accent-2" => "#ffab40", "orange_accent-3" => "#ff9100", "orange_accent-4" => "#ff6d00", "deep-orange_lighten-5" => "#fbe9e7", "deep-orange_lighten-4" => "#ffccbc", "deep-orange_lighten-3" => "#ffab91", "deep-orange_lighten-2" => "#ff8a65", "deep-orange_lighten-1" => "#ff7043", "deep-orange" => "#ff5722", "deep-orange_darken-1" => "#f4511e", "deep-orange_darken-2" => "#e64a19", "deep-orange_darken-3" => "#d84315", "deep-orange_darken-4" => "#bf360c", "deep-orange_accent-1" => "#ff9e80", "deep-orange_accent-2" => "#ff6e40", "deep-orange_accent-3" => "#ff3d00", "deep-orange_accent-4" => "#dd2c00", "brown_lighten-5" => "#efebe9", "brown_lighten-4" => "#d7ccc8", "brown_lighten-3" => "#bcaaa4", "brown_lighten-2" => "#a1887f", "brown_lighten-1" => "#8d6e63", "brown" => "#795548", "brown_darken-1" => "#6d4c41", "brown_darken-2" => "#5d4037", "brown_darken-3" => "#4e342e", "brown_darken-4" => "#3e2723", "gray_lighten-5" => "#fafafa", "gray_lighten-4" => "#f5f5f5", "gray_lighten-3" => "#eeeeee", "gray_lighten-2" => "#e0e0e0", "gray_lighten-1" => "#bdbdbd", "gray" => "#9e9e9e", "gray_darken-1" => "#757575", "gray_darken-2" => "#616161", "gray_darken-3" => "#424242", "gray_darken-4" => "#212121", "blue-gray_lighten-5" => "#eceff1", "blue-gray_lighten-4" => "#cfd8dc", "blue-gray_lighten-3" => "#b0bec5", "blue-gray_lighten-2" => "#90a4ae", "blue-gray_lighten-1" => "#78909c", "blue-gray" => "#607d8b", "blue-gray_darken-1" => "#546e7a", "blue-gray_darken-2" => "#455a64", "blue-gray_darken-3" => "#37474f", "blue-gray_darken-4" => "#263238", "black" => "#000000", "white" => "#ffffff", "transparent" => "transparent");

if(isset($_GET['primary']))
	$__PRIMARY_COLOR = "#".$_GET['primary'];
else
	$__PRIMARY_COLOR = $color["blue_darken-1"]; 

if(isset($_GET['secondary']))
	$__SECONDARY_COLOR = "#".$_GET['secondary'];
else
	$__SECONDARY_COLOR = $color["red"]; 
define("PRIMARY_COLOR", $__PRIMARY_COLOR);
define("SECONDARY_COLOR", $__SECONDARY_COLOR);

define("MIN_WIDTH", "360px");
define("MAX_WIDTH", "1280px");

function getTransition($attr, $time, $speed) {
	$x = "-webkit-transition: all time speed; 
	-moz-transition: all time speed; 
	-ms-transition: all time speed; 
	-o-transition: all time speed; 
	transition: all time speed;
"; 
	$x = str_replace("time", $time, $x); 
	$x = str_replace("speed", $speed, $x); 
	$x = str_replace("all", $attr, $x); 
	echo $x; 
} 
function getRotation($deg) {
	$x = "-webkit-transform: rotate(360deg); 
	-moz-: rotate(360deg); 
	-ms-transform: rotate(360deg);
	-o-transform: rotate(360deg); 
	transform: rotate(360deg);
"; 
	$x = str_replace("360", $deg, $x); 
	echo $x;
} 
function getBackgroundIcon($icon, $color) {
	echo 'background-image: url(../../../images/skin/oslo/icons/ic_'.$icon.'_'.$color.'.png);';
} 
?>
[onclick] {
	cursor: pointer;
}
* {
	box-sizing: border-box;
}
a {
	color: inherit;
	text-decoration: none;
}
<?php 
$directory = "../images/icons/"; 
if(file_exists($directory)) {
	foreach (glob($directory."*.png") as $filename) {
		$icon = str_replace($directory, "", str_replace(".png", "", str_replace("ic_", "", $filename)));
?> 
.icon.<?php echo $icon; ?> {
	background-image: url(<?php echo $filename; ?>); 
} 
<?php 
} 
	foreach (glob($directory."*_color.png") as $filename) {
	$icon = str_replace($directory, "", str_replace("_color.png", "", str_replace("ic_", "", $filename)));
?> 
.icon.<?php echo $icon; ?> {
	background-image: url(<?php echo $filename; ?>); 
} 
<?php 
	} 
} 
for($i = 10; $i <= 48; $i++) {
?> .icon_<?php echo $i; ?> {
	background-size: <?php echo $i; ?>px <?php echo $i; ?>px;
} 
<?php 
} 
?>
i.icon {
	display: inline-block;
	width: 36px;
	height: 36px;
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
}
<?php
foreach($color as $class => $value) {
	$class = ".".str_replace("_", ".", $class);
	echo $class." {
	background-color: ".$value." !important;
}
";
}
foreach($color as $class => $value) {
	$temp = explode("_", $class);
	$class = ".".$temp[0]."-text";
	if(isset($temp[1]))
		$class .= ".".$temp[1];
	echo $class." {
	color: ".$value." !important;
}
";
}
foreach($color as $class => $value) {
	$temp = explode("_", $class);
	$class = ".".$temp[0]."-border";
	if(isset($temp[1]))
		$class .= ".".$temp[1];
	echo $class." {
	border-color: ".$value." !important;
}
";
}
for($i = 1; $i <= 12; $i++) {
?>
.col-<?=$i?> {
	width: <?=(8.3333*$i)?>% !important;
	float: left;
}
<?php
}
?>
.table {
	display: table;
}
.cell {
	display: table-cell;
}
.cell.middle {
	vertical-align: middle;
}
.row {
	overflow: hidden;
}
.single-line {
	white-space: nowrap;
}




body {
	margin: 0px;
	font-family: "Roboto";
	background: #f0f0f0;
}
header {
	width: 100%;
	position: relative;
	background-color: <?=$color["gray_lighten-2"]?>;
	background-image: url(../images/cover.jpg);
	background-attachment: fixed;
	background-size: cover;
}
header .wrapper {
	min-width: <?=MIN_WIDTH?>;
	max-width: <?=MAX_WIDTH?>;
	margin: 0px auto;
	position: relative;
	padding: 20px;
	overflow: hidden;
}
header .menu {
	vertical-align: middle;
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
	display: none;
}
header .brand-logo {
	background-image: url(../images/WT_logo_horizontal_white.png);
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center left;
	width: 300px;
	height: 60px;
	display: inline-block;
	vertical-align: middle;
}
header ul.nav {
	list-style-type: none;
	margin: 0px;
	padding: 0px;
	text-align: right;
	float: right;
}
header ul.nav li {
	vertical-align: middle;
	display: table-cell;
	padding-left: 30px;
}
header ul.nav li a {
	color: white;
	padding: 10px;
	border-bottom: 0px solid transparent;
	<?=getTransition("all", ".2s", "ease-in-out")?>
}
header ul.nav li a:hover {
	border-bottom: 5px solid rgba(255,255,255,.7);
}
header .cover {
	width: 100%;
	height: 500px;
}
header .cover .text-title {
	width: 100%;
	text-align: center;
	color: white;
	text-shadow: 0px 2px 2px rgba(0,0,0,.5);
	font-size: 50px;
}