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
            padding-top: 1px;
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

        .waves-effect {
        position: relative;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        vertical-align: middle;
        z-index: 1;
        will-change: opacity, transform;
        transition: all .3s ease-out;
    }
    
    .btn {
        text-decoration: none;
        color: #fff;
        background-color: #26a69a;
        text-align: center;
        letter-spacing: .5px;
        transition: .2s ease-out;
        cursor: pointer;
        border: none;
        border-radius: 2px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        outline: 0;
        padding: 0 2rem;
        text-transform: uppercase;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    }
    
    .btn:hover {
        background-color: #2bbbad;
        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
        outline: 0;
    }
    
    .bg-red {
        background-color: #F44336;
    }
    
    .bg-red:hover {
        background-color: #fd1c0c;
    }
    
    .controll-main {
        padding: 10px 0;
    }
    .title {
        display: inherit;
    }
    .list-country ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: inline-flex;
        width: 100%;
    }
    
    .list-country ul li {
        width: 100%;
        text-align: center;
        border-right: 1px solid #cdcdcd;
        border-left: 1px solid #cdcdcd;
    }
    
    .list-country ul li a {
        font-size: 20px;
        color: #000;
        padding: 10px 0;
        display: block;
        margin: 0;
    }
    
    .list-country ul li.active a {
        background: #000;
        color: #fff;
    }
    
    .arrow_box {
        position: relative;
        background: #000;
        border: 0px solid #000000;
    }
    
    .arrow_box {
        position: relative;
        background: #000000;
    }
    
    .arrow_box:after {
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-color: rgba(0, 0, 0, 0);
        border-top-color: #000000;
        border-width: 10px;
        margin-left: -10px;
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
            <div class="list-country">
                <ul>
                    <li class="active"><a class="arrow_box" href="../Argentina/Argentina.html">Argentina</a></li>
                    <li><a href="../Mexico/Mexico.html">Mexico</a></li>
                    <li><a href="../Middle_East/Middle_East_v3.html">Middle_East</a></li>
                    <li><a href="../Spain/Spain_v3.html">Spain</a></li>
                    <li><a href="../Suisse/Suisse_v3.html">Suisse</a></li>
                    <li><a href="../UK/UK_v3.html">UK</a></li>
                </ul>
            </div>
            <!-- <div class="bottom-header">
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
            </div> -->
        </header>
        <div class="main">
            <div class="controll-main">
                <button onclick="showAllBanner()" class="waves-effect waves-light btn">Show All Banners</button>
                <button onclick="hideAllBanners()" class="waves-effect waves-light btn bg-red">Close All Banners</button>
            </div>
            <section id='Banners HTML5'>
                <ul>
                    <?php
                        $fourfirstItem = 0;
                        foreach ($total[$first_key] as $key => $concept) {
                            if(is_array($concept) && !empty($concept)) {
                                echo "<section id='$key'>" ;
                                foreach ($concept as $key2 => $banner) {
                                    if(is_numeric($key2)) {
                                ?>
                                        <li>
                                            <div class="title">
                                                <label id="<?php echo $key."-".$key2 ?>"><?php echo $banner; ?></label>
                                                <button class=" btn-show-hide" onclick="showBanner('wrap-iframe-<?php echo $key."-".$key2 ?>',this)"><?php if($fourfirstItem > 3){ echo "Open";}else { echo "Close"; } ?></button>
                                                <button onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</button>
                                            </div>
                                            <?php
                                            $dimention = extract_numbers($banner);
                                            $arrayStaicImageBanner = array("jpg","gif","png");
                                            if(in_array(get_type_static_banner($banner),$arrayStaicImageBanner)) {
                                            ?>
                                            <div class="wrap-iframe <?php if($fourfirstItem > 3) {echo 'hide';} else {echo '';} ?>" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px;width:<?php echo $dimention[0]+22; ?>px">
                                            <img id="i<?php echo $key."-".$key2 ?>" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" data-src="<?php echo $key."/".$banner ?>" src="<?php if($fourfirstItem > 3) {echo  ''; } else {echo $key."/".$banner;} ?>" alt="">
                                            </div>
                                            <?php 
                                                } else { ?>
                                                    <div class="wrap-iframe <?php if($fourfirstItem > 3) {echo 'hide';} else {echo '';} ?>" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px;width:<?php echo $dimention[0]+22; ?>px">
                                                        <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" data-src="<?php echo $key."/".$banner ?>" src="<?php if($fourfirstItem > 3) {echo  ''; } else {echo $key."/".$banner;} ?>"></iframe>
                                                    </div>
                                                <?php }
                                            ?>
                                                
                                        </li>
                                <?php
                                    $fourfirstItem ++;
                                    } else {
                                        ?>
                                        <li>
                                            <div class="title">
                                                <label id="<?php echo $key."-".$key2 ?>"><?php echo $key2; ?></label>
                                                <button class=" btn-show-hide" onclick="showBanner('wrap-iframe-<?php echo $key."-".$key2 ?>',this)"><?php if($fourfirstItem > 3){ echo "Open";}else { echo "Close"; } ?></button>
                                                <button onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</button>
                                            </div>
                                            <?php $dimention = extract_numbers($key2); ?>
                                                <div class="wrap-iframe <?php if($fourfirstItem > 3) {echo 'hide';} else {echo '';} ?>" id="wrap-iframe-<?php echo $key."-".$key2 ?>" style="height:<?php echo $dimention[1]+22; ?>px;width:<?php echo $dimention[0]+22; ?>px">
                                                    <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" data-src="<?php echo $key."/".$key2."/".$banner[0] ?>" src="<?php if($fourfirstItem > 3) {echo  ''; } else {echo $key."/".$key2."/".$banner[0];} ?>"></iframe>
                                                </div>
                                        </li>
                                        <?php
                                        $fourfirstItem ++;
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
        console.log(id);
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
            $(bannerId).children().attr('src', '');
            $(self).html('Open');
        }
    }

    function showAllBanner() {
        //Change all button to Close mode
        $(".btn-show-hide").html("Close");
        //Show all banner
        $(".wrap-iframe").removeClass("hide");
        $(".wrap-iframe").children().each(function() {
            $(this).attr("src", $(this).attr("data-src"));
        });
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
            console.log(bannerId);
            reloadIframe($(bannerId).children().attr('id'));
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