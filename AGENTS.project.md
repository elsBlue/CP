# Crownpath

Epic Seven arena scout. Product rules live with the code.

**Before auditing Scout output, recipes, or Why / Setup / Breaks-if copy,**
read [`src/lib/e7/SCOUT_AUDIT.md`](src/lib/e7/SCOUT_AUDIT.md) and run the
checklist. The bug class is **ungrounded copy**: a sentence true of a kit
in isolation, false for this wall or this filled team.

Do not add wall-conditional warnings to `jobFor`. Those belong in `whyFor`
or `pitfallsFor`, gated on verified uniques actually present.
