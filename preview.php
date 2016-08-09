<?php
	$total = unserialize(base64_decode(isset($_POST["total"]) ? $_POST["total"] : ""));
	$first_key = key($total);
	$banner_name = isset($_POST["name-banner"]) ? $_POST["name-banner"] : "" ;
	$concepts = isset($_POST["concepts"]) ? $_POST["concepts"] : "" ;
    /*echo "<pre>";
    print_r(unserialize(base64_decode($str_var)));
    echo "</pre>";
    echo "<pre>";
    print_r($concepts);
    echo "</pre>";*/
    $path_folder = "tree/" . $first_key;
    function extract_numbers($string)
    {
       preg_match_all('/([\d]+)/', $string, $match);
       return $match[0];
    }
    // Start the buffering //
    ob_start();
?>
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title><?php echo $banner_name ?></title>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,700' rel='stylesheet' type='text/css'>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html,
        body {
            font-size: 14px;
            font-family: "Roboto", sans-serif;
        }
        
        #container {
            padding: 0 20px;
        }
        
        .page-title {
            text-align: center;
            font-weight: 300;
            font-size: 32px;
            padding: 20px 0;
        }
        
        .section-title {
            font-weight: 300;
            font-size: 28px;
            padding: 10px 0;
        }
        
        a {
            transition: all 0.5s linear;
            text-decoration: none;
            margin-right: 5px;
        }
        
        .button {
            font-weight: 300;
            text-align: center;
            display: inline-block;
            padding: 10px 20px;
            border: solid 1px #D4D4D4;
            border-radius: 5px;
            color: #CCCCCC;
            font-size: 18px;
            background: #FFFFFF;
            cursor: pointer;
            margin-bottom: 3px;
        }
        
        .button:hover,
        .button:active {
            color: #363636;
        }
        
        .button:active {
            box-shadow: inset 0 0 3px #DDDDDD;
        }
        
        .fixed-corner {
            position: fixed;
            bottom: 10px;
            right: 10px;
        }
        
        hr {
            border-top: solid 1px #DDDDDD;
            border-bottom: none;
            margin: 15px 0;
        }
        
        iframe {
            border: solid 1px #DDDDDD;
        }
        
        img {
            border: solid 1px #DDDDDD;
        }
        
        h2 .button {
            padding: 5px 10px;
            vertical-align: bottom;
        }
        
        #links strong {
            display: inline-block;
            min-width: 100px;
            margin-right: 10px;
        }

        /******* Updated 21/07/2016 *******/
        
        .wrap-iframe {
            -webkit-transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -ms-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            overflow: hidden;
            width: 100%;
            padding-top: 20px;
        }
        
        .hide {
            height: 0px !important;
            padding-top: 0;
        }
        
        #links h4 {
            margin: 20px 0;
        }
        
        .top-header {
            height: 104px;
            background: #000000;
            border-bottom: 5px solid #a1a1a1;
            padding: 29px 18px;
            position: relative;
        }
        
        .bottom-header {
            padding: 0 18px;
            background: #f2f2f2;
            border-bottom: 1px solid #cccccc;
        }
        
        .brand-logo {
            border: none;
            float: left;
            height: 100%;
            width: auto;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            -webkit-transform: translateY(-50%);
        }
        
        .dp-logo {
            float: right;
            border: none;
            height: 100%;
            width: auto;
        }
        
        .main ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .main ul li {
            border-bottom: 1px solid #cccccc;
            padding: 20px 0;
            display: inline-block;
            width: 100%;
        }
        
        .main ul li label {
            font-size: 28px;
            font-weight: 300;
            margin-right: 8px;
            float: left;
        }
        
        .main ul li button {
            padding: 5px 10px;
            font-weight: 300;
            text-align: center;
            display: inline-block;
            border: solid 1px #D4D4D4;
            border-radius: 5px;
            color: #CCCCCC;
            font-size: 18px;
            background: #FFFFFF;
            cursor: pointer;
            float: left;
            margin-right: 11px;
            min-width: 67px;
        }

    </style>
</head>

