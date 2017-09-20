var programs = [
	{
		"Id": 1,
		"sortField": 1,
		"title": "Program 1 Title",
		"description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
		"image": "http://placehold.it/600x600",
		"isActive" : true
	},
	{
		"Id": 2,
		"sortField": 2,
		"title": "Program 2 Title",
		"description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
		"image": "http://placehold.it/600x600",
		"isActive" : true
	},
	{
		"Id": 3,
		"sortField": 3,
		"title": "Program 3 Title",
		"description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
		"image": "http://placehold.it/600x600",
		"isActive" : true
	}
];

var menus = [
    {
        "Id": 1, 
        "SortField": 1,
        "menuName": "About Us", 
        "isActive": true,
        "menuItems": [
            { "Id": 1, "itemName": "Our Mission", "itemURL": "#/mission", "isActive": true },
            { "Id": 2, "itemName": "Our Team", "itemURL": "#/team", "isActive": true }
        ]
    },
    {
        "Id": 2, 
        "SortField": 2,
        "menuName": "Our Work", 
        "isActive": true,
        "menuItems": [
            { "Id": 1, "itemName": "Our Programs", "itemURL": "#/programs", "isActive": true },
            { "Id": 2, "itemName": "Our Impact", "itemURL": "#/impact", "isActive": true },
            { "Id": 3, "itemName": "About Kidney Transplants", "itemURL": "#/kidneytransplant", "isActive": true },
            { "Id": 4, "itemName": "About Liver Transplants", "itemURL": "#/livertransplant", "isActive": true },
            { "Id": 5, "itemName": "About Lung Transplants", "itemURL": "#/lungtransplant", "isActive": true },
            { "Id": 6, "itemName": "Other Transplants", "itemURL": "#/othertransplant", "isActive": true }
        ]
    },
    {
        "Id": 3, 
        "SortField": 3,
        "menuName": "Be Involved", 
        "isActive": true,
        "menuItems": [
            { "Id": 1, "itemName": "Become a Volunteer", "itemURL": "#/volunteer", "isActive": true },
            { "Id": 2, "itemName": "Host a Fundraiser in Your Area", "itemURL": "#/fundraiser", "isActive": false },
            { "Id": 3, "itemName": "Make a Donation Now", "itemURL": "#/donate", "isActive": false }
        ]
    },
    {
        "Id": 4, 
        "SortField": 4,
        "menuName": "Resources", 
        "isActive": true,
        "menuItems": [
            { "Id": 1, "itemName": "In the News", "itemURL": "#/news", "isActive": true },
            { "Id": 2, "itemName": "Links", "itemURL": "#/links", "isActive": true },
            { "Id": 3, "itemName": "Our Blog", "itemURL": "#/blog", "isActive": false },
            { "Id": 4, "itemName": "Volunteer Materials", "itemURL": "#/materials", "isActive": false }
        ]
    },
    {
        "Id": 5, 
        "SortField": 5,
        "menuName": "Gift of Life", 
        "isActive": false,
        "menuItems": [
            { "Id": 1, "itemName": "Looking for a Donor", "itemURL": "#/findadonor", "isActive": false },
            { "Id": 2, "itemName": "Become a Donor", "itemURL": "#/becomeadonor", "isActive": false }
        ]
    }
];

var footerlinks = 	[
            { "Id": 1, "itemName": "About Us",		"itemSub": "Who we are",		"itemURL": "#/mission"		, "isActive": 	true },
            { "Id": 2, "itemName": "Our Work",		"itemSub": "What we do",		"itemURL": "#/programs"		, "isActive": 	true },
            { "Id": 3, "itemName": "Our Team",		"itemSub": "Meet our team",		"itemURL": "#/team"			, "isActive": 	true },
            { "Id": 4, "itemName": "Blog",			"itemSub": "Breaking news",		"itemURL": "#/blog"			, "isActive": 	false },
            { "Id": 5, "itemName": "Gift of Live",	"itemSub": "be a Donor",		"itemURL": "#/becomeadonor"	, "isActive": 	false }
        ];

var followusitems =	[
            { "Id": 1, "itemURL": "#", "itemName": "Follow Us on Google+",  "isActive": true, "itemClass": "fa fa-google-plus" },
            { "Id": 2, "itemURL": "#", "itemName": "Follow Us on Twitter",  "isActive": true, "itemClass": "fa fa-twitter" },
            { "Id": 3, "itemURL": "#", "itemName": "Follow Us on Tumblr",   "isActive": true, "itemClass": "fa fa-tumblr" },
            { "Id": 4, "itemURL": "#", "itemName": "Follow Us on Facebook", "isActive": true, "itemClass": "fa fa-facebook" },
            { "Id": 5, "itemURL": "#", "itemName": "Follow Us on YouTube",  "isActive": true, "itemClass": "fa fa-youtube-play" },
        ];

var blogs = [
    {
        "Id": 1,
        "blogName": "This is the First Blog",
        "blogAuthor": "Some Lady",
        "blogSubtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "blogCategory": "Kidney Disease",
        "blogDate": "6/14/2015",
        "blogImage": "http://placehold.it/1200x600",
        "blogSmall": "http://placehold.it/1024x768",
        "blogThumb": "http://placehold.it/600x600",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "Id": 2,
        "blogName": "This is the Second Blog",
        "blogAuthor": "Some Lady",
        "blogSubtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "blogCategory": "Kidney Disease",
        "blogDate": "6/14/2015",
        "blogImage": "http://placehold.it/1200x600",
        "blogSmall": "http://placehold.it/1024x768",
        "blogThumb": "http://placehold.it/600x600",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "Id": 3,
        "blogName": "This is the Third Blog",
        "blogAuthor": "Some Lady",
        "blogSubtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "blogCategory": "Kidney Disease",
        "blogDate": "6/14/2015",
        "blogImage": "http://placehold.it/1200x600",
        "blogSmall": "http://placehold.it/1024x768",
        "blogThumb": "http://placehold.it/600x600",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { 
        "Id": 4,
        "blogName": "This is the Forth Blog",
        "blogAuthor": "Some Lady",
        "blogSubtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "blogCategory": "Kidney Disease",
        "blogDate": "6/14/2015",
        "blogImage": "http://placehold.it/1200x600",
        "blogSmall": "http://placehold.it/1024x768",
        "blogThumb": "http://placehold.it/600x600",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    { 
        "Id": 5,
        "blogName": "This is the Fifth Blog",
        "blogAuthor": "Some Lady",
        "blogSubtext": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "blogCategory": "Kidney Disease",
        "blogDate": "6/14/2015",
        "blogImage": "http://placehold.it/1200x600",
        "blogSmall": "http://placehold.it/1024x768",
        "blogThumb": "http://placehold.it/600x600",
        "blogText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

/*
var materials =	[
        {
            "Id": 1,
            "IsNew": true,
            "materialName": "Material Name 1",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 2,
            "IsNew": true,
            "materialName": "Material Name 2",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 3,
            "IsNew": true,
            "materialName": "Material Name 3",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 4,
            "IsNew": false,
            "materialName": "Material Name 4",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 5,
            "IsNew": false,
            "materialName": "Material Name 5",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 6,
            "IsNew": false,
            "materialName": "Material Name 6",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 7,
            "IsNew": false,
            "materialName": "Material Name 7",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 8,
            "IsNew": false,
            "materialName": "Material Name 8",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 9,
            "IsNew": false,
            "materialName": "Material Name 9",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 10,
            "IsNew": false,
            "materialName": "Material Name 10",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 11,
            "IsNew": false,
            "materialName": "Material Name 11",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "Id": 12,
            "IsNew": false,
            "materialName": "Material Name 12",
            "materialCategory": "Kidney Disease",
            "materialDate": "6/14/2015",
            "materialImage": "http://placehold.it/1200x400",
            "materialThumb": "http://placehold.it/400x300",
            "materialText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];
*/
var articles = 	[
        {
            "Id": 1,
            "articleImage": "assets/img/news/rabecca1.jpg",
            "articleName": "Sponsoring the Partnership Between Living Donors & Recipients",
            "articleSource": "Mountain News, Lake Arrowhead, CA",
            "articleAuthor": "Andrea Garcia",
            "articleDate": "Monday, May 30, 2016",
            "articleURL": "http://www.mountain-news.com/news/article_5687e3b6-22d2-11e6-b8d2-97bbe381df77.html",
            "articleShort": "Through a strong passion to help those in need, and help make an intensive process easier, the Donor Recipient Partnership (DRP) Foundation was started. It did not stop at raising close to $15,000 for Chad Beers, or at Crestline resident Rabecca Fortunato being a living donor. Her interest in helping those in need sparked the idea of a nonprofit organization that can, and will, do just that. ",
            "isActive": true
        },
        {
            "Id": 2,
            "articleImage": "assets/img/news/chad1.jpg",
            "articleName": "The Courage of a Living Donor",
            "articleSource": "Mountain News, Lake Arrowhead, CA",
            "articleAuthor": "Andrea Garcia",
            "articleDate": "Monday, March 21, 2016",
            "articleURL": "http://www.mountain-news.com/mountain_living/article_a8bf2620-ebd8-11e5-ae89-1711b024fd63.html",
            "articleShort": "A small laugh came from mountain resident Rabecca Fortunato when asked why she was so passionate about being a living donor. \"I laugh because I don’t know,\" she said. \"Honestly I think that everyone should do what they can to help other people.\"",
            "isActive": true
        },
        {
            "Id": 3,
            "articleImage": "assets/img/news/rabecca2.jpg",
            "articleName": "Woman offers kidney to Navy veteran she’s never met",
            "articleSource": "Redlands Daily Facts",
            "articleAuthor": "Phill Courtney",
            "articleDate": "Friday, December 25, 2015",
            "articleURL": "http://www.redlandsdailyfacts.com/health/20151225/woman-offers-kidney-to-navy-veteran-shes-never-met",
            "articleShort": "",
            "isActive": true
        },
        {
            "Id": 4,						
            "articleImage": "http://placehold.it/700x525",
            "articleName": "The Courage of a Living Donor 4",
            "articleSource": "Mountain News",
            "articleAuthor": "Some Lady",
            "articleDate": "Monday, March 21, 2016",
            "articleURL": "http://www.mountain-news.com/mountain_living/article_a8bf2620-ebd8-11e5-ae89-1711b024fd63.html",
            "articleShort": "",
            "isActive": false
        }
    ];

var links = 	[
        { "Id": 1, "linkName": "UNOS",			"linkSub": " - United Network for Organ Sharing",									"linkURL": "https://www.unos.org/",										"isActive": 	true },
        { "Id": 2, "linkName": "theLivingBank",	"linkSub": "",																		"linkURL": "https://www.livingbank.org/", 								"isActive": 	true },
        { "Id": 3, "linkName": "NKR",			"linkSub": " - National Kidney Registry",											"linkURL": "http://kidneyregistry.org", 								"isActive": 	true },
        { "Id": 4, "linkName": "organdonor.gov",	"linkSub": " - U.S. Government Information on Organ Donation and Transplantation",	"linkURL": "http://www.organdonor.gov", 								"isActive": 	true },
        { "Id": 5, "linkName": "LD101",			"linkSub": " - Living Donor 101",													"linkURL": "http://www.livingdonor101.com/livingdonorregistry.shtml",	"isActive": 	true }
    ];

var people = 	[
        {
            "Id": 1,
            "isActive"				: true,
            "isLeader" 				: true,
            "personImage" 			: "assets/img/team/RabeccaTeamPic.jpg",
            "personTitle" 			: "President",
            "personName" 			: "Rabecca Fortunato",
            "personDescription" 	: "Rabecca has extensive experience in management responsibilities with overall business activities including all communications both internally and externally. Rabecca is a respected and caring leader in her community. She is responsible for day to day operations and participates as needed in special projects. Rabecca is experienced, knowledgeable, outgoing, energetic, professional, and ready to embrace new challenges. She is driven to establish and achieve business objectives. She is a resourceful team member, skilled in identifying project needs, and creatively solving problems. As a living donor, herself, she understands firsthand the unique challenges that a donor faces, and can assist in helping with an understanding of the process that few have.",
            "personGoogle" 			: "#",
            "personTwitter" 		: "#",
            "personLinkedIn"		: "#",
            "personFacebook"		: "#"
        },
        {
            "Id": 2,
            "isActive"				: true,
            "isLeader" 				: true,
            "personImage" 			: "assets/img/team/ChadTeamPic.jpg",
            "personTitle" 			: "Vice President",
            "personName" 			: "Chad Beers",
            "personDescription" 	: "Chad is a U.S. Navy Veteran, who has volunteered extensively with Habitat for Humanity as well as a nonprofit organization for military spouses. With this organization, he advocated to change policies in support of military members and military spouses. He was a small business owner at 25 years old as an electrical contractor. He is a Master Electrician with over 17 years of experience. He was the Superintendent of many multi-million dollar projects, managing as many as 40 journeyman and apprentices at one time. As an organ recipient, Chad is very passionate and dedicated in paying forward the success of the foundation by achieving the goals of helping others.",
            "personGoogle" 			: "#",
            "personTwitter" 		: "#",
            "personLinkedIn"		: "#",
            "personFacebook"		: "#"
        },
        {
            "Id": 3,
            "isActive"				: true,
            "isLeader" 				: false,
            "personImage" 			: "assets/img/team/TeriTeamPic.jpg",
            "personTitle" 			: "Treasurer",
            "personName" 			: "Teri Lee",
            "personDescription" 	: "With over fifteen years of experience as a bookkeeper Teri has offered her services as Treasurer to our company. She has thirteen years of experience directly working for non-profit corporation bookkeeping. She is also owner of her own bookkeeping business",
            "personGoogle" 			: "#",
            "personTwitter" 		: "#",
            "personLinkedIn"		: "#",
            "personFacebook"		: "#"
        },
        {
            "Id": 4,
            "isActive"				: true,
            "isLeader" 				: false,
            "personImage" 			: "assets/img/team/BeckyTeamPic.jpg",
            "personTitle" 			: "Secretary",
            "personName" 			: "Becky Beers",
            "personDescription" 	: "Becky is a Lt. Colon in the United States Air Force. Her husband suffers from a kidney disease that requires a kidney transplant. She is passionate about this company and the prospect of making this world a better place. Becky offers us her services and experience as a military member dedicated to making this country a better place and as a spouse of an organ transplant recipient.",
            "personGoogle" 			: "#",
            "personTwitter" 		: "#",
            "personLinkedIn"		: "#",
            "personFacebook"		: "#"
        },
        {
            "Id": 5,
            "isActive"				: true,
            "isLeader" 				: false,
            "personImage" 			: "assets/img/team/PatrickTeamPic.jpg",
            "personTitle" 			: "Director",
            "personName" 			: "Patrick Fortunato Jr",
            "personDescription" 	: "Patrick has worked in the IT field for twenty years and is in charge of our website and IT department. Patrick has a Bachelor’s degree in Computer Science with six years’ experience in the private sector and eleven and a half years in the United States Air Force.",
            "personGoogle" 			: "#",
            "personTwitter" 		: "#",
            "personLinkedIn"		: "https://www.linkedin.com/in/patrickfortunato",
            "personFacebook"		: "#"
        }
    ];