<?php
    require ('../includes/includes.php');
    ob_start ("sanitize_page");
    new Session(['ALL']);

    $seoArr['title'] = 'Create-A-Class Information - '.MW_Title;
    $seoArr['desc'] = 'The page for create a class information in call of duty modern warfare 2.';
    $seoArr['keywords'] = 'COD Modern Warfare 2 RCG, modern warfare, modern warfare 2 random class generator, COD MW2 RCG';
    $seoArr['url'] = '//'.SYS_URL_PATH.'/'.MW_Folder.'/info';

    $seoArr['breadcrumb'] = '<div itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="hide">
								<a href="'.$seoArr['url'].'" itemprop="url">
									<span itemprop="title">Class Info</span>
								</a>
							</div>';
?>
<?php require_once ('includes/pagesections/_top.php'); ?>
<?php
    echo minify_builder ([
		'BASE' => '/'.MW_Folder.'/assets/scripts',
		'files' => ['pages/info/main.controller.js', 'pages/info/main.service.js']
	]);
?>
<div class="row" ng-controller='InfoCtrl as myCtrl'>
    <div class="col s12">
        <h1 class="text-center">Create-A-Class Info</h1>
        <?php require ('../includes/pagesections/ads/Ad_top.php'); ?>
        <div class="divider"></div>
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab"><a class="green-text text-accent-4 orange-text text-accent-4" href="#Guns">Guns</a></li>
                    <li class="tab"><a class="green-text text-accent-4" href="#Perks">Perks</a></li>
                    <li class="tab"><a class="green-text text-accent-4" href="#Killstreaks">Killstreaks</a></li>
                    <li class="tab"><a class="green-text text-accent-4" href="#Equipment">Equipment</a></li>
                </ul>
            </div>
            <br><br>
            <div ng-hide='myCtrl.InitialLoad'>
                <div id="Guns" class="col s12"><?php require ('includes/pagesections/info/guns.php'); ?></div>
                <div id="Perks" class="col s12"><?php require ('includes/pagesections/info/perks.php'); ?></div>
                <div id="Killstreaks" class="col s12"><?php require ('includes/pagesections/info/killstreaks.php'); ?></div>
                <div id="Equipment" class="col s12"><?php require ('includes/pagesections/info/equipment.php'); ?></div>
            </div>
            <div ng-show='myCtrl.InitialLoad' class="text-center"><i class="fa fa-refresh fa-spin fa-3x"></i></div>
        </div>
    </div>
</div>
<?php require ('../includes/pagesections/ads/Ad_bottom.php'); ?>
<?php require_once ('includes/pagesections/_bottom.php'); ?>
