# EDS Studio Grind

A public field journal about building Edge Delivery Studio: a native macOS workspace for Adobe Edge Delivery Services. This site is built from a Studio conversation through DA CLI; it is not a demonstration that the native product can already create sites.

## First-edition direction

- An editorial workshop, not a launch campaign or a simulated app dashboard.
- Warm paper, near-black type, restrained oxide-orange signals, rules rather than card chrome.
- Local system type; no font service, UI framework, motion dependency, or decorative stock imagery.
- Visible navigation, readable dated entries, short evidence labels, and deep links into the journal.
- Independent build journal, not an official Adobe announcement. Public summaries only; no raw private transcript, endpoint, credential, local path, or receipt-store export.

## Ownership and markup

`styles/styles.css` owns the named cascade order, typography, controls, prose rhythm, and authored section modifiers (`compact`, `soft`, `ink`, `prose`). Sections own exterior padding and inter-block spacing. Blocks own internal layout. Container breakpoints reflect the minimum room for a readable side note or metadata column, not device names.

- **Masthead:** one row; first cell contains an optional paragraph eyebrow immediately before the h1, followed by the standfirst and optional link. An optional second cell is a field note. `compact` changes only the title measure/scale. Extra cells remain visible.
- **Ledger:** repeated rows; first cell holds authored issue/date/status metadata; second holds a heading and body. Additional cells are preserved. Links remain ordinary authored links, not invisible whole-row targets. Used for journal entries, capabilities, and friction.
- **Columns:** the stock content-preserving block with intrinsic tracks and an empty-row guard; used only for concise facts.
- **Header/footer:** DA-authored fragments. Navigation stays visible at every width; no custom menu widget is necessary for three links.

No API-fed counters, fake live statuses, generated search index, or analytics integration is added. Snapshot dates and evidence labels are authored content, not inferred runtime state.

## Validation contract

Validate home, a journal entry, and the friction ledger at narrow and wide widths, plus either side of the 40rem/56rem block transitions. Check keyboard/focus, long and missing cells, browser errors, and link destinations. Prove DA source, plain Preview, decorated Preview, code assets, and journal receipts separately. Never call an exit code alone a release proof.
