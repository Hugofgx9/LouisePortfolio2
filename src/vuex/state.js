const state = {
	windowWidth: window.innerWidth,
	works: {

		beeandflowers: {
			title: 'Bee And Flowers',
			illustrations: [
				{id: '1fZROlC0S2kqRQKbrE14yO6CAyKEBPl6Z', alternative: '' ,type: 'image'},
				{id: '1I6ssV9U7ek1e-3r6TPSXQAx83YTxn3zb', alternative: '' ,type: 'video'},
			],
			hover_img: {src: '1pGUybl7_HjNxkQDcmoGNdEuaeSuhVQMZ'},
			software: ['Cinema 4D', 'Photoshop'],
			description: 'Print et animation vidéo composée autour de la notion de point de vue et de déconstruction ',
			type: 'animation',
		},

		corona: {
			title: 'Corona Virus',
			illustrations: [
				{id: '1ZIC3XTKtp8LQxszawPkeCSheGniTezcq', alternative: '' ,type: 'image'},
				{id: '1X37oqWSEthvAxenUQ5eq1itdVBnGJBy2', alternative: '' ,type: 'video'},
			],
			hover_img: {src: '1SZAnCo2KtG8VxIn7C_my_sxQPwaEF1xW'},
			software: ['Cinema 4D', 'Photoshop'],
			description: 'Série de deux prints et une animation sur le théme du COVID-19 lors du premier confinement en France',
			type: 'print + animation',
		},

		marcelbrauer: {
			title: 'Marcel Brauer',
			illustrations: [
				{id: '1sVFMQWM6X16N7if4iq73Y7KhNR999W59', alternative: '' ,type: 'image'},
				{id: '1pY3E8PchZhrbDOUlf2Wxto8hqEqot4dS', alternative: '' ,type: 'image'},
			],
			hover_img: {src: '1FZEkq6-m7QMwlZYzgWrML1OVMSaIJTcm'},
			software: ['Indesign', 'Photoshop'],
			description: 'Création d\'un petit livret autour du design et architecte Marcel Breuer. Livret composé de prints fait à partir de ses créations ainsi que de texte expliquant chacun de ses travaux',
			type: 'book',
		},

		ravingintheshower: {
			title: 'Raving In The Shower',
			illustrations: [
				{id: '1BNXRAYgxNtMnbSKEhZxrFb2wVb5Dbeuj', alternative: '' ,type: 'image'},
				{id: '1MEaJuMKbLMiWnM4NUi8c-f7gSAdWdPgD', alternative: '' ,type: 'video'},
			],
			hover_img: {src: '11CQNlHgx28jQOkWs6E0lcYRiy_fkGJ8h'},
			software: ['Cinema 4D', 'Photoshop'],
			description: `
				Cover et animation vidéo pour la sortie d'une track du duo BastonBstnBaston 
				<iframe style="margin-top: 20px;" width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810409741&color=%23f0dcf8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/bastonbastonbaston" title="BASTONBSTNBASTON" target="_blank" style="color: #cccccc; text-decoration: none;">BASTONBSTNBASTON</a> · <a href="https://soundcloud.com/bastonbastonbaston/raving-in-the-shower-1" title="RAVING IN THE SHOWER" target="_blank" style="color: #cccccc; text-decoration: none;">RAVING IN THE SHOWER</a></div>
				`,
			type: 'cover',
		},

		greener: {
			title: 'Greener',
			illustrations: [
				{id: '17gqo_JXmYeQw5mpV1Tzjca3mY73fZjPb', alternative: '' ,type: 'image'},
				{id: '1XSm6Yw8YrHUk6ziYt-ss-1QRUoDDlSub', alternative: '' ,type: 'image'},
			],
			hover_img: {src: '1kGWZP9tW0uySyMw9uc8Qg3Af5YzEnupi'},
			software: ['Illustrator', 'Xd'],
			description: `Création d'un site de coaching et d'accompagnement pour consommer mieux et plus responsable. Projet de création complet du choix du nom en passant par l'identité visuelle du site mais également son contenu rédactionnel`,
			type: 'webdesign',
		},

		ikea: {
			title: 'Archetype',
			illustrations: [
				{id: '1lLtXLvJBEhzoe3iU7GYIYK4zQIJhabou', alternative: '' ,type: 'image'},
				{id: '18piO2_rYFoOjSKCo_lK3YMShr_1B32Qf', alternative: '' ,type: 'image'},
			],
			hover_img: {src: '1qPaJWgMvRLUI48PKWBo2HAJh3u4vzzP6'},
			software: ['Photoshop'],
			description: `Proposition d'une campagne print fictive pour IKEA axée autour des archétypes et de "Monsieur Madame tout le monde"`,
			type: 'ikea',
		},

		vanmoof: {
			title: 'Vélo Boulot Dodo',
			illustrations: [
				{id: '1X0GPmV4pkOzDRReMEOTdAvVvdUv2wKKH', alternative: '' ,type: 'image'},
				{id: '1Y64AS9ewIIT9q3M3MCC47YNKUstUqsXW', alternative: '' ,type: 'image'},
			],
			hover_img: {src: '1dKvoENm92QWkmYS895BGJxQHzz91ggRZ'},
			software: ['Illustrator', 'Photoshop'],
			description: `Recommandation publicitaire pour la marque VanMoof axée autour de la déconstruction de la routine Métro Boulot Dodo pour en reconstruire une basée sur la liberté, l'autonomie et le gain de temps grâce au vélo
				\n\n`,
			type: 'vanmoof',
		},
	}
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
