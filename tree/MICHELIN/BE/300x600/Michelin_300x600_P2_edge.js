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
            js+"jquery-2.0.3.min.js"
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
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgba(0,0,0,0.50)","solid"]
                        },
                        {
                            id: 'BG_Michelin',
                            type: 'image',
                            rect: ['0', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"BG_Michelin.jpg",'0px','0px']
                        },
                        {
                            id: 'Border',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [1,"rgba(0, 0, 0, 0.498039)","solid"]
                        },
                        {
                            id: 'WordingEnd',
                            symbolName: 'WordingEnd',
                            display: 'block',
                            type: 'rect',
                            rect: ['8', '197', '284', '246', 'auto', 'auto']
                        },
                        {
                            id: 'Trip',
                            symbolName: 'Trip',
                            display: 'none',
                            type: 'rect',
                            rect: ['44', '49', '223', '496', 'auto', 'auto']
                        },
                        {
                            id: 'Outing',
                            symbolName: 'Outing',
                            display: 'none',
                            type: 'rect',
                            rect: ['44', '56', '219', '489', 'auto', 'auto']
                        },
                        {
                            id: 'Wording_Start',
                            symbolName: 'Wording_Start',
                            type: 'rect',
                            rect: ['24', '199', '262', '160', 'auto', 'auto']
                        },
                        {
                            id: 'Action',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [1,"rgba(0, 0, 0, 0.498039)","none"]
                        },
                        {
                            id: 'notices',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '300', '600', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                                fill: ["rgba(218,218,218,1.00)"],
                                stroke: [1,"rgba(0, 0, 0, 0.498039)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['17px', '35px', '266px', '565px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(127, 119, 119);\">(1) Berekend volgens de gemiddelde afstand naar de kust voor de Benelux-landen, nl. 256km heen en terug van thuis naar Noordzee. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(2) Berekend volgens de gemiddelde afstand naar Parijs voor de Benelux-landen, nl. 854km heen en terug van Tilburg naar Parijs. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(3) Resultaten uit tests uitgevoerd door DEKRA TEST CENTER op aanvraag van Michelin, in 2014 en 2015 afhankelijk van de gamma’s, op het verschil tussen de gemiddelde kilometers van de MICHELIN gamma’s (MICHELIN Energy Saver +, MICHELIN Pilot Sport 4, MICHELIN Primacy 3, MICHELIN Pilot Super Sport, MICHELIN CrossClimate, MICHELIN Latitude Sport 3) en de gemiddelde kilometers van de gamma’s van de concurrenten: BRIDGESTONE (Ecopia EP150, Potenza S001, Turanza T001, Dueler H/P Sport), CONTINENTAL (ContiEcoContact 5, ContiSportContact 5, ContiPremiumContact 5, ContiSportContact 5P AO, ContiSportContact 5 SUV), DUNLOP (Sport BluResponse, Sport Maxx RT, SP QuattroMaxx), GOODYEAR (EfficientGrip Performance, Eagle F1 Asymmetric 2, Vector 4Seasons Gen-2, Eagle F1 Asymmetric SUV), PIRELLI (Cinturato P1 Verde Ecoimpact, P Zero, Cinturato P7 Ecoimpact, P Zero Silver, Cinturato All Season, P Zero Rosso), HANKOOK (Kinergy 4S, Ventus S1 Evo2 SUV), VREDESTEIN (Quatrac 5), NOKIAN (Weatherproof).</span></p><p style=\"margin: 0px;\">​</p>",
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
                            display: 'block',
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
                            rect: ['null', 'null', '300px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10410,
                    autoPlay: true,
                    data: [
                        [
                            "eid376",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${close_info}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1330",
                            "display",
                            9805,
                            0,
                            "easeInOutQuad",
                            "${close_info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid375",
                            "display",
                            0,
                            0,
                            "easeInOutQuart",
                            "${notices}",
                            'none',
                            'none'
                        ],
                        [
                            "eid290",
                            "display",
                            0,
                            0,
                            "easeInOutBounce",
                            "${Outing}",
                            'none',
                            'none'
                        ],
                        [
                            "eid291",
                            "display",
                            2634,
                            0,
                            "easeInOutBounce",
                            "${Outing}",
                            'none',
                            'block'
                        ],
                        [
                            "eid289",
                            "display",
                            913,
                            0,
                            "easeInOutBounce",
                            "${Trip}",
                            'none',
                            'none'
                        ],
                        [
                            "eid352",
                            "display",
                            6750,
                            0,
                            "swing",
                            "${Trip}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2634,
                            554,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '1',
                            '0'
                        ],
                        [
                            "eid349",
                            "opacity",
                            9750,
                            660,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid346",
                            "display",
                            2533,
                            0,
                            "easeInOutCubic",
                            "${WordingEnd}",
                            'block',
                            'none'
                        ],
                        [
                            "eid347",
                            "display",
                            9750,
                            0,
                            "easeInOutCubic",
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
                            rect: ['-241px', '0px', '204px', '23px', 'auto', 'auto'],
                            id: 'WordSTART_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordSTART_1.png', '0px', '0px']
                        },
                        {
                            rect: ['329px', '33px', '151px', '23px', 'auto', 'auto'],
                            id: 'WordSTART_2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordSTART_2.png', '0px', '0px']
                        },
                        {
                            rect: ['361px', '67px', '231px', '22px', 'auto', 'auto'],
                            id: 'WordSTART_3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordSTART_3.png', '0px', '0px']
                        },
                        {
                            rect: ['395px', '101px', '142px', '22px', 'auto', 'auto'],
                            id: 'WordSTART_4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordSTART_4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '262px', '160px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "left",
                            0,
                            233,
                            "easeInOutCubic",
                            "${WordSTART_1}",
                            '-241px',
                            '32px'
                        ],
                        [
                            "eid16",
                            "left",
                            2802,
                            198,
                            "easeInOutCubic",
                            "${WordSTART_1}",
                            '32px',
                            '323px'
                        ],
                        [
                            "eid6",
                            "left",
                            275,
                            233,
                            "easeInOutCubic",
                            "${WordSTART_3}",
                            '-282px',
                            '14px'
                        ],
                        [
                            "eid18",
                            "left",
                            2802,
                            198,
                            "easeInOutCubic",
                            "${WordSTART_3}",
                            '14px',
                            '361px'
                        ],
                        [
                            "eid3",
                            "left",
                            147,
                            233,
                            "easeInOutCubic",
                            "${WordSTART_2}",
                            '-232px',
                            '19px'
                        ],
                        [
                            "eid17",
                            "left",
                            2802,
                            198,
                            "easeInOutCubic",
                            "${WordSTART_2}",
                            '19px',
                            '329px'
                        ],
                        [
                            "eid8",
                            "left",
                            422,
                            233,
                            "easeInOutCubic",
                            "${WordSTART_4}",
                            '-268px',
                            '-2px'
                        ],
                        [
                            "eid19",
                            "left",
                            2802,
                            198,
                            "easeInOutCubic",
                            "${WordSTART_4}",
                            '-2px',
                            '395px'
                        ]
                    ]
                }
            },
            "Outing": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['181px', '282px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_Weekends',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['134px', '282px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '282px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['41px', '282px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '282px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '226px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy19',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '226px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy18',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '226px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '226px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy16',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '226px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy20',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '173px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy25',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '173px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy24',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '173px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy23',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '173px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '173px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy21',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '117px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy40',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '117px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy39',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '117px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy38',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '117px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy37',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '117px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy36',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '61px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy45',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '61px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy44',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '61px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy43',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '61px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy42',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '61px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy41',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['180px', '7px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy50',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['135px', '7px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy49',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['89px', '7px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy48',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '7px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy47',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            rect: ['-4px', '7px', '34px', '37px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_WeekendsCopy46',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconWeeKend.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WK_Word5',
                            rect: ['-283px', '483px', '217px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingWord4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WK_Word4',
                            rect: ['-243px', '459px', '187px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingWord3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WK_Word3',
                            rect: ['-243px', '435px', '94px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingWord2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WK_Word1',
                            rect: ['-243px', '350px', '147px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingWord1.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '105px', '47px', 'auto', 'auto'],
                            id: 'num30',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num30.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '89px', '47px', 'auto', 'auto'],
                            id: 'num19Copy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num29.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '89px', '47px', 'auto', 'auto'],
                            id: 'num19Copy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num28.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '92px', '44px', 'auto', 'auto'],
                            id: 'num17Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num27.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '92px', '47px', 'auto', 'auto'],
                            id: 'num16Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num26.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '46px', 'auto', 'auto'],
                            id: 'num15Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num25.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '44px', 'auto', 'auto'],
                            id: 'num14Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num24.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '46px', 'auto', 'auto'],
                            id: 'num13Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num23.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '84px', '45px', 'auto', 'auto'],
                            id: 'num12Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num22.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '78px', '44px', 'auto', 'auto'],
                            id: 'num11Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num21.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '89px', '47px', 'auto', 'auto'],
                            id: 'num20',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num20.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '89px', '47px', 'auto', 'auto'],
                            id: 'num19',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num19.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '92px', '44px', 'auto', 'auto'],
                            id: 'num17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num17.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '92px', '47px', 'auto', 'auto'],
                            id: 'num16',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num16.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '46px', 'auto', 'auto'],
                            id: 'num15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num15.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '44px', 'auto', 'auto'],
                            id: 'num14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num14.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '90px', '46px', 'auto', 'auto'],
                            id: 'num13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num13.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '84px', '45px', 'auto', 'auto'],
                            id: 'num12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num12.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '78px', '44px', 'auto', 'auto'],
                            id: 'num11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num11.png', '0px', '0px']
                        },
                        {
                            rect: ['25px', '378px', '89px', '47px', 'auto', 'auto'],
                            id: 'num10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num10.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '55px', '47px', 'auto', 'auto'],
                            id: 'num09',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '55px', '47px', 'auto', 'auto'],
                            id: 'num08',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '56px', '44px', 'auto', 'auto'],
                            id: 'num07',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '56px', '47px', 'auto', 'auto'],
                            id: 'num06',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            rect: ['44px', '378px', '59px', '46px', 'auto', 'auto'],
                            id: 'num05',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '56px', '44px', 'auto', 'auto'],
                            id: 'num04',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '58px', '46px', 'auto', 'auto'],
                            id: 'num03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '53px', '45px', 'auto', 'auto'],
                            id: 'num02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '378px', '40px', '44px', 'auto', 'auto'],
                            id: 'num01',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '219px', '489px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1208",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy43}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1240",
                            "opacity",
                            1104,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1241",
                            "opacity",
                            1204,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy43}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1145",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy43}",
                            '1',
                            '0'
                        ],
                        [
                            "eid926",
                            "scaleY",
                            390,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy16}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid927",
                            "scaleY",
                            490,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy16}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1207",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy45}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1248",
                            "opacity",
                            1009,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1249",
                            "opacity",
                            1109,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy45}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1159",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy45}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1153",
                            "scaleY",
                            1069,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy44}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1154",
                            "scaleY",
                            1169,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy44}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1146",
                            "scaleY",
                            1104,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy43}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1147",
                            "scaleY",
                            1204,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy43}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1127",
                            "scaleX",
                            1204,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy41}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1128",
                            "scaleX",
                            1304,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy41}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1202",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy40}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1246",
                            "opacity",
                            740,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy40}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1247",
                            "opacity",
                            840,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy40}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1124",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy40}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1388",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num19Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1354",
                            "opacity",
                            1689,
                            0,
                            "easeInOutQuad",
                            "${num19Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1229",
                            "opacity",
                            1754,
                            65,
                            "easeInOutQuad",
                            "${num19Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1188",
                            "scaleY",
                            1329,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy49}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1189",
                            "scaleY",
                            1429,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy49}",
                            '1',
                            '1'
                        ],
                        [
                            "eid989",
                            "scaleY",
                            490,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy25}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid990",
                            "scaleY",
                            590,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy25}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1198",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy47}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1256",
                            "opacity",
                            1429,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy47}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            1529,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy47}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1173",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy47}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1160",
                            "scaleY",
                            1009,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy45}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1161",
                            "scaleY",
                            1109,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy45}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1097",
                            "scaleY",
                            935,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy36}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1098",
                            "scaleY",
                            1035,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy36}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1155",
                            "scaleX",
                            1009,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy45}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1156",
                            "scaleX",
                            1109,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy45}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1134",
                            "scaleX",
                            1169,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy42}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1135",
                            "scaleX",
                            1269,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy42}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1366",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num05}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1360",
                            "opacity",
                            260,
                            0,
                            "easeInOutQuad",
                            "${num05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid744",
                            "opacity",
                            325,
                            65,
                            "easeInOutQuad",
                            "${num05}",
                            '1',
                            '0'
                        ],
                        [
                            "eid935",
                            "scaleX",
                            301,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy18}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid936",
                            "scaleX",
                            401,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy18}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid923",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid924",
                            "opacity",
                            390,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid925",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid986",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy25}",
                            '0',
                            '0'
                        ],
                        [
                            "eid987",
                            "opacity",
                            490,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid988",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1364",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num03}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            130,
                            0,
                            "easeInOutQuad",
                            "${num03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid742",
                            "opacity",
                            195,
                            65,
                            "easeInOutQuad",
                            "${num03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1211",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy44}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1234",
                            "opacity",
                            1069,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1235",
                            "opacity",
                            1169,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy44}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1152",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy44}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1181",
                            "scaleY",
                            1364,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy48}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1182",
                            "scaleY",
                            1464,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy48}",
                            '1',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            151,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid208",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1375",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1337",
                            "opacity",
                            845,
                            0,
                            "easeInOutQuad",
                            "${num14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid753",
                            "opacity",
                            910,
                            65,
                            "easeInOutQuad",
                            "${num14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid822",
                            "scaleX",
                            201,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy4}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid823",
                            "scaleX",
                            301,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid806",
                            "scaleX",
                            101,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy2}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid807",
                            "scaleX",
                            201,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1106",
                            "scaleX",
                            835,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy38}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1107",
                            "scaleX",
                            935,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy38}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1374",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1347",
                            "opacity",
                            780,
                            0,
                            "easeInOutQuad",
                            "${num13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid752",
                            "opacity",
                            845,
                            65,
                            "easeInOutQuad",
                            "${num13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1371",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1340",
                            "opacity",
                            585,
                            0,
                            "easeInOutQuad",
                            "${num10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid749",
                            "opacity",
                            650,
                            65,
                            "easeInOutQuad",
                            "${num10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1200",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy49}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1242",
                            "opacity",
                            1329,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1243",
                            "opacity",
                            1429,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy49}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1187",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy49}",
                            '1',
                            '0'
                        ],
                        [
                            "eid982",
                            "scaleY",
                            550,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy24}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid983",
                            "scaleY",
                            650,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy24}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1365",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num04}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1356",
                            "opacity",
                            195,
                            0,
                            "easeInOutQuad",
                            "${num04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid743",
                            "opacity",
                            260,
                            65,
                            "easeInOutQuad",
                            "${num04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1176",
                            "scaleX",
                            1364,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy48}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1177",
                            "scaleX",
                            1464,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy48}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1190",
                            "scaleX",
                            1269,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy50}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1191",
                            "scaleX",
                            1369,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy50}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1379",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            1105,
                            0,
                            "easeInOutQuad",
                            "${num19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid757",
                            "opacity",
                            1170,
                            65,
                            "easeInOutQuad",
                            "${num19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1120",
                            "scaleX",
                            740,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy40}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1121",
                            "scaleX",
                            840,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy40}",
                            '1',
                            '1'
                        ],
                        [
                            "eid174",
                            "left",
                            1,
                            50,
                            "easeInOutQuad",
                            "${WK_Word1}",
                            '-243px',
                            '0px'
                        ],
                        [
                            "eid202",
                            "left",
                            3523,
                            159,
                            "easeInOutQuad",
                            "${WK_Word1}",
                            '0px',
                            '275px'
                        ],
                        [
                            "eid951",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid952",
                            "opacity",
                            451,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid953",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1169",
                            "scaleX",
                            1429,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy47}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1170",
                            "scaleX",
                            1529,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy47}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1389",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num19Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1344",
                            "opacity",
                            1754,
                            0,
                            "easeInOutQuad",
                            "${num19Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1231",
                            "opacity",
                            1819,
                            65,
                            "easeInOutQuad",
                            "${num19Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid790",
                            "scaleX",
                            1,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid791",
                            "scaleX",
                            101,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '1',
                            '1'
                        ],
                        [
                            "eid965",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid966",
                            "opacity",
                            650,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid967",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid975",
                            "scaleY",
                            585,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy23}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid976",
                            "scaleY",
                            685,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy23}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1377",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1351",
                            "opacity",
                            975,
                            0,
                            "easeInOutQuad",
                            "${num16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "opacity",
                            1040,
                            65,
                            "easeInOutQuad",
                            "${num16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1373",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1362",
                            "opacity",
                            715,
                            0,
                            "easeInOutQuad",
                            "${num12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid751",
                            "opacity",
                            780,
                            65,
                            "easeInOutQuad",
                            "${num12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1204",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy38}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1236",
                            "opacity",
                            835,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1237",
                            "opacity",
                            935,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy38}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1110",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy38}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1368",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num07}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1361",
                            "opacity",
                            390,
                            0,
                            "easeInOutQuad",
                            "${num07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid746",
                            "opacity",
                            455,
                            65,
                            "easeInOutQuad",
                            "${num07}",
                            '1',
                            '0'
                        ],
                        [
                            "eid792",
                            "scaleY",
                            1,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid793",
                            "scaleY",
                            101,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1370",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num09}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1353",
                            "opacity",
                            520,
                            0,
                            "easeInOutQuad",
                            "${num09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid748",
                            "opacity",
                            585,
                            65,
                            "easeInOutQuad",
                            "${num09}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1139",
                            "scaleY",
                            1169,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy42}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1140",
                            "scaleY",
                            1269,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy42}",
                            '1',
                            '1'
                        ],
                        [
                            "eid764",
                            "scaleY",
                            51,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid765",
                            "scaleY",
                            151,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1162",
                            "scaleX",
                            1464,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy46}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1163",
                            "scaleX",
                            1564,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy46}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1385",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num15Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1355",
                            "opacity",
                            1494,
                            0,
                            "easeInOutQuad",
                            "${num15Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1223",
                            "opacity",
                            1559,
                            65,
                            "easeInOutQuad",
                            "${num15Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1209",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy42}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1254",
                            "opacity",
                            1169,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1255",
                            "opacity",
                            1269,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy42}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1138",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1384",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num14Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1338",
                            "opacity",
                            1429,
                            0,
                            "easeInOutQuad",
                            "${num14Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1221",
                            "opacity",
                            1494,
                            65,
                            "easeInOutQuad",
                            "${num14Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid940",
                            "scaleY",
                            301,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy18}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid941",
                            "scaleY",
                            401,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy18}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1132",
                            "scaleY",
                            1204,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy41}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1133",
                            "scaleY",
                            1304,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy41}",
                            '1',
                            '1'
                        ],
                        [
                            "eid977",
                            "scaleX",
                            550,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy24}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid978",
                            "scaleX",
                            650,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy24}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1386",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num16Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1336",
                            "opacity",
                            1559,
                            0,
                            "easeInOutQuad",
                            "${num16Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1225",
                            "opacity",
                            1624,
                            65,
                            "easeInOutQuad",
                            "${num16Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid928",
                            "scaleX",
                            351,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy17}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid929",
                            "scaleX",
                            451,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy17}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1333",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num02}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1343",
                            "opacity",
                            65,
                            0,
                            "easeInOutQuad",
                            "${num02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid741",
                            "opacity",
                            130,
                            65,
                            "easeInOutQuad",
                            "${num02}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1382",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num12Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1358",
                            "opacity",
                            1299,
                            0,
                            "easeInOutQuad",
                            "${num12Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1217",
                            "opacity",
                            1364,
                            65,
                            "easeInOutQuad",
                            "${num12Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid183",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            101,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid210",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid972",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy23}",
                            '0',
                            '0'
                        ],
                        [
                            "eid973",
                            "opacity",
                            585,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid974",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1380",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1348",
                            "opacity",
                            1169,
                            0,
                            "easeInOutQuad",
                            "${num20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1213",
                            "opacity",
                            1234,
                            65,
                            "easeInOutQuad",
                            "${num20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid824",
                            "scaleY",
                            201,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy4}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid825",
                            "scaleY",
                            301,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid808",
                            "scaleY",
                            101,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy2}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid809",
                            "scaleY",
                            201,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid760",
                            "left",
                            3523,
                            159,
                            "easeInOutQuad",
                            "${num30}",
                            '25px',
                            '279px'
                        ],
                        [
                            "eid1195",
                            "scaleY",
                            1269,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy50}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1196",
                            "scaleY",
                            1369,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy50}",
                            '1',
                            '1'
                        ],
                        [
                            "eid816",
                            "scaleY",
                            151,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy3}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid817",
                            "scaleY",
                            251,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid762",
                            "scaleX",
                            51,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid763",
                            "scaleX",
                            151,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid963",
                            "scaleX",
                            650,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy22}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid964",
                            "scaleX",
                            750,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy22}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid979",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy24}",
                            '0',
                            '0'
                        ],
                        [
                            "eid980",
                            "opacity",
                            550,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid981",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1367",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num06}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1339",
                            "opacity",
                            325,
                            0,
                            "easeInOutQuad",
                            "${num06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid745",
                            "opacity",
                            390,
                            65,
                            "easeInOutQuad",
                            "${num06}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1206",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy37}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            900,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1259",
                            "opacity",
                            1000,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy37}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1103",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid949",
                            "scaleX",
                            451,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy20}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid950",
                            "scaleX",
                            551,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy20}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid930",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid931",
                            "opacity",
                            351,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid932",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid944",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid945",
                            "opacity",
                            251,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid946",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1383",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num13Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1334",
                            "opacity",
                            1364,
                            0,
                            "easeInOutQuad",
                            "${num13Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1219",
                            "opacity",
                            1429,
                            65,
                            "easeInOutQuad",
                            "${num13Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1118",
                            "scaleY",
                            800,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy39}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1119",
                            "scaleY",
                            900,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy39}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1369",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num08}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1350",
                            "opacity",
                            455,
                            0,
                            "easeInOutQuad",
                            "${num08}",
                            '0',
                            '1'
                        ],
                        [
                            "eid747",
                            "opacity",
                            520,
                            65,
                            "easeInOutQuad",
                            "${num08}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1113",
                            "scaleX",
                            800,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy39}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1114",
                            "scaleX",
                            900,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy39}",
                            '1',
                            '1'
                        ],
                        [
                            "eid177",
                            "left",
                            1336,
                            100,
                            "easeInOutQuad",
                            "${WK_Word5}",
                            '-283px',
                            '6px'
                        ],
                        [
                            "eid204",
                            "left",
                            3523,
                            159,
                            "easeInOutQuad",
                            "${WK_Word5}",
                            '6px',
                            '273px'
                        ],
                        [
                            "eid1111",
                            "scaleY",
                            835,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy38}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1112",
                            "scaleY",
                            935,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy38}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1387",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num17Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1357",
                            "opacity",
                            1624,
                            0,
                            "easeInOutQuad",
                            "${num17Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1227",
                            "opacity",
                            1689,
                            65,
                            "easeInOutQuad",
                            "${num17Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid958",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy21}",
                            '0',
                            '0'
                        ],
                        [
                            "eid959",
                            "opacity",
                            685,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid960",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid984",
                            "scaleX",
                            490,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy25}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid985",
                            "scaleX",
                            590,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy25}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1372",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            650,
                            0,
                            "easeInOutQuad",
                            "${num11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid750",
                            "opacity",
                            715,
                            65,
                            "easeInOutQuad",
                            "${num11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid970",
                            "scaleX",
                            585,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy23}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid971",
                            "scaleX",
                            685,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy23}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1197",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy46}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1232",
                            "opacity",
                            1464,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy46}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1233",
                            "opacity",
                            1564,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy46}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1166",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy46}",
                            '1',
                            '0'
                        ],
                        [
                            "eid956",
                            "scaleX",
                            685,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy21}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid957",
                            "scaleX",
                            785,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy21}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            201,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid216",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1378",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1346",
                            "opacity",
                            1040,
                            0,
                            "easeInOutQuad",
                            "${num17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "opacity",
                            1105,
                            65,
                            "easeInOutQuad",
                            "${num17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1203",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy39}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1244",
                            "opacity",
                            800,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1245",
                            "opacity",
                            900,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy39}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1117",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy39}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1376",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1352",
                            "opacity",
                            910,
                            0,
                            "easeInOutQuad",
                            "${num15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid754",
                            "opacity",
                            975,
                            65,
                            "easeInOutQuad",
                            "${num15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid947",
                            "scaleY",
                            251,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy19}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid948",
                            "scaleY",
                            351,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy19}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1104",
                            "scaleY",
                            900,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy37}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1105",
                            "scaleY",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy37}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1141",
                            "scaleX",
                            1104,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy43}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1142",
                            "scaleX",
                            1204,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy43}",
                            '1',
                            '1'
                        ],
                        [
                            "eid933",
                            "scaleY",
                            351,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy17}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid934",
                            "scaleY",
                            451,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy17}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1381",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num11Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1345",
                            "opacity",
                            1234,
                            0,
                            "easeInOutQuad",
                            "${num11Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1215",
                            "opacity",
                            1299,
                            65,
                            "easeInOutQuad",
                            "${num11Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1099",
                            "scaleX",
                            900,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy37}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1100",
                            "scaleX",
                            1000,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy37}",
                            '1',
                            '1'
                        ],
                        [
                            "eid961",
                            "scaleY",
                            685,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy21}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid962",
                            "scaleY",
                            785,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy21}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1199",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy48}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1250",
                            "opacity",
                            1364,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy48}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1251",
                            "opacity",
                            1464,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy48}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1180",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy48}",
                            '1',
                            '0'
                        ],
                        [
                            "eid937",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid938",
                            "opacity",
                            301,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid939",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1390",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num30}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1341",
                            "opacity",
                            1819,
                            0,
                            "easeInOutQuad",
                            "${num30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1342",
                            "opacity",
                            1884,
                            0,
                            "easeInOutQuad",
                            "${num30}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1148",
                            "scaleX",
                            1069,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy44}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1149",
                            "scaleX",
                            1169,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy44}",
                            '1',
                            '1'
                        ],
                        [
                            "eid842",
                            "opacity",
                            1,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '0',
                            '0'
                        ],
                        [
                            "eid843",
                            "opacity",
                            101,
                            0,
                            "easeInOutCubic",
                            "${Ico_Weekends}",
                            '1',
                            '1'
                        ],
                        [
                            "eid211",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_Weekends}",
                            '1',
                            '0'
                        ],
                        [
                            "eid814",
                            "scaleX",
                            151,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy3}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid815",
                            "scaleX",
                            251,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid942",
                            "scaleX",
                            251,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy19}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid943",
                            "scaleX",
                            351,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy19}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1210",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy41}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1238",
                            "opacity",
                            1204,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy41}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1239",
                            "opacity",
                            1304,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy41}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1131",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy41}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1092",
                            "scaleX",
                            935,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy36}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1093",
                            "scaleX",
                            1035,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy36}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1125",
                            "scaleY",
                            740,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy40}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1126",
                            "scaleY",
                            840,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy40}",
                            '1',
                            '1'
                        ],
                        [
                            "eid921",
                            "scaleX",
                            390,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy16}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid922",
                            "scaleX",
                            490,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy16}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid954",
                            "scaleY",
                            451,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy20}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid955",
                            "scaleY",
                            551,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy20}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid968",
                            "scaleY",
                            650,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy22}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid969",
                            "scaleY",
                            750,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy22}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1174",
                            "scaleY",
                            1429,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy47}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1175",
                            "scaleY",
                            1529,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy47}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1205",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy36}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1260",
                            "opacity",
                            935,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1261",
                            "opacity",
                            1035,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy36}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1096",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1183",
                            "scaleX",
                            1329,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy49}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1184",
                            "scaleX",
                            1429,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy49}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1167",
                            "scaleY",
                            1464,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy46}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1168",
                            "scaleY",
                            1564,
                            0,
                            "easeInOutCubic",
                            "${Ico_WeekendsCopy46}",
                            '1',
                            '1'
                        ],
                        [
                            "eid182",
                            "opacity",
                            1,
                            0,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            51,
                            100,
                            "easeInOutBounce",
                            "${Ico_WeekendsCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "left",
                            1236,
                            100,
                            "easeInOutQuad",
                            "${WK_Word3}",
                            '-243px',
                            '19px'
                        ],
                        [
                            "eid205",
                            "left",
                            3523,
                            159,
                            "easeInOutQuad",
                            "${WK_Word3}",
                            '19px',
                            '273px'
                        ],
                        [
                            "eid1201",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy50}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1252",
                            "opacity",
                            1269,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy50}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1253",
                            "opacity",
                            1369,
                            0,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy50}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1194",
                            "opacity",
                            3523,
                            477,
                            "easeInOutQuad",
                            "${Ico_WeekendsCopy50}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "left",
                            1286,
                            100,
                            "easeInOutQuad",
                            "${WK_Word4}",
                            '-243px',
                            '15px'
                        ],
                        [
                            "eid203",
                            "left",
                            3523,
                            159,
                            "easeInOutQuad",
                            "${WK_Word4}",
                            '15px',
                            '273px'
                        ],
                        [
                            "eid1393",
                            "opacity",
                            0,
                            65,
                            "easeInOutQuad",
                            "${num01}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1396",
                            "opacity",
                            65,
                            65,
                            "easeInOutQuad",
                            "${num01}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "Trip": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['170px', '217px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_Vacation',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['88px', '217px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['10px', '217px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['170px', '109px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['88px', '109px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['10px', '109px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['171px', '3px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['88px', '3px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            rect: ['10px', '3px', '40px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'Ico_VacationCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/iconVA.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Vacation_Word1',
                            rect: ['-135px', '339px', '44px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingTrip1.png', '0px', '0px']
                        },
                        {
                            rect: ['-185px', '430px', '95px', '15px', 'auto', 'auto'],
                            id: 'Vacation_Word2',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/OutingTrip2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Vacation_Word4',
                            rect: ['-311px', '455px', '214px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingTrip3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Vacation_Word5',
                            rect: ['-251px', '478px', '149px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingTrip4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'Vacation_Word6',
                            rect: ['-321px', '500px', '219px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/OutingTrip5.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '40px', '44px', 'auto', 'auto'],
                            id: 'num1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '53px', '45px', 'auto', 'auto'],
                            id: 'num2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '58px', '46px', 'auto', 'auto'],
                            id: 'num3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '56px', '44px', 'auto', 'auto'],
                            id: 'num4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '59px', '46px', 'auto', 'auto'],
                            id: 'num5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '56px', '47px', 'auto', 'auto'],
                            id: 'num6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '56px', '44px', 'auto', 'auto'],
                            id: 'num7',
                            opacity: '0.000000',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '55px', '47px', 'auto', 'auto'],
                            id: 'num8',
                            opacity: '0.000000',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '370px', '55px', '47px', 'auto', 'auto'],
                            id: 'num9',
                            opacity: '0.000000',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '496px']
                        }
                    }
                },
                timeline: {
                    duration: 3015,
                    autoPlay: false,
                    data: [
                        [
                            "eid1262",
                            "scaleX",
                            50,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1263",
                            "scaleX",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid222",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid281",
                            "opacity",
                            358,
                            82,
                            "easeInOutQuad",
                            "${num5}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid282",
                            "opacity",
                            441,
                            97,
                            "easeInOutQuad",
                            "${num5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1300",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1320",
                            "opacity",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1321",
                            "opacity",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid497",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1298",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1314",
                            "opacity",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1315",
                            "opacity",
                            508,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid505",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid283",
                            "opacity",
                            441,
                            97,
                            "easeInOutQuad",
                            "${num6}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid533",
                            "opacity",
                            538,
                            89,
                            "easeInOutQuad",
                            "${num6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1276",
                            "scaleY",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1277",
                            "scaleY",
                            454,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1294",
                            "scaleX",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1295",
                            "scaleX",
                            250,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1290",
                            "scaleX",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1291",
                            "scaleX",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid235",
                            "left",
                            1071,
                            50,
                            "easeInOutQuad",
                            "${Vacation_Word2}",
                            '-185px',
                            '11px'
                        ],
                        [
                            "eid294",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${Vacation_Word2}",
                            '11px',
                            '271px'
                        ],
                        [
                            "eid1278",
                            "scaleX",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1279",
                            "scaleX",
                            508,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1327",
                            "top",
                            2515,
                            0,
                            "easeInOutQuad",
                            "${num9}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid1266",
                            "scaleX",
                            246,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1267",
                            "scaleX",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1301",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1308",
                            "opacity",
                            246,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1309",
                            "opacity",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid322",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid231",
                            "left",
                            1100,
                            150,
                            "easeInOutQuad",
                            "${Vacation_Word4}",
                            '-311px',
                            '7px'
                        ],
                        [
                            "eid309",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${Vacation_Word4}",
                            '7px',
                            '295px'
                        ],
                        [
                            "eid1324",
                            "display",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Vacation_Word2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid224",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid275",
                            "opacity",
                            90,
                            90,
                            "easeInOutQuad",
                            "${num2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid276",
                            "opacity",
                            179,
                            82,
                            "easeInOutQuad",
                            "${num2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1304",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1316",
                            "opacity",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1317",
                            "opacity",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid324",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid233",
                            "left",
                            1200,
                            150,
                            "easeInOutQuad",
                            "${Vacation_Word6}",
                            '-321px',
                            '-3px'
                        ],
                        [
                            "eid307",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${Vacation_Word6}",
                            '-3px',
                            '295px'
                        ],
                        [
                            "eid1292",
                            "scaleY",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1293",
                            "scaleY",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1264",
                            "scaleY",
                            50,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1265",
                            "scaleY",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid598",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num8}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid521",
                            "opacity",
                            634,
                            93,
                            "easeInOutQuad",
                            "${num8}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid522",
                            "opacity",
                            727,
                            99,
                            "easeInOutQuad",
                            "${num8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1299",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1312",
                            "opacity",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1313",
                            "opacity",
                            454,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid501",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid223",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid277",
                            "opacity",
                            179,
                            82,
                            "easeInOutQuad",
                            "${num3}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid278",
                            "opacity",
                            262,
                            97,
                            "easeInOutQuad",
                            "${num3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1296",
                            "scaleY",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1297",
                            "scaleY",
                            250,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1270",
                            "scaleX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1271",
                            "scaleX",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1282",
                            "scaleX",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1283",
                            "scaleX",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1288",
                            "scaleY",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1289",
                            "scaleY",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1272",
                            "scaleY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1273",
                            "scaleY",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1268",
                            "scaleY",
                            246,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1269",
                            "scaleY",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1286",
                            "scaleX",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1287",
                            "scaleX",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1302",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1318",
                            "opacity",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1319",
                            "opacity",
                            300,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid288",
                            "opacity",
                            0,
                            90,
                            "easeInOutQuad",
                            "${num1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            90,
                            90,
                            "easeInOutQuad",
                            "${num1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid597",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num9}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid523",
                            "opacity",
                            730,
                            96,
                            "easeInOutQuad",
                            "${num9}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1305",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1306",
                            "opacity",
                            50,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1307",
                            "opacity",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid323",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid599",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${num7}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid519",
                            "opacity",
                            538,
                            89,
                            "easeInOutQuad",
                            "${num7}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid520",
                            "opacity",
                            627,
                            100,
                            "easeInOutQuad",
                            "${num7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1284",
                            "scaleY",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1285",
                            "scaleY",
                            200,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid227",
                            "left",
                            0,
                            50,
                            "easeInOutQuad",
                            "${Vacation_Word1}",
                            '-135px',
                            '5px'
                        ],
                        [
                            "eid293",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${Vacation_Word1}",
                            '5px',
                            '339px'
                        ],
                        [
                            "eid229",
                            "left",
                            1150,
                            150,
                            "easeInOutQuad",
                            "${Vacation_Word5}",
                            '-251px',
                            '2px'
                        ],
                        [
                            "eid308",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${Vacation_Word5}",
                            '2px',
                            '295px'
                        ],
                        [
                            "eid1280",
                            "scaleY",
                            404,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1281",
                            "scaleY",
                            508,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid220",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid279",
                            "opacity",
                            262,
                            97,
                            "easeInOutQuad",
                            "${num4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid280",
                            "opacity",
                            358,
                            82,
                            "easeInOutQuad",
                            "${num4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1303",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1322",
                            "opacity",
                            146,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1323",
                            "opacity",
                            250,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_VacationCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1274",
                            "scaleX",
                            350,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1.32',
                            '1.32'
                        ],
                        [
                            "eid1275",
                            "scaleX",
                            454,
                            0,
                            "easeInOutQuad",
                            "${Ico_VacationCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1310",
                            "opacity",
                            0,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1311",
                            "opacity",
                            100,
                            0,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            2515,
                            500,
                            "easeInOutQuad",
                            "${Ico_Vacation}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1329",
                            "left",
                            2515,
                            167,
                            "easeInOutQuad",
                            "${num9}",
                            '17px',
                            '282px'
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
                            id: 'WordEND_1',
                            rect: ['-262px', '0px', '212px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordEND_2',
                            rect: ['-262px', '34px', '184px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordEND_3',
                            rect: ['-262px', '68px', '125px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordEND_4',
                            rect: ['-262px', '102px', '199px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordEND_5',
                            rect: ['-262px', '136px', '172px', '23px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordEND_6',
                            rect: ['-262px', '172px', '132px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordEND_6.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'cta2',
                            symbolName: 'cta',
                            rect: ['-229px', '205', '211', '36', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '284px', '246px']
                        }
                    }
                },
                timeline: {
                    duration: 53000,
                    autoPlay: false,
                    data: [
                        [
                            "eid336",
                            "left",
                            504,
                            392,
                            "easeInOutCubic",
                            "${WordEND_6}",
                            '-262px',
                            '19px'
                        ],
                        [
                            "eid344",
                            "left",
                            52500,
                            500,
                            "easeInOutCubic",
                            "${WordEND_6}",
                            '19px',
                            '343px'
                        ],
                        [
                            "eid328",
                            "left",
                            0,
                            393,
                            "easeInOutCubic",
                            "${WordEND_1}",
                            '-262px',
                            '71px'
                        ],
                        [
                            "eid340",
                            "left",
                            50000,
                            500,
                            "easeInOutCubic",
                            "${WordEND_1}",
                            '71px',
                            '343px'
                        ],
                        [
                            "eid334",
                            "left",
                            198,
                            392,
                            "easeInOutCubic",
                            "${WordEND_3}",
                            '-262px',
                            '50px'
                        ],
                        [
                            "eid343",
                            "left",
                            51000,
                            500,
                            "easeInOutCubic",
                            "${WordEND_3}",
                            '50px',
                            '343px'
                        ],
                        [
                            "eid367",
                            "left",
                            697,
                            392,
                            "easeInOutQuad",
                            "${cta2}",
                            '-229px',
                            '2px'
                        ],
                        [
                            "eid338",
                            "left",
                            393,
                            393,
                            "easeInOutCubic",
                            "${WordEND_5}",
                            '-262px',
                            '29px'
                        ],
                        [
                            "eid345",
                            "left",
                            52000,
                            500,
                            "easeInOutCubic",
                            "${WordEND_5}",
                            '29px',
                            '343px'
                        ],
                        [
                            "eid332",
                            "left",
                            304,
                            393,
                            "easeInOutCubic",
                            "${WordEND_4}",
                            '-262px',
                            '40px'
                        ],
                        [
                            "eid342",
                            "left",
                            51500,
                            500,
                            "easeInOutCubic",
                            "${WordEND_4}",
                            '40px',
                            '343px'
                        ],
                        [
                            "eid330",
                            "left",
                            111,
                            393,
                            "easeInOutCubic",
                            "${WordEND_2}",
                            '-262px',
                            '59px'
                        ],
                        [
                            "eid339",
                            "left",
                            50500,
                            500,
                            "easeInOutCubic",
                            "${WordEND_2}",
                            '59px',
                            '343px'
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
                            rect: ['0', '0', '211', '36', 'auto', 'auto'],
                            id: 'cta_B',
                            symbolName: 'cta_B',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '211', '36', 'auto', 'auto'],
                            id: 'cta_A',
                            symbolName: 'cta_A',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '211px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "start": 500,
                        "hover": 1000
                    },
                    data: [
                        [
                            "eid384",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_A}",
                            '1',
                            '1'
                        ],
                        [
                            "eid385",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${cta_A}",
                            '1',
                            '0'
                        ],
                        [
                            "eid386",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_B}",
                            '0',
                            '0'
                        ],
                        [
                            "eid387",
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
                            type: 'image',
                            id: 'CTA_P1',
                            opacity: '1',
                            rect: ['0px', '0px', '211px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CTA_P1.png', '0px', '0px']
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
                            rect: [null, null, '211px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid395",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_black}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid396",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_black}",
                            '20px',
                            '16px'
                        ],
                        [
                            "eid397",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_black}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid398",
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
                            type: 'image',
                            id: 'CTA_hover',
                            opacity: '1',
                            rect: ['0px', '0px', '211px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CTA_hover.png', '0px', '0px']
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
                            rect: [null, null, '211px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid399",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_white}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid400",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_white}",
                            '20px',
                            '16px'
                        ],
                        [
                            "eid401",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_white}",
                            '16px',
                            '20px'
                        ],
                        [
                            "eid402",
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
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Michelin_300x600_P2_edgeActions.js");
})("EDGE-285757307");
