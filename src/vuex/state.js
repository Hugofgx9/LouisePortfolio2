const state = {
	windowWidth: window.innerWidth,

	works: {
		beeandflowers: {
			title: 'Bee And Flowers',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_BEEANDFLOWERS.webp',
						'/media/IMAGE1/IMAGE1_BEEANDFLOWERS.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: '/media/IMAGE2/IMAGE2_VIDEO_BEEANDFLOWERS.mp4',
					alternative: '',
					type: 'video',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_BEE_AND_FLOWERS.webp',
					'/media/PNG_MENU/PNG_MENU_BEE_AND_FLOWERS.png',
				],
			},
			software: ['Cinema 4D', 'Photoshop'],
			description:
				'Print et animation vidéo composée autour de la notion de point de vue et de déconstruction ',
			domain: 'animation',
			type: 'personal',
		},

		corona: {
			title: 'Corona Virus',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_CORONA.webp',
						'/media/IMAGE1/IMAGE1_CORONA.png',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: '/media/IMAGE2/IMAGE2_VIDEO_CORONA.mp4',
					alternative: '',
					type: 'video',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_CORONA.webp',
					'/media/PNG_MENU/PNG_MENU_CORONA.png',
				],
			},
			software: ['Cinema 4D', 'Photoshop'],
			description:
				'Série de deux prints et une animation sur le théme du COVID-19 lors du premier confinement en France',
			domain: 'print + animation',
			type: 'personal',
		},

		marcelbreuer: {
			title: 'Marcel Breuer',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_MARCELBREUER.webp',
						'/media/IMAGE1/IMAGE1_MARCELBREUER.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_MARCELBREUER.webp',
						'/media/IMAGE2/IMAGE2_MARCELBREUER.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_MARCEL_BREUER.webp',
					'/media/PNG_MENU/PNG_MENU_MARCEL_BREUER.png',
				],
			},
			software: ['Indesign', 'Photoshop'],
			description: `Création d'un petit livret autour du design et architecte Marcel
				Breuer. Livret composé de prints fait à partir de ses créations ainsi
				que de texte expliquant chacun de ses travaux.`,
			domain: 'book',
			type: 'personal',
		},

		ravingintheshower: {
			title: 'Raving In The Shower',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_RAVINGINTHESHOWER.webp',
						'/media/IMAGE1/IMAGE1_RAVINGINTHESHOWER.png',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: '/media/IMAGE2/IMAGE2_VIDEO_RAVINGINTHESHOWER.mp4',
					alternative: '',
					type: 'video',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_RAVING_IN_THE_SHOWER.webp',
					'/media/PNG_MENU/PNG_MENU_RAVING_IN_THE_SHOWER.png',
				],
			},
			software: ['Cinema 4D', 'Photoshop'],
			description: `
				Cover et animation vidéo pour la sortie d'une track du duo BastonBstnBaston 
				<iframe style="margin-top: 20px;" width="100%" height="120"
				scrolling="no" frameborder="no" allow="autoplay"
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/810409741&color=%23f0dcf8&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
				<div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;
				text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
				<a href="https://soundcloud.com/bastonbastonbaston" title="BASTONBSTNBASTON" target="_blank" style="color: #cccccc; text-decoration: none;">BASTONBSTNBASTON</a> · 
				<a href="https://soundcloud.com/bastonbastonbaston/raving-in-the-shower-1" title="RAVING IN THE SHOWER" target="_blank" style="color: #cccccc; text-decoration: none;">RAVING IN THE SHOWER</a></div>
				`,
			domain: 'cover',
			type: 'personal',
		},

		greener: {
			title: 'Greener',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_GREENER.webp',
						'/media/IMAGE1/IMAGE1_GREENER.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_GREENER.webp',
						'/media/IMAGE2/IMAGE2_GREENER.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_GREENER.webp',
					'/media/PNG_MENU/PNG_MENU_GREENER.png',
				],
			},
			software: ['Illustrator', 'Xd'],
			description: 
				`Création d'une maquette de site de coaching et 
				d'accompagnement pour consommer mieux et plus responsable. Projet de création 
				complet du choix du nom en passant par l'identité visuelle du site 
				mais également son contenu rédactionnel.`,
			domain: 'webdesign',
			type: 'school',
		},

		ikea: {
			title: 'Archetype',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_IKEA.webp',
						'/media/IMAGE1/IMAGE1_IKEA.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_IKEA.webp',
						'/media/IMAGE2/IMAGE2_IKEA.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_IKEA.webp',
					'/media/PNG_MENU/PNG_MENU_IKEA.png',
				],
			},
			software: ['Photoshop'],
			description: 
				`Proposition d'une campagne print fictive pour IKEA axée 
				autour des archétypes et de "Monsieur Madame tout le monde"`,
			domain: 'ikea',
			type: 'school',
		},

		vanmoof: {
			title: 'Vélo Boulot Dodo',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_VANMOOF.webp',
						'/media/IMAGE1/IMAGE1_VANMOOF.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_VANMOOF.webp',
						'/media/IMAGE2/IMAGE2_VANMOOF.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_VANMOOF.webp',
					'/media/PNG_MENU/PNG_MENU_VANMOOF.png',
				],
			},
			software: ['Illustrator', 'Photoshop'],
			description: 
				`Recommandation publicitaire pour la 
				marque VanMoof axée autour de la déconstruction de la routine Métro
				Boulot Dodo pour en reconstruire une basée sur la liberté, l'autonomie 
				et le gain de temps grâce au vélo électrique. <br/>
				La campagne est composée de deux campagnes prints différentes, une à
				destination de la capitale et une autres pour les autres grandes villes
				de France. <br/>
				Un spot audio diffusé sur Spotify, un film publicitaire diffusé à la
				télévision et une activation viennent compléter le tout. <br/>
				L'idée de l'activation est simple : proposer à chaque entrée de métro le
				prêt d'un vélo VanMoof pour se rendre à sa destination. <br/>
				Simultanément, l'application City Mapper propose un nouveau trajet, plus
				rapide et plus agréable signé VanMoof. <br/>
				L'objectif est de prouvé aux abonnés du métro, que le vélo électrique
				est une alternative idéale pour répondre à leurs besoins de déplacements
				quotidiens. <br/><br/>
				<a class="italic-text" href='/media/PDF/LOUISE_DIAPO_VANMOOF.pdf'> 
				Voir le pdf de présentation
				</a>
				\n\n`,
			domain: 'vanmoof',
			type: 'school',
		},

		scharf: {
			title: 'Scharf',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_SCHARF.webp',
						'/media/IMAGE1/IMAGE1_SCHARF.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_SCHARF.webp',
						'/media/IMAGE2/IMAGE2_SCHARF.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_SCHARF.webp',
					'/media/PNG_MENU/PNG_MENU_SCHARF.png',
				],
			},
			software: ['Illustrator'],
			description: ` Dessin et création de ma première typographie appelée Scharf 
				qui signifie "piquant" en allemand. Si cette police porte ce nom ce n'est 
				pas un hasard : je me suis inspirée des épines présentes sur
				les tiges d'une rose pour imaginer chacune de ces lettres.
				\n\n`,
			domain: 'typo',
			type: 'personal',
		},

		boursorama: {
			title: 'Boursorama',
			illustrations: [
				{
					id: [
						'/media/IMAGE1/IMAGE1_BOURSORAMA.webp',
						'/media/IMAGE1/IMAGE1_BOURSORAMA.jpg',
					],
					alternative: '',
					type: 'image',
				},
				{
					id: [
						'/media/IMAGE2/IMAGE2_BOURSORAMA.webp',
						'/media/IMAGE2/IMAGE2_BOURSORAMA.jpg',
					],
					alternative: '',
					type: 'image',
				},
			],
			hover_img: {
				src: [
					'/media/PNG_MENU/PNG_MENU_BOURSORAMA.webp',
					'/media/PNG_MENU/PNG_MENU_BOURSORAMA.png',
				],
			},
			software: ['Illustrator', 'Photoshop'],
			description: 
				`
				Recommandation publicitaire pour promouvoir la nouvelle offre de 
				prêt personnel de Boursorama accessible à tous les nouveaux clients 
				de moins de 3 mois. <br/>
				Le concept de la campagne est de jouer sur les jeux de hasards 
				qui séduisent de plus en plus de Français. Ici Boursorama propose 
				une solution rapide, sûre et à taux fixe bas pour (enfin) réaliser ses projets. <br/>
				Car tout miser sur la chance n'est pas toujours une bonne solution.
				<br/>
				Cette campagne est composée de prints, de publications dans la presse gratuite, 
				de tickets à gratter distribués dans les grandes rues commerçantes, 
				d'un spot radio et d'un film publicitaire diffusé en télévision. <br/><br/>

				<a class="italic-text" href='/media/PDF/LOUISE_DIAPO_BOURSORAMA.pdf'> 
				Voir le pdf de présentation
				</a>
				<br/>
				<br/>
				<iframe width="100%" height="120" scrolling="no" frameborder="no"
				allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/973810585%3Fsecret_token%3Ds-UXk8jM0wXYX&color=%233d4083&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/louise-peredes-fantozzi" title="Louise PEREDES FANTOZZI" target="_blank" style="color: #cccccc; text-decoration: none;">Louise PEREDES FANTOZZI</a> · <a href="https://soundcloud.com/louise-peredes-fantozzi/maquette-spot-radio-reco-boursorama-banque/s-UXk8jM0wXYX" title="Maquette spot radio reco Boursorama Banque" target="_blank" style="color: #cccccc; text-decoration: none;">Maquette spot radio reco Boursorama Banque</a></div>
				`,
			domain: 'typo',
			type: 'school',
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
