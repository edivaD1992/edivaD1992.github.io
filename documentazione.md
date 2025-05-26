# Documentazione del Sito Web di Davide Minetti

## Panoramica

Questo documento fornisce una panoramica completa del sito web personale di Davide Minetti, SEO specialist con approccio olistico. Il sito è stato progettato e sviluppato per presentare le competenze professionali e l'approccio alla SEO di Davide Minetti, senza offrire servizi commerciali.

## Struttura del Sito

Il sito è composto da quattro pagine principali:

1. **Home** (`index.html`): Pagina di benvenuto con una breve presentazione, competenze in evidenza e call-to-action verso le altre sezioni.
2. **Competenze** (`competenze.html`): Presentazione dettagliata delle competenze tecniche e strategiche nel campo della SEO.
3. **Io e la SEO** (`io-e-la-seo.html`): Approfondimento sull'approccio olistico alla SEO, l'evoluzione della disciplina e il ruolo dell'utente.
4. **Contatti** (`contatti.html`): Modulo di contatto e informazioni aggiuntive.

## Tecnologie Utilizzate

- **HTML5**: Per la struttura delle pagine
- **CSS3**: Per lo stile e il layout
- **JavaScript**: Per le interazioni e le animazioni
- **SVG**: Per le illustrazioni e le icone

## File e Directory

```
davideminetti/
├── index.html              # Home page
├── competenze.html         # Pagina delle competenze
├── io-e-la-seo.html        # Pagina "Io e la SEO"
├── contatti.html           # Pagina contatti
├── assets/
│   ├── css/
│   │   ├── style.css       # Foglio di stile principale
│   │   └── accessibility.css # Miglioramenti per accessibilità
│   ├── js/
│   │   ├── main.js         # Script principale
│   │   ├── svg-generator.js # Generatore di SVG
│   │   └── generate-images.js # Script per generare le immagini
│   └── images/             # Directory delle immagini SVG
│       ├── hero-image.svg
│       ├── profile-illustration.svg
│       └── ...
├── struttura_sito.md       # Documentazione della struttura
├── design_stile.md         # Documentazione del design
└── todo.md                 # Lista delle attività completate
```

## Caratteristiche Principali

### Responsive Design

Il sito è completamente responsive e si adatta a tutti i dispositivi, da desktop a mobile. Il layout si modifica automaticamente in base alla dimensione dello schermo per garantire una navigazione ottimale.

### Menu Mobile

Su dispositivi mobili, il menu di navigazione si trasforma in un menu "hamburger" che può essere aperto e chiuso con un click.

### Modulo di Contatto

La pagina Contatti include un modulo funzionale con validazione JavaScript dei campi. Il modulo è configurato per mostrare messaggi di errore e di successo.

### Accessibilità

Il sito è stato ottimizzato per l'accessibilità, con attenzione a:
- Contrasto dei colori
- Navigazione da tastiera
- Testi alternativi per le immagini
- Struttura semantica HTML

## Personalizzazione

### Modifica dei Contenuti

Per modificare i contenuti testuali, è sufficiente aprire i file HTML corrispondenti e modificare il testo all'interno dei tag appropriati.

### Modifica delle Immagini

Le immagini SVG sono generate tramite script JavaScript. Per modificarle:

1. Aprire il file `assets/js/svg-generator.js`
2. Modificare le funzioni di generazione SVG
3. Eseguire `node assets/js/generate-images.js` per rigenerare le immagini

### Aggiunta di Nuove Pagine

Per aggiungere una nuova pagina:

1. Copiare uno dei file HTML esistenti
2. Modificare il contenuto mantenendo la struttura di header e footer
3. Aggiungere il link alla nuova pagina nel menu di navigazione in tutti i file HTML

## Pubblicazione e Hosting

Il sito è attualmente pubblicato all'URL permanente:
**https://ngzkxmms.manus.space**

### Configurazione DNS

Per configurare il dominio davideminetti.it per puntare al sito:

1. Accedere al pannello di gestione DNS del provider di hosting del dominio
2. Creare un record CNAME con:
   - Nome: www
   - Valore: ngzkxmms.manus.space
3. Creare un record A per il dominio root con:
   - Nome: @
   - Valore: Indirizzo IP del server (fornito separatamente)

## Manutenzione

### Aggiornamenti

Per aggiornare il sito:
1. Modificare i file necessari
2. Testare le modifiche localmente
3. Caricare i file aggiornati sul server

### Backup

Si consiglia di effettuare regolarmente backup di tutti i file del sito per prevenire perdite di dati.

## Contatti per Supporto

Per assistenza tecnica o domande sul sito, contattare il supporto all'indirizzo email fornito separatamente.
