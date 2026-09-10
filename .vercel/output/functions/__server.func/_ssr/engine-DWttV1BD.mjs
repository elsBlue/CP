import { S as heroEffects, g as TIER_ORDER, n as ARCHETYPE_META } from "./recipes-DsR1fcfA.mjs";
import { a as allRecipes, i as allHeroes, o as getHero } from "./router-DrPSiwCO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engine-DWttV1BD.js
/**
* Wall watches. Accumulated — never rewrite this file as a whole.
* Targeted search-replace of a unique nearby block only.
* Floor: stay above 400 lines.
*/
function hasUnique(heroes, needle) {
	const n = needle.toLowerCase();
	return heroes.some((h) => (h.uniqueEffects ?? []).some((u) => u.name.toLowerCase().includes(n)));
}
/** Skill extra-turn opener. Not Soulburn-only. Not Genesis Ras crit extra turn. */
function isFirstCycleOpener(h) {
	if (!h.roles.includes("opener")) return false;
	if (!(h.tags.includes("extra-turn") || (h.effects ?? []).includes("extra-turn"))) return false;
	if (/extra turn is soulburn only/i.test(h.kit ?? "")) return false;
	if (h.id === "genesis-ras") return false;
	return true;
}
function hitsEvenOnMiss(h) {
	return /hits even on miss/i.test(h.kit ?? "");
}
function wallThreats(heroes) {
	const out = [];
	const add = (t) => {
		if (!out.some((x) => x.key === t.key)) out.push(t);
	};
	const ids = new Set(heroes.map((h) => h.id));
	const roles = new Set(heroes.flatMap((h) => h.roles));
	const tags = new Set(heroes.flatMap((h) => h.tags));
	const debuffs = heroes.flatMap((h) => h.debuffs ?? []);
	const hasDebuff = (name) => debuffs.some((d) => d.toLowerCase() === name.toLowerCase());
	if (roles.has("speedcap") || ids.has("harsetti") || hasUnique(heroes, "skuggiheim")) add({
		key: "speedcap",
		label: "Speed cap",
		note: hasUnique(heroes, "skuggiheim") ? "Speed is capped. Turn-bar gain on her turn does not apply." : "Nobody can win a speed race. This is a long fight.",
		answerTags: ["injury"]
	});
	if (roles.has("soulblock") || ids.has("belian") || hasUnique(heroes, "shackles of suppression")) add({
		key: "soulblock",
		label: "Soul lock",
		note: "Souls do not generate. Spending souls does nothing."
	});
	else if (hasUnique(heroes, "unwavering execution") || ids.has("disciplinary-prefect-aria")) add({
		key: "dp-aria",
		label: "DP Aria",
		note: "Spending souls costs twice as much. Souls still generate. While Purge is on cooldown, her hits cut max Health.",
		answerTags: ["injury"]
	});
	if (hasUnique(heroes, "dragon flame") || ids.has("martial-artist-ken")) add({
		key: "ma-ken",
		label: "MA Ken",
		note: "Counters ally crits, and Dragon Flame when he is crit (50% penetrate, lost Health). Mort and Star's Blessing turn those counters off.",
		answerTags: ["aoe"]
	});
	if (roles.has("revive") || ids.has("lisette") || ids.has("ruele-of-light") || hasUnique(heroes, "fragment of life") || hasUnique(heroes, "time reversal") || hasUnique(heroes, "spirit lord") || hasUnique(heroes, "sacred covenant") || hasUnique(heroes, "it's time to be reborn") || ids.has("school-nurse-yulha")) add({
		key: "revive",
		label: "Revive / reset",
		note: "A kill can reset. The fight is not over on the first death.",
		answerTags: ["anti-revive"],
		answerEffects: ["extinction"]
	});
	if (hasUnique(heroes, "time reversal")) add({
		key: "reversal",
		label: "Time Reversal",
		note: "Health and state roll back after the first cycle."
	});
	if (heroes.some((h) => (h.uniqueEffects ?? []).some((u) => /^skill nullifier$/i.test(u.name))) || ids.has("fallen-cecilia") || ids.has("angel-of-light-angelica") || ids.has("eternal-wanderer-ludwig") || ids.has("lilibet") || ids.has("aube")) add({
		key: "nullifier",
		label: "Skill Nullifier",
		note: "The first skill into that unit is cancelled."
	});
	if (ids.has("remnant-violet")) add({
		key: "evade",
		label: "Evasion",
		note: "Single-target third skills into Violet miss often.",
		answerTags: [
			"aoe",
			"dual-attack",
			"injury"
		]
	});
	else if (ids.has("setsuka")) add({
		key: "evade",
		label: "Evasion",
		note: "+30% Evasion on the whole wall. Any single-target skill can miss — not only a third skill. When an ally other than her evades, she counters.",
		answerTags: [
			"aoe",
			"dual-attack",
			"injury"
		]
	});
	if (tags.has("injury") && (roles.has("bruiser") || roles.has("tank") || roles.has("dps"))) add({
		key: "injury",
		label: "Injury",
		note: "They cut maximum Health as the fight goes on. Healing cannot restore that part."
	});
	if ((ids.has("last-rider-krau") || heroes.some((h) => h.tags.includes("immunity") && h.roles.includes("tank"))) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "strip",
		label: "Buffed wall",
		note: "They start with buffs up, often Immunity, so debuffs will not land until those buffs are gone.",
		answerRoles: ["strip"],
		answerTags: ["strip"],
		answerEffects: ["buff-dispel"]
	});
	if (hasDebuff("Seal") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "seal",
		label: "Seal",
		note: "Passives are off on sealed units."
	});
	else if (hasDebuff("Cannot Buff") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "unbuffable",
		label: "Cannot Buff",
		note: "New buffs will not land. Passives still run."
	});
	if ((hasUnique(heroes, "lullaby for waves") || ids.has("dragon-king-sharun")) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "cascade",
		label: "Cascade",
		note: "Stun, Sleep, or Fear on this wall cleanses the lock and grants Cascade: 4,000 extra damage on their next attack."
	});
	if (hasUnique(heroes, "ferocious stand")) add({
		key: "force-target",
		label: "Forced targeting",
		note: "Single-target skills have to hit her.",
		answerTags: ["aoe"]
	});
	if (hasUnique(heroes, "oath of punishment")) add({
		key: "oath",
		label: "Oath of Punishment",
		note: "Undispellable. Debuffs do not stick on her."
	});
	if (hasUnique(heroes, "insight") || ids.has("sylvan-sage-vivian")) add({
		key: "ss-vivian",
		label: "SS Vivian",
		note: "Starts immune to debuffs. Removing buffs does not turn that off. A hit of 30% max Health is cut in half.",
		answerTags: ["injury", "aoe"]
	});
	if (hasUnique(heroes, "barrier inversion") || hasUnique(heroes, "desert storm") || ids.has("desert-jewel-basar")) add({
		key: "dj-basar",
		label: "DJ Basar",
		note: "Gives the team Immunity and clears their debuffs. Then removes two of your buffs and turns Barrier into damage. They act again only if someone had Barrier.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "shield of holy spirit") || ids.has("crimson-armin")) add({
		key: "c-armin",
		label: "C.Armin",
		note: "Team Immunity 2 turns and Invincible 1 turn. She does not cleanse.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "divine vessel") || ids.has("bystander-hwayoung")) add({
		key: "b-hwayoung",
		label: "ML Hwayoung",
		note: "Buffs and debuffs do not stick. Removing buffs does nothing. If an ally drops to 40% Health, she hits a random unit, ignoring share and damage reduction, and a kill cannot be revived.",
		answerTags: ["aoe", "injury"]
	});
	if (hasUnique(heroes, "demon blade")) add({
		key: "cannot-die",
		label: "Cannot die",
		note: "She cannot die in that window.",
		answerTags: ["strip"]
	});
	if (hasDebuff("Beguile")) add({
		key: "beguile",
		label: "Beguile",
		note: "After she removes buffs, the back line takes 10% of their maximum Health."
	});
	if ((hasDebuff("Block") || hasUnique(heroes, "mirror of the abyss") || ids.has("witch-of-the-mere-tenebria")) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) {
		add({
			key: "block",
			label: "Block",
			note: "After buffs are removed, Block: you cannot receive buffs, and allies cannot cleanse you. Passives still run. The random Stun, Sleep, or redirected Provoke is not guaranteed."
		});
		add({
			key: "wmeri",
			label: "WMeri Dual Attack",
			note: "While her second skill is on cooldown, her basic attack makes their highest-Attack ally hit with her."
		});
	}
	if (hasDebuff("Restrict") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "restrict",
		label: "Restrict",
		note: "Combat Readiness increases other than Speed do not apply."
	});
	if ((hasDebuff("Rupture") || hasUnique(heroes, "rupture")) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "rupture",
		label: "Rupture",
		note: "Attacking a Ruptured hero deals extra damage back, proportional to maximum Health."
	});
	if (hasUnique(heroes, "witch's curse") || ids.has("briar-witch-iseria") || hasUnique(heroes, "death's dominion") || ids.has("hecate")) add({
		key: "both-revive",
		label: "No revive (both sides)",
		note: "Nobody revives while they live. Your revive is off as well."
	});
	if (hasUnique(heroes, "offering") || hasUnique(heroes, "scales of equity")) {
		add({
			key: "offering",
			label: "Offering",
			note: "Seventy percent of damage is shared onto the unit in Front (rightmost).",
			answerEffects: ["ignore-damage-sharing"]
		});
		add({
			key: "cr-steal",
			label: "Combat Readiness steal",
			note: "When you raise Combat Readiness, she takes 35% of it."
		});
	}
	if (hasUnique(heroes, "spirit gate") || ids.has("spirit-eye-celine")) add({
		key: "se-celine",
		label: "SE Celine reset",
		note: "Her third skill revives all. One hit cannot exceed 70% Health.",
		answerTags: ["anti-revive"],
		answerEffects: ["extinction"]
	});
	if (hasUnique(heroes, "soul exchange") || ids.has("apocalypse-ravi")) add({
		key: "aravi-reset",
		label: "A.Ravi kill-revive",
		note: "A kill with her third skill revives one ally. A skill that blocks revive stops this.",
		answerTags: ["anti-revive"],
		answerEffects: ["extinction"]
	});
	if (hasUnique(heroes, "bzzt") || ids.has("urban-shadow-choux")) add({
		key: "bzzt",
		label: "Bzzt!",
		note: "Every attack cuts everyone's maximum Health."
	});
	if (hasUnique(heroes, "time to rampage") || ids.has("lone-wolf-peira")) add({
		key: "peira-evade",
		label: "Peira evade",
		note: "+35% evasion on herself only. She takes another turn immediately. The rest of the wall can still be hit.",
		answerTags: [
			"aoe",
			"dual-attack",
			"injury"
		]
	});
	if (hasUnique(heroes, "ruler of the sea") || ids.has("navy-captain-landy")) add({
		key: "nc-landy",
		label: "NC Landy",
		note: "Immune to Stun, Sleep, and Fear. Extra-attack area damage."
	});
	if (hasUnique(heroes, "laying the groundwork") || ids.has("architect-laika")) add({
		key: "a-laika",
		label: "A.Laika",
		note: "Removes buffs, marks a target, then acts again. The third skill can prevent revive if it gets the kill."
	});
	if (hasUnique(heroes, "cloud of ruin") || ids.has("sage-baal")) add({
		key: "sage-baal",
		label: "Sage Baal",
		note: "Removes buffs from everyone, then Sleep. Mort, Little Queen Charlotte, Dark Corvus, and Navy Captain Landy ignore Sleep."
	});
	if (hasUnique(heroes, "wandering eidolon") || ids.has("twisted-eidolon-kayron")) add({
		key: "te-kayron",
		label: "TE Kayron",
		note: "Counters cut everyone's max Health. Extra damage on the third skill still hits on a miss. Mort turns counters off."
	});
	if (hasUnique(heroes, "elbris's successor") || ids.has("monarch-of-the-sword-iseria")) add({
		key: "miseria",
		label: "Miseria",
		note: "Counter chance is doubled. The unit in Front (rightmost) counters with her. Dawnbreaker cuts everyone's max Health. Fracture stays through revive. Mort turns the counters off."
	});
	if (hasUnique(heroes, "it's far from over") || ids.has("lionheart-cermia")) add({
		key: "lh-cermia",
		label: "LH Cermia",
		note: "If an ally hits with you into her, her third skill cooldown resets."
	});
	if (hasUnique(heroes, "light storm") || ids.has("specimen-sez")) add({
		key: "s-sez",
		label: "S.Sez",
		note: "Stuns, then a kill with that skill cannot be revived."
	});
	if (hasUnique(heroes, "dark contract") || ids.has("arbiter-vildred")) add({
		key: "a-vildred",
		label: "A.Vildred",
		note: "Dies once, returns at 70% Health with a full bar. A skill that blocks revive stops this.",
		answerTags: ["anti-revive", "aoe"]
	});
	if (hasUnique(heroes, "vip treatment") || ids.has("maid-chloe")) add({
		key: "maid-chloe",
		label: "Maid Chloe",
		note: "Revives the dead and places Revive on the living. A skill that blocks revive stops this.",
		answerTags: ["anti-revive"]
	});
	if (hasUnique(heroes, "superhumanization") || ids.has("school-nurse-yulha")) add({
		key: "sn-yulha",
		label: "SN Yulha",
		note: "Full revive with Superhumanization: +100% max Health and Speed, undispellable. That cooldown cannot be pushed. A skill that blocks revive stops this.",
		answerTags: ["anti-revive"],
		answerEffects: ["extinction"]
	});
	if (hasUnique(heroes, "spirit invocation") || ids.has("successor-taeyou")) add({
		key: "s-taeyou",
		label: "S.Taeyou",
		note: "Removes two buffs from everyone, then Invincible. On a crit he counters. If Possessed, he acts again immediately. Spending souls makes it unavoidable. The extra hit is not an ally hitting with him.",
		answerRoles: ["strip"]
	});
	if (hasUnique(heroes, "sanctuary of battle") || ids.has("notos")) add({
		key: "notos",
		label: "Notos",
		note: "God's Might doubles his stats. Buffs and debuffs do not apply to anyone. That skill starts the first fight on cooldown. Cutting max Health still works. Combat Readiness does not move him until he transforms.",
		answerTags: ["injury"]
	});
	if (hasUnique(heroes, "laceration") || ids.has("faithless-lidica")) add({
		key: "f-lidica",
		label: "F.Lidica",
		note: "Removes two buffs from everyone, applies Laceration, then acts again immediately.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "emergency stitching") || ids.has("designer-lilibet")) add({
		key: "d-lilibet",
		label: "D.Lilibet",
		note: "Your debuffs feed her Combat Readiness and Immunity."
	});
	if (hasUnique(heroes, "queen's dignity") || ids.has("little-queen-charlotte")) add({
		key: "lq-charlotte",
		label: "LQ Charlotte",
		note: "Immune to Stun, Sleep, and Fear. If she spends souls on her third skill, it cannot miss."
	});
	if (hasUnique(heroes, "ruin's advent") || ids.has("dark-corvus")) add({
		key: "d-corvus",
		label: "D.Corvus",
		note: "Hits charge his third skill. That hit ignores damage sharing, and a kill cannot be revived. It starts the first fight on cooldown."
	});
	if (hasUnique(heroes, "closer") || ids.has("closer-charles")) add({
		key: "c-charles",
		label: "C.Charles",
		note: "Start-of-fight evasion. Executes units under 40% Health."
	});
	if (hasUnique(heroes, "waxing crescent") || ids.has("lone-crescent-bellona")) add({
		key: "lc-bellona",
		label: "LC Bellona",
		note: "Evasion on herself only. At full Fighting Spirit she cuts everyone's max Health. The rest of the wall can still be hit.",
		answerTags: ["aoe", "injury"]
	});
	if (hasUnique(heroes, "end of evil") || ids.has("judge-kise")) add({
		key: "j-kise",
		label: "J.Kise",
		note: "Removes all buffs from everyone and cannot be countered. Spending souls makes it unavoidable.",
		answerTags: ["strip", "aoe"]
	});
	if (hasUnique(heroes, "frostbite") || hasUnique(heroes, "mental focus") || ids.has("ran")) add({
		key: "ran",
		label: "Ran",
		note: "Acts again immediately, then removes buffs. Frostbite turns damage sharing off.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "battle command") || ids.has("ambitious-tywin")) add({
		key: "a-tywin",
		label: "A.Tywin",
		note: "Stuns everyone. Removes souls. Does not remove buffs."
	});
	if ((hasUnique(heroes, "meteor fall") || hasUnique(heroes, "flame of savara") || ids.has("silver-blade-aramintha")) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "sb-ara",
		label: "SB Ara",
		note: "Stuns everyone, applies two Burns, then pulls the enemy with the highest Combat Readiness back 30%. The extra hit is hers alone — an ally does not hit with her."
	});
	if (ids.has("zahhak") || heroes.some((h) => h.id === "zahhak" && h.tags.includes("injury"))) add({
		key: "zahhak",
		label: "Zahhak injury",
		note: "Cuts one unit's max Health by up to 35%. That is not a hit on everyone."
	});
	if (hasUnique(heroes, "absolute dignity") || ids.has("mort")) add({
		key: "no-counter",
		label: "No counters",
		note: "Nobody else can counter. Immune to Stun, Sleep, and Fear."
	});
	else if ((hasUnique(heroes, "star's blessing") || hasUnique(heroes, "disciple of the stars") || ids.has("astromancer-elena")) && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "a-elena",
		label: "A.Elena",
		note: "While Star's Blessing is up, you cannot counter. She starts the fight with it for one turn. This is not Mort."
	});
	if (hasDebuff("Unhealable") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "unhealable",
		label: "Unhealable",
		note: "Heals do not land on afflicted heroes."
	});
	if (hasUnique(heroes, "begone") || hasUnique(heroes, "obstacle elimination") || ids.has("commander-pavel")) add({
		key: "c-pavel",
		label: "C.Pavel",
		note: "Ally crits charge Begone: he hits everyone, then his Combat Readiness fills. Extra attacks, counters, and ally-hits-with-them do not charge it. His third skill ignores damage sharing."
	});
	if (hasDebuff("Sleep") && !ids.has("notos") && !hasUnique(heroes, "sanctuary of battle")) add({
		key: "sleep",
		label: "Sleep",
		note: "They can Sleep a unit. That unit cannot act, and its Evasion drops to zero until it takes a hit."
	});
	if (hasDebuff("Target") && ids.has("architect-laika")) add({
		key: "target",
		label: "Target",
		note: "+15% damage taken, −50% Evasion. If this lands, Architect Laika acts again immediately.",
		answerTags: ["aoe", "injury"]
	});
	else if (hasDebuff("Target")) add({
		key: "target",
		label: "Target",
		note: "+15% damage taken, −50% Evasion.",
		answerTags: ["aoe", "injury"]
	});
	if (hasUnique(heroes, "pilfer")) add({
		key: "pilfer",
		label: "Pilfer",
		note: "−20% Attack, Health, and Defense, and it stays after death. Dispelling Spoils also clears it.",
		answerTags: ["strip"],
		answerEffects: ["buff-dispel"]
	});
	if (hasUnique(heroes, "redirected provoke")) add({
		key: "redir-provoke",
		label: "Redirected Provoke",
		note: "They use their first skill on your highest-Health unit."
	});
	if (hasUnique(heroes, "vigor")) add({
		key: "vigor",
		label: "Vigor",
		note: "Undispellable +30% Attack and Defense."
	});
	if (hasUnique(heroes, "defensive magic")) add({
		key: "def-magic",
		label: "Defensive Magic",
		note: "Arena defense rarely spends souls. She starts at zero Soul and gains one on her turn, so the skill that cancels yours comes late. If souls cannot generate, it never happens."
	});
	if (hasUnique(heroes, "sacred covenant")) add({
		key: "covenant",
		label: "Sacred Covenant",
		note: "Self only. Undispellable for five turns, then a 100% revive. This is not team Immunity.",
		answerTags: ["anti-revive"],
		answerEffects: ["extinction"]
	});
	if (hasDebuff("Collapse") || hasUnique(heroes, "collapse") || ids.has("salome")) add({
		key: "collapse",
		label: "Collapse",
		note: "Maximum Health is cut in half. Healing cannot restore that part."
	});
	if (hasUnique(heroes, "clone") || ids.has("salome")) add({
		key: "salome",
		label: "Salome",
		note: "The first skill into her is cancelled. She copies a target for one turn, then acts again. Their highest-Attack ally hits with her. Removing Clone also removes what she copied.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "inner abyss") || ids.has("abyssal-yufine")) add({
		key: "a-yufine",
		label: "A.Yufine",
		note: "Removes buffs from everyone and pulls Combat Readiness back halfway. That cannot be resisted. When you raise Combat Readiness, 30% of that increase is lost. 30% chance to counter when hit. Trauma is on herself."
	});
	if (hasUnique(heroes, "bind") || ids.has("rhianna-and-luciella")) add({
		key: "rnl",
		label: "R&L",
		note: "Rhianna removes two buffs and inflicts Bind: that unit cannot extra-skill, counter, or have an ally hit with them off-turn. After the third skill, 70% evasion for the rest of the fight.",
		answerTags: ["aoe", "injury"]
	});
	if (hasUnique(heroes, "lua squad") || ids.has("hellion-lua")) add({
		key: "h-lua",
		label: "H.Lua",
		note: "When a hero hits her, their team gains 7% Combat Readiness and every ally with Challenge counters. Mort and Star's Blessing turn those counters off. Lua's Challenge shortens buffs — it does not remove them."
	});
	if (hasUnique(heroes, "obliterate") || ids.has("operator-sigret")) add({
		key: "o-sigret",
		label: "O.Sigret",
		note: "Everyone's Combat Readiness is pulled back 30%, and buffs are shortened by one turn — not removed. She acts again only if Annihilation kills. Unavoidable if the target has Barrier."
	});
	if (ids.has("pirate-captain-flan")) add({
		key: "pc-flan",
		label: "PC Flan",
		note: "After an ally hits a unit with no buffs, their team gains Speed and Combat Readiness. Full Burst steals a buff, then a Bomb that stuns two turns later and cannot be resisted. That stun is not the opener."
	});
	if (hasUnique(heroes, "death sentence") || ids.has("ainz-ooal-gown")) add({
		key: "ainz",
		label: "Ainz",
		note: "Removes all buffs, then Silence so skills 2 and 3 cannot be used. At turn 12, Death Sentence deals 50,000 and ignores sharing; it falls off if he dies. 25% Barrier when an ally is hit. Another turn needs souls — arena defense rarely spends them."
	});
	if (hasUnique(heroes, "grudge") || hasUnique(heroes, "blood aura")) add({
		key: "grudge",
		label: "Grudge / Blood Aura",
		note: "First death: team Barrier and Immunity, and he gains Blood Aura. Moon Slash only revives dead allies if that third skill gets a kill. That is a clutch, not a Ruele reset."
	});
	if (hasUnique(heroes, "can you handle this") || ids.has("eternal-wanderer-ludwig")) add({
		key: "ew-ludwig",
		label: "EW Ludwig",
		note: "If you spend souls, his Combat Readiness fills and his third skill hits through more Defense. Arena defense rarely spends souls, so that extra turn usually does not happen. The first skill into him is cancelled."
	});
	if (hasUnique(heroes, "boundless obsession") || ids.has("requiem-roana")) add({
		key: "rq-roana",
		label: "RQ Roana",
		note: "Combat Readiness from Speed is halved — Speed itself is not capped. When the unit in Front (rightmost) takes a turn, her Combat Readiness jumps 70%. Then she removes buffs from everyone, adds one cooldown, and pulls Combat Readiness back 30%."
	});
	if (hasUnique(heroes, "illusion") || ids.has("specter-tenebria")) add({
		key: "spec-tene",
		label: "Spec Tene",
		note: "Cannot be picked as a skill target while an ally lives. Hits that strike everyone still hit her. Endless Nightmare always stuns. Poison Blast does not trigger counters. Another turn needs souls — arena defense rarely spends them.",
		answerTags: ["aoe"]
	});
	if (hasUnique(heroes, "engulf") || ids.has("tidal-rift-elvira")) add({
		key: "tr-elvira",
		label: "TR Elvira",
		note: "Engulf is 100% Effectiveness and crit resistance — not Immunity. Killing her gives her team Cascade (4,000 extra on their next attack). 75% Seal (passives off). The extra hit is hers alone."
	});
	if (hasUnique(heroes, "victory pose") || ids.has("top-model-luluca")) add({
		key: "tm-lulu",
		label: "TM Lulu",
		note: "Victory Pose fills the team's Combat Readiness, then she acts again. A kill with Demolish cannot be revived. Energy Blast ignores damage sharing. The extra hit is hers alone."
	});
	if (hasUnique(heroes, "deify") || ids.has("zio")) add({
		key: "zio",
		label: "Zio",
		note: "Removes two buffs, then Silence and pulls Combat Readiness back 30%. On her basic skill she hits again (no ally with her) and takes 50% less damage. Speed is not capped."
	});
	if (hasUnique(heroes, "nature restoration") || ids.has("mediator-kawerik")) add({
		key: "ml-kawerik",
		label: "ML Kawerik",
		note: "Removes all buffs, then gives her team Barrier. Then she cleanses them, gives Attack up and Immunity. Shortening your debuffs is not the same as removing buffs."
	});
	if (hasUnique(heroes, "pestilence") || ids.has("death-dealer-ray")) add({
		key: "dd-ray",
		label: "DD Ray",
		note: "Removes two buffs from everyone, then Sleep, Venom, and she acts again. Allies apply Venom and detonate it — that cuts max Health. Clinical Trial does not make an ally hit with her."
	});
	if (hasUnique(heroes, "dark moon") || hasUnique(heroes, "noias") || ids.has("shepherd-diene")) add({
		key: "dark-moon",
		label: "Dark Moon",
		note: "If you spend souls, two buffs are removed. Arena defense rarely spends souls."
	});
	if (hasUnique(heroes, "i wanna go home") || ids.has("solitaria")) add({
		key: "no-focus",
		label: "Focus lock",
		note: "Enemy Focus gain is zero. Massacre never charges.",
		answerTags: [
			"injury",
			"aoe",
			"dual-attack"
		]
	});
	if (hasUnique(heroes, "phantom's waltz") || ids.has("sea-phantom-politis")) add({
		key: "resource-cut",
		label: "Resource cut",
		note: "Enemy resource gain is reduced by 50% (Focus, Fighting Spirit, and similar). This is not a soul lock."
	});
	if (hasUnique(heroes, "astral guide") || hasUnique(heroes, "tranquility") || ids.has("politis")) add({
		key: "tranquility",
		label: "Tranquility",
		note: "Heals and Immunity clip buff duration. She takes the cycle."
	});
	if (hasUnique(heroes, "skill effect nullifier") || ids.has("new-moon-luna")) add({
		key: "nm-luna",
		label: "NM Luna nullifier",
		note: "She starts with one effect from the first skill into her cancelled. The rest of that skill still happens."
	});
	if (ids.has("conqueror-lilias")) add({
		key: "c-lilias",
		label: "C.Lilias",
		note: "For Honor lets her act again immediately. Then a random ally hits with her basic skill."
	});
	if (hasUnique(heroes, "final deliverance") || ids.has("hecate")) add({
		key: "hecate-extra",
		label: "Hecate extra-attack",
		note: "On her turn she extra-attacks everyone, then Stealth. Death's Dominion already turns revive off for both sides. The third skill starts the first fight on cooldown."
	});
	if (ids.has("archdemons-shadow")) add({
		key: "ads",
		label: "ADS Burst",
		note: "Basic skill can Seal (passives off). If the target is sealed, Burst hits everyone as an extra attack — no ally with him. Dissolution lets him act again and does not trigger counters."
	});
	if (hasUnique(heroes, "star extinction") || ids.has("straze")) add({
		key: "straze",
		label: "Straze",
		note: "Star Extinction hits everyone, he is Invincible for one turn, and it does not trigger counters. Destructive Gaze removes buffs from everyone. He is there to end the fight, not stall."
	});
	if (hasUnique(heroes, "detain") || ids.has("eye-of-the-abyss-fumyr")) add({
		key: "fumyr-detain",
		label: "Detain",
		note: "The foremost ally is taken off the field until she dies or Detain ends. That seat is empty until they return."
	});
	if (hasUnique(heroes, "concealment") || ids.has("aube")) add({
		key: "aube-hide",
		label: "Concealment",
		note: "She cannot be selected as a skill target for the rest of the fight. Area skills still hit her.",
		answerTags: ["aoe"]
	});
	if (hasUnique(heroes, "coastal discipline") || ids.has("aram")) add({
		key: "aram",
		label: "Aram",
		note: "If they take the first turn, her team starts with Immunity for three turns. That is not a Speed cap.",
		answerRoles: ["strip"]
	});
	if (hasUnique(heroes, "ignore sharing") || ids.has("ivana")) add({
		key: "ivana",
		label: "Ivana",
		note: "Requiem Prayer: their attacks ignore damage sharing for three turns. Offering and other share tanks do not cover you."
	});
	if (ids.has("amid") || hasUnique(heroes, "forest blessing")) add({
		key: "amid",
		label: "Amid Nullifier",
		note: "Forest Blessing puts Skill Nullifier on her whole team. The first skill into each of them is cancelled, then she acts again."
	});
	if (hasUnique(heroes, "immortal will") || ids.has("kayron")) add({
		key: "kayron-immortal",
		label: "Kayron Immortality",
		note: "On lethal damage he gains Immortality and Evasion, and his third skill resets. The first kill does not stick.",
		answerTags: ["strip"]
	});
	if (hasUnique(heroes, "last words of a fallen star") || hasUnique(heroes, "knowledge of the stars") || ids.has("uncharted-pioneer-politis")) add({
		key: "up-politis",
		label: "UP Politis",
		note: "Front: after ten ally attacks. Back: after ten hits taken. Then she cleanses herself, additional damage on her team doubles, and she acts again. That extra turn is not the first cycle. S1/S3 additional damage still lands on a miss.",
		answerTags: ["aoe"]
	});
	const otherCleave = heroes.some((h) => h.roles.includes("cleave") && !h.roles.includes("opener"));
	if (roles.has("opener") && otherCleave) add({
		key: "cleave",
		label: "Turn-1 cleave",
		note: "They want the first turn: remove your buffs, then hit everyone."
	});
	const firstCycle = heroes.filter(isFirstCycleOpener);
	if (firstCycle.length > 0) {
		const who = firstCycle.map((h) => h.short || h.name).join(" / ");
		const top = [...firstCycle].filter((h) => Number.isFinite(h.baseSpeed)).sort((a, b) => (b.baseSpeed ?? 0) - (a.baseSpeed ?? 0))[0];
		const speedBit = top ? ` ${top.short}'s speed before gear is ${top.baseSpeed}. Last Rider Krau is 100.` : "";
		const cannotMiss = firstCycle.some(hitsEvenOnMiss);
		const stripOpen = firstCycle.some((h) => h.tags.includes("strip") || h.roles.includes("strip"));
		add({
			key: "first-cycle",
			label: "First cycle",
			note: cannotMiss ? `${who} acts again immediately, then the third skill hits the whole team even on miss.${speedBit} If another damage dealer takes the next turn, slow units do not act.` : stripOpen ? `${who} acts again immediately on a skill (not by spending souls).${speedBit} Buffs come off, then the follow-up, before slow units act.` : `${who} acts again immediately on a skill (not by spending souls).${speedBit} That extra turn is his kit, not a speed race.`,
			answerTags: cannotMiss ? void 0 : ["evade"],
			answerRoles: ["opener"]
		});
		if (cannotMiss) add({
			key: "cannot-miss",
			label: "Cannot miss",
			note: "The third skill after that extra turn hits everyone even on miss. Missing does not stop it."
		});
	}
	const rank = {
		speedcap: 0,
		"first-cycle": 1,
		"cannot-miss": 1,
		notos: 2,
		evade: 2,
		rnl: 2,
		revive: 3,
		injury: 4,
		soulblock: 5,
		"dp-aria": 5,
		"ma-ken": 13,
		"h-lua": 13,
		"o-sigret": 14,
		"pc-flan": 14,
		ainz: 9,
		"force-target": 6,
		"fumyr-detain": 6,
		offering: 7,
		ivana: 7,
		nullifier: 8,
		amid: 8,
		"aube-hide": 8,
		collapse: 8,
		salome: 8,
		"nm-luna": 8,
		"c-lilias": 12,
		"hecate-extra": 10,
		ads: 12,
		straze: 12,
		"up-politis": 12,
		"a-yufine": 11,
		block: 8,
		"cannot-die": 9,
		"kayron-immortal": 9,
		"both-revive": 10,
		oath: 10,
		"ss-vivian": 10,
		"dj-basar": 11,
		"c-armin": 11,
		"b-hwayoung": 9,
		strip: 11,
		aram: 11,
		cascade: 11,
		reversal: 12,
		"no-counter": 13,
		"a-elena": 13,
		unhealable: 21,
		"c-pavel": 23,
		"sb-ara": 24,
		"dark-moon": 14,
		"ew-ludwig": 14,
		"rq-roana": 11,
		"spec-tene": 8,
		"tr-elvira": 8,
		"tm-lulu": 12,
		zio: 9,
		"ml-kawerik": 10,
		"dd-ray": 8,
		miseria: 15,
		"sn-yulha": 16,
		"s-taeyou": 17,
		restrict: 18,
		wmeri: 19,
		rupture: 22
	};
	return out.sort((a, b) => (rank[a.key] ?? 40) - (rank[b.key] ?? 40));
}
function unansweredThreats(threats, filled) {
	const tags = new Set(filled.flatMap((h) => h.tags));
	const roles = new Set(filled.flatMap((h) => h.roles));
	const effects = new Set(filled.flatMap((h) => heroEffects(h)));
	return threats.filter((t) => t.answerTags?.length || t.answerRoles?.length || t.answerEffects?.length).filter((t) => {
		return !(t.answerTags?.some((x) => tags.has(x)) || t.answerRoles?.some((x) => roles.has(x)) || t.answerEffects?.some((x) => effects.has(x)));
	}).map((t) => t.label);
}
var FATAL_GAP = /* @__PURE__ */ new Set([
	"Speed cap",
	"First cycle",
	"Revive / reset",
	"Notos"
]);
function prettyFatal(label) {
	if (label === "Notos") return "Sanctuary of Battle";
	if (label === "Cannot miss") return "the first cycle (it hits everyone even on miss)";
	return label;
}
/** Factual limit when no listed lineup answers a wall-level threat. Not a skip order. */
function lineupLimitNote(watch, teams) {
	const names = [];
	if (watch.some((t) => t.key === "cannot-miss")) names.push(prettyFatal("Cannot miss"));
	if (teams.length > 0) {
		const shared = teams[0].gaps.filter((g) => FATAL_GAP.has(g) && teams.every((t) => t.gaps.includes(g)));
		for (const g of shared) {
			if (g === "First cycle" && names.some((n) => n.includes("first cycle"))) continue;
			names.push(prettyFatal(g));
		}
	}
	if (names.length === 0) return null;
	if (names.length === 1) return `No lineup on this list answers ${names[0]}. Refresh is a real option.`;
	const last = names[names.length - 1];
	return `No lineup on this list answers ${names.slice(0, -1).join(", ")} or ${last}. Refresh is a real option.`;
}
/**
* Crownpath scout matcher. Accumulated — never rewrite this file as a whole.
* Targeted search-replace of a unique nearby block only.
* If a replace fails, re-read the function and retry a smaller patch.
* Floor: stay above 1000 lines. Shorter means truncated — restore from git.
*/
function heroesOf(ids) {
	return ids.map((id) => getHero(id)).filter((h) => Boolean(h));
}
function unique(arr) {
	return [...new Set(arr)];
}
function isReviveUnique(name) {
	return /fragment of life|time reversal|sacred covenant|spirit gate|soul exchange|dark contract|vip treatment|spirit lord|superhumanization|it's time to be reborn/i.test(name);
}
function classifyDefense(ids) {
	const heroes = heroesOf(ids);
	if (heroes.length === 0) return null;
	const trusted = heroes.filter((h) => h.verified);
	const unverifiedIds = heroes.filter((h) => !h.verified).map((h) => h.id);
	const tags = unique(trusted.flatMap((h) => h.tags));
	const roles = unique(trusted.flatMap((h) => h.roles));
	const effects = unique(trusted.flatMap((h) => heroEffects(h)));
	const buffs = unique(trusted.flatMap((h) => h.buffs ?? []));
	const debuffs = unique(trusted.flatMap((h) => h.debuffs ?? []));
	const uniqueEffects = trusted.flatMap((h) => (h.uniqueEffects ?? []).map((u) => ({
		...u,
		heroId: h.id
	})));
	const idSet = new Set(trusted.map((h) => h.id));
	const scores = {
		"speed-cleave": 0,
		"harsetti-stall": 0,
		"revive-wall": 0,
		"injury-grind": 0,
		"evasion-counter": 0,
		"turn2-control": 0,
		"immunity-soul": 0,
		"bruiser-mix": 1
	};
	if (trusted.length > 0) {
		if (idSet.has("harsetti") || roles.includes("speedcap")) scores["harsetti-stall"] += 8;
		if (uniqueEffects.some((u) => /skuggiheim/i.test(u.name))) scores["harsetti-stall"] += 4;
		const revivers = trusted.filter((h) => h.roles.includes("revive")).length;
		if (revivers > 0) scores["revive-wall"] += 4 + (revivers > 1 ? 3 : 0);
		if (roles.includes("tank") && revivers > 0) scores["revive-wall"] += 2;
		if (idSet.has("lisette") || idSet.has("spirit-eye-celine") || idSet.has("apocalypse-ravi") || uniqueEffects.some((u) => isReviveUnique(u.name))) scores["revive-wall"] += 3;
		const injuryCores = trusted.filter((h) => h.id === "empyrean-ilynav" || h.id === "new-moon-luna" || h.id === "urban-shadow-choux" || h.id === "zahhak" || h.id === "lone-crescent-bellona" || h.id === "twisted-eidolon-kayron" || h.id === "monarch-of-the-sword-iseria" || h.id === "disciplinary-prefect-aria" || h.id === "death-dealer-ray" || h.id === "alencia").length;
		const injuryN = trusted.filter((h) => h.tags.includes("injury") || (h.effects ?? []).includes("injury")).length;
		if (injuryN >= 2) scores["injury-grind"] += 5 + injuryN * 2;
		else if (injuryCores > 0 && trusted.some((h) => h.roles.includes("tank") || h.roles.includes("bruiser"))) scores["injury-grind"] += 6;
		const evadeCore = trusted.filter((h) => h.id === "setsuka" || h.id === "remnant-violet" || uniqueEffects.some((u) => u.heroId === h.id && /suppressed desire|concentration|demon blade/i.test(u.name))).length;
		const evadeN = trusted.filter((h) => (h.tags.includes("evade") || h.roles.includes("evasion")) && h.id !== "lone-crescent-bellona" && h.id !== "lone-wolf-peira" && h.id !== "rhianna-and-luciella" && h.id !== "violet" && h.id !== "ae-winter" && h.id !== "festive-eda" && h.id !== "afternoon-soak-flan").length;
		if (evadeCore > 0) scores["evasion-counter"] += 6 + (evadeCore > 1 ? 3 : 0);
		else if (evadeN >= 2) scores["evasion-counter"] += 5;
		if (tags.includes("counter") && evadeCore > 0) scores["evasion-counter"] += 2;
		const openers = trusted.filter((h) => h.roles.includes("opener"));
		const distinctCleave = trusted.some((h) => h.roles.includes("cleave") && !openers.some((o) => o.id === h.id));
		if (openers.length > 0 && distinctCleave) scores["speed-cleave"] += 6;
		const aoeCloser = trusted.some((h) => h.tags.includes("aoe") && (h.roles.includes("dps") || h.roles.includes("cleave")) && !h.roles.includes("opener"));
		if (openers.length > 0 && aoeCloser) scores["speed-cleave"] += 4;
		if (trusted.some((h) => h.roles.includes("control") && (h.tags.includes("cr-cut") || h.tags.includes("cr-push")))) scores["turn2-control"] += 4;
		if (idSet.has("rinak") || idSet.has("lady-of-the-scales") || idSet.has("frieren") || idSet.has("solitaria") || idSet.has("angel-of-light-angelica") || idSet.has("politis") || idSet.has("ambitious-tywin") || idSet.has("sage-baal") || idSet.has("architect-laika") || idSet.has("successor-taeyou") || idSet.has("witch-of-the-mere-tenebria") || idSet.has("abyssal-yufine") || idSet.has("requiem-roana")) scores["turn2-control"] += 3;
		if (idSet.has("ainz-ooal-gown") || idSet.has("specter-tenebria") || uniqueEffects.some((u) => /illusion|death sentence|boundless obsession/i.test(u.name))) {
			scores["turn2-control"] += 5;
			scores["speed-cleave"] -= 3;
		}
		if (idSet.has("last-rider-krau") && !idSet.has("belian") && trusted.some((h) => h.roles.includes("control") || h.roles.includes("opener"))) scores["turn2-control"] += 4;
		if (idSet.has("belian") || roles.includes("soulblock")) scores["immunity-soul"] += 6;
		if (idSet.has("last-rider-krau") && idSet.has("belian")) scores["immunity-soul"] += 3;
		if (roles.includes("bruiser") && roles.includes("tank")) scores["bruiser-mix"] += 2;
		if (idSet.has("notos") || uniqueEffects.some((u) => /god of battle|sanctuary of battle/i.test(u.name))) scores["bruiser-mix"] += 6;
	}
	const archetypePriority = {
		"harsetti-stall": 0,
		"evasion-counter": 1,
		"injury-grind": 2,
		"revive-wall": 3,
		"immunity-soul": 4,
		"turn2-control": 5,
		"speed-cleave": 6,
		"bruiser-mix": 7
	};
	const archetype = Object.entries(scores).sort((a, b) => b[1] - a[1] || archetypePriority[a[0]] - archetypePriority[b[0]])[0][0];
	const threats = heroes.map((h) => ({
		heroId: h.id,
		text: h.verified ? h.kit : "This kit has not been checked against the in-game journal. Scout ignores it.",
		severity: h.verified && h.defense >= 9 ? 3 : h.verified && h.defense >= 7 ? 2 : 1
	})).sort((a, b) => b.severity - a.severity);
	const watch = wallThreats(trusted);
	if (unverifiedIds.length > 0) {
		const names = unverifiedIds.map((id) => getHero(id)?.short ?? id).join(", ");
		watch.unshift({
			key: "unverified",
			label: "Unverified kit",
			note: unverifiedIds.length === 1 ? `${names} has not been checked against the in-game journal. Scout ignores that kit.` : `${names} have not been checked against the in-game journal. Scout ignores those kits.`
		});
	}
	const notes = watch.map((t) => t.note);
	const meta = ARCHETYPE_META[archetype];
	const headline = archetype === "evasion-counter" && idSet.has("setsuka") && !idSet.has("remnant-violet") ? "Setsuka gives the wall +30% Evasion and counters when an ally evades. That is not Remnant Violet." : meta.blurb;
	return {
		archetype,
		title: meta.title,
		headline,
		threats,
		notes,
		watch,
		tags,
		roles,
		effects,
		buffs,
		debuffs,
		uniqueEffects,
		unverifiedIds
	};
}
function slotScore(hero, need, wall, used) {
	let score = 0;
	if (!hero.verified) score -= 20;
	if (need.prefer?.includes(hero.id)) score += 8;
	if (need.roles?.some((r) => hero.roles.includes(r))) score += 4;
	if (need.tags?.some((t) => hero.tags.includes(t))) score += 3;
	if (need.avoidRoles?.some((r) => hero.roles.includes(r))) score -= 6;
	if (wall?.offering && (hero.effects ?? []).includes("ignore-damage-sharing") && (need.label === "Tech" || need.label === "Cover" || need.label === "Closer" || need.label === "Wincon")) score += 8;
	if (wall?.ferocious && need.tags?.includes("injury")) {
		if (hero.id === "urban-shadow-choux") score += 10;
		else if (hero.id === "new-moon-luna") score += 8;
		else if (hero.tags.includes("aoe") && hero.tags.includes("injury")) score += 6;
	}
	const curse = /* @__PURE__ */ new Set(["briar-witch-iseria", "hecate"]);
	const revive = /* @__PURE__ */ new Set([
		"ruele-of-light",
		"school-nurse-yulha",
		"maid-chloe",
		"arbiter-vildred",
		"lisette",
		"spirit-eye-celine",
		"apocalypse-ravi",
		"blood-moon-haste",
		"destina",
		"roana"
	]);
	const picked = used ?? /* @__PURE__ */ new Set();
	const curseOn = curse.has(hero.id) || [...picked].some((id) => curse.has(id));
	const reviveOn = revive.has(hero.id) || [...picked].some((id) => revive.has(id));
	if (curseOn && reviveOn && (curse.has(hero.id) || revive.has(hero.id))) score -= 14;
	score += TIER_ORDER[hero.tier];
	score += hero.offense * .15;
	return score;
}
function fillRecipe(recipe, pool, enemyIds, seats = 4) {
	const used = /* @__PURE__ */ new Set();
	const enemy = new Set(enemyIds);
	const picks = [];
	const missing = [];
	const wallHeroes = heroesOf(enemyIds);
	const offering = wallHeroes.some((h) => (h.uniqueEffects ?? []).some((u) => /offering|scales of equity/i.test(u.name)));
	const ferocious = wallHeroes.some((h) => (h.uniqueEffects ?? []).some((u) => /ferocious stand/i.test(u.name)));
	for (const need of recipe.slots.slice(0, seats)) {
		let best = null;
		let bestScore = 0;
		for (const hero of pool) {
			if (used.has(hero.id) || enemy.has(hero.id)) continue;
			const s = slotScore(hero, need, {
				offering,
				ferocious
			}, used);
			if (s > bestScore) {
				best = hero;
				bestScore = s;
			}
		}
		if (!best) {
			missing.push(need.label);
			continue;
		}
		const preferHit = Boolean(need.prefer?.includes(best.id));
		const roleHit = !need.roles?.length || need.roles.some((r) => best.roles.includes(r));
		const tagHit = !need.tags?.length || need.tags.some((t) => best.tags.includes(t));
		if (bestScore >= 4 && (preferHit || roleHit && tagHit && Boolean(need.roles?.length || need.tags?.length))) {
			used.add(best.id);
			picks.push({
				label: need.label,
				hero: best
			});
		} else missing.push(need.label);
	}
	return {
		picks,
		heroIds: picks.map((p) => p.hero.id),
		missing,
		coverage: (seats - missing.length) / seats
	};
}
function jobFor(hero, label, ctx) {
	const n = hero.name;
	switch (hero.id) {
		case "urban-shadow-choux": return `${n} applies injury to every enemy after each of her attacks, so you do not have to choose a single target.`;
		case "empyrean-ilynav": return `${n} is the injury core. She also cleanses and can hold the front.`;
		case "lone-crescent-bellona": return `${n} injuries everyone once Fighting Spirit is full. Her evasion applies only to herself.`;
		case "twisted-eidolon-kayron": return `${n} injuries on his basic attack, and his counters become area injury. Mort turns those counters off; the additional damage on his third skill still lands on a miss.`;
		case "monarch-of-the-sword-iseria": return `${n} injuries on Sword of Duty (her counter) and on Dawnbreaker. Fracture stacks Attack on her. Doubled counters also fire the foremost ally.`;
		case "zahhak": return `${n} is single-target injury after an extra turn.`;
		case "new-moon-luna": return `${n} is area injury and a strip. She starts with Skill Effect Nullifier: one effect from the first skill into her is cancelled. That is not Fallen Cecilia.`;
		case "last-rider-krau": return ctx?.sanctuary ? `${n} holds the front.` : `${n} holds the front and can grant the team Immunity.`;
		case "crimson-armin": return `${n} grants the team Immunity and Invincible for one cycle. She does not cleanse. Provoke is her basic attack.`;
		case "dragon-bride-senya": return `${n} holds the front. Oath of Punishment does not strip off.`;
		case "notos": return `${n} holds the front. God's Might doubles all of his stats and puts Sanctuary of Battle on the field: nobody can be buffed or debuffed. That third skill starts the first fight on cooldown.`;
		case "mort": return ctx && ctx.wallCounters === false ? `${n} holds the front.` : `${n} holds the front and prevents every other hero from countering.`;
		case "dark-corvus": return `${n} holds the front. Hits feed his third skill, which ignores damage sharing and applies Extinction if it kills.`;
		case "ruele-of-light": return `${n} is the reset if a cycle goes badly.`;
		case "school-nurse-yulha": return `${n} revives an ally at full Health with Superhumanization: undispellable +100% max Health and Speed. She also cleanses and heals at the start of every ally turn.`;
		case "maid-chloe": return `${n} revives the dead and places Revive on the living.`;
		case "diene": return `${n} is cleanse and barrier. She does not grant team Immunity.`;
		case "blood-moon-haste": return `${n} is sustain and a strip. Moon Slash only revives if that third skill gets a kill — a clutch, not a reset wall.`;
		case "briar-witch-iseria":
			if (ctx?.sanctuary) return ctx.wallRevive ? `${n} is Witch's Curse: nobody revives while she lives. Strip does not land during Sanctuary of Battle.` : `${n} is the area strip. Strip does not land during Sanctuary of Battle.`;
			if (ctx?.wallSoulblock) return ctx.wallRevive ? `${n} is Witch's Curse: nobody revives while she lives. Cursed Thorn still strips; Soulburn cannot ignore Effect Resistance.` : `${n} is the area strip. Cursed Thorn still strips; Soulburn cannot ignore Effect Resistance.`;
			if (ctx?.wallRevive) return `${n} is Witch's Curse: nobody revives while she lives. Soulburn Cursed Thorn is the area strip and ignores Effect Resistance.`;
			return `${n} is the area strip. Soulburn ignores Effect Resistance.`;
		case "hecate": return ctx?.wallRevive || ctx?.sanctuary ? `${n} is Death's Dominion: nobody revives, and Immortal does not apply. Her third skill ignores damage sharing. That skill starts the first fight on cooldown.` : `${n} ignores damage sharing on her third skill. That skill starts the first fight on cooldown; the passive is the point.`;
		case "belian": return `${n} removes soul gain. Play the rest of this draft without Soulburn.`;
		case "shepherd-diene": return `${n} strips when anyone Soulburns.`;
		case "architect-laika": return `${n} strips, inflicts Target, and takes an extra turn into her third skill if Target lands.`;
		case "ran": return `${n} grants team Immunity, then extra-turns into a strip. Frostbite turns damage sharing off.`;
		case "faithless-lidica": return `${n} strips two, applies Laceration, and takes an extra turn. Hits after that become injury.`;
		case "rinak": return `${n} strips, cuts Combat Readiness, and takes an extra turn. Stay on Pickpocketing unless the fight is over.`;
		case "straze": return `${n} is the area wipe. His second skill strips all and cannot be countered.`;
		case "judge-kise": return `${n} strips all, cannot be countered, and Soulburn ignores Effect Resistance.`;
		case "successor-taeyou": return `${n} is the area strip of two. Soulburn ignores Effect Resistance. With Possession, Azure Phantom extra-turns. Possession also counters on a critical hit. Roaring Spiritfall does not Dual Attack.`;
		case "arbiter-vildred": return `${n} is the area wipe. Dark Contract is a self-revive; anti-revive still shuts it.`;
		case "navy-captain-landy": return `${n} is extra-attack area damage. She is immune to Stun, Sleep, and Fear.`;
		case "little-queen-charlotte": return `${n} is the closer. Soulburn on her third skill cannot miss. Extinction applies only if that skill kills.`;
		case "specimen-sez": return `${n} stuns, then Extinction-kills if Light Storm gets the last hit.`;
		case "setsuka": return `${n} is the miss core. She buffs team evasion and counters when an ally is missed.`;
		case "remnant-violet": return `${n} is the miss magnet. Massacre charges on Focus; Solitaria turns that off.`;
		case "conqueror-lilias": return `${n} Dual Attacks without Soulburn, which bypasses evasion.`;
		case "sea-phantom-politis": return `${n} Dual Attacks while Enraged and cuts enemy resources. She is not a soul lock.`;
		case "solitaria": return `${n} sets enemy Focus gain to zero and locks the next cycle after the strip.`;
		case "sage-baal": return `${n} strips into Sleep. Sleep is ignored by Mort, Little Queen Charlotte, Dark Corvus, and Navy Captain Landy.`;
		case "frieren": return `${n} is strip and control. At four Soul, Defensive Magic nullifies a skill; Belian keeps her under that.`;
		case "lone-wolf-peira": return `${n} is the extra-turn opener. Her evasion is only on herself.`;
		case "harsetti": return `${n} caps enemy Speed. Do not bring a Combat Readiness stack as the win condition.`;
		case "genesis-ras": return `${n} covers himself with Sacred Covenant, a self-only revive. That is not team Immunity.`;
		case "fallen-cecilia": return `${n} holds a Skill Nullifier. Do not lead with the only strip into her.`;
		case "angel-of-light-angelica": return `${n} is Stun-immune. Guardian Angel can grant Skill Nullifier when she is hit by area attacks.`;
		case "lionheart-cermia": return `${n} extra-turns after her third skill. Dual Attacks and extra attacks into an ally reset that skill \u2014 do not give it to her.`;
		case "witch-of-the-mere-tenebria": return `${n} strips two, then applies Block so the wall cannot buff or cleanse. Soulburn is an extra turn. While Mirror of the Abyss is on cooldown, her basic attack Dual Attacks. Stealth is only on herself.`;
		case "dragon-king-sharun": return `${n} cleanses Stun, Sleep, and Fear from allies and grants Cascade: the next attack deals 4,000 extra damage. Is It Going to Rain? is Cannot Buff and a class debuff, not a strip.`;
		case "astromancer-elena": return `${n} turns enemy counters off while she has Star's Blessing. Enraged Star's Retribution is Unhealable and Restrict, not a strip. Soulburn ignores Effect Resistance.`;
		case "commander-pavel": return `${n} ignores damage sharing on his third skill. Begone is area damage after ally crits, then a full Combat Readiness bar. Extra attacks, counters, and Dual Attacks do not charge it.`;
		case "silver-blade-aramintha": return `${n} stuns everyone on Meteor Fall and applies two Burns. Flame Release is an extra attack that detonates Burn, not Dual Attack. Attack scales from Effectiveness at the start of the first fight.`;
		case "sylvan-sage-vivian": return `${n} starts immune to debuffs at full Focus. Hits of 30% max Health spend Focus for damage reduction. Nature's Judgment cuts ally cooldowns by one. Soulburn is area and does not Dual Attack.`;
		case "desert-jewel-basar": return `${n} cleanses everyone and grants Immunity. Desert Storm strips two and inverts Barrier into damage. Extra turn only if a target has Barrier.`;
		case "bystander-hwayoung": return `${n} is immune to buffs and debuffs. That is not the Immunity buff — strip does not apply. Sura ignores damage sharing and damage reduction on heroes, and Extinction if it kills.`;
		case "disciplinary-prefect-aria": return `${n} injuries on Disciplinary Action while Purge is on cooldown. That extra attack always crits. Enemy Soulburn costs double — this is not Belian.`;
		case "martial-artist-ken": return `${n} counters when an ally is crit, and Dragon Flame when he is crit. Mort and Star's Blessing turn those counters off. The Coming of Asura is area Decrease Defense.`;
		case "salome": return `${n} grants herself Skill Nullifier, clones a target, then takes an extra turn. Corrupted Divinity Dual Attacks from the highest Attack ally. Collapse is not injury.`;
		case "abyssal-yufine": return `${n} is the area strip. Frenzied Strike ignores Effect Resistance and cuts Combat Readiness by 50%. Trauma is on herself. Inner Abyss is not a Speed cap.`;
		case "rhianna-and-luciella": return `${n} strip two, Bind, then extra turn into the other sister. Pursuit of Death is area strip, Fear, and ignore damage sharing. Afterdream is 70% evasion after the third skill.`;
		case "hellion-lua": return `${n} grants Challenge to everyone. A Hero hitting her makes those allies counter and pushes Combat Readiness. Lua's Challenge is not a strip. Mort turns the counters off.`;
		case "operator-sigret": return `${n} is the area Combat Readiness cut. Obliterate is buff duration −1, not a strip. Extra turn only if Annihilation kills. Bonus damage if the target has Barrier.`;
		case "pirate-captain-flan": return `${n} steals a buff. Hunt fires after an ally hits a target with no buffs: Swift Attack and Combat Readiness. Full Burst is area steal, then Bomb. Bomb stun is delayed.`;
		case "ainz-ooal-gown": return `${n} strips every buff, then Silence. Death Sentence is 50,000 at the 12th turn and ignores damage sharing — it falls off if he dies. Extra turn is Soulburn only.`;
		case "archdemons-shadow": return `${n} seals passives. Burst is an extra area attack after a sealed S1, not Dual Attack. Dissolution is extra turn and does not trigger counters.`;
		case "eternal-wanderer-ludwig": return `${n} grants himself Skill Nullifier. Any Soulburn pushes his Combat Readiness and stacks penetrate. Extra turn is Soulburn only.`;
		case "requiem-roana": return `${n} is the area strip. Eternal Lament also increases cooldowns and cuts Combat Readiness. Boundless Obsession is not a Speed cap.`;
		case "specter-tenebria": return `${n} cannot be selected while an ally lives. Endless Nightmare is a guaranteed stun. Poison Blast does not trigger counters. Extra turn is Soulburn only.`;
		case "tidal-rift-elvira": return `${n} seals, then can extra-attack with Twisted Strike. Engulf is Crit Hit Resistance, not Immunity. Lethal damage on her grants Cascade to her team. Extra attack is not Dual Attack.`;
		case "top-model-luluca": return `${n} extra-turns after a team Combat Readiness push. Demolish is extinction only if it kills. Extra attack on Energy Blast is not Dual Attack. Ignores damage sharing versus Heroes.`;
		case "zio": return `${n} strips two, then Silence. Deify is extra attack on S1 and 50% damage reduction when hit. Extra attack is not Dual Attack. Supreme Authority is not a Speed cap.`;
		case "mediator-kawerik": return `${n} strips every buff, then a team Barrier. Nature Restoration is the team cleanse and Immunity. Barrier is not Barrier Inversion.`;
		case "death-dealer-ray": return `${n} is the area strip and extra turn. Pestilence makes allies apply Venom, then detonate it — Venom is the injury. Clinical Trial does not trigger Dual Attack.`;
		case "boss-arunka": return `${n} holds the front. Ferocious Stand forces single-target skills onto her. Area attacks ignore that.`;
		case "lady-of-the-scales": return `${n} puts Offering on the front: seventy percent of damage is shared there. When that ally dies, the team heals. Combat Readiness you push, she steals.`;
		case "ambitious-tywin": return `${n} is area Stun and soul removal. He does not strip. Rage makes Stun ignore Effect Resistance.`;
		case "apocalypse-ravi": return `${n} is a bruiser with injury on her basic attack. A kill with Soul Exchange revives one ally — anti-revive shuts that. This is not a Ruele reset.`;
		case "spirit-eye-celine": return `${n} revives all dead allies with Spirit Gate. One hit cannot exceed 70% Health. Anti-revive shuts the revive. She is not an evasion unit.`;
		case "closer-charles": return `${n} starts with evasion for one turn. After an ally hits a unit under 40% Health, he pushes Combat Readiness. Descent does not trigger counters.`;
		case "politis": return `${n} cuts Combat Readiness gain by half and clips buff duration when they use a non-attack skill. Starfall is Cannot Buff. She is not a soul lock.`;
		case "uncharted-pioneer-politis": return `${n} is the area strip, then cooldown +1. Additional damage still lands if the attack misses. Extra turn is after the mission, not turn 1.`;
		case "lisette": return `${n} is the reset. Dead allies return as Fragment of Life; Time Reversal rolls the fight back. Anti-revive shuts both.`;
		case "designer-lilibet": return `${n} converts your debuffs into Fighting Spirit, then self-cleanses and grants herself Immunity. Model Disqualification is area penetrate, not injury.`;
	}
	switch (label) {
		case "Injury": return `${n} is the injury. Cutting maximum Health is how this draft wins a long fight.`;
		case "Frontline":
		case "Tank":
		case "Hold": return `${n} holds the front while the rest of the plan plays out.`;
		case "Sustain":
		case "Support": return `${n} keeps the draft alive if a cycle goes badly.`;
		case "Anti-revive": return `${n} turns revive off. That only holds while they are alive.`;
		case "Tech":
		case "Cover": return `${n} covers the plan \u2014 strip, anti-revive, or soul lock.`;
		case "Opener": return `${n} takes the first turn and sets up the rest of the cycle.`;
		case "Strip": return `${n} removes the wall's buffs so the rest of the draft can land.`;
		case "Cleave":
		case "AoE": return `${n} is the area damage that has to end the fight on that cycle.`;
		case "Closer":
		case "Wincon": return `${n} is the unit that has to win the fight.`;
		case "Control":
		case "Lock": return `${n} takes the next cycle after you survive the opener.`;
		case "Miss": return `${n} is the miss core. Single-target skills into this unit will fail often.`;
		case "Force":
		case "True": return `${n} deals hits that do not care about evasion.`;
		case "Cap": return `${n} caps enemy Speed.`;
		case "Soul lock": return `${n} removes soul gain.`;
		default: return `${n} fills the ${label.toLowerCase()} role in this draft.`;
	}
}
function setupFor(picks, read) {
	const sanctuary = read.uniqueEffects.some((u) => /sanctuary of battle|god of battle/i.test(u.name));
	const wallRevive = read.roles.includes("revive") || read.uniqueEffects.some((u) => isReviveUnique(u.name));
	const wallCounters = read.tags.includes("counter") || read.watch.some((t) => t.key === "evade" || t.key === "no-counter") || read.uniqueEffects.some((u) => /elbris's successor|sword of duty|possession|spirit invocation/i.test(u.name));
	const wallSoulblock = read.roles.includes("soulblock") || read.watch.some((t) => t.key === "soulblock");
	return picks.map((p) => jobFor(p.hero, p.label, {
		sanctuary,
		wallRevive,
		wallCounters,
		wallSoulblock
	})).join(" ");
}
function pitfallsFor(picks, read) {
	const filled = picks.map((p) => p.hero);
	const names = new Set(filled.map((h) => h.id));
	const ranked = [];
	const push = (prio, line) => ranked.push({
		prio,
		line
	});
	const uniq = (re) => read.uniqueEffects.some((u) => re.test(u.name));
	const stripper = filled.find((h) => h.tags.includes("strip") || h.roles.includes("strip") || h.tags.includes("anti-revive"));
	const sanctuary = uniq(/sanctuary of battle|god of battle/i);
	const injury = filled.some((h) => h.tags.includes("injury"));
	if (read.watch.some((t) => t.key === "first-cycle")) push(0, read.roles.includes("revive") ? "They extra-turn on the first cycle. A slow tank draft dies before anti-revive matters. Contest the opener, miss the cycle, or live it." : "They extra-turn on the first cycle. A slow tank draft dies before the rest of the wall matters. Contest the opener, miss the cycle, or live it.");
	if (read.watch.some((t) => t.key === "cannot-miss")) push(0, "The extra-turn third skill hits everyone even on miss. Evasion does not save you. If a second DPS follows, the fight is over.");
	if (sanctuary) push(0, injury ? "Sanctuary of Battle turns buffs and debuffs off for both sides. Stay on injury. Strip, stun, and Immunity will not land while it is up." : "Sanctuary of Battle turns buffs and debuffs off for both sides. Strip and stun will not land. Kill him before God's Might, or bring injury.");
	if (!sanctuary && (uniq(/^block$/i) || read.debuffs.includes("Block"))) push(1, "Block: Immunity will not land, and other heroes cannot dispel your debuffs. That is not Seal — passives still run.");
	if (!sanctuary && uniq(/mirror of the abyss/i) && names.has("lionheart-cermia")) push(6, "Witch of the Mere Dual Attacks while her third skill is on cooldown. A Dual Attack into Lionheart Cermia resets her third skill.");
	if (!sanctuary && uniq(/cascade|lullaby for waves/i) && filled.some((h) => h.tags.includes("stun") || (h.debuffs ?? []).includes("Stun") || (h.debuffs ?? []).includes("Sleep") || (h.debuffs ?? []).includes("Fear"))) push(5, "Do not Stun, Sleep, or Fear this wall. Lullaby for Waves cleanses that lock and grants Cascade: 4,000 extra damage on their next attack.");
	if (read.roles.includes("speedcap")) push(1, injury ? "This wall caps Speed. Stay on injury; a cleave will not work." : "This wall caps Speed. You cannot outrun the first cycle.");
	if (!sanctuary && (read.roles.includes("soulblock") || uniq(/shackles of suppression/i)) && names.has("briar-witch-iseria")) push(2, "Belian turns Soulburn off. Cursed Thorn still strips; it just has to pass Effect Resistance.");
	if (uniq(/offering|scales of equity/i) && !filled.some((h) => (h.effects ?? []).includes("ignore-damage-sharing"))) push(2, "Offering still shares seventy percent of damage onto the front. Do not spend the closer into the back while the front is alive.");
	if (read.roles.includes("revive")) {
		const anti = filled.find((h) => h.tags.includes("anti-revive"));
		if (!((names.has("briar-witch-iseria") || names.has("hecate")) && (names.has("ruele-of-light") || names.has("school-nurse-yulha") || names.has("maid-chloe")))) push(3, anti ? `Revive on this wall is off only while ${anti.name} is alive.` : "This wall can reset. Injury you have already stacked is lost unless anti-revive or Extinction lands.");
	}
	if (names.has("briar-witch-iseria") && names.has("ruele-of-light")) push(4, sanctuary ? "Witch's Curse turns Ruele's revive off. During Sanctuary her Barrier does not apply either — she is heals only." : "Witch's Curse turns Ruele's revive off as well. She is heals and Barrier only while Briar Witch Iseria is alive.");
	if (names.has("briar-witch-iseria") && names.has("school-nurse-yulha")) push(4, "Witch's Curse turns School Nurse Yulha's revive off as well. She is still the per-turn cleanse and heal.");
	if (names.has("hecate") && (names.has("ruele-of-light") || names.has("school-nurse-yulha") || names.has("maid-chloe"))) push(4, "Death's Dominion turns your revive off as well while Hecate is alive.");
	if (names.has("briar-witch-iseria") && names.has("maid-chloe")) push(4, "Witch's Curse turns Maid Chloe's revive off. VIP Treatment does not land while she lives.");
	if (names.has("mort") && filled.some((h) => h.id !== "mort" && h.tags.includes("counter"))) push(4, "Mort on this draft turns your other counters off. Non-counter skills still play.");
	if (uniq(/ferocious stand/i)) {
		if (filled.some((h) => h.tags.includes("injury") && h.tags.includes("aoe"))) push(5, "Ferocious Stand only blocks single-target skills. The injury in this draft hits everyone, so you do not have to attack Arunka.");
		else if (names.has("zahhak") || names.has("empyrean-ilynav")) push(5, "Ferocious Stand forces single-target injury onto Arunka. You have to accept hitting her.");
	}
	if (stripper && !sanctuary && read.uniqueEffects.some((u) => /^skill nullifier$/i.test(u.name) || /guardian angel/i.test(u.name))) push(6, `Skill Nullifier eats the first skill. Do not open with ${stripper.name}.`);
	if (uniq(/^clone$/i) && stripper) push(6, `Clone copies a kit for one turn. Dispelling it also removes unique effects she copied. Nullifier still eats the first skill — do not open with ${stripper.name}.`);
	if (uniq(/^bind$/i) && filled.some((h) => h.id !== "mort" && (h.tags.includes("dual-attack") || h.tags.includes("extra-turn") || h.tags.includes("counter")))) push(5, "Bind turns extra skills, counters, and Dual Attacks off on that hero while it is not their turn.");
	if (uniq(/insight/i) && stripper) push(5, "Insight is Focus, not an Immunity buff. Strip does not turn it off. Hit 30% of max Health to spend Focus.");
	if (uniq(/divine vessel/i) && stripper) push(5, "Divine Vessel is immune to buffs and debuffs. Strip does not apply to her.");
	if (uniq(/barrier inversion|desert storm/i) && filled.some((h) => h.tags.includes("barrier"))) push(5, "Do not put Barrier on this wall. Desert Storm inverts it into damage and takes an extra turn.");
	if (uniq(/dark moon|noias/i) && filled.some((h) => h.tags.includes("soulburn"))) push(6, "Any Soulburn on this wall triggers Dark Moon and strips your team. Do not Soulburn.");
	if (uniq(/can you handle this/i) && filled.some((h) => h.tags.includes("soulburn"))) push(6, "Any Soulburn on this wall pushes Eternal Wanderer Ludwig and stacks penetrate. Do not Soulburn.");
	if (sanctuary && names.has("death-dealer-ray")) push(5, "Pestilence needs Venom. Sanctuary turns debuffs off — Venom will not land while it is up. Injury that does not need a debuff still stacks.");
	if (uniq(/it's far from over/i) && filled.some((h) => h.tags.includes("dual-attack") || h.tags.includes("counter") || h.id === "silver-blade-aramintha" || h.id === "navy-captain-landy" || h.id === "hecate" || h.id === "sylvan-sage-vivian" || h.id === "bystander-hwayoung" || h.id === "disciplinary-prefect-aria" || h.id === "rhianna-and-luciella" || h.id === "archdemons-shadow" || h.id === "tidal-rift-elvira" || h.id === "top-model-luluca" || h.id === "zio" || h.id === "salome")) push(6, "A Dual Attack or extra attack into Lionheart Cermia resets her third skill. Do not give it to her.");
	if (read.watch.some((t) => t.key === "evade") && names.has("little-queen-charlotte")) push(6, "Little Queen Charlotte still misses without Soulburn. Belian on their side turns that Soulburn off.");
	if (uniq(/demon blade/i)) push(6, "During Demon Blade Unleashed, Setsuka cannot die. Wait it out, or strip first.");
	if (uniq(/absolute dignity/i) && filled.some((h) => h.tags.includes("counter"))) push(6, "Mort prevents every other hero from countering. Counter plans do not work into him.");
	if (!sanctuary && !uniq(/absolute dignity/i) && uniq(/star's blessing|disciple of the stars/i) && filled.some((h) => h.tags.includes("counter"))) push(6, "Star's Blessing turns your counters off while it is up. She starts the fight with it for one turn. This is not Mort.");
	if (names.has("rinak")) push(7, "Rinak stuns herself on her third skill. Stay on Pickpocketing unless the fight is over.");
	const seen = /* @__PURE__ */ new Set();
	const cap = sanctuary ? 4 : 3;
	return ranked.sort((a, b) => a.prio - b.prio).map((x) => x.line).filter((line) => {
		if (seen.has(line)) return false;
		seen.add(line);
		return true;
	}).slice(0, cap);
}
function whyFor(recipe, read, filled) {
	const why = [];
	const names = new Set(filled.map((h) => h.id));
	const sanctuary = read.uniqueEffects.some((u) => /sanctuary of battle|god of battle/i.test(u.name));
	if (sanctuary && filled.some((h) => h.tags.includes("injury"))) why.push("Sanctuary of Battle turns buffs and debuffs off for both sides. Injury still stacks.");
	if (!sanctuary && (read.debuffs.includes("Block") || read.uniqueEffects.some((u) => /^block$/i.test(u.name)))) why.push(filled.some((h) => h.tags.includes("injury")) ? "Block after her strip: you cannot receive buffs, and other heroes cannot cleanse you. Injury still stacks." : "Block after her strip: you cannot receive buffs, and other heroes cannot cleanse you. Do not plan Immunity through it.");
	if (read.roles.includes("speedcap") && filled.some((h) => h.tags.includes("injury"))) why.push("Injury ignores the speed cap. You are playing the long fight this wall wants, on better terms.");
	if (read.watch.some((t) => t.key === "first-cycle")) why.push(read.watch.some((t) => t.key === "cannot-miss") ? "They extra-turn into a third skill that hits even on miss. If a second DPS follows, slow units do not get a turn." : "They extra-turn on the first cycle. Survive or contest that before the rest of the wall matters.");
	if (names.has("harsetti") && (read.roles.includes("opener") || read.archetype === "speed-cleave" || read.watch.some((t) => t.key === "cleave"))) why.push("Harsetti caps their Speed so the opener does not take the first cycle.");
	if (read.roles.includes("revive") && filled.some((h) => h.tags.includes("anti-revive")) && !names.has("briar-witch-iseria") && !names.has("hecate")) why.push("Anti-revive stops the reset, so the wall cannot stall forever.");
	if (read.watch.some((t) => t.key === "evade") && filled.some((h) => h.tags.includes("aoe") || h.tags.includes("dual-attack") || h.tags.includes("injury"))) {
		const violet = read.uniqueEffects.some((u) => u.heroId === "remnant-violet") || read.threats.some((t) => t.heroId === "remnant-violet");
		why.push(violet ? "Area attacks, Dual Attacks, and injury do not miss the way a single-target third skill into Violet does." : "Area attacks still hit everyone. The miss chance is +30% Evasion from Setsuka, not a Violet-style nest. Single-target injury still has to pass that roll.");
	}
	if (read.watch.some((t) => t.key === "spec-tene")) why.push("Specter Tenebria cannot be selected while an ally lives. Area attacks still hit her.");
	if (read.roles.includes("soulblock") && !filled.some((h) => h.tags.includes("soulburn"))) why.push("This draft does not need souls, so Belian is only a bulky knight.");
	if (names.has("briar-witch-iseria")) {
		const reviveOnWall = read.roles.includes("revive") || read.uniqueEffects.some((u) => isReviveUnique(u.name));
		const soulblock = read.roles.includes("soulblock");
		if (reviveOnWall) why.push(sanctuary ? "Witch's Curse turns revive off while she lives. Strip does not land during Sanctuary of Battle." : soulblock ? "Witch's Curse turns revive off while she lives. Cursed Thorn still strips; Soulburn cannot ignore Effect Resistance." : "Soulburn Cursed Thorn strips through Effect Resistance. Revive is off while she lives.");
		else if (!sanctuary && soulblock) why.push("Cursed Thorn still strips. Soulburn cannot ignore Effect Resistance on this wall.");
		else if (!sanctuary && (read.tags.includes("immunity") || read.roles.includes("strip"))) why.push("Soulburn Cursed Thorn is an area strip that ignores Effect Resistance.");
	}
	if (names.has("hecate") && (read.roles.includes("revive") || read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name)))) why.push("Death's Dominion: no revive, no Immortal. Her third skill ignores damage sharing.");
	if (names.has("commander-pavel") && read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name))) why.push("Die, You Fly ignores damage sharing on heroes. Do not spend it into the front unless the share is already down.");
	if (read.uniqueEffects.some((u) => /insight/i.test(u.name)) && filled.some((h) => h.tags.includes("injury"))) why.push("A hit of 30% max Health spends Focus. Injury is how you drop her below three and make debuffs stick.");
	if (names.has("desert-jewel-basar") && (read.tags.includes("barrier") || read.uniqueEffects.some((u) => /barrier/i.test(u.name)))) why.push("Desert Storm inverts Barrier into damage and takes an extra turn. The inversion ignores Effect Resistance.");
	if (names.has("bystander-hwayoung") && (read.roles.includes("revive") || read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name)))) why.push("Sura ignores damage sharing on heroes. A kill inflicts Extinction.");
	if (read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)) && filled.some((h) => h.tags.includes("aoe"))) {
		const stInjury = filled.some((h) => h.tags.includes("injury") && !h.tags.includes("aoe"));
		why.push(stInjury ? "Area attacks ignore Ferocious Stand. Single-target injury still has to hit Arunka." : "Area attacks ignore Ferocious Stand. You do not have to attack Arunka.");
	}
	if (names.has("conqueror-lilias") && read.watch.some((t) => t.key === "evade")) why.push("Conqueror Lilias Dual Attacks without Soulburn, which bypasses Concentration.");
	if (names.has("sea-phantom-politis") && read.watch.some((t) => t.key === "evade")) why.push("Sea Phantom Politis Dual Attacks while Enraged, with no Soulburn required.");
	if (names.has("mort") && (read.tags.includes("counter") || read.watch.some((t) => t.key === "evade"))) {
		if (read.uniqueEffects.some((u) => /elbris's successor|sword of duty/i.test(u.name))) why.push("Mort turns her doubled counters off. Dawnbreaker still injures.");
		else if (read.watch.some((t) => t.key === "evade")) why.push("Mort: nobody else can counter. Setsuka bounce is off.");
		else why.push("Mort: nobody else can counter.");
	}
	if (names.has("rinak") && (read.tags.includes("immunity") || read.roles.includes("strip") || read.roles.includes("control"))) why.push("Pickpocketing strips, cuts Combat Readiness, and grants an extra turn. Do not use the third skill unless the fight ends.");
	if (read.uniqueEffects.some((u) => /defensive magic/i.test(u.name)) && filled.some((h) => h.roles.includes("soulblock"))) why.push("Belian keeps Frieren from gaining Soul on her turns, so Defensive Magic stays off even if the fight goes long.");
	if (read.uniqueEffects.some((u) => /tranquility|astral guide/i.test(u.name))) why.push("Do not recast Immunity or heals into Politis — Tranquility clips buff duration and she takes the cycle.");
	if (read.uniqueEffects.some((u) => /sacred covenant/i.test(u.name)) && filled.some((h) => h.tags.includes("anti-revive"))) why.push("Anti-revive shuts the Covenant revive. After five turns he is only a knight.");
	if (names.has("frieren") && filled.some((h) => h.tags.includes("evade"))) why.push("Frieren's extra Focus and Fighting Spirit charges Massacre and Demon Blade faster.");
	if (names.has("solitaria") && read.watch.some((t) => t.key === "evade")) why.push("Solitaria sets their Focus gain to zero. Massacre never comes up.");
	if (read.uniqueEffects.some((u) => /dark moon|noias/i.test(u.name)) && filled.some((h) => h.tags.includes("soulburn"))) why.push("Do not Soulburn into Shepherd of the Dark Diene — Dark Moon strips two from everyone.");
	if (names.has("lone-wolf-peira") && (read.roles.includes("opener") || read.archetype === "speed-cleave" || read.archetype === "turn2-control")) why.push("Peira extra turn plus Swift Attack is the opener. She is not a stripper.");
	if (names.has("archdemons-shadow") && read.tags.includes("counter")) why.push("Dissolution does not trigger a counterattack.");
	if (names.has("specter-tenebria") && read.tags.includes("counter")) why.push("Poison Blast does not trigger a counterattack.");
	if (names.has("death-dealer-ray") && read.tags.includes("dual-attack")) why.push("Clinical Trial does not trigger Dual Attack.");
	if (names.has("zio") && (read.uniqueEffects.some((u) => /inner abyss|boundless obsession/i.test(u.name)) || read.watch.some((t) => t.key === "restrict"))) why.push("Supreme Authority ignores effects that reduce Combat Readiness increases.");
	if (names.has("death-dealer-ray") && (read.roles.includes("speedcap") || read.archetype === "harsetti-stall" || read.archetype === "injury-grind")) why.push("Pestilence makes every ally apply Venom, then detonate it. That is the injury. The cap does not stop it.");
	if (names.has("mediator-kawerik") && (read.tags.includes("immunity") || read.roles.includes("strip"))) why.push("Balance of Power strips every buff, then a team Barrier. Nature Restoration is the cleanse and Immunity.");
	if (names.has("archdemons-shadow") && (read.roles.includes("speedcap") || read.roles.includes("soulblock") || read.watch.some((t) => [
		"speedcap",
		"soulblock",
		"ss-vivian",
		"b-hwayoung"
	].includes(t.key)))) why.push("Seal turns those passives off. Burst is the extra area attack after a sealed S1.");
	if (names.has("urban-shadow-choux") && (read.roles.includes("speedcap") || read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)))) why.push("Bzzt! injuries everyone after each attack. Ferocious Stand does not eat it.");
	if (names.has("straze") && (read.tags.includes("immunity") || read.tags.includes("evade") || read.roles.includes("strip"))) why.push("Straze's second skill strips all and ignores Effect Resistance against lower Attack.");
	if (names.has("zahhak") && read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name))) why.push("Zahhak has to attack Arunka. Bring area injury if you can.");
	if (names.has("zahhak") && (read.roles.includes("speedcap") || read.archetype === "harsetti-stall")) why.push("Execute is 35% injury after an extra turn. The cap does not stop it.");
	if (names.has("ambitious-tywin") && (read.roles.includes("soulblock") || read.tags.includes("immunity"))) why.push("Flash is area Stun and Decrease Defense. He does not strip — bring a real stripper.");
	if (names.has("ran") && read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name))) why.push("Frostbite turns Offering off — damage sharing and damage reduction do not apply.");
	if (names.has("ran") && (read.tags.includes("immunity") || read.roles.includes("strip"))) why.push("Her second skill extra-turns into Instant Blade. Soulburn ignores Effect Resistance.");
	if (names.has("judge-kise") && (read.tags.includes("immunity") || read.tags.includes("evade") || read.tags.includes("counter"))) why.push("End of Evil strips all and cannot be countered. Soulburn ignores Effect Resistance.");
	if (names.has("lone-crescent-bellona") && (read.roles.includes("speedcap") || read.uniqueEffects.some((u) => /ferocious stand/i.test(u.name)))) why.push("All Eyes on Me injuries everyone at full Fighting Spirit. Ferocious Stand does not eat the area hit.");
	if (names.has("dark-corvus") && (read.roles.includes("revive") || read.uniqueEffects.some((u) => /offering|scales of equity/i.test(u.name)))) why.push("Devil's Descent ignores Offering and Extinction-kills. The first fight starts that skill on cooldown.");
	if (names.has("closer-charles") && (read.tags.includes("injury") || read.archetype === "injury-grind")) why.push("Demolition scales with lost Health. Injury walls feed him the execute.");
	if (names.has("little-queen-charlotte") && read.watch.some((t) => t.key === "evade")) why.push("Soulburn on her third skill is +100% Hit Chance. Aim Violet as the main target.");
	if (names.has("little-queen-charlotte") && read.roles.includes("revive")) why.push("Extinction only applies if that third skill kills.");
	if (names.has("designer-lilibet") && (read.roles.includes("control") || read.tags.includes("stun"))) why.push("Do not stack debuffs into Emergency Stitching — that is her Combat Readiness and Immunity.");
	if (names.has("faithless-lidica") && (read.tags.includes("immunity") || read.roles.includes("tank"))) why.push("Larkspur strips two, applies Laceration, and extra-turns. Hits after that become injury.");
	if (names.has("maid-chloe") && filled.some((h) => h.tags.includes("anti-revive"))) why.push("Anti-revive shuts VIP Treatment. The Revive buff on the living is still a revive.");
	if (filled.some((h) => h.tags.includes("anti-revive")) && read.uniqueEffects.some((u) => /superhumanization|it's time to be reborn/i.test(u.name))) why.push("Anti-revive shuts It's Time to Be Reborn. Superhumanization never comes up.");
	if (names.has("specimen-sez") && (read.roles.includes("revive") || read.tags.includes("stun"))) why.push("Stun first. Light Storm fully penetrates a stunned target and applies Extinction if it kills.");
	if (names.has("arbiter-vildred") && filled.some((h) => h.tags.includes("anti-revive"))) why.push("Anti-revive shuts Dark Contract. Without it he returns at 70% Health with a full bar.");
	if (names.has("twisted-eidolon-kayron") && (read.tags.includes("evade") || read.roles.includes("evasion"))) why.push("Sword of Requiem additional damage hits even on a miss. Injury on his first skill also applies on a miss.");
	if (read.uniqueEffects.some((u) => /it's far from over/i.test(u.name)) && filled.some((h) => h.tags.includes("dual-attack"))) why.push("Do not Dual Attack into Lionheart Cermia. That resets her third skill.");
	if (names.has("architect-laika") && (read.tags.includes("evade") || read.roles.includes("evasion") || read.roles.includes("revive"))) why.push("Target reduces Evasion by 50%. The extra turn into her third skill Extinction-kills if it gets the last hit.");
	if (names.has("sage-baal") && !read.uniqueEffects.some((u) => /absolute dignity|queen's dignity|ruin's advent|ruler of the sea/i.test(u.name))) why.push("Sleep reduces Evasion to zero until they take a hit. Do not splash before Eye of Death.");
	if (why.length === 0) {
		const fromWatch = {
			"spec-tene": "Area attacks still hit Specter Tenebria. Single-target skills cannot select her while an ally lives.",
			ainz: "Death Sentence is 50,000 at the twelfth turn and falls off if he dies.",
			"rq-roana": "Combat Readiness from Speed is halved. Do not win this as a Speed race.",
			seal: "Seal turns passives off. Do not lean on a buffed opener.",
			cleave: "They want the first cycle. Cap Speed, or survive into the next one.",
			"first-cycle": "They extra-turn on the first cycle. Anti-revive waits until you survive that.",
			"ew-ludwig": "Any Soulburn pushes Eternal Wanderer Ludwig. Do not Soulburn.",
			"dark-moon": "Any Soulburn triggers Dark Moon. Do not Soulburn.",
			"tr-elvira": "Engulf is Crit Hit Resistance, not Immunity. Lethal damage on her grants her team extra damage on their next attack.",
			zio: "Strip two, then Silence. Supreme Authority is not a Speed cap."
		};
		for (const t of read.watch) {
			const line = fromWatch[t.key];
			if (line && !why.includes(line)) why.push(line);
			if (why.length >= 2) break;
		}
		if (why.length === 0 && read.watch[0]) why.push(read.watch[0].note);
	}
	return why.slice(0, 3);
}
function requirePool() {
	return allHeroes().filter((h) => h.verified).map((h) => h.id);
}
function recipesFor(read) {
	const all = allRecipes();
	let hit = all.filter((r) => r.vs.includes(read.archetype) || r.vs.length === 0);
	if (read.uniqueEffects.some((u) => /sanctuary of battle|god of battle/i.test(u.name))) {
		hit = hit.filter((r) => r.id !== "outspeed-cleave" && r.id !== "strip-control" && r.id !== "turn2-control" && r.id !== "evasion-bait");
		if (!hit.some((r) => r.id === "injury-vs-stall")) {
			const injury = all.find((r) => r.id === "injury-vs-stall");
			if (injury) hit = [injury, ...hit];
		}
	}
	if (read.roles.includes("soulblock") || read.uniqueEffects.some((u) => /shackles of suppression/i.test(u.name))) hit = hit.filter((r) => r.id !== "outspeed-cleave");
	if (read.archetype === "injury-grind") hit = hit.filter((r) => r.id !== "outspeed-cleave" && r.id !== "strip-control");
	if (read.watch.some((t) => t.key === "first-cycle")) {
		const race = read.archetype === "speed-cleave";
		const cannotMiss = read.watch.some((t) => t.key === "cannot-miss");
		const inject = cannotMiss || !race ? ["injury-vs-stall"] : ["evasion-bait", "injury-vs-stall"];
		for (const id of inject) if (!hit.some((r) => r.id === id)) {
			const extra = all.find((r) => r.id === id);
			if (extra) hit = [...hit, extra];
		}
		const prefer = cannotMiss ? ["injury-vs-stall", "turn2-control"] : race ? [
			"evasion-bait",
			"injury-vs-stall",
			"outspeed-cleave",
			"turn2-control"
		] : [
			"injury-vs-stall",
			"turn2-control",
			"strip-control"
		];
		hit = [...hit].sort((a, b) => {
			const ia = prefer.indexOf(a.id);
			const ib = prefer.indexOf(b.id);
			return (ia === -1 ? 40 : ia) - (ib === -1 ? 40 : ib);
		});
	}
	if (hit.length > 0) return hit;
	return all.filter((r) => r.vs.includes("bruiser-mix"));
}
function recommendCounters(enemyIds, poolIds, seats = 4) {
	const read = classifyDefense(enemyIds);
	if (!read) return [];
	const wanted = (poolIds ?? requirePool()).map((id) => getHero(id)).filter((h) => Boolean(h && h.verified));
	const theory = !poolIds || wanted.length < 4;
	const usable = wanted.length >= 3 ? wanted : heroesOf(requirePool());
	const isTheory = theory || wanted.length < 4;
	const results = [];
	for (const recipe of recipesFor(read)) {
		const reviveThreat = read.roles.includes("revive") || read.uniqueEffects.some((u) => isReviveUnique(u.name));
		if (recipe.id === "anti-revive-burst" && !reviveThreat) continue;
		const filled = fillRecipe(recipe, usable, enemyIds, seats);
		if (filled.heroIds.length < 3) continue;
		const filledHeroes = filled.picks.map((p) => p.hero);
		const wallOpeners = heroesOf(enemyIds).filter(isFirstCycleOpener);
		const theirFast = Math.max(0, ...wallOpeners.map((h) => h.baseSpeed ?? 0));
		const ourFast = Math.max(0, ...filledHeroes.map((h) => h.baseSpeed ?? 0));
		const gap = theirFast > 0 ? theirFast - ourFast : 0;
		const cannotMiss = heroesOf(enemyIds).some(hitsEvenOnMiss);
		if (cannotMiss && recipe.id === "evasion-bait") continue;
		const race = recipe.id === "outspeed-cleave" || recipe.id === "anti-revive-burst" || recipe.id === "strip-control" || recipe.id === "turn2-control";
		if (wallOpeners.length > 0 && race) {
			if (!filledHeroes.some((h) => h.roles.includes("opener") && Number.isFinite(h.baseSpeed) && (h.baseSpeed ?? 0) >= theirFast - 8)) continue;
		}
		const answerable = read.watch.filter((t) => t.answerTags?.length || t.answerRoles?.length || t.answerEffects?.length).length;
		const gaps = unansweredThreats(read.watch, filledHeroes);
		const answered = Math.max(0, answerable - gaps.length);
		const tierAvg = filledHeroes.reduce((s, h) => s + TIER_ORDER[h.tier], 0) / Math.max(1, filledHeroes.length);
		let speedAdj = 0;
		if (gap >= 12 && recipe.id === "injury-vs-stall") speedAdj += 12;
		if (gap >= 12 && recipe.id === "evasion-bait" && !cannotMiss) speedAdj += 12;
		const score = Math.round(Math.min(99, Math.max(1, 20 + filled.coverage * 48 + answered * 8 + tierAvg * 4 + (isTheory ? -8 : 4) - gaps.length * 8 + speedAdj)));
		results.push({
			recipeId: recipe.id,
			name: recipe.name,
			heroIds: filled.heroIds,
			seats,
			score,
			coverage: filled.coverage,
			wincon: recipe.wincon,
			setup: setupFor(filled.picks, read),
			pitfalls: pitfallsFor(filled.picks, read),
			missing: filled.missing,
			gaps,
			theorycraft: isTheory,
			why: whyFor(recipe, read, filledHeroes)
		});
	}
	results.sort((a, b) => b.score - a.score || b.coverage - a.coverage);
	const seen = /* @__PURE__ */ new Set();
	const uniqueTeams = [];
	for (const team of results) {
		const key = [...team.heroIds].sort().join("|");
		if (seen.has(key)) continue;
		seen.add(key);
		uniqueTeams.push(team);
		if (uniqueTeams.length >= 4) break;
	}
	return uniqueTeams;
}
function heroMatchesToken(h, t) {
	const name = h.name.toLowerCase();
	const short = h.short.toLowerCase();
	if (name.includes(t) || short.toLowerCase().includes(t) || h.id.includes(t)) return true;
	if (name.split(/[\s.&'-]+/).some((w) => w.startsWith(t))) return true;
	return `${h.element} ${h.class} ${h.roles.join(" ")} ${h.tags.join(" ")} ${(h.effects ?? []).join(" ")}`.toLowerCase().includes(t);
}
function tokenScore(h, t) {
	const name = h.name.toLowerCase();
	const short = h.short.toLowerCase();
	let s = 0;
	if (short === t || name === t || h.id === t) s = 100;
	else if (short.startsWith(t) || name.startsWith(t)) s = 80;
	else if (name.split(/[\s.&'-]+/).some((w) => w === t)) s = 70;
	else if (name.split(/[\s.&'-]+/).some((w) => w.startsWith(t))) s = 55;
	else if (name.includes(t) || short.includes(t)) s = 40;
	else if (heroMatchesToken(h, t)) s = 20;
	if (h.verified) s += 4;
	return s;
}
function searchTokens(query) {
	return query.split(/[,，;]+/).map((t) => t.trim().toLowerCase()).filter(Boolean);
}
function searchHeroes(query, list = allHeroes()) {
	const tokens = searchTokens(query);
	if (tokens.length === 0) return list;
	return list.filter((h) => tokens.some((t) => heroMatchesToken(h, t)));
}
function bestHeroMatches(query, list = allHeroes()) {
	const tokens = searchTokens(query);
	const used = /* @__PURE__ */ new Set();
	const out = [];
	for (const t of tokens) {
		const hit = list.filter((h) => !used.has(h.id) && tokenScore(h, t) >= 40).sort((a, b) => tokenScore(b, t) - tokenScore(a, t) || a.name.localeCompare(b.name))[0];
		if (hit) {
			used.add(hit.id);
			out.push(hit);
		}
	}
	return out;
}
//#endregion
export { searchHeroes as a, recommendCounters as i, classifyDefense as n, searchTokens as o, lineupLimitNote as r, bestHeroMatches as t };
