<?php
	require('includes/includes.php');
	ob_start("sanitize_page");
	new Session(array('ALL'));

	$seoArr['desc'] = 'Your hub for all call of duty random class generators past, present and future.';
	$seoArr['keywords'] = 'call of duty, cod, random class generator, rcg, multiplayer, call of duty random class generator,
			Morden Warfare 2 RCG, MW2 RCG, mw2 random class generator, modern warfare 2, modern warfare 2 random class generator,
			Black Ops RCG, blops, black ops, ops rcg, black ops random class generator,
			Morden Warfare 3 RCG, MW3 RCG, mw3 random class generator, modern warfare 3, modern warfare 3 random class generator,
			Black Ops 2 RCG, blops 2, black ops 2, ops 2 rcg, black ops 2 random class generator,
			Ghost random class generator, Ghost,
			Advanced Warfare RCG, advanced warfare random class generator,
			Black Ops 3 RCG, blops 3, black ops 3, ops 3 rcg, black ops 3 random class generator
			Call of Duty: WWII, World War II RCG, WWII, world war II random class generator
			Call of Duty: WW2, World War 2 RCG, WW2, world war 2 random class generator';

	//Set Variables
	$config = getconfig (
		'Cached_BO_Class_Count','Cached_BO2_Class_Count','Cached_BO3_Class_Count',
		'Cached_MW_Class_Count','Cached_MW2_Class_Count', 'Cached_MW3_Class_Count',
		'Cached_GH_Class_Count','Cached_IW_Class_Count','Cached_WW2_Class_Count'
	);

	$rcgs = [
		['Name' => 'World War 2', 'Count' => number_format($config['Cached_WW2_Class_Count']), 'Color' => 'black-text', 'Link' => WW2_Folder.'/'],
		['Name' => 'Infinite Warfare', 'Count' => number_format($config['Cached_IW_Class_Count']), 'Color' => 'yellow accent-2 black-text', 'Link' => IW_Folder.'/'],
		['Name' => 'Black Ops 3', 'Count' => number_format($config['Cached_BO3_Class_Count']), 'Color' => 'orange accent-4 white-text', 'Link' => BO3_Folder.'/'],
		['Name' => 'Ghost', 'Count' => number_format($config['Cached_GH_Class_Count']), 'Color' => 'blue darken-2 white-text', 'Link' => GH_Folder.'/'],
		['Name' => 'Black Ops 2', 'Count' => number_format($config['Cached_BO2_Class_Count']), 'Color' => 'orange accent-4 white-text', 'Link' => BO2_Folder.'/'],
		['Name' => 'Modern Warfare 3', 'Count' => number_format($config['Cached_MW3_Class_Count']), 'Color' => 'green accent-4 black-text', 'Link' => MW3_Folder.'/'],
		// ['Name' => 'Black Ops', 'Count' => 'Coming Soon', 'Color' => 'orange accent-4 white-text', 'Link' => BO_Folder.'/'],
		['Name' => 'Modern Warfare 2', 'Count' => number_format($config['Cached_MW2_Class_Count']), 'Color' => 'green accent-4 black-text', 'Link' => MW2_Folder.'/'],
		['Name' => 'Modern Warfare', 'Count' => number_format($config['Cached_MW_Class_Count']), 'Color' => 'green accent-4 black-text', 'Link' => MW_Folder.'/'],
	];
	$rcg_count = 0;
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
	<div id="homePage" class="row">
		<div class="col s12">
			<h1 class="text-center">COD Random Class Generator Hub</h1>
			<?php require ('includes/pagesections/ads/Ad_top.php'); ?>
			<?php require('includes/pagesections/dev_alert.php'); ?>
			<div class="divider"></div>
			<div class="row margin-top-10">
				<div class="col s12 l8 offset-l2 text center">
					<?php require_once( 'includes/pagesections/social/twitter_btn.php' ); ?>
					<?php require_once( 'includes/pagesections/social/facebook_btn.php' ); ?>
					<br><br>
				</div>
				<div class="col s12 l8 offset-l2 text center">
					Call of Duty Random Class Generator is designed to generate a random class for players to
					use in many of the Call of Duty multiplayer games. If we don't have your favorite Call of
					Duty game we will link you to where you can find it, So bookmark us and make us your one
					stop place to get random class generators.
				</div>
			</div>

			<div class="row">
				<div class="col s12 m8">
					<div class="row">
					    <h3>Our Random Class Generators:</h3>
					</div>
					<?php foreach ($rcgs as $key => $value): ?>
						<?php
							if ($rcg_count == 0) {
								echo '<div class="row">';
							} else if ($rcg_count % 3 == 0) {
								echo '</div><div class="row">';
							}
						?>
						<div class="col s12 m4">
					        <a href="<?php echo $value['Link']; ?>">
					            <div class="rcgs card-panel text-center black-text">
					                <h2 class="smallH2"><?php echo $value['Name']; ?> <br>Random Class Generator</h2>
					                <span class="myBadge <?php echo $value['Color']; ?>">
					                    <?php echo $value['Count'].(strpos($value['Count'],'Coming') === FALSE ? ' classes rolled' : ''); ?>
					                </span>
					            </div>
					        </a>
					    </div>
						<?php $rcg_count++; ?>
					<?php endforeach; ?>
					<?php
						//Close last row
						echo '</div>';
					?>
				</div>
				<div class="col s12 m4 text center">
					<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Looking for somewhere to watch the WWII Livestream? <a href="https://t.co/GqWAgFJaX7">https://t.co/GqWAgFJaX7</a> <a href="https://twitter.com/hashtag/CoDWWII?src=hash">#CoDWWII</a> <a href="https://twitter.com/hashtag/CodWW2?src=hash">#CodWW2</a> <a href="https://twitter.com/hashtag/CoD2017?src=hash">#CoD2017</a> <a href="https://twitter.com/CallofDuty">@CallofDuty</a> <a href="https://twitter.com/SHGames">@SHGames</a></p>&mdash; Silo City Labs (@silocitylabs) <a href="https://twitter.com/silocitylabs/status/857229914856194049">April 26, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
				</div>
			</div>
			<?php require_once ('includes/pagesections/other_rcgs.php'); ?>
		</div>
	</div>
	<?php require ('includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>
