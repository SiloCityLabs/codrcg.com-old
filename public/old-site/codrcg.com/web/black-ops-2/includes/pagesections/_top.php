<?php
    $seoArr['title'] = (!empty($seoArr['title']) ? $seoArr['title'] : BO2_Title);
    $seoArr['image'] = (!empty($seoArr['image']) ? $seoArr['image'] : BO2_Image);
    $seoArr['desc'] = (!empty($seoArr['desc']) ? $seoArr['desc'] : '');
    $seoArr['keywords'] = (!empty($seoArr['keywords']) ? $seoArr['keywords'] : '');
    $seoArr['url'] = (!empty($seoArr['url']) ? $seoArr['url'] : 'https://'.SYS_URL_PATH.'/'.BO2_Folder);
?>

<!DOCTYPE html>
<html ng-app='MainApp' class="ng-scope" ng-controller='MainCtrl'>
<head>
    <title><?php echo $seoArr['title']; ?></title>
    <meta name="description" content="<?php echo $seoArr['desc']; ?>">
    <meta name="keywords" content="<?php echo $seoArr['keywords']; ?>">
    <?php echo COD_setSeoData ($seoArr); ?>
    <?php
        require ('../includes/pagesections/schema.php');
        require ('includes/pagesections/head.php');
        echo (isset($seoArr['breadcrumb']) ? $seoArr['breadcrumb'] : '');
    ?>
</head>
<body>
    <?php require ('includes/pagesections/menu.php'); ?>
    <div id="Wrapper" class="z-depth-2 topBorder">
        <?php errorblock (); ?>