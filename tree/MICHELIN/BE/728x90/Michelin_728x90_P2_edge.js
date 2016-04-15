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
                            rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [1,"rgba(0,0,0,0.50)","solid"]
                        },
                        {
                            id: 'BG_Michelin',
                            type: 'image',
                            rect: ['0', '0px', '728px', '90px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bg_michelin.jpg",'0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(0,0,0,0.50)","solid"]
                        },
                        {
                            id: 'WordingEnd',
                            symbolName: 'WordingEnd',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '728', '90', 'auto', 'auto']
                        },
                        {
                            id: 'vacation',
                            symbolName: 'vacation',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '728', '90', 'auto', 'auto']
                        },
                        {
                            id: 'weekend',
                            symbolName: 'weekend',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '728', '90', 'auto', 'auto']
                        },
                        {
                            id: 'Wording_Start',
                            symbolName: 'Wording_Start',
                            type: 'rect',
                            rect: ['0', '0', '728', '90', 'auto', 'auto']
                        },
                        {
                            id: 'Action',
                            type: 'rect',
                            rect: ['0px', '0px', '728px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.00)"],
                            stroke: [1,"rgba(0, 0, 0, 0.498039)","none"]
                        },
                        {
                            id: 'notices',
                            display: 'none',
                            type: 'group',
                            rect: ['0', '0', '728px', '90px', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '726px', '88px', 'auto', 'auto'],
                                fill: ["rgba(218,218,218,1.00)"],
                                stroke: [1,"rgba(0, 0, 0, 0.498039)","solid"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['23px', '8px', '698px', '90px', 'auto', 'auto'],
                                overflow: 'auto',
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(127, 119, 119);\">(1) Berekend volgens de gemiddelde afstand naar de kust voor de Benelux-landen, nl. 256km heen en terug van thuis naar Noordzee. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(2) Berekend volgens de gemiddelde afstand naar Parijs voor de Benelux-landen, nl. 854km heen en terug van Tilburg naar Parijs. Bron: maps.google.com, 11/01/2016.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">(3) Resultaten uit tests uitgevoerd door DEKRA TEST CENTER op aanvraag van Michelin, in 2014 en 2015 afhankelijk van de gamma’s, op het verschil tussen de gemiddelde kilometers van de MICHELIN gamma’s (MICHELIN Energy Saver +, MICHELIN Pilot Sport 4, MICHELIN Primacy 3, MICHELIN Pilot Super Sport, MICHELIN CrossClimate, MICHELIN Latitude Sport 3) en de gemiddelde kilometers van de gamma’s van de concurrenten: BRIDGESTONE (Ecopia EP150, Potenza S001, Turanza T001, Dueler H/P Sport), CONTINENTAL (ContiEcoContact 5, ContiSportContact 5, ContiPremiumContact 5, ContiSportContact 5P AO, ContiSportContact 5 SUV), DUNLOP (Sport BluResponse, Sport Maxx RT, SP QuattroMaxx), GOODYEAR (EfficientGrip Performance, Eagle F1 Asymmetric 2, Vector 4Seasons Gen-2, Eagle F1 Asymmetric SUV), PIRELLI (Cinturato P1 Verde Ecoimpact, P Zero, Cinturato P7 Ecoimpact, P Zero Silver, Cinturato All Season, P Zero Rosso), HANKOOK (Kinergy 4S, Ventus S1 Evo2 SUV), VREDESTEIN (Quatrac 5), NOKIAN (Weatherproof).</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(127, 119, 119);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-size: 9px; color: rgb(127, 119, 119);\"></span></p>",
                                font: ['Arial, Helvetica, sans-serif', [9, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'close_info',
                            display: 'none',
                            type: 'image',
                            rect: ['7px', '7px', '10px', '10px', 'auto', 'auto'],
                            clip: 'rect(-49px 64px 52px -85px)',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"close_info.png",'0px','0px']
                        },
                        {
                            id: 'information',
                            type: 'image',
                            rect: ['5px', '5px', '14px', '14px', 'auto', 'auto'],
                            clip: 'rect(-49px 64px 52px -99px)',
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"information.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '728px', '90px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10462,
                    autoPlay: true,
                    data: [
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
                            "eid373",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${weekend}",
                            'none',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            2868,
                            0,
                            "easeInOutCubic",
                            "${weekend}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${vacation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid378",
                            "display",
                            6875,
                            0,
                            "easeInOutCubic",
                            "${vacation}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "opacity",
                            2790,
                            554,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            9823,
                            639,
                            "easeInOutCubic",
                            "${BG_Michelin}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid383",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingEnd}",
                            'none',
                            'none'
                        ],
                        [
                            "eid384",
                            "display",
                            9938,
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
                            type: 'image',
                            id: 'WordingStart',
                            rect: ['-257px', '28px', '235px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WordingStart1',
                            rect: ['-268px', '50px', '238px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart1.png', '0px', '0px']
                        },
                        {
                            rect: ['937px', '61px', '115px', '15px', 'auto', 'auto'],
                            id: 'WordingStart2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/WordingStart2.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '728px', '90px', 'auto', 'auto'],
                            id: 'logo',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '728px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid16",
                            "left",
                            250,
                            250,
                            "easeInOutCubic",
                            "${WordingStart2}",
                            '-140px',
                            '42px'
                        ],
                        [
                            "eid380",
                            "left",
                            2800,
                            200,
                            "easeInOutCubic",
                            "${WordingStart2}",
                            '42px',
                            '937px'
                        ],
                        [
                            "eid1116",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingStart2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "left",
                            125,
                            250,
                            "easeInOutCubic",
                            "${WordingStart1}",
                            '-268px',
                            '81px'
                        ],
                        [
                            "eid382",
                            "left",
                            2800,
                            200,
                            "easeInOutCubic",
                            "${WordingStart1}",
                            '81px',
                            '937px'
                        ],
                        [
                            "eid1115",
                            "display",
                            3000,
                            0,
                            "easeInOutCubic",
                            "${logo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid12",
                            "left",
                            0,
                            283,
                            "easeInOutCubic",
                            "${WordingStart}",
                            '-257px',
                            '87px'
                        ],
                        [
                            "eid381",
                            "left",
                            2800,
                            200,
                            "easeInOutCubic",
                            "${WordingStart}",
                            '87px',
                            '937px'
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
                            rect: ['347px', '4px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.31', '1.32']],
                            id: 'icoWeekendCopy37',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['347px', '34px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy36',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['347px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy35',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['307px', '4px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.31', '1.32']],
                            id: 'icoWeekendCopy34',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['307px', '34px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy33',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['307px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy32',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['270px', '5px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy31',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['270px', '35px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy30',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['270px', '35px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekend',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['269px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['234px', '4px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['233px', '34px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['232px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['196px', '4px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['196px', '33px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['195px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['158px', '5px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['158px', '33px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['157px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '4px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '33px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['120px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy18',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '5px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy19',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['82px', '33px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy20',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['83px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy21',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['46px', '5px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy22',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '33px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.33', '1.32']],
                            id: 'icoWeekendCopy23',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['45px', '62px', '23px', '26px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.32', '1.32']],
                            id: 'icoWeekendCopy24',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoWeekend.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num20Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num30.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num19Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num29.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num18Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num28.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num17Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num27.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num16Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num26.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num15Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num25.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num14Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num24.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num13Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num23.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num12Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num22.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num11Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num21.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num20',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num20.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num19',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num19.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num18',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num18.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num17',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num17.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num16',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num16.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num15',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num15.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num14',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num14.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num13.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num12',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num12.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num11.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num10.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num3',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            rect: ['477px', '30px', '76px', '36px', 'auto', 'auto'],
                            id: 'num1',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        },
                        {
                            rect: ['751px', '8px', '129px', '16px', 'auto', 'auto'],
                            id: 'WeekendWord1',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WeekendWord1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord2',
                            rect: ['739px', '33px', '64px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingOuting2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord3',
                            rect: ['744px', '48px', '128px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/wordingOuting3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'WeekendWord4',
                            rect: ['744px', '63px', '142px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/WeekendWord4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '728px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 4027,
                    autoPlay: false,
                    data: [
                        [
                            "eid64",
                            "left",
                            0,
                            50,
                            "easeInOutCubic",
                            "${WeekendWord1}",
                            '751px',
                            '396px'
                        ],
                        [
                            "eid242",
                            "left",
                            3550,
                            159,
                            "easeInOutCubic",
                            "${WeekendWord1}",
                            '396px',
                            '792px'
                        ],
                        [
                            "eid438",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy9}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1231",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1223",
                            "opacity",
                            200,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1224",
                            "opacity",
                            300,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '1',
                            '1'
                        ],
                        [
                            "eid682",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1069",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1024",
                            "opacity",
                            260,
                            65,
                            "easeInOutCubic",
                            "${num5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1054",
                            "opacity",
                            325,
                            65,
                            "easeInOutCubic",
                            "${num5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid512",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy11}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num18Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1332",
                            "opacity",
                            1750,
                            65,
                            "easeInOutCubic",
                            "${num18Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1333",
                            "opacity",
                            1815,
                            65,
                            "easeInOutCubic",
                            "${num18Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid434",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1205",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy24}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1206",
                            "opacity",
                            100,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid732",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1230",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1201",
                            "opacity",
                            150,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1202",
                            "opacity",
                            250,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '1',
                            '1'
                        ],
                        [
                            "eid692",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1305",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1256",
                            "opacity",
                            1170,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            1270,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '1',
                            '0'
                        ],
                        [
                            "eid435",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1292",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1197",
                            "opacity",
                            500,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1198",
                            "opacity",
                            600,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '1',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1078",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1012",
                            "opacity",
                            845,
                            65,
                            "easeInOutCubic",
                            "${num14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1048",
                            "opacity",
                            910,
                            65,
                            "easeInOutCubic",
                            "${num14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1302",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1235",
                            "opacity",
                            1000,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1236",
                            "opacity",
                            1100,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1237",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1074",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1044",
                            "opacity",
                            585,
                            65,
                            "easeInOutCubic",
                            "${num10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1064",
                            "opacity",
                            650,
                            65,
                            "easeInOutCubic",
                            "${num10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1267",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy34}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid503",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1300",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1189",
                            "opacity",
                            900,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1190",
                            "opacity",
                            1000,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1283",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid684",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy20}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1076",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1040",
                            "opacity",
                            715,
                            65,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1062",
                            "opacity",
                            780,
                            65,
                            "easeInOutCubic",
                            "${num12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1026",
                            "opacity",
                            520,
                            65,
                            "easeInOutCubic",
                            "${num9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1055",
                            "opacity",
                            585,
                            65,
                            "easeInOutCubic",
                            "${num9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1322",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num15Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1323",
                            "opacity",
                            1560,
                            65,
                            "easeInOutCubic",
                            "${num15Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1324",
                            "opacity",
                            1625,
                            65,
                            "easeInOutCubic",
                            "${num15Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid504",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy7}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1309",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1284",
                            "opacity",
                            1370,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1285",
                            "opacity",
                            1470,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1286",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1248",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1081",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1030",
                            "opacity",
                            1040,
                            65,
                            "easeInOutCubic",
                            "${num17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1057",
                            "opacity",
                            1105,
                            65,
                            "easeInOutCubic",
                            "${num17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1299",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1191",
                            "opacity",
                            850,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1192",
                            "opacity",
                            950,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid554",
                            "left",
                            1600,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy6}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid437",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid431",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1337",
                            "left",
                            3550,
                            159,
                            "easeInOutCubic",
                            "${num20Copy}",
                            '477px',
                            '757px'
                        ],
                        [
                            "eid505",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid442",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy8}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid104",
                            "scaleX",
                            950,
                            100,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1308",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1277",
                            "opacity",
                            1300,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1278",
                            "opacity",
                            1400,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1279",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1245",
                            "scaleX",
                            1070,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid687",
                            "scaleY",
                            150,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1307",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1270",
                            "opacity",
                            1270,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1271",
                            "opacity",
                            1370,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1272",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '1',
                            '0'
                        ],
                        [
                            "eid555",
                            "top",
                            1600,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy6}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid1266",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy34}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1067",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1022",
                            "opacity",
                            130,
                            65,
                            "easeInOutCubic",
                            "${num3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1053",
                            "opacity",
                            195,
                            65,
                            "easeInOutCubic",
                            "${num3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1293",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1207",
                            "opacity",
                            550,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1208",
                            "opacity",
                            650,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid671",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy19}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid694",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy21}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid582",
                            "top",
                            500,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy11}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid1325",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num16Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1326",
                            "opacity",
                            1625,
                            65,
                            "easeInOutCubic",
                            "${num16Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1327",
                            "opacity",
                            1690,
                            65,
                            "easeInOutCubic",
                            "${num16Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1287",
                            "scaleX",
                            1370,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '1.31',
                            '1'
                        ],
                        [
                            "eid729",
                            "scaleX",
                            0,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy24}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1238",
                            "scaleX",
                            1000,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid702",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy22}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid507",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekend}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1301",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1187",
                            "opacity",
                            950,
                            0,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1188",
                            "opacity",
                            1050,
                            0,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '1',
                            '1'
                        ],
                        [
                            "eid414",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '1',
                            '0'
                        ],
                        [
                            "eid725",
                            "top",
                            215,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy23}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid679",
                            "scaleX",
                            200,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1255",
                            "scaleX",
                            1170,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid727",
                            "scaleY",
                            0,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy24}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1269",
                            "scaleX",
                            1270,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1071",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1042",
                            "opacity",
                            390,
                            65,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1063",
                            "opacity",
                            455,
                            65,
                            "easeInOutCubic",
                            "${num7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1262",
                            "scaleX",
                            1200,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '1.31',
                            '1'
                        ],
                        [
                            "eid712",
                            "scaleY",
                            50,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1229",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1199",
                            "opacity",
                            100,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1200",
                            "opacity",
                            200,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid706",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1247",
                            "scaleY",
                            1100,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1275",
                            "scaleY",
                            1300,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid509",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy2}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1014",
                            "opacity",
                            0,
                            65,
                            "easeInOutCubic",
                            "${num1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1049",
                            "opacity",
                            65,
                            65,
                            "easeInOutCubic",
                            "${num1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid581",
                            "left",
                            500,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy11}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid1241",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            400,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1246",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy31}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid678",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy20}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid511",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1228",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1215",
                            "opacity",
                            50,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1216",
                            "opacity",
                            150,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '1',
                            '1'
                        ],
                        [
                            "eid717",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1070",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1016",
                            "opacity",
                            325,
                            65,
                            "easeInOutCubic",
                            "${num6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1050",
                            "opacity",
                            390,
                            65,
                            "easeInOutCubic",
                            "${num6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid737",
                            "top",
                            100,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy24}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid1328",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num17Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1329",
                            "opacity",
                            1690,
                            65,
                            "easeInOutCubic",
                            "${num17Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1330",
                            "opacity",
                            1755,
                            65,
                            "easeInOutCubic",
                            "${num17Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid708",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy22}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1290",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1195",
                            "opacity",
                            400,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1196",
                            "opacity",
                            500,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '1',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid710",
                            "top",
                            200,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy22}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1276",
                            "scaleX",
                            1300,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy36}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1306",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1263",
                            "opacity",
                            1200,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1264",
                            "opacity",
                            1300,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1265",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1310",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num11Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1311",
                            "opacity",
                            1300,
                            65,
                            "easeInOutCubic",
                            "${num11Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1312",
                            "opacity",
                            1365,
                            65,
                            "easeInOutCubic",
                            "${num11Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid653",
                            "scaleY",
                            300,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid72",
                            "left",
                            1350,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord3}",
                            '744px',
                            '564px'
                        ],
                        [
                            "eid240",
                            "left",
                            3550,
                            159,
                            "easeInOutCubic",
                            "${WeekendWord3}",
                            '564px',
                            '792px'
                        ],
                        [
                            "eid1261",
                            "scaleY",
                            1200,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy34}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            650,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1288",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy37}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1304",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1249",
                            "opacity",
                            1100,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1250",
                            "opacity",
                            1200,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1251",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1254",
                            "scaleY",
                            1170,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy33}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1080",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1018",
                            "opacity",
                            975,
                            65,
                            "easeInOutCubic",
                            "${num16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1051",
                            "opacity",
                            1040,
                            65,
                            "easeInOutCubic",
                            "${num16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1077",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1036",
                            "opacity",
                            780,
                            65,
                            "easeInOutCubic",
                            "${num13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1060",
                            "opacity",
                            845,
                            65,
                            "easeInOutCubic",
                            "${num13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid724",
                            "left",
                            215,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy23}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid1239",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1259",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid94",
                            "scaleY",
                            450,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleY",
                            950,
                            100,
                            "easeInOutBounce",
                            "${icoWeekend}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1313",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num12Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1314",
                            "opacity",
                            1365,
                            65,
                            "easeInOutCubic",
                            "${num12Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1315",
                            "opacity",
                            1430,
                            65,
                            "easeInOutCubic",
                            "${num12Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1240",
                            "scaleY",
                            1070,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1260",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy33}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid648",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy17}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid707",
                            "left",
                            200,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy22}",
                            '46px',
                            '46px'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            500,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid433",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy3}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid510",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy9}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid514",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy8}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid703",
                            "scaleX",
                            100,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid688",
                            "scaleX",
                            150,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy21}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid116",
                            "scaleX",
                            700,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1253",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy32}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid508",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy10}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid432",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy7}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1295",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1203",
                            "opacity",
                            650,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1204",
                            "opacity",
                            750,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1233",
                            "scaleY",
                            1000,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy30}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1280",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid90",
                            "scaleY",
                            800,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1281",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy36}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1083",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1032",
                            "opacity",
                            1170,
                            65,
                            "easeInOutCubic",
                            "${num19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1058",
                            "opacity",
                            1235,
                            65,
                            "easeInOutCubic",
                            "${num19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1319",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num14Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1320",
                            "opacity",
                            1495,
                            65,
                            "easeInOutCubic",
                            "${num14Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1321",
                            "opacity",
                            1560,
                            65,
                            "easeInOutCubic",
                            "${num14Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1068",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1034",
                            "opacity",
                            195,
                            65,
                            "easeInOutCubic",
                            "${num4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1059",
                            "opacity",
                            260,
                            65,
                            "easeInOutCubic",
                            "${num4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            600,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid654",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy18}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid440",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy11}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            600,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            400,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy11}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid728",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy24}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid719",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy23}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid1291",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1209",
                            "opacity",
                            450,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1210",
                            "opacity",
                            550,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1340",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1341",
                            "opacity",
                            1235,
                            65,
                            "easeInOutCubic",
                            "${num20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1342",
                            "opacity",
                            1300,
                            65,
                            "easeInOutCubic",
                            "${num20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            750,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid108",
                            "scaleX",
                            900,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid118",
                            "scaleY",
                            700,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid660",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy18}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid666",
                            "scaleX",
                            250,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            1400,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord4}",
                            '744px',
                            '559px'
                        ],
                        [
                            "eid239",
                            "left",
                            3550,
                            159,
                            "easeInOutCubic",
                            "${WeekendWord4}",
                            '559px',
                            '792px'
                        ],
                        [
                            "eid1334",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num19Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            1815,
                            65,
                            "easeInOutCubic",
                            "${num19Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1336",
                            "opacity",
                            1880,
                            65,
                            "easeInOutCubic",
                            "${num19Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1338",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num20Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1339",
                            "opacity",
                            1880,
                            65,
                            "easeInOutCubic",
                            "${num20Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleX",
                            550,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid689",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy21}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid655",
                            "scaleX",
                            300,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid665",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy19}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1082",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1007",
                            "opacity",
                            1105,
                            65,
                            "easeInOutCubic",
                            "${num18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1045",
                            "opacity",
                            1170,
                            65,
                            "easeInOutCubic",
                            "${num18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            650,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy6}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleX",
                            800,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid114",
                            "scaleY",
                            750,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid699",
                            "left",
                            550,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy21}",
                            '83px',
                            '83px'
                        ],
                        [
                            "eid1268",
                            "scaleY",
                            1270,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy35}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1274",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy35}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            450,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy10}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            850,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleY",
                            500,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy9}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1075",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1028",
                            "opacity",
                            650,
                            65,
                            "easeInOutCubic",
                            "${num11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1056",
                            "opacity",
                            715,
                            65,
                            "easeInOutCubic",
                            "${num11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid643",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy17}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1294",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1225",
                            "opacity",
                            600,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1226",
                            "opacity",
                            700,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid733",
                            "left",
                            100,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy24}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid1303",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1242",
                            "opacity",
                            1070,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1243",
                            "opacity",
                            1170,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1244",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy31}",
                            '1',
                            '0'
                        ],
                        [
                            "eid436",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy10}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid98",
                            "scaleY",
                            550,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy8}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1079",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1010",
                            "opacity",
                            910,
                            65,
                            "easeInOutCubic",
                            "${num15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1047",
                            "opacity",
                            975,
                            65,
                            "easeInOutCubic",
                            "${num15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1066",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1020",
                            "opacity",
                            65,
                            65,
                            "easeInOutCubic",
                            "${num2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1052",
                            "opacity",
                            130,
                            65,
                            "easeInOutCubic",
                            "${num2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid506",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy4}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid698",
                            "top",
                            550,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy21}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid1282",
                            "scaleY",
                            1370,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy37}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid642",
                            "scaleX",
                            350,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid701",
                            "scaleY",
                            100,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy22}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid641",
                            "scaleY",
                            350,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1297",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1219",
                            "opacity",
                            750,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1220",
                            "opacity",
                            850,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid148",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            850,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy2}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1273",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy35}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1232",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1213",
                            "opacity",
                            250,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1214",
                            "opacity",
                            350,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '1',
                            '1'
                        ],
                        [
                            "eid669",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid439",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy5}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1289",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1221",
                            "opacity",
                            350,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1222",
                            "opacity",
                            450,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '1',
                            '1'
                        ],
                        [
                            "eid646",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1227",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1193",
                            "opacity",
                            300,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1194",
                            "opacity",
                            400,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '1',
                            '1'
                        ],
                        [
                            "eid658",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid664",
                            "scaleY",
                            250,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy19}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1316",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num13Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1317",
                            "opacity",
                            1430,
                            65,
                            "easeInOutCubic",
                            "${num13Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1318",
                            "opacity",
                            1495,
                            65,
                            "easeInOutCubic",
                            "${num13Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1252",
                            "scaleX",
                            1100,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy32}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid677",
                            "scaleY",
                            200,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy20}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1234",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy30}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid734",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy24}",
                            '23px',
                            '23px'
                        ],
                        [
                            "eid110",
                            "scaleY",
                            900,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid1072",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1038",
                            "opacity",
                            455,
                            65,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1061",
                            "opacity",
                            520,
                            65,
                            "easeInOutCubic",
                            "${num8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1296",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1211",
                            "opacity",
                            700,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1212",
                            "opacity",
                            800,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid149",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "left",
                            1300,
                            100,
                            "easeInOutCubic",
                            "${WeekendWord2}",
                            '739px',
                            '567px'
                        ],
                        [
                            "eid241",
                            "left",
                            3550,
                            159,
                            "easeInOutCubic",
                            "${WeekendWord2}",
                            '567px',
                            '792px'
                        ],
                        [
                            "eid714",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy23}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1298",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1217",
                            "opacity",
                            800,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1218",
                            "opacity",
                            900,
                            0,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            3550,
                            477,
                            "easeInOutBounce",
                            "${icoWeekendCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid713",
                            "scaleX",
                            50,
                            100,
                            "easeInOutBounce",
                            "${icoWeekendCopy23}",
                            '1.33',
                            '1'
                        ],
                        [
                            "eid441",
                            "height",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy6}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid513",
                            "width",
                            4027,
                            0,
                            "easeInOutCubic",
                            "${icoWeekendCopy6}",
                            '23px',
                            '23px'
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
                            type: 'image',
                            id: 'num62',
                            opacity: '1',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num1.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num52',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num42',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num3.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num32',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num4.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num22',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num5.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num12',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num6.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num7',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num7.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num8',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num8.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'num122',
                            opacity: '0',
                            rect: ['402px', '23px', '66px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/num9.png', '0px', '0px']
                        },
                        {
                            rect: ['752px', '9px', '40px', '16px', 'auto', 'auto'],
                            id: 'VacationWord1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/VacationWord1.png', '0px', '0px']
                        },
                        {
                            rect: ['746px', '30px', '211px', '12px', 'auto', 'auto'],
                            id: 'VacationWord2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wordingTrip2.png', '0px', '0px']
                        },
                        {
                            rect: ['747px', '46px', '99px', '12px', 'auto', 'auto'],
                            id: 'VacationWord3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wordingTrip3.png', '0px', '0px']
                        },
                        {
                            rect: ['760px', '60px', '146px', '12px', 'auto', 'auto'],
                            id: 'VacationWord4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/VacationWord4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['314px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy4',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['276px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy5',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['239px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy6',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['201px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy7',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['164px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy8',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['125px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy9',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['48px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy10',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1.2', '1.2']],
                            rect: ['87px', '18px', '29px', '56px', 'auto', 'auto'],
                            id: 'ici_vacationCopy11',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/icoVa.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '728px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid410",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid299",
                            "opacity",
                            300,
                            100,
                            "easeInOutCubic",
                            "${num32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid321",
                            "opacity",
                            400,
                            100,
                            "easeInOutCubic",
                            "${num32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1344",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1366",
                            "opacity",
                            100,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1367",
                            "opacity",
                            200,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '1',
                            '1'
                        ],
                        [
                            "eid839",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid848",
                            "scaleY",
                            0,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy11}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1343",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1372",
                            "opacity",
                            50,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1373",
                            "opacity",
                            150,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '1',
                            '1'
                        ],
                        [
                            "eid843",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid841",
                            "scaleX",
                            50,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid331",
                            "left",
                            1300,
                            100,
                            "easeInOutCubic",
                            "${VacationWord4}",
                            '760px',
                            '468px'
                        ],
                        [
                            "eid335",
                            "left",
                            2500,
                            167,
                            "easeInOutCubic",
                            "${VacationWord4}",
                            '468px',
                            '745px'
                        ],
                        [
                            "eid1346",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1362",
                            "opacity",
                            200,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            300,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '1',
                            '1'
                        ],
                        [
                            "eid831",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid832",
                            "scaleY",
                            200,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid412",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num52}",
                            '0',
                            '0'
                        ],
                        [
                            "eid293",
                            "opacity",
                            100,
                            100,
                            "easeInOutCubic",
                            "${num52}",
                            '0',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            200,
                            100,
                            "easeInOutCubic",
                            "${num52}",
                            '1',
                            '0'
                        ],
                        [
                            "eid327",
                            "left",
                            1200,
                            100,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '746px',
                            '484px'
                        ],
                        [
                            "eid332",
                            "left",
                            2500,
                            167,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '484px',
                            '745px'
                        ],
                        [
                            "eid1348",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1370",
                            "opacity",
                            300,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1371",
                            "opacity",
                            400,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '1',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid291",
                            "opacity",
                            0,
                            100,
                            "easeInOutCubic",
                            "${num62}",
                            '0',
                            '1'
                        ],
                        [
                            "eid320",
                            "opacity",
                            100,
                            100,
                            "easeInOutCubic",
                            "${num62}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1368",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1369",
                            "opacity",
                            100,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid847",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid269",
                            "scaleX",
                            350,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid767",
                            "height",
                            3000,
                            0,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid829",
                            "scaleX",
                            200,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy7}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1347",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1376",
                            "opacity",
                            250,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1377",
                            "opacity",
                            350,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '1',
                            '1'
                        ],
                        [
                            "eid827",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid329",
                            "left",
                            1250,
                            100,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '747px',
                            '476px'
                        ],
                        [
                            "eid333",
                            "left",
                            2500,
                            167,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '476px',
                            '745px'
                        ],
                        [
                            "eid840",
                            "scaleY",
                            100,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid833",
                            "scaleX",
                            150,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid325",
                            "left",
                            0,
                            50,
                            "easeInOutCubic",
                            "${VacationWord1}",
                            '752px',
                            '371px'
                        ],
                        [
                            "eid334",
                            "left",
                            2500,
                            167,
                            "easeInOutCubic",
                            "${VacationWord1}",
                            '371px',
                            '745px'
                        ],
                        [
                            "eid1349",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1374",
                            "opacity",
                            350,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1375",
                            "opacity",
                            450,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid340",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid765",
                            "height",
                            3000,
                            0,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid786",
                            "left",
                            2500,
                            167,
                            "easeInOutCubic",
                            "${num122}",
                            '402px',
                            '764px'
                        ],
                        [
                            "eid257",
                            "scaleX",
                            300,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid849",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num122}",
                            '0',
                            '0'
                        ],
                        [
                            "eid781",
                            "opacity",
                            800,
                            100,
                            "easeInOutCubic",
                            "${num122}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid295",
                            "opacity",
                            500,
                            100,
                            "easeInOutCubic",
                            "${num12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid768",
                            "opacity",
                            600,
                            100,
                            "easeInOutCubic",
                            "${num12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid411",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num42}",
                            '0',
                            '0'
                        ],
                        [
                            "eid289",
                            "opacity",
                            200,
                            100,
                            "easeInOutCubic",
                            "${num42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid322",
                            "opacity",
                            300,
                            100,
                            "easeInOutCubic",
                            "${num42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid828",
                            "scaleY",
                            250,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid845",
                            "scaleX",
                            0,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy11}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1345",
                            "opacity",
                            0,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1354",
                            "opacity",
                            150,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1355",
                            "opacity",
                            250,
                            0,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '1',
                            '1'
                        ],
                        [
                            "eid835",
                            "opacity",
                            2500,
                            500,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid409",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid297",
                            "opacity",
                            400,
                            100,
                            "easeInOutCubic",
                            "${num22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid323",
                            "opacity",
                            500,
                            100,
                            "easeInOutCubic",
                            "${num22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid854",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid770",
                            "opacity",
                            600,
                            100,
                            "easeInOutCubic",
                            "${num7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid771",
                            "opacity",
                            700,
                            100,
                            "easeInOutCubic",
                            "${num7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid764",
                            "width",
                            3000,
                            0,
                            "easeInOutCubic",
                            "${VacationWord2}",
                            '211px',
                            '211px'
                        ],
                        [
                            "eid853",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid775",
                            "opacity",
                            700,
                            100,
                            "easeInOutCubic",
                            "${num8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid784",
                            "opacity",
                            800,
                            100,
                            "easeInOutCubic",
                            "${num8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid844",
                            "scaleY",
                            50,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy10}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid271",
                            "scaleY",
                            350,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid766",
                            "width",
                            3000,
                            0,
                            "easeInOutCubic",
                            "${VacationWord3}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid836",
                            "scaleY",
                            150,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy8}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid259",
                            "scaleY",
                            300,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy5}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid825",
                            "scaleX",
                            250,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy6}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid837",
                            "scaleX",
                            100,
                            100,
                            "easeInOutBounce",
                            "${ici_vacationCopy9}",
                            '1.2',
                            '1'
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
                            rect: ['44px', '58px', '112px', '15px', 'auto', 'auto'],
                            id: 'WordingEnd3',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd3.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '44px', '216px', '19px', 'auto', 'auto'],
                            id: 'WordingEnd2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['25px', '23px', '494px', '16px', 'auto', 'auto'],
                            id: 'WordingEnd4',
                            fill: ['rgba(0,0,0,0)', 'images/WordingEnd.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'cta',
                            symbolName: 'cta',
                            rect: ['330px', '56px', '181', '31', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '728px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1118",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingEnd3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1117",
                            "display",
                            0,
                            0,
                            "easeInOutCubic",
                            "${WordingEnd4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid387",
                            "left",
                            312,
                            312,
                            "easeInOutCubic",
                            "${WordingEnd3}",
                            '-134px',
                            '44px'
                        ],
                        [
                            "eid416",
                            "opacity",
                            0,
                            0,
                            "easeInOutCubic",
                            "${cta}",
                            '0',
                            '0'
                        ],
                        [
                            "eid418",
                            "opacity",
                            472,
                            278,
                            "easeInOutCubic",
                            "${cta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid385",
                            "left",
                            0,
                            312,
                            "easeInOutCubic",
                            "${WordingEnd4}",
                            '-516px',
                            '25px'
                        ],
                        [
                            "eid367",
                            "left",
                            472,
                            278,
                            "easeInOutCubic",
                            "${cta}",
                            '-259px',
                            '330px'
                        ],
                        [
                            "eid386",
                            "left",
                            151,
                            312,
                            "easeInOutCubic",
                            "${WordingEnd2}",
                            '-266px',
                            '18px'
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
                            rect: ['0', '0', '181', '31', 'auto', 'auto'],
                            id: 'cta_B',
                            symbolName: 'cta_B',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '0', '181', '31', 'auto', 'auto'],
                            id: 'cta_A',
                            symbolName: 'cta_A',
                            opacity: '1',
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
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "start": 500,
                        "hover": 1000
                    },
                    data: [
                        [
                            "eid365",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_B}",
                            '0',
                            '0'
                        ],
                        [
                            "eid363",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${cta_B}",
                            '0',
                            '1'
                        ],
                        [
                            "eid364",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cta_A}",
                            '1',
                            '1'
                        ],
                        [
                            "eid362",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${cta_A}",
                            '1',
                            '0'
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
                            id: 'ctaBleu',
                            rect: ['0px', '0px', '181px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ctaBleu.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arrow_white',
                            rect: ['11px', '8px', '8px', '8px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow_white.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid349",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_white}",
                            '11px',
                            '15px'
                        ],
                        [
                            "eid350",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_white}",
                            '15px',
                            '11px'
                        ],
                        [
                            "eid351",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_white}",
                            '11px',
                            '15px'
                        ],
                        [
                            "eid352",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${arrow_white}",
                            '15px',
                            '11px'
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
                            id: 'ctaJaune',
                            rect: ['0px', '0px', '181px', '31px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ctaJaune.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'arrow_black',
                            rect: ['11px', '8px', '8px', '8px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow_black.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '181px', '31px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid354",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow_black}",
                            '11px',
                            '15px'
                        ],
                        [
                            "eid355",
                            "left",
                            500,
                            500,
                            "linear",
                            "${arrow_black}",
                            '15px',
                            '11px'
                        ],
                        [
                            "eid356",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${arrow_black}",
                            '11px',
                            '15px'
                        ],
                        [
                            "eid357",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${arrow_black}",
                            '15px',
                            '11px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Michelin_728x90_P2_edgeActions.js");
})("EDGE-31730006");
