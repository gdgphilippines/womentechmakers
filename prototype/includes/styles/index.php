<?php 
header("Content-type: text/css");
$directory = "../images/icons/"; 
if(file_exists($directory)) {
	foreach (glob($directory."*.png") as $filename) {
		$icon = str_replace("ic_", "", str_replace($directory, "", str_replace(".png", "", $filename)));
?> 
.icon.<?php echo $icon; ?> {
	background-image: url(<?php echo $filename; ?>); 
}
<?php 
} 
	foreach (glob($directory."*_color.png") as $filename) {
	$icon = str_replace("ic_", "", str_replace($directory, "", str_replace("_color.png", "", $filename)));
?> 
.icon.<?php echo $icon; ?> {
	background-image: url(<?php echo $filename; ?>); 
}
<?php 
	} 
} 
for($i = 10; $i <= 48; $i++) {
?>.icon_<?php echo $i; ?> {
	background-size: <?php echo $i; ?>px <?php echo $i; ?>px !important;
} 
<?php 
} 
?>