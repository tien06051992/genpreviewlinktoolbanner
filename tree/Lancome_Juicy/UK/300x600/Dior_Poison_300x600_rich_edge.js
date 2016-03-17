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
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'video',
                                display: 'block',
                                volume: '0',
                                type: 'video',
                                tag: 'video',
                                rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                                autoplay: 'autoplay',
                                opacity: '1',
                                source: [vid+"video.webm",vid+"video.mp4"],
                                preload: 'metadata'
                            }]
                        },
                        {
                            id: 'bg_loader',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg_loader.jpg",'0px','0px']
                        },
                        {
                            id: 'bg_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg_endcard.jpg",'0px','0px']
                        },
                        {
                            id: 'packshot',
                            display: 'none',
                            type: 'image',
                            rect: ['176px', '373px', '124px', '177px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"packshot.png",'0px','0px']
                        },
                        {
                            id: 'logo_dior_endcard',
                            type: 'image',
                            rect: ['194px', '14px', '90px', '36px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_dior_endcard.png",'0px','0px']
                        },
                        {
                            id: 'logo_poison_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['42px', '305px', '219px', '141px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo_poison.png",'0px','0px']
                        },
                        {
                            id: 'replay_group',
                            type: 'group',
                            rect: ['274px', '-1px', '0px', '0px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'replay_button',
                                display: 'none',
                                type: 'image',
                                rect: ['7px', 'auto', '12px', '14px', 'auto', '-21px'],
                                fill: ["rgba(0,0,0,0)",im+"replay.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'mute_group',
                            type: 'group',
                            rect: ['35px', '2px', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                id: 'mute_button',
                                symbolName: 'mute_button',
                                display: 'block',
                                type: 'rect',
                                rect: ['1px', 'auto', '43', '26', 'auto', '-29px'],
                                overflow: 'visible'
                            }]
                        },
                        {
                            id: 'youtube_play_pause',
                            symbolName: 'youtube_play_pause',
                            display: 'block',
                            type: 'rect',
                            rect: ['13px', '5px', '20px', '20px', 'auto', 'auto'],
                            opacity: '0.96'
                        },
                        {
                            id: 'loader',
                            type: 'image',
                            rect: ['134px', '287px', '35px', '5px', 'auto', 'auto'],
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
                            rect: ['0', '587px', '300px', '13px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gradient.jpg",'0px','0px']
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['40px', '543px', '221px', '31px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '600px', 'auto', 'auto'],
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
                            "eid115",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${mute_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            19000,
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
                            "eid285",
                            "display",
                            0,
                            0,
                            "linear",
                            "${youtube_play_pause}",
                            'block',
                            'block'
                        ],
                        [
                            "eid287",
                            "display",
                            19000,
                            0,
                            "linear",
                            "${youtube_play_pause}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            19000,
                            0,
                            "easeInOutQuad",
                            "${video}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${mute_group}",
                            'none',
                            'block'
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
                            [ "eid132", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${click_to_play_poster}', [] ] ],
                            [ "eid286", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${youtube_play_pause}', ['pause'] ] ]
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
                            rect: ['4px', '3px', '16px', '12px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sound-on',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/sound-on.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '3px', '16px', '12px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'sound-off',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sound-off.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '12px']
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
            },
            "youtube_play_pause": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '20px', '20px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['4px', '4px', '8px', '9px', 'auto', 'auto'],
                            id: 'play_big',
                            fill: ['rgba(0,0,0,0)', 'images/play_big.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['4px', '4px', '8px', '9px', 'auto', 'auto'],
                            id: 'pause_big',
                            fill: ['rgba(0,0,0,0)', 'images/pause_big.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '20px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "play": 0,
                        "pause": 2000
                    },
                    data: [
                        [
                            "eid276",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${play_big}",
                            'block',
                            'block'
                        ],
                        [
                            "eid275",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${play_big}",
                            'block',
                            'none'
                        ],
                        [
                            "eid279",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${pause_big}",
                            'none',
                            'none'
                        ],
                        [
                            "eid278",
                            "display",
                            2000,
                            0,
                            "easeInOutQuad",
                            "${pause_big}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Dior_Poison_300x600_rich_edgeActions.js");
})("EDGE-89045761");
