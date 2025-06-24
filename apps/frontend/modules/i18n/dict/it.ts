const dictionary = {
	login: {
		seo: {
			title: 'Login',
			description: `Esegui l'accesso per ottimizzare la tua dispensa`
		},
		title: `Il companion per la tua dispensa`,
		subtitle: `Organizza la tua cucina. Tieni traccia degli ingredienti e delle loro scadenze. Scopri nuove ricette basate su ciò che hai in casa.`,
		actions: {
			google: 'Entra con Google'
		}
	},
	settings: {
		categories: {
			seo: {
				title: 'Tag ingredienti',
				description:
					'Organizza gli ingredienti in gruppi logici con etichette personalizzabili'
			},
			title: 'Tag ingredienti',
			description:
				'Le categorie ti aiutano a organizzare i tuoi alimenti in gruppi logici per una gestione più semplice.',
			form: {
				name: 'Nome categoria',
				namePlaceholder: 'Inserisci nome categoria...',
				color: 'Colore',
				colorHelp: 'Scegli un colore per identificare visivamente questa categoria',
				icon: 'Icona',
				iconHelp: "Seleziona un'icona per rappresentare questa categoria"
			},
			empty: 'Nessuna categoria trovata',
			actions: {
				create: 'Crea',
				edit: 'Modifica',
				delete: 'Elimina',
				deleteConfirm: 'Sei sicuro di voler eliminare questa categoria?'
			},
			toast: {
				created: 'Categoria creata con successo',
				updated: 'Categoria aggiornata con successo',
				deleted: 'Categoria eliminata con successo'
			}
		}
	},
	sidebar: {
		groups: {
			settings: {
				label: 'Impostazioni',
				routes: {
					categories: 'Categorie'
				}
			}
		}
	}
}

export default dictionary
