/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"platform.js",
            js+"rich-controller.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'video_group',
                            type: 'group',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'video',
                                display: 'block',
                                volume: '0',
                                type: 'video',
                                tag: 'video',
                                rect: ['0px', '0px', '300px', '250', 'auto', 'auto'],
                                autoplay: 'autoplay',
                                opacity: '1',
                                source: [vid+"video.mp4"],
                                preload: 'metadata'
                            }]
                        },
                        {
                            id: 'bg_loader',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg_loader.jpg",'0px','0px']
                        },
                        {
                            id: 'bg_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '300px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg_endcard.jpg",'0px','0px']
                        },
                        {
                            id: 'packshot',
                            display: 'none',
                            type: 'image',
                            rect: ['16px', '63px', '107px', '152px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"packshot.png",'0px','0px']
                        },
                        {
                            id: 'logo_dior_endcard',
                            type: 'image',
                            rect: ['21px', '14px', '84px', '34px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_dior_endcard.png",'0px','0px']
                        },
                        {
                            id: 'logo_poison_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['158px', '121px', '116px', '75px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo_poison.png",'0px','0px']
                        },
                        {
                            id: 'replay_group',
                            type: 'group',
                            rect: ['0px', '0px', '0px', '0px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'replay_button',
                                display: 'none',
                                type: 'image',
                                rect: ['282px', 'auto', '12px', '14px', 'auto', '-19px'],
                                fill: ["rgba(0,0,0,0)",im+"replay.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'mute_group',
                            type: 'group',
                            rect: ['0px', '0px', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                id: 'mute_button',
                                symbolName: 'mute_button',
                                display: 'block',
                                type: 'rect',
                                rect: ['276px', 'auto', '43', '26', 'auto', '-29px'],
                                overflow: 'visible'
                            }]
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['41px', '201px', '221px', '31px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                        },
                        {
                            id: 'loader',
                            type: 'image',
                            rect: ['134px', '120px', '35px', '5px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"loader.gif",'0px','0px']
                        },
                        {
                            id: 'click_to_play_poster',
                            symbolName: 'click_to_play_poster',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto']
                        },
                        {
                            id: 'gradient',
                            type: 'image',
                            rect: ['0', '237px', '300px', '13px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gradient.jpg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 23000,
                    autoPlay: false,
                    labels: {
                        "endshot": 21000,
                        "frozen": 23000
                    },
                    data: [
                        [
                            "eid115",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${mute_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "display",
                            501,
                            0,
                            "linear",
                            "${bg_loader}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            15513,
                            0,
                            "linear",
                            "${bg_endcard}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            15467,
                            0,
                            "easeInOutQuad",
                            "${packshot}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${click_to_play_poster}",
                            'none',
                            'none'
                        ],
                        [
                            "eid259",
                            "opacity",
                            16000,
                            1000,
                            "easeInOutQuad",
                            "${logo_poison_endcard}",
                            '0',
                            '1'
                        ],
                        [
                            "eid105",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${replay_button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "opacity",
                            15513,
                            1000,
                            "linear",
                            "${bg_endcard}",
                            '0',
                            '1'
                        ],
                        [
                            "eid265",
                            "width",
                            0,
                            0,
                            "linear",
                            "${video}",
                            '300px',
                            '300px'
                        ],
                        [
                            "eid221",
                            "opacity",
                            15467,
                            287,
                            "easeInOutQuad",
                            "${packshot}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "display",
                            18067,
                            0,
                            "easeInOutQuad",
                            "${video}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${bg_loader}",
                            '1',
                            '0'
                        ],
                        [
                            "eid254",
                            "display",
                            16000,
                            0,
                            "easeInOutQuad",
                            "${logo_poison_endcard}",
                            'none',
                            'block'
                        ],
                            [ "eid132", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${click_to_play_poster}', [] ] ]
                    ]
                }
            },
            "mute_button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'sound-on',
                            rect: ['4px', '3px', '16px', '12px', 'auto', 'auto'],
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/sound-on.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            overflow: 'visible',
                            id: 'sound-off',
                            rect: ['4px', '3px', '16px', '12px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sound-off.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "on": 0,
                        "off": 2000
                    },
                    data: [
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sound-on}",
                            'block',
                            'block'
                        ],
                        [
                            "eid111",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${sound-on}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sound-off}",
                            'none',
                            'none'
                        ],
                        [
                            "eid112",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${sound-off}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "click_to_play_poster": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'poster',
                            opacity: '0',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/click_to_play_poster.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '100%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid127",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${poster}",
                            '0',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            497,
                            0,
                            "linear",
                            "${poster}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${poster}",
                            '1',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Dior_Poison_300x250_rich_edgeActions.js");
})("EDGE-89045761");
