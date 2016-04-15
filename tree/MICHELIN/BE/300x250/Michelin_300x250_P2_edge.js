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
                            id: 'BG_White',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '248px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgba(0,0,0,0.50)","solid"]
                        },
                        {
                            id: 'BG_Michelin',
                            type: 'image',
                            rect: ['0', '0px', '300px', '250px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg_michelin.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '248px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(0,0,0,0.50)","solid"]
                        },
                        {
                            id: 'WordingEnd',
                            symbolName: 'WordingEnd',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '300', '250', 'auto', 'auto']
                        },
                        {
                            id: 'vacation',
                            symbolName: 'vacation',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '300', '250', 'auto', 'auto']
                        },
                        {
                            id: 'weekend',
                            symbolName: 'weekend',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '300', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Wording_Start',
                            symbolName: 'Wording_Start',
                            type: 'rect',
                            rect: ['0', '0', '300', '250', 'auto', 'auto']
                        },
                        {
                            id: 'Action',
                            type: 'rect',
                            rect: ['0px', '0px', '300px', '250px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [1,"rgba(0, 0, 0, 0.498039)","none"]
                        },
                        {
                            id: 'notices',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '300', '250px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '298px', '248px', 'auto', 'auto'],
                                fill: ["rgba(218,218,218,1.00)"],
                                stroke: [1,"rgba(0, 0, 0, 0.498039)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['9px', '29px', '283px', '207px', 'auto', 'auto'],
                                overflow: 'auto',
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(127, 119, 119);\">(1) Berekend volgens de gemiddelde afstand naar de kust voor de Benelux-landen, nl. 256km heen en terug van thuis naar Noordzee. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(2) Berekend volgens de gemiddelde afstand naar Parijs voor de Benelux-landen, nl. 854km heen en terug van Tilburg naar Parijs. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(3) Resultaten uit tests uitgevoerd door DEKRA TEST CENTER op aanvraag van Michelin, in 2014 en 2015 afhankelijk van de gamma’s, op het verschil tussen de gemiddelde kilometers van de MICHELIN gamma’s (MICHELIN Energy Saver +, MICHELIN Pilot Sport 4, MICHELIN Primacy 3, MICHELIN Pilot Super Sport, MICHELIN CrossClimate, MICHELIN Latitude Sport 3) en de gemiddelde kilometers van de gamma’s van de concurrenten: BRIDGESTONE (Ecopia EP150, Potenza S001, Turanza T001, Dueler H/P Sport), CONTINENTAL (ContiEcoContact 5, ContiSportContact 5, ContiPremiumContact 5, ContiSportContact 5P AO, ContiSportContact 5 SUV), DUNLOP (Sport BluResponse, Sport Maxx RT, SP QuattroMaxx), GOODYEAR (EfficientGrip Performance, Eagle F1 Asymmetric 2, Vector 4Seasons Gen-2, Eagle F1 Asymmetric SUV), PIRELLI (Cinturato P1 Verde Ecoimpact, P Zero, Cinturato P7 Ecoimpact, P Zero Silver, Cinturato All Season, P Zero Rosso), HANKOOK (Kinergy 4S, Ventus S1 Evo2 SUV), VREDESTEIN (Quatrac 5), NOKIAN (Weatherproof).</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 9px; color: rgb(127, 119, 119);\"></span></p>",
                                font: ['Arial, Helvetica, sans-serif', [9, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'information',
                            type: 'image',
                            rect: ['277px', '9px', '14px', '14px', 'auto', 'auto'],
                            clip: 'rect(-49px 64px 52px -99px)',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"information.png",'0px','0px']
                        },
                        {
                            id: 'close_info',
                            display: 'none',
                            type: 'image',
                            rect: ['279px', '11px', '10px', '10px', 'auto', 'auto'],
                            clip: 'rect(-49px 64px 52px -85px)',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"close_info.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300px', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10532,
                    autoPlay: true,
                    labels: {
                        "repeat": 0,
                        "final": 10532
                    },
                    data: [
                        [
                            "eid3",
                            "opacity",
                            2848,
                            554,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4",
                            "opacity",
                            9893,
                            639,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid2",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${notices}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${close_info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid240",
                            "display",
                            750,
                            0,
                            "linear",
                            "${vacation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid243",
                            "display",
                            6927,
                            0,
                            "linear",
                            "${vacation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            0,
                            0,
                            "linear",
                            "${weekend}",
                            'none',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            2914,
                            0,
                            "linear",
                            "${weekend}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            702,
                            0,
                            "linear",
                            "${WordingEnd}",
                            'none',
                            'none'
                        ],
                        [
                            "eid244",
                            "display",
                            9877,
                            0,
                            "linear",
                            "${WordingEnd}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Wording_Start": {
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
                            id: 'WordingStart1',
                            rect: ['-288px', '106px', '235px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordingStart2',
                            rect: ['-288px', '129px', '247px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart2.png', '0px', '0px']
                        },
                        {
                            rect: ['-288px', '133px', '107px', '15px', 'auto', 'auto'],
                            id: 'WordingStart3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "left",
                            114,
                            233,
                            "easeInOutCubic",
                            "${WordingStart2}",
                            '-288px',
                            '17px'
                        ],
                        [
                            "eid13",
                            "left",
                            2703,
                            297,
                            "easeInOutCubic",
                            "${WordingStart2}",
                            '17px',
                            '316px'
                        ],
                        [
                            "eid6",
                            "left",
                            233,
                            233,
                            "easeInOutCubic",
                            "${WordingStart3}",
                            '-288px',
                            '10px'
                        ],
                        [
                            "eid11",
                            "left",
                            2703,
                            297,
                            "easeInOutCubic",
                            "${WordingStart3}",
                            '10px',
                            '316px'
                        ],
                        [
                            "eid8",
                            "left",
                            0,
                            233,
                            "easeInOutCubic",
                            "${WordingStart1}",
                            '-288px',
                            '23px'
                        ],
                        [
                            "eid12",
                            "left",
                            2703,
                            297,
                            "easeInOutCubic",
                            "${WordingStart1}",
                            '23px',
                            '316px'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingStart3}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "weekend": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['17px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy53',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['51px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy52',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy51',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['117px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy50',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['149px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy49',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['183px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.57', '1.5']],
                            id: 'icoWeekendCopy48',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy47',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['250px', '21px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy46',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy45',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['51px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy44',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy43',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['117px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy42',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['149px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy41',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['183px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.57', '1.5']],
                            id: 'icoWeekendCopy40',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy39',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['250px', '54px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy38',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy37',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['51px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy36',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy33',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['117px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['149px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy31',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['183px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy30',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['217px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy29',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['250px', '90px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy28',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekend',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['51px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['117px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['151px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['184px', '125px', '26px', '29px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icoWeekendCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num30',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num30.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num29',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num29.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num28',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num28.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num27',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num27.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num26',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num26.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num25',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num25.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num24',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num24.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num23',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num23.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num22.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num21',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num21.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num20',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num20.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num19',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num19.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num18',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num18.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num17.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num16',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num16.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num15.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num14.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num13.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '65px', '35px', 'auto', 'auto'],
                            id: 'num12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num12.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num11.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num10.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            rect: ['66px', '187px', '62px', '35px', 'auto', 'auto'],
                            id: 'num1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord1',
                            rect: ['-148px', '164px', '129px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WeekendWord1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord2',
                            rect: ['-130px', '193px', '64px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingOuting2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord3',
                            rect: ['-138px', '208px', '128px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingOuting3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord4',
                            rect: ['-160px', '223px', '142px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WeekendWord4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 4050,
                    autoPlay: false,
                    data: [
                        [
                            "eid50",
                            "left",
                            0,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord1}",
                            '-148px',
                            '16px'
                        ],
                        [
                            "eid141",
                            "left",
                            3654,
                            346,
                            "easeInOutCubic",
                            "${WeekendWord1}",
                            '16px',
                            '334px'
                        ],
                        [
                            "eid771",
                            "scaleY",
                            1189,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy48}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid623",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid609",
                            "opacity",
                            240,
                            60,
                            "easeInOutCubic",
                            "${num5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid567",
                            "opacity",
                            300,
                            70,
                            "easeInOutCubic",
                            "${num5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid807",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num24}",
                            '0',
                            '0'
                        ],
                        [
                            "eid808",
                            "opacity",
                            1379,
                            60,
                            "easeInOutCubic",
                            "${num24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid809",
                            "opacity",
                            1439,
                            70,
                            "easeInOutCubic",
                            "${num24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid734",
                            "left",
                            1439,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy39}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid727",
                            "opacity",
                            689,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid728",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy38}",
                            '1',
                            '0'
                        ],
                        [
                            "eid804",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num23}",
                            '0',
                            '0'
                        ],
                        [
                            "eid805",
                            "opacity",
                            1319,
                            60,
                            "easeInOutCubic",
                            "${num23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid806",
                            "opacity",
                            1379,
                            70,
                            "easeInOutCubic",
                            "${num23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid707",
                            "opacity",
                            539,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid708",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '1',
                            '0'
                        ],
                        [
                            "eid632",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid603",
                            "opacity",
                            780,
                            60,
                            "easeInOutCubic",
                            "${num14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid561",
                            "opacity",
                            840,
                            70,
                            "easeInOutCubic",
                            "${num14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid695",
                            "opacity",
                            389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid696",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '1',
                            '0'
                        ],
                        [
                            "eid628",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid604",
                            "opacity",
                            540,
                            60,
                            "easeInOutCubic",
                            "${num10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid562",
                            "opacity",
                            600,
                            70,
                            "easeInOutCubic",
                            "${num10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid686",
                            "opacity",
                            289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid687",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid816",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num27}",
                            '0',
                            '0'
                        ],
                        [
                            "eid817",
                            "opacity",
                            1558,
                            60,
                            "easeInOutCubic",
                            "${num27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid818",
                            "opacity",
                            1618,
                            70,
                            "easeInOutCubic",
                            "${num27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid637",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid612",
                            "opacity",
                            1079,
                            60,
                            "easeInOutCubic",
                            "${num19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid570",
                            "opacity",
                            1139,
                            70,
                            "easeInOutCubic",
                            "${num19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid106",
                            "opacity",
                            200,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid830",
                            "top",
                            1788,
                            0,
                            "easeInOutCubic",
                            "${num30}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid832",
                            "top",
                            3654,
                            0,
                            "easeInOutCubic",
                            "${num30}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid634",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid610",
                            "opacity",
                            900,
                            60,
                            "easeInOutCubic",
                            "${num16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid568",
                            "opacity",
                            960,
                            70,
                            "easeInOutCubic",
                            "${num16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid630",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid607",
                            "opacity",
                            660,
                            60,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid565",
                            "opacity",
                            720,
                            70,
                            "easeInOutCubic",
                            "${num12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid627",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid598",
                            "opacity",
                            480,
                            60,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid556",
                            "opacity",
                            540,
                            70,
                            "easeInOutCubic",
                            "${num9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid813",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num26}",
                            '0',
                            '0'
                        ],
                        [
                            "eid814",
                            "opacity",
                            1499,
                            60,
                            "easeInOutCubic",
                            "${num26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid815",
                            "opacity",
                            1559,
                            70,
                            "easeInOutCubic",
                            "${num26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid723",
                            "opacity",
                            639,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid724",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid635",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid600",
                            "opacity",
                            959,
                            60,
                            "easeInOutCubic",
                            "${num17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid558",
                            "opacity",
                            1019,
                            70,
                            "easeInOutCubic",
                            "${num17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid110",
                            "opacity",
                            150,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid783",
                            "scaleY",
                            1339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy51}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid831",
                            "left",
                            1788,
                            0,
                            "easeInOutCubic",
                            "${num30}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid834",
                            "left",
                            3654,
                            396,
                            "easeInOutCubic",
                            "${num30}",
                            '66px',
                            '336px'
                        ],
                        [
                            "eid773",
                            "opacity",
                            1239,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid774",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy49}",
                            '1',
                            '0'
                        ],
                        [
                            "eid819",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num28}",
                            '0',
                            '0'
                        ],
                        [
                            "eid820",
                            "opacity",
                            1618,
                            60,
                            "easeInOutCubic",
                            "${num28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid821",
                            "opacity",
                            1678,
                            70,
                            "easeInOutCubic",
                            "${num28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid692",
                            "left",
                            1149,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy29}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid744",
                            "opacity",
                            889,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid745",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid719",
                            "opacity",
                            589,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid720",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "opacity",
                            250,
                            100,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '1',
                            '0'
                        ],
                        [
                            "eid688",
                            "scaleY",
                            289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy28}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid621",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid615",
                            "opacity",
                            120,
                            60,
                            "easeInOutCubic",
                            "${num3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid573",
                            "opacity",
                            180,
                            70,
                            "easeInOutCubic",
                            "${num3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid825",
                            "opacity",
                            50,
                            0,
                            "easeInOutCubic",
                            "${num30}",
                            '0',
                            '0'
                        ],
                        [
                            "eid826",
                            "opacity",
                            1728,
                            60,
                            "easeInOutCubic",
                            "${num30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid760",
                            "opacity",
                            1089,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy46}",
                            '0',
                            '1'
                        ],
                        [
                            "eid761",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy46}",
                            '1',
                            '0'
                        ],
                        [
                            "eid810",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num25}",
                            '0',
                            '0'
                        ],
                        [
                            "eid811",
                            "opacity",
                            1439,
                            60,
                            "easeInOutCubic",
                            "${num25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid812",
                            "opacity",
                            1499,
                            70,
                            "easeInOutCubic",
                            "${num25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid756",
                            "opacity",
                            1039,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid757",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy45}",
                            '1',
                            '0'
                        ],
                        [
                            "eid611",
                            "opacity",
                            0,
                            60,
                            "easeInOutCubic",
                            "${num1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid569",
                            "opacity",
                            60,
                            70,
                            "easeInOutCubic",
                            "${num1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid739",
                            "scaleX",
                            839,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy41}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid624",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid608",
                            "opacity",
                            300,
                            60,
                            "easeInOutCubic",
                            "${num6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid566",
                            "opacity",
                            360,
                            70,
                            "easeInOutCubic",
                            "${num6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid822",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num29}",
                            '0',
                            '0'
                        ],
                        [
                            "eid823",
                            "opacity",
                            1678,
                            60,
                            "easeInOutCubic",
                            "${num29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid824",
                            "opacity",
                            1738,
                            70,
                            "easeInOutCubic",
                            "${num29}",
                            '1',
                            '0'
                        ],
                        [
                            "eid789",
                            "opacity",
                            1439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy53}",
                            '0',
                            '1'
                        ],
                        [
                            "eid790",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy53}",
                            '1',
                            '0'
                        ],
                        [
                            "eid785",
                            "opacity",
                            1389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy52}",
                            '0',
                            '1'
                        ],
                        [
                            "eid786",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy52}",
                            '1',
                            '0'
                        ],
                        [
                            "eid631",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid614",
                            "opacity",
                            720,
                            60,
                            "easeInOutCubic",
                            "${num13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid572",
                            "opacity",
                            780,
                            70,
                            "easeInOutCubic",
                            "${num13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid766",
                            "left",
                            1839,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy47}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            250,
                            100,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid764",
                            "opacity",
                            1139,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy47}",
                            '0',
                            '1'
                        ],
                        [
                            "eid765",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy47}",
                            '1',
                            '0'
                        ],
                        [
                            "eid649",
                            "left",
                            1149,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '151px',
                            '151px'
                        ],
                        [
                            "eid768",
                            "scaleX",
                            1189,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy48}",
                            '1.57',
                            '1'
                        ],
                        [
                            "eid735",
                            "scaleX",
                            789,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy40}",
                            '1.57',
                            '1'
                        ],
                        [
                            "eid685",
                            "scaleX",
                            289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy28}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid750",
                            "scaleY",
                            939,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy43}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid743",
                            "scaleX",
                            889,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy42}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid746",
                            "scaleY",
                            889,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy42}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid742",
                            "scaleY",
                            839,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy41}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid721",
                            "scaleY",
                            589,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid755",
                            "scaleX",
                            1039,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy45}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid775",
                            "scaleY",
                            1239,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy49}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid738",
                            "scaleY",
                            789,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy40}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid731",
                            "opacity",
                            739,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid732",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy39}",
                            '1',
                            '0'
                        ],
                        [
                            "eid763",
                            "scaleX",
                            1139,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy47}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid622",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid606",
                            "opacity",
                            180,
                            60,
                            "easeInOutCubic",
                            "${num4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid564",
                            "opacity",
                            240,
                            70,
                            "easeInOutCubic",
                            "${num4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid754",
                            "scaleY",
                            989,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy44}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid781",
                            "opacity",
                            1339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy51}",
                            '0',
                            '1'
                        ],
                        [
                            "eid782",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy51}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "opacity",
                            989,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid753",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy44}",
                            '1',
                            '0'
                        ],
                        [
                            "eid706",
                            "scaleX",
                            539,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid690",
                            "opacity",
                            339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid691",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy29}",
                            '1',
                            '0'
                        ],
                        [
                            "eid748",
                            "opacity",
                            939,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid749",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy43}",
                            '1',
                            '0'
                        ],
                        [
                            "eid698",
                            "scaleX",
                            439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid777",
                            "opacity",
                            1289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy50}",
                            '0',
                            '1'
                        ],
                        [
                            "eid778",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy50}",
                            '1',
                            '0'
                        ],
                        [
                            "eid795",
                            "opacity",
                            50,
                            0,
                            "easeInOutCubic",
                            "${num20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid796",
                            "opacity",
                            1129,
                            60,
                            "easeInOutCubic",
                            "${num20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid797",
                            "opacity",
                            1189,
                            70,
                            "easeInOutCubic",
                            "${num20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid799",
                            "opacity",
                            1209,
                            60,
                            "easeInOutCubic",
                            "${num21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid800",
                            "opacity",
                            1269,
                            70,
                            "easeInOutCubic",
                            "${num21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "scaleX",
                            200,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid80",
                            "scaleY",
                            50,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid636",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid605",
                            "opacity",
                            1019,
                            60,
                            "easeInOutCubic",
                            "${num18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            1079,
                            70,
                            "easeInOutCubic",
                            "${num18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid694",
                            "scaleX",
                            389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "left",
                            1309,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord4}",
                            '-160px',
                            '137px'
                        ],
                        [
                            "eid144",
                            "left",
                            3654,
                            346,
                            "easeInOutCubic",
                            "${WeekendWord4}",
                            '137px',
                            '334px'
                        ],
                        [
                            "eid54",
                            "left",
                            1259,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord3}",
                            '-138px',
                            '142px'
                        ],
                        [
                            "eid145",
                            "left",
                            3654,
                            346,
                            "easeInOutCubic",
                            "${WeekendWord3}",
                            '142px',
                            '334px'
                        ],
                        [
                            "eid733",
                            "scaleY",
                            739,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy39}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            100,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid772",
                            "scaleX",
                            1239,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy49}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid801",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid802",
                            "opacity",
                            1259,
                            60,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid803",
                            "opacity",
                            1319,
                            70,
                            "easeInOutCubic",
                            "${num22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            150,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid709",
                            "scaleY",
                            539,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid705",
                            "scaleY",
                            489,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid784",
                            "scaleX",
                            1389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy52}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid693",
                            "scaleY",
                            339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy29}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid791",
                            "scaleY",
                            1439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy53}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid769",
                            "opacity",
                            1189,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy48}",
                            '0',
                            '1'
                        ],
                        [
                            "eid770",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy48}",
                            '1',
                            '0'
                        ],
                        [
                            "eid701",
                            "scaleY",
                            439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid729",
                            "scaleY",
                            689,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy38}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid780",
                            "scaleX",
                            1339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy51}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            250,
                            100,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid629",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid602",
                            "opacity",
                            600,
                            60,
                            "easeInOutCubic",
                            "${num11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid560",
                            "opacity",
                            660,
                            70,
                            "easeInOutCubic",
                            "${num11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            100,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid759",
                            "scaleX",
                            1089,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy46}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid767",
                            "scaleY",
                            1139,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy47}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid699",
                            "opacity",
                            439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid700",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '1',
                            '0'
                        ],
                        [
                            "eid697",
                            "scaleY",
                            389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid751",
                            "scaleX",
                            989,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy44}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid633",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid613",
                            "opacity",
                            840,
                            60,
                            "easeInOutCubic",
                            "${num15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid571",
                            "opacity",
                            900,
                            70,
                            "easeInOutCubic",
                            "${num15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid620",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid616",
                            "opacity",
                            60,
                            60,
                            "easeInOutCubic",
                            "${num2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid574",
                            "opacity",
                            120,
                            70,
                            "easeInOutCubic",
                            "${num2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid779",
                            "scaleY",
                            1289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy50}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid703",
                            "opacity",
                            489,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid704",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid758",
                            "scaleY",
                            1039,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy45}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid776",
                            "scaleX",
                            1289,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy50}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid725",
                            "scaleY",
                            639,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            50,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid116",
                            "opacity",
                            50,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid787",
                            "scaleY",
                            1389,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy52}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid788",
                            "scaleX",
                            1439,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy53}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid70",
                            "scaleX",
                            0,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            0,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid740",
                            "opacity",
                            839,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy41}",
                            '0',
                            '1'
                        ],
                        [
                            "eid741",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy41}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "scaleY",
                            150,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid722",
                            "scaleX",
                            639,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid730",
                            "scaleX",
                            739,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy39}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid702",
                            "scaleX",
                            489,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid718",
                            "scaleX",
                            589,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid726",
                            "scaleX",
                            689,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy38}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid625",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid597",
                            "opacity",
                            360,
                            60,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "opacity",
                            420,
                            70,
                            "easeInOutCubic",
                            "${num7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "scaleY",
                            200,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid626",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid599",
                            "opacity",
                            420,
                            60,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "opacity",
                            480,
                            70,
                            "easeInOutCubic",
                            "${num8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "opacity",
                            0,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid56",
                            "left",
                            1209,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord2}",
                            '-130px',
                            '145px'
                        ],
                        [
                            "eid142",
                            "left",
                            3654,
                            346,
                            "easeInOutCubic",
                            "${WeekendWord2}",
                            '145px',
                            '334px'
                        ],
                        [
                            "eid762",
                            "scaleY",
                            1089,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy46}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            100,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid689",
                            "scaleX",
                            339,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy29}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid736",
                            "opacity",
                            789,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy40}",
                            '0',
                            '1'
                        ],
                        [
                            "eid737",
                            "opacity",
                            3504,
                            546,
                            "easeInOutCubic",
                            "${icoWeekendCopy40}",
                            '1',
                            '0'
                        ],
                        [
                            "eid747",
                            "scaleX",
                            939,
                            100,
                            "easeInOutCubic",
                            "${icoWeekendCopy43}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            },
            "vacation": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['258px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacation',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['226px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['196px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['166px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['136px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['106px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['76px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['46px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '73px', '29px', '59px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.5', '1.5']],
                            id: 'icivacationCopy11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num42',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num52',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num62',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            rect: ['70px', '168px', '59px', '35px', 'auto', 'auto'],
                            id: 'num9',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'VacationWord1',
                            rect: ['377px', '178px', '64px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VacationWord2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'VacationWord12',
                            rect: ['-56px', '173px', '40px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VacationWord12.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'VacationWord2',
                            rect: ['-182px', '193px', '143px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingTrip2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'VacationWord3',
                            rect: ['-134px', '209px', '99px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingTrip3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'VacationWord4',
                            rect: ['-162px', '224px', '146px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/VacationWord4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid173",
                            "scaleY",
                            66,
                            100,
                            "easeInOutBounce",
                            "${icivacation}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid855",
                            "scaleX",
                            224,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy6}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid153",
                            "opacity",
                            66,
                            100,
                            "easeInOutBounce",
                            "${icivacation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid171",
                            "scaleX",
                            66,
                            100,
                            "easeInOutBounce",
                            "${icivacation}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid200",
                            "left",
                            16,
                            50,
                            "easeInOutCubic",
                            "${VacationWord1}",
                            '-100px',
                            '-182px'
                        ],
                        [
                            "eid887",
                            "left",
                            1217,
                            100,
                            "easeInOutCubic",
                            "${VacationWord1}",
                            '-182px',
                            '143px'
                        ],
                        [
                            "eid215",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${VacationWord1}",
                            '143px',
                            '377px'
                        ],
                        [
                            "eid268",
                            "left",
                            1217,
                            100,
                            "easeInOutCubic",
                            "${VacationWord4}",
                            '-162px',
                            '129px'
                        ],
                        [
                            "eid275",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${VacationWord4}",
                            '129px',
                            '311px'
                        ],
                        [
                            "eid871",
                            "scaleX",
                            400,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy10}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid398",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num52}",
                            '0',
                            '0'
                        ],
                        [
                            "eid193",
                            "opacity",
                            400,
                            100,
                            "easeInOutCubic",
                            "${num52}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "opacity",
                            500,
                            100,
                            "easeInOutCubic",
                            "${num52}",
                            '1',
                            '0'
                        ],
                        [
                            "eid848",
                            "opacity",
                            124,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid849",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid856",
                            "opacity",
                            224,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid857",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid397",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num62}",
                            '0',
                            '0'
                        ],
                        [
                            "eid183",
                            "opacity",
                            500,
                            100,
                            "easeInOutCubic",
                            "${num62}",
                            '0',
                            '1'
                        ],
                        [
                            "eid372",
                            "opacity",
                            600,
                            100,
                            "easeInOutCubic",
                            "${num62}",
                            '1',
                            '0'
                        ],
                        [
                            "eid880",
                            "top",
                            2154,
                            0,
                            "easeInOutCubic",
                            "${num9}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid882",
                            "left",
                            0,
                            0,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '-172px',
                            '-172px'
                        ],
                        [
                            "eid435",
                            "left",
                            1217,
                            100,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '-182px',
                            '138px'
                        ],
                        [
                            "eid276",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '138px',
                            '311px'
                        ],
                        [
                            "eid875",
                            "scaleX",
                            466,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy11}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid874",
                            "scaleY",
                            400,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy10}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid878",
                            "scaleY",
                            466,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy11}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid876",
                            "opacity",
                            466,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid877",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid864",
                            "opacity",
                            300,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid865",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid444",
                            "left",
                            1217,
                            100,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '-134px',
                            '134px'
                        ],
                        [
                            "eid277",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '134px',
                            '311px'
                        ],
                        [
                            "eid870",
                            "scaleY",
                            366,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy9}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid866",
                            "scaleY",
                            300,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy8}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid872",
                            "opacity",
                            400,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid873",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid854",
                            "scaleY",
                            166,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid452",
                            "left",
                            0,
                            50,
                            "easeInOutCubic",
                            "${VacationWord12}",
                            '-56px',
                            '27px'
                        ],
                        [
                            "eid453",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${VacationWord12}",
                            '27px',
                            '363px'
                        ],
                        [
                            "eid868",
                            "opacity",
                            366,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid869",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid852",
                            "opacity",
                            166,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid853",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid863",
                            "scaleX",
                            300,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy8}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            0,
                            100,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid195",
                            "opacity",
                            100,
                            100,
                            "easeInOutCubic",
                            "${num12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid399",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num42}",
                            '0',
                            '0'
                        ],
                        [
                            "eid189",
                            "opacity",
                            300,
                            100,
                            "easeInOutCubic",
                            "${num42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid197",
                            "opacity",
                            400,
                            100,
                            "easeInOutCubic",
                            "${num42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid400",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid191",
                            "opacity",
                            200,
                            100,
                            "easeInOutCubic",
                            "${num32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            300,
                            100,
                            "easeInOutCubic",
                            "${num32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid851",
                            "scaleX",
                            166,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy5}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid394",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid382",
                            "opacity",
                            800,
                            100,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid401",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid187",
                            "opacity",
                            100,
                            100,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "opacity",
                            200,
                            100,
                            "easeInOutCubic",
                            "${num22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid396",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid378",
                            "opacity",
                            600,
                            100,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid387",
                            "opacity",
                            700,
                            100,
                            "easeInOutCubic",
                            "${num7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid862",
                            "scaleY",
                            266,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy7}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid395",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid380",
                            "opacity",
                            700,
                            100,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid388",
                            "opacity",
                            800,
                            100,
                            "easeInOutCubic",
                            "${num8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid858",
                            "scaleY",
                            224,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy6}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid847",
                            "scaleX",
                            124,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid850",
                            "scaleY",
                            124,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy4}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid860",
                            "opacity",
                            266,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid861",
                            "opacity",
                            2454,
                            546,
                            "easeInOutBounce",
                            "${icivacationCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid859",
                            "scaleX",
                            266,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy7}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid867",
                            "scaleX",
                            366,
                            100,
                            "easeInOutBounce",
                            "${icivacationCopy9}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid881",
                            "left",
                            2154,
                            236,
                            "easeInOutCubic",
                            "${num9}",
                            '70px',
                            '310px'
                        ]
                    ]
                }
            },
            "WordingEnd": {
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
                            display: 'none',
                            rect: ['-267px', '105px', '106px', '15px', 'auto', 'auto'],
                            id: 'WordingEnd4',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd4.png', '0px', '0px']
                        },
                        {
                            rect: ['13px', '103px', '216px', '20px', 'auto', 'auto'],
                            id: 'WordingEnd3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd3.png', '0px', '0px']
                        },
                        {
                            rect: ['23px', '83px', '219px', '16px', 'auto', 'auto'],
                            id: 'WordingEnd2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd2.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '60px', '270px', '16px', 'auto', 'auto'],
                            id: 'WordingEnd6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd.png', '0px', '0px']
                        },
                        {
                            rect: ['-1px', '130', '213', '37', 'auto', 'auto'],
                            id: 'cta',
                            symbolName: 'cta',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '250px']
                        }
                    }
                },
                timeline: {
                    duration: 825,
                    autoPlay: false,
                    data: [
                        [
                            "eid655",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingEnd4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid221",
                            "left",
                            131,
                            393,
                            "easeInOutCubic",
                            "${WordingEnd3}",
                            '-267px',
                            '13px'
                        ],
                        [
                            "eid223",
                            "left",
                            379,
                            383,
                            "easeInCubic",
                            "${WordingEnd6}",
                            '-267px',
                            '28px'
                        ],
                        [
                            "eid219",
                            "left",
                            0,
                            393,
                            "easeInOutCubic",
                            "${WordingEnd4}",
                            '-267px',
                            '34px'
                        ],
                        [
                            "eid246",
                            "left",
                            522,
                            303,
                            "easeInOutCubic",
                            "${cta}",
                            '-239px',
                            '-1px'
                        ],
                        [
                            "eid225",
                            "left",
                            250,
                            393,
                            "easeInOutCubic",
                            "${WordingEnd2}",
                            '-267px',
                            '23px'
                        ]
                    ]
                }
            },
            "cta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '213', '37', 'auto', 'auto'],
                            id: 'cta_B',
                            symbolName: 'cta_B',
                            type: 'rect',
                            opacity: '0'
                        },
                        {
                            rect: ['0', '0', '213', '37', 'auto', 'auto'],
                            id: 'cta_A',
                            symbolName: 'cta_A',
                            type: 'rect',
                            opacity: '1'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "start": 500,
                        "hover": 1000
                    },
                    data: [
                        [
                            "eid237",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_A}",
                            '1',
                            '1'
                        ],
                        [
                            "eid236",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${cta_A}",
                            '1',
                            '0'
                        ],
                        [
                            "eid238",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_B}",
                            '0',
                            '0'
                        ],
                        [
                            "eid234",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${cta_B}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cta_B": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '213px', '37px', 'auto', 'auto'],
                            id: 'ctaBleu',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ctaBleu.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '10px', '8px', '8px', 'auto', 'auto'],
                            id: 'arrow_white',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_white.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid230",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_white}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid231",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_white}",
                            '20px',
                            '16px'
                        ],
                        [
                            "eid232",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_white}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid233",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${arrow_white}",
                            '20px',
                            '16px'
                        ]
                    ]
                }
            },
            "cta_A": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '213px', '37px', 'auto', 'auto'],
                            id: 'ctaJaune',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ctaJaune.png', '0px', '0px']
                        },
                        {
                            rect: ['16px', '10px', '8px', '8px', 'auto', 'auto'],
                            id: 'arrow_black',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow_black.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '213px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid226",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_black}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid227",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_black}",
                            '20px',
                            '16px'
                        ],
                        [
                            "eid228",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_black}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid229",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${arrow_black}",
                            '20px',
                            '16px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Michelin_300x250_P2_edgeActions.js");
})("EDGE-83516821");