<body>
    <div id="container">
        <header>
            <div class="top-header">
                <img class="brand-logo" src="images/brand.png" alt="">
                <img class="dp-logo" src="images/dp-logo.jpg" alt="">
            </div>
            <div class="bottom-header">
                <h1 class="page-title"><?php echo $banner_name ?></h1>
                <section id="links">
                    <?php 
                        foreach ($total[$first_key] as $key => $concept) {
                            if(is_array($concept) && !empty($concept)) {
                                echo "<h4>$key</h4>" ;
                                foreach ($concept as $key2 => $banner) {
                                     if(is_numeric($key2)) {
                                        echo "<a href='#$key-$key2' class='button'>$banner</a>\n";
                                     }else {
                                        echo "<a href='#$key-$key2' class='button'>$key2</a>\n";
                                     }
                                }
                                echo "<br><br>";
                            }
                        }
                    ?>
                </section>
            </div>
        </header>
        <div class="main">
            <section id='Banners HTML5'>
                <ul>
                    <?php 
                        foreach ($total[$first_key] as $key => $concept) {
                            if(is_array($concept) && !empty($concept)) {
                                echo "<section id='$key'>" ;
                                foreach ($concept as $key2 => $banner) {
                                    if(is_numeric($key2)) {
                                ?>
                                        <li>
                                            <div class="title">
                                                <label id="<?php echo $key."-".$key2 ?>"><?php echo $banner; ?></label>
                                                <button class=" btn-show-hide" onclick="showBanner('wrap-iframe-<?php echo $key."-".$key2 ?>',this)">Open</button>
                                                <button onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</button>
                                            </div>
                                            <?php 
                                            $dimention = extract_numbers($banner);
                                            $arrayStaicImageBanner = array("jpg","gif","png");
                                            if(in_array(get_type_static_banner($banner),$arrayStaicImageBanner)) {
                                            ?>
                                            <div class="wrap-iframe hide" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px">
                                            <img id="i<?php echo $key."-".$key2 ?>" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" src="<?php echo $key."/".$banner ?>" alt="">
                                            </div>
                                            <?php 
                                                } else { ?>
                                                    <div class="wrap-iframe hide" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px">
                                                        <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" data-src="<?php echo $key."/".$banner ?>" src=""></iframe>
                                                    </div>
                                                <?php }
                                            ?>
                                                
                                        </li>
                                <?php
                                    } else {
                                        ?>
                                        <li>
                                            <div class="title">
                                                <label id="<?php echo $key."-".$key2 ?>"><?php echo $key2; ?></label>
                                                <button class=" btn-show-hide" onclick="showBanner('wrap-iframe-<?php echo $key."-".$key2 ?>',this)">Open</button>
                                                <button onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</button>
                                            </div>
                                            <?php $dimention = extract_numbers($key2); ?>
                                                <div class="wrap-iframe hide" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px">
                                                    <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" data-src="<?php echo $key."/".$key2."/".$banner[0] ?>" src=""></iframe>
                                                </div>
                                        </li>
                                        <?php
                                    }
                                }
                                echo "</section>";
                            }
                        }
                    ?>
                </ul>
            </section>
        </div>
        
    </div>
    <a class="button fixed-corner" href="#">Top</a>
    <script src="jquery-3.1.0.min.js" type="text/javascript"></script>
    <script type="application/javascript">
    function reloadIframe(id) {
        //Open banner when it's closed
        if($('#' +id.substring(1, id.length)).next().html() == 'Open') {
            $('#' +id.substring(1, id.length)).next().click();
        }else {
            var src = $("#" + id).attr("data-src");
            document.getElementById(id).src = src;
        }
    }


    $("#links a").click(function(e) {
        hideAllBanners();
        labelID = $(this).attr('href');
        $(labelID).next().html('Close');
        bannerId = '#wrap-iframe-' + labelID.substring(1, labelID.length); 
        $(bannerId).removeClass("hide");
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(bannerId).offset().top - 50
            }, 300);
            reloadIframe('i' + labelID.substring(1, labelID.length));
        }, 500);
    });


    function showBanner(bannerId, e) {

        //Toggle button
        self = e;
        bannerId = '#' + bannerId;
        console.log($(self));

        if ($(self).html() == 'Open') {
            hideAllBanners();

            //Show current banner
            $(bannerId).removeClass("hide");

            //Change button to Close
            $(self).html('Close');

            //Scroll to banner
            scrollToBanner(bannerId) ;
        } else {
            $(bannerId).addClass("hide");
            $(self).html('Open');
        }
    }

    function hideAllBanners() {

        //Remove all src iframe
        $("iframe").attr("src","");

        //Hide all banner
        listBanners = document.getElementsByClassName('wrap-iframe');
        for (var i = 0; i < listBanners.length; i++) {
            listBanners[i].className = "wrap-iframe hide";
        }

        //Reset all button to Open
        listButtons = document.getElementsByClassName('btn-show-hide');
        for (var i = 0; i < listBanners.length; i++) {
            listButtons[i].innerHTML = 'Open';
        }
    }

    function scrollToBanner(bannerId) {
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: $(bannerId).offset().top - 50
            }, 300);
            reloadIframe($(bannerId).find('iframe').attr('id'));
        }, 500);
    }
    </script>
</body>

</html>
<?php

function get_type_static_banner($banner) {
    return substr($banner,-3);
}

file_put_contents($banner_name .".html", ob_get_contents());

?>