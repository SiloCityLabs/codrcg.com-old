<?php
    $seoArr['title'] = (!empty($seoArr['title']) ? $seoArr['title'] : SITE_NAME);
    $seoArr['image'] = (!empty($seoArr['image']) ? $seoArr['image'] : SITE_Image);
    $seoArr['desc'] = (!empty($seoArr['desc']) ? $seoArr['desc'] : '');
    $seoArr['keywords'] = (!empty($seoArr['keywords']) ? $seoArr['keywords'] : '');
    $seoArr['url'] = (!empty($seoArr['url']) ? $seoArr['url'] : 'http://'.SYS_URL_PATH.'/');
?>

<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $seoArr['title']; ?></title>
        <meta name="description" content="<?php echo $seoArr['desc']; ?>">
        <meta name="keywords" content="<?php echo $seoArr['keywords']; ?>">
        <?php
            echo COD_setSeoData ($seoArr);
            require ('includes/pagesections/schema.php');
            require ('includes/pagesections/head.php');
            echo (isset($seoArr['breadcrumb']) ? $seoArr['breadcrumb'] : '');
        ?>
    </head>
    <body>
        <?php require ('includes/pagesections/menu.php'); ?>
        <div id="Wrapper" class="section z-depth-2 topBorder-cod">
            <?php errorblock (); ?>