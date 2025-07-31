const dictionary = {
  common: {
    actions: {
      create: 'Crea',
      edit: 'Modifica',
      delete: 'Elimina',
      confirm: 'Conferma',
      cancel: 'Annulla',
      submit: 'Invia',
    },
  },
  login: {
    seo: {
      title: 'Login',
      description: `Esegui l'accesso per ottimizzare la tua dispensa`,
    },
    title: 'Il companion per la tua dispensa',
    subtitle:
      'Organizza la tua cucina. Tieni traccia degli ingredienti e delle loro scadenze. Scopri nuove ricette basate su ciò che hai in casa.',
    actions: {
      google: 'Entra con Google',
    },
  },
  settings: {
    categories: {
      constants: {
        colors: {
          LAVENDER: 'Lavanda',
          SKY_BLUE: 'Blu Cielo',
          CORAL_PINK: 'Rosa Corallo',
          GOLDEN: 'Dorato',
          SAGE: 'Salvia',
          PLUM: 'Prugna',
          AMBER: 'Ambra',
          INDIGO: 'Indaco',
        },
        icons: {
          FRUIT: 'Frutta',
          VEGETABLES: 'Verdura',
          MEAT: 'Carne',
          FISH: 'Pesce',
          CARBS: 'Carboidrati',
          DAIRY: 'Latticini',
          SWEETS: 'Dolci',
          SNACKS: 'Snack',
          BEVERAGES: 'Bevande',
          ALCOHOL: 'Alcolici',
          PANTRY: 'Dispensa',
          CONDIMENTS: 'Condimenti',
        },
      },

      seo: {
        title: 'Tag ingredienti',
        description:
          'Organizza gli ingredienti in gruppi logici con etichette personalizzabili',
      },
      title: 'Tag ingredienti',
      description:
        'Le categorie ti aiutano a organizzare i tuoi alimenti in gruppi logici per una gestione più semplice.',
      form: {
        create: {
          title: 'Categorie',
          description:
            'Organizza gli ingredienti in gruppi logici con etichette personalizzabili',
          fields: {
            name: {
              label: 'Nome',
            },
            color: {
              label: 'Colore',
            },
            iconUid: {
              label: 'Icona',
              placeholder: 'Seleziona un icona',
            },
          },
        },
      },
      empty: 'Nessuna categoria trovata',
      actions: {
        create: 'Crea',
        edit: 'Modifica',
        delete: 'Elimina',
        deleteConfirm: 'Sei sicuro di voler eliminare questa categoria?',
      },
      toast: {
        created: 'Categoria creata con successo',
        updated: 'Categoria aggiornata con successo',
        deleted: 'Categoria eliminata con successo',
      },
    },
  },
  sidebar: {
    groups: {
      settings: {
        label: 'Impostazioni',
        routes: {
          categories: 'Categorie',
        },
      },
    },
  },
}

export default dictionary
