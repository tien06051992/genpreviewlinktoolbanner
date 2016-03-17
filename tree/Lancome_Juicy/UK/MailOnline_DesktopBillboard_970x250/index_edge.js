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
                            rect: ['0px', '0px', '970px', '250px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'video',
                                display: 'block',
                                volume: '0',
                                type: 'video',
                                tag: 'video',
                                rect: ['0px', '0px', '970px', '250', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '970px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg_loader.jpg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'bg_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '0', '970px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg_endcard.jpg",'0px','0px']
                        },
                        {
                            id: 'packshot',
                            display: 'none',
                            type: 'image',
                            rect: ['201px', '67px', '110px', '160px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"packshot.png",'0px','0px']
                        },
                        {
                            id: 'thenewfragrance',
                            display: 'none',
                            type: 'image',
                            rect: ['180px', '219px', '142px', '10px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"thenewfragrance.png",'0px','0px']
                        },
                        {
                            id: 'logo_dior_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['193px', '8px', '113px', '45px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"logo_dior_endcard.png",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'replay_group',
                            type: 'group',
                            rect: ['-51px', '0px', '0px', '0px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'replay_button',
                                display: 'none',
                                type: 'image',
                                rect: ['996px', 'auto', '18px', '20px', 'auto', '-25px'],
                                fill: ["rgba(0,0,0,0)",im+"replay.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'mute_group',
                            type: 'group',
                            rect: ['-51px', '0px', '0', '0', 'auto', 'auto'],
                            c: [
                            {
                                id: 'mute_button',
                                symbolName: 'mute_button',
                                display: 'block',
                                type: 'rect',
                                rect: ['991px', 'auto', '43', '26', 'auto', '-32px'],
                                overflow: 'visible'
                            }]
                        },
                        {
                            id: 'CTA',
                            display: 'block',
                            type: 'group',
                            rect: ['650px', '198px', '225px', '29px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            c: [
                            {
                                id: '_cta',
                                type: 'image',
                                rect: ['0px', '0px', '218px', '29px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"cta.png",'0px','0px']
                            }]
                        },
                        {
                            id: 'loader',
                            type: 'image',
                            rect: ['481px', '116px', '35px', '5px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"loader.gif",'0px','0px']
                        },
                        {
                            id: 'logo_poison_endcard',
                            display: 'none',
                            type: 'image',
                            rect: ['650px', '27px', '216px', '140px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_poison.png",'0px','0px']
                        },
                        {
                            id: 'logo_poison_video',
                            display: 'block',
                            type: 'image',
                            rect: ['42px', '94px', '157px', '101px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_poison_video.png",'0px','0px']
                        },
                        {
                            id: 'logo_dior_video',
                            display: 'block',
                            type: 'image',
                            rect: ['61px', '40px', '119px', '48px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"logo_dior_video.png",'0px','0px']
                        },
                        {
                            id: 'click_to_play_poster',
                            symbolName: 'click_to_play_poster',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '100%', '100%', 'auto', 'auto']
                        },
                        {
                            id: 'shadow',
                            type: 'image',
                            rect: ['0px', '236px', '970px', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"shadow.jpg",'0px','0px']
                        },
                        {
                            id: 'youtube_play_pause',
                            symbolName: 'youtube_play_pause',
                            display: 'block',
                            type: 'rect',
                            rect: ['912px', '4px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '970px', '250px', 'auto', 'auto'],
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
                        "endshot": 19051,
                        "frozen": 23000
                    },
                    data: [
                        [
                            "eid271",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${CTA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid259",
                            "top",
                            10218,
                            0,
                            "easeInOutQuad",
                            "${logo_dior_video}",
                            '40px',
                            '40px'
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
                            "eid289",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${youtube_play_pause}",
                            'block',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            19024,
                            0,
                            "easeInOutQuad",
                            "${youtube_play_pause}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            15333,
                            0,
                            "easeInOutQuad",
                            "${logo_dior_endcard}",
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
                            "eid250",
                            "display",
                            0,
                            0,
                            "linear",
                            "${logo_poison_endcard}",
                            'none',
                            'none'
                        ],
                        [
                            "eid237",
                            "display",
                            15800,
                            0,
                            "easeInOutQuad",
                            "${logo_poison_endcard}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "opacity",
                            14563,
                            582,
                            "easeInOutQuad",
                            "${logo_poison_video}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "display",
                            19051,
                            0,
                            "linear",
                            "${mute_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            19051,
                            0,
                            "easeInOutQuad",
                            "${video}",
                            'block',
                            'none'
                        ],
                        [
                            "eid257",
                            "display",
                            15145,
                            0,
                            "easeInOutQuad",
                            "${logo_poison_video}",
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
                            "eid168",
                            "opacity",
                            14417,
                            582,
                            "easeInOutQuad",
                            "${logo_dior_video}",
                            '1',
                            '0'
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
                            "eid105",
                            "display",
                            19051,
                            0,
                            "linear",
                            "${replay_button}",
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
                            "eid253",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${logo_poison_endcard}",
                            '1',
                            '1'
                        ],
                        [
                            "eid223",
                            "opacity",
                            15800,
                            287,
                            "easeInOutQuad",
                            "${logo_poison_endcard}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "display",
                            14999,
                            0,
                            "easeInOutQuad",
                            "${logo_dior_video}",
                            'block',
                            'none'
                        ],
                        [
                            "eid220",
                            "opacity",
                            15620,
                            287,
                            "easeInOutQuad",
                            "${thenewfragrance}",
                            '0',
                            '1'
                        ],
                        [
                            "eid212",
                            "display",
                            15620,
                            0,
                            "easeInOutQuad",
                            "${thenewfragrance}",
                            'none',
                            'block'
                        ],
                        [
                            "eid219",
                            "opacity",
                            15333,
                            287,
                            "easeInOutQuad",
                            "${logo_dior_endcard}",
                            '0',
                            '1'
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
                            "eid195",
                            "display",
                            15513,
                            0,
                            "linear",
                            "${bg_endcard}",
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
                            rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'sound-on',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/sound-on.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                            overflow: 'visible',
                            id: 'sound-off',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/sound-off.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '18px']
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
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            id: 'poster',
                            opacity: '0',
                            type: 'image',
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
            "cursor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_cursor_expand',
                            type: 'image',
                            rect: ['0px', '-1px', '12px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cursor_expand.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '10px']
                        }
                    }
                },
                timeline: {
                    duration: 796,
                    autoPlay: true,
                    labels: {
                        "loop": 0
                    },
                    data: [
                        [
                            "eid280",
                            "top",
                            228,
                            284,
                            "easeInOutQuad",
                            "${_cursor_expand}",
                            '-1px',
                            '2px'
                        ],
                        [
                            "eid281",
                            "top",
                            513,
                            283,
                            "easeInOutQuad",
                            "${_cursor_expand}",
                            '2px',
                            '-1px'
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
                            rect: ['4px', '4px', '12px', '14px', 'auto', 'auto'],
                            id: 'play_big',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/play_big.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '4px', '12px', '14px', 'auto', 'auto'],
                            id: 'pause_big',
                            type: 'image',
                            display: 'none',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-89045761");
