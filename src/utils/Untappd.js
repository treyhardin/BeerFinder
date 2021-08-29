
const beers = [
    {
        "beer": {
            "bid": 1,
            "beer_name": "Illogical Conclusion",
            "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
            "beer_slug": "illogical-conclusion",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Three's Brewing"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 11,
                        "beer_name": "Trapdoor Exit",
                        "beer_label": process.env.PUBLIC_URL + "/Label_420.png",
                        "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisan Ales"
                    },
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_DaisyCutter.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_PseudoSue.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 2,
            "beer_name": "Superhero Sidekicks",
            "beer_label": process.env.PUBLIC_URL + "/Label_420.png",
            "beer_slug": "superhero-sidekicks",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 11,
                        "beer_name": "Trapdoor Exit",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "trapdoor-exit",
                        "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisan Ales"
                    },
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 3,
            "beer_name": "All Day IPA",
            "beer_label": process.env.PUBLIC_URL + "/Label_DaisyCutter.png",
            "beer_slug": "all-day-ipa",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Founders"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                },
                {
                    "beer": {
                        "bid": 11,
                        "beer_name": "Trapdoor Exit",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisan Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 4,
            "beer_name": "Tesseract",
            "beer_label": process.env.PUBLIC_URL + "/Label_PsuedoSue.png",
            "beer_slug": "tesseract",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 11,
                        "beer_name": "Trapdoor Exit",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisan Ales"
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 5,
            "beer_name": "Bubble Massage",
            "beer_label": process.env.PUBLIC_URL + "/Label_SpaceStation.png",
            "beer_slug": "bubble-massage",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 6,
            "beer_name": "Frolic",
            "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
            "beer_slug": "frolic",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 7,
            "beer_name": "Bubble Massage",
            "beer_label": process.env.PUBLIC_URL + "/Label_420.png",
            "beer_slug": "bubble-massage",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 8,
            "beer_name": "Everything's Ok",
            "beer_label": process.env.PUBLIC_URL + "/Label_DaisyCutter.png",
            "beer_slug": "everythings-ok",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 9,
            "beer_name": "Zero Coast",
            "beer_label": process.env.PUBLIC_URL + "/Label_PseudoSue.png",
            "beer_slug": "zero-coast",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 10,
            "beer_name": "Xenos",
            "beer_label": process.env.PUBLIC_URL + "/Label_SpaceStation.png",
            "beer_slug": "xenox",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisin Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    },
    {
        "beer": {
            "bid": 11,
            "beer_name": "Trapdoor Exit",
            "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
            "beer_slug": "trapdoor-exit",
            "beer_description": "The long, cold nights of winter are a little brighter with Celebration Ale. Wonderfully robust and rich, Celebration Ale is dry-hopped for a lively, intense aroma. Brewed especially for the holidays, it is perfect for a festive gathering or for a quiet evening at home.",
            "beer_style": "IPA",
        },
        "brewery": {
            "brewery_name": "Grimm Artisan Ales"
        },
        "similar": {
            "items": [
                {
                    "beer": {
                        "bid": 2,
                        "beer_name": "Stone Enjoy By 12.26.14 IPA",
                        "beer_style": "Imperial / Double IPA",
                        "beer_label": "https://d1c8v1qci5en44.cloudfront.net/site/beer_logos/beer-881386_1a85e_sm.jpeg",
                    },
                    "brewery": {
                        "brewery_name": "Stone Brewing Co.",
                    }
                },
                {
                    "beer": {
                        "bid": 3,
                        "beer_name": "All Day IPA",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_style": "IPA",
                    },
                    "brewery": {
                        "brewery_name": "Founders"
                    }
                },
                {
                    "beer": {
                        "bid": 4,
                        "beer_name": "Tesseract",
                        "beer_label": process.env.PUBLIC_URL + "/Label_AlphaKing.png",
                        "beer_slug": "tesseract"
                    },
                    "brewery": {
                        "brewery_name": "Grimm Artisin Ales"
                    }
                }
            ]
        }
    }
]

export default beers;