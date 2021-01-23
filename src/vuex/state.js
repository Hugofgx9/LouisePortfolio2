const state = {
	windowWidth: window.innerWidth,

	works: {
		beeandflowers: {
			title: "Bee And Flowers",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_BEEANDFLOWERS.webp",
						"/media/IMAGE1/IMAGE1_BEEANDFLOWERS.jpg",
					],
					alternative: "",
					type: "image",
				},
				{
					id: "/media/IMAGE2/IMAGE2_VIDEO_BEEANDFLOWERS.mp4",
					alternative: "",
					type: "video",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_BEE_AND_FLOWERS.webp",
					"/media/PNG_MENU/PNG_MENU_BEE_AND_FLOWERS.png",
				],
			},
			software: ["Cinema 4D", "Photoshop"],
			description:
				"Print et animation vidéo composée autour de la notion de point de vue et de déconstruction ",
			type: "animation",
		},

		corona: {
			title: "Corona Virus",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_CORONA.webp",
						"/media/IMAGE1/IMAGE1_CORONA.png",
					],
					alternative: "",
					type: "image",
				},
				{
					id: "/media/IMAGE2/IMAGE2_VIDEO_CORONA.mp4",
					alternative: "",
					type: "video",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_CORONA.webp",
					"/media/PNG_MENU/PNG_MENU_CORONA.png",
				],
			},
			software: ["Cinema 4D", "Photoshop"],
			description:
				"Série de deux prints et une animation sur le théme du COVID-19 lors du premier confinement en France",
			type: "print + animation",
		},

		marcelbreuer: {
			title: "Marcel Breuer",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_MARCELBREUER.webp",
						"/media/IMAGE1/IMAGE1_MARCELBREUER.jpg",
					],
					alternative: "",
					type: "image",
				},
				{
					id: [
						"/media/IMAGE2/IMAGE2_MARCELBREUER.webp",
						"/media/IMAGE2/IMAGE2_MARCELBREUER.jpg",
					],
					alternative: "",
					type: "image",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_MARCEL_BREUER.webp",
					"/media/PNG_MENU/PNG_MENU_MARCEL_BREUER.png",
				],
			},
			software: ["Indesign", "Photoshop"],
			description:
				"Création d'un petit livret autour du design et architecte Marcel Breuer. Livret composé de prints fait à partir de ses créations ainsi que de texte expliquant chacun de ses travaux",
			type: "book",
		},

		ravingintheshower: {
			title: "Raving In The Shower",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_RAVINGINTHESHOWER.webp",
						"/media/IMAGE1/IMAGE1_RAVINGINTHESHOWER.png",
					],
					alternative: "",
					type: "image",
				},
				{
					id: "/media/IMAGE2/IMAGE2_VIDEO_RAVINGINTHESHOWER.mp4",
					alternative: "",
					type: "video",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_RAVING_IN_THE_SHOWER.webp",
					"/media/PNG_MENU/PNG_MENU_RAVING_IN_THE_SHOWER.png",
				],
			},
			software: ["Cinema 4D", "Photoshop"],
			description: `
				Cover et animation vidéo pour la sortie d'une track du duo BastonBstnBaston 
				<iframe style="margin-top: 20px;" width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810409741&color=%23f0dcf8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bastonbastonbaston" title="BASTONBSTNBASTON" target="_blank" style="color: #cccccc; text-decoration: none;">BASTONBSTNBASTON</a> · <a href="https://soundcloud.com/bastonbastonbaston/raving-in-the-shower-1" title="RAVING IN THE SHOWER" target="_blank" style="color: #cccccc; text-decoration: none;">RAVING IN THE SHOWER</a></div>
				`,
			type: "cover",
		},

		greener: {
			title: "Greener",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_GREENER.webp",
						"/media/IMAGE1/IMAGE1_GREENER.jpg",
					],
					alternative: "",
					type: "image",
				},
				{
					id: [
						"/media/IMAGE2/IMAGE2_GREENER.webp",
						"/media/IMAGE2/IMAGE2_GREENER.jpg",
					],
					alternative: "",
					type: "image",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_GREENER.webp",
					"/media/PNG_MENU/PNG_MENU_GREENER.png",
				],
			},
			software: ["Illustrator", "Xd"],
			description: `Création d'un site de coaching et d'accompagnement pour consommer mieux et plus responsable. Projet de création complet du choix du nom en passant par l'identité visuelle du site mais également son contenu rédactionnel`,
			type: "webdesign",
		},

		ikea: {
			title: "Archetype",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_IKEA.webp",
						"/media/IMAGE1/IMAGE1_IKEA.jpg",
					],
					alternative: "",
					type: "image",
				},
				{
					id: [
						"/media/IMAGE2/IMAGE2_IKEA.webp",
						"/media/IMAGE2/IMAGE2_IKEA.jpg",
					],
					alternative: "",
					type: "image",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_IKEA.webp",
					"/media/PNG_MENU/PNG_MENU_IKEA.png",
				],
			},
			software: ["Photoshop"],
			description: `Proposition d'une campagne print fictive pour IKEA axée autour des archétypes et de "Monsieur Madame tout le monde"`,
			type: "ikea",
		},

		vanmoof: {
			title: "Vélo Boulot Dodo",
			illustrations: [
				{
					id: [
						"/media/IMAGE1/IMAGE1_VANMOOF.webp",
						"/media/IMAGE1/IMAGE1_VANMOOF.jpg",
					],
					alternative: "",
					type: "image",
				},
				{
					id: [
						"/media/IMAGE2/IMAGE2_VANMOOF.webp",
						"/media/IMAGE2/IMAGE2_VANMOOF.jpg",
					],
					alternative: "",
					type: "image",
				},
			],
			hover_img: {
				src: [
					"/media/PNG_MENU/PNG_MENU_VANMOOF.webp",
					"/media/PNG_MENU/PNG_MENU_VANMOOF.png",
				],
			},
			software: ["Illustrator", "Photoshop"],
			description: `Recommandation publicitaire pour la marque VanMoof axée autour de la déconstruction de la routine Métro Boulot Dodo pour en reconstruire une basée sur la liberté, l'autonomie et le gain de temps grâce au vélo
				\n\n`,
			type: "vanmoof",
		},
	},
};

export { state };

// projects: [
// 	{lib: 'Corona Virus', type: 'PRINT + ANIMATION', link:'work/coronavirus'},
// 	{lib: 'Marcel Breuer', type: 'BOOK', link:'work/coronavirus'},
// 	{lib: 'Bee And Flowers', type: 'ANIMATION', link:'work/coronavirus'},
// 	{lib: 'Raving In The Shower', type: 'COVER', link:'work/coronavirus'},
// 	{lib: 'Archetype', type: 'IKEA', link:'work/coronavirus'},
// 	{lib: 'clic clic', type: 'BIC', link:'work/coronavirus'},
// 	{lib: 'Recommandation', type: 'PRESENTATION', link:'work/coronavirus'},
// 	{lib: 'Drawings', type: 'SKETCH', link:'work/coronavirus'},
// ]
