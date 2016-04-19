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
            border: none;
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
        }

    </style>
    <script type="application/javascript">
        function reloadIframe(id) {
            var src = document.getElementById(id).src;
            document.getElementById(id).src = src;
        }
    </script>
</head>

<body>
    <div id="container">
        <h1 class="page-title"><?php echo $banner_name ?></h1>
        <section id="links">
            <h2 class="section-title">Quick links</h2>
            <?php 
              	foreach ($total[$first_key] as $key => $concept) {
	                if(is_array($concept) && !empty($concept)) {
	                  	echo "<strong>$key</strong>" ;
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
        <hr>
        <?php 
            foreach ($total[$first_key] as $key => $concept) {
                if(is_array($concept) && !empty($concept)) {
                    echo "<section id='$key'>" ;
                    foreach ($concept as $key2 => $banner) {
                        if(is_numeric($key2)) {
                    ?>
                            <h2 class="section-title" id="<?php echo $key."-".$key2 ?>"><?php echo $banner; ?>
                                <a class="button" onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</a>
                            </h2>
                            <?php 
                                $dimention = extract_numbers($banner);
                                $arrayStaicImageBanner = array("jpg","gif","png");
                                if(in_array(get_type_static_banner($banner),$arrayStaicImageBanner)) {
                            ?>
                            <img id="i<?php echo $key."-".$key2 ?>" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" src="<?php echo $key."/".$banner ?>" alt="">
                            <?php 
                                } else { ?>
                                    <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" src="<?php echo $key."/".$banner ?>"></iframe>
                                <?php }
                            ?>
                            <hr>
                    <?php
                        } else {
                            ?>
                            <h2 class="section-title" id="<?php echo $key."-".$key2 ?>"><?php echo $key2 ?>
                                <a class="button" onclick="reloadIframe('i<?php echo $key."-".$key2 ?>')">Reload</a>
                            </h2>
                            <?php $dimention = extract_numbers($key2); ?>
                            <iframe id="i<?php echo $key."-".$key2 ?>" scrolling="no" width="<?php echo $dimention[0]+2; ?>" height="<?php echo $dimention[1]+2; ?>" src="<?php echo $key."/".$key2."/".$banner[0] ?>"></iframe>
                            <hr>
                            <?php
                        }
                    }
                    echo "</section>";
                }
            }
        ?>
    </div>
    <a class="button fixed-corner" href="#">Top</a>
</body>

</html>
<?php

function get_type_static_banner($banner) {
    return substr($banner,-3);
}

file_put_contents($banner_name .".html", ob_get_contents());

?>