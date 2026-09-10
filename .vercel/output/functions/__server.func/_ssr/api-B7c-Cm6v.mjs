import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { C as heroRarity, S as heroEffects, _ as authMiddleware, c as HEROES, d as RECIPES, n as ARCHETYPE_META, p as SAMPLE_ROSTER, u as PRESET_DEFENSES, x as getSql } from "./recipes-DsR1fcfA.mjs";
import { t as isOwnerIdentity } from "./owner-PZ9T3dqf.mjs";
import { A as boolean, D as _enum, F as object, L as record, M as literal, P as number, R as string, k as array, z as union } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-B7c-Cm6v.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var ForbiddenError = class extends Error {
	status = 403;
	constructor() {
		super("Forbidden");
		this.name = "ForbiddenError";
	}
};
function parseJson(value, fallback) {
	if (value == null) return fallback;
	if (typeof value === "string") try {
		return JSON.parse(value);
	} catch {
		return fallback;
	}
	return value;
}
function asStringList(value) {
	return parseJson(value, []).filter((x) => typeof x === "string");
}
function asUniqueEffects(value) {
	const raw = parseJson(value, []);
	const out = [];
	for (const item of raw) {
		if (!item || typeof item !== "object") continue;
		const rec = item;
		const name = String(rec.name ?? "").trim();
		const text = String(rec.text ?? "").trim();
		if (!name) continue;
		out.push({
			name,
			text
		});
	}
	return out;
}
function asCheckedAt(value) {
	if (!value) return void 0;
	if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
	return String(value).match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
}
function todayStamp() {
	return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function heroFromRow(row) {
	return {
		id: String(row.id),
		name: String(row.name),
		short: String(row.short),
		element: row.element,
		class: row.class,
		tier: row.tier,
		roles: asStringList(row.roles),
		tags: asStringList(row.tags),
		effects: asStringList(row.effects),
		buffs: asStringList(row.buffs),
		debuffs: asStringList(row.debuffs),
		uniqueEffects: asUniqueEffects(row.unique_effects),
		kit: String(row.kit ?? ""),
		defense: Number(row.defense ?? 5),
		offense: Number(row.offense ?? 5),
		baseSpeed: (() => {
			const n = Number(row.base_speed);
			return Number.isFinite(n) ? n : void 0;
		})(),
		icon: String(row.icon ?? ""),
		verified: Boolean(row.verified),
		checkedAt: asCheckedAt(row.checked_at),
		rarity: asRarity(row.rarity)
	};
}
function asRarity(value) {
	const n = Number(value);
	if (n === 3 || n === 4 || n === 5) return n;
	return 5;
}
function recipeFromRow(row) {
	const slotsRaw = parseJson(row.slots, []);
	const slots = [
		slotsRaw[0] ?? { label: "One" },
		slotsRaw[1] ?? { label: "Two" },
		slotsRaw[2] ?? { label: "Three" },
		slotsRaw[3] ?? { label: "Four" }
	];
	return {
		id: String(row.id),
		name: String(row.name),
		vs: asStringList(row.vs),
		summary: String(row.summary ?? ""),
		wincon: String(row.wincon ?? ""),
		setup: String(row.setup ?? ""),
		pitfalls: asStringList(row.pitfalls),
		slots,
		createdBy: row.created_by ? String(row.created_by) : null,
		source: row.source || "seed",
		author: String(row.author ?? "").trim() || (row.source === "admin" ? "Admin" : row.source === "generated" ? "Generated" : "Catalog")
	};
}
function presetFromRow(row) {
	const ids = asStringList(row.hero_ids);
	while (ids.length < 4) ids.push("");
	return {
		id: String(row.id),
		name: String(row.name),
		heroIds: ids.slice(0, 4),
		blurb: String(row.blurb ?? "")
	};
}
function padFour(ids) {
	const next = [
		"",
		"",
		"",
		""
	];
	ids.slice(0, 4).forEach((id, i) => {
		next[i] = id ?? "";
	});
	return next;
}
function packScout(mode, arena, gw, gw2 = [], gwRound = 1) {
	return {
		v: 3,
		mode,
		arena: padFour(arena),
		gw: padFour(gw),
		gw2: padFour(gw2),
		gwRound
	};
}
function unpackScout(raw) {
	const value = parseJson(raw, raw);
	if (value && typeof value === "object" && !Array.isArray(value)) {
		const blob = value;
		if (blob.v === 2 || blob.v === 3) return {
			mode: blob.mode === "arena" ? "arena" : "gw",
			arena: padFour(asStringList(blob.arena)),
			gw: padFour(asStringList(blob.gw)),
			gw2: padFour(asStringList(blob.gw2)),
			gwRound: blob.gwRound === 2 ? 2 : 1
		};
	}
	return {
		mode: "gw",
		arena: padFour(asStringList(value)),
		gw: padFour([]),
		gw2: padFour([]),
		gwRound: 1
	};
}
function defaultEnemy() {
	return [
		"",
		"",
		"",
		""
	];
}
function defaultRoster() {
	const next = {};
	for (const id of SAMPLE_ROSTER) next[id] = {
		owned: true,
		built: true
	};
	return next;
}
async function ensureCatalog() {
	const sql = await getSql();
	const seeded = (await sql`select value from app_meta where key = 'catalog_seeded'`)[0]?.value === "1";
	for (let i = 0; i < HEROES.length; i++) {
		const h = HEROES[i];
		await sql`
      insert into heroes (id, name, short, element, class, tier, roles, tags, effects, buffs, debuffs, unique_effects, kit, defense, offense, base_speed, icon, sort_order, verified, checked_at, rarity)
      values (
        ${h.id}, ${h.name}, ${h.short}, ${h.element}, ${h.class}, ${h.tier},
        ${JSON.stringify(h.roles)}::jsonb, ${JSON.stringify(h.tags)}::jsonb,
        ${JSON.stringify(heroEffects(h))}::jsonb,
        ${JSON.stringify(h.buffs ?? [])}::jsonb,
        ${JSON.stringify(h.debuffs ?? [])}::jsonb,
        ${JSON.stringify(h.uniqueEffects ?? [])}::jsonb,
        ${h.kit}, ${h.defense}, ${h.offense}, ${h.baseSpeed ?? null}, ${h.icon ?? ""}, ${i}, ${h.verified ?? false},
        ${h.verified ? h.checkedAt ?? todayStamp() : null}, ${heroRarity(h)}
      )
      on conflict (id) do nothing
    `;
	}
	for (const h of HEROES) await sql`update heroes set rarity = ${heroRarity(h)} where id = ${h.id}`;
	for (const h of HEROES) {
		const effects = heroEffects(h);
		if (effects.length === 0) continue;
		await sql`
      update heroes
      set effects = ${JSON.stringify(effects)}::jsonb
      where id = ${h.id} and (effects is null or effects = '[]'::jsonb)
    `;
	}
	for (const hero of HEROES) {
		if (!hero.verified) continue;
		await sql`
      update heroes set
        roles = ${JSON.stringify(hero.roles)}::jsonb,
        tags = ${JSON.stringify(hero.tags)}::jsonb,
        effects = ${JSON.stringify(heroEffects(hero))}::jsonb,
        buffs = ${JSON.stringify(hero.buffs ?? [])}::jsonb,
        debuffs = ${JSON.stringify(hero.debuffs ?? [])}::jsonb,
        unique_effects = ${JSON.stringify(hero.uniqueEffects ?? [])}::jsonb,
        kit = ${hero.kit},
        defense = ${hero.defense},
        offense = ${hero.offense},
        base_speed = ${hero.baseSpeed ?? null},
        verified = true,
        checked_at = ${hero.checkedAt ?? todayStamp()}
      where id = ${hero.id}
    `;
	}
	for (const h of HEROES) {
		if (h.verified) continue;
		await sql`
      update heroes set
        short = ${h.short},
        roles = ${JSON.stringify(h.roles)}::jsonb,
        tags = ${JSON.stringify(h.tags)}::jsonb,
        effects = ${JSON.stringify(heroEffects(h))}::jsonb,
        buffs = ${JSON.stringify(h.buffs ?? [])}::jsonb,
        debuffs = ${JSON.stringify(h.debuffs ?? [])}::jsonb,
        unique_effects = ${JSON.stringify(h.uniqueEffects ?? [])}::jsonb,
        kit = ${h.kit},
        defense = ${h.defense},
        offense = ${h.offense},
        base_speed = ${h.baseSpeed ?? null},
        verified = false,
        checked_at = null
      where id = ${h.id} and verified = false
    `;
	}
	if (!seeded) {
		for (let i = 0; i < RECIPES.length; i++) {
			const r = RECIPES[i];
			await sql`
        insert into recipes (id, name, vs, summary, wincon, setup, pitfalls, slots, sort_order, source)
        values (
          ${r.id}, ${r.name},
          ${JSON.stringify(r.vs)}::jsonb, ${r.summary}, ${r.wincon}, ${r.setup},
          ${JSON.stringify(r.pitfalls)}::jsonb, ${JSON.stringify(r.slots)}::jsonb, ${i},
          'seed'
        )
        on conflict (id) do nothing
      `;
		}
		for (let i = 0; i < PRESET_DEFENSES.length; i++) {
			const p = PRESET_DEFENSES[i];
			await sql`
        insert into presets (id, name, hero_ids, blurb, sort_order)
        values (
          ${p.id}, ${p.name}, ${JSON.stringify(p.heroIds)}::jsonb, ${p.blurb}, ${i}
        )
        on conflict (id) do nothing
      `;
		}
		await sql`insert into app_meta (key, value) values ('catalog_seeded', '1') on conflict (key) do nothing`;
	}
	for (let i = 0; i < RECIPES.length; i++) {
		const r = RECIPES[i];
		await sql`
      update recipes set
        name = ${r.name},
        vs = ${JSON.stringify(r.vs)}::jsonb,
        summary = ${r.summary},
        wincon = ${r.wincon},
        setup = ${r.setup},
        pitfalls = ${JSON.stringify(r.pitfalls)}::jsonb,
        slots = ${JSON.stringify(r.slots)}::jsonb,
        sort_order = ${i}
      where id = ${r.id} and source = 'seed'
    `;
	}
	for (let i = 0; i < PRESET_DEFENSES.length; i++) {
		const p = PRESET_DEFENSES[i];
		await sql`
      insert into presets (id, name, hero_ids, blurb, sort_order)
      values (
        ${p.id}, ${p.name}, ${JSON.stringify(p.heroIds)}::jsonb, ${p.blurb}, ${i}
      )
      on conflict (id) do update set
        name = excluded.name,
        hero_ids = excluded.hero_ids,
        blurb = excluded.blurb,
        sort_order = excluded.sort_order
    `;
	}
	await sql`delete from presets where id = 'cleave-line'`;
}
async function loadOwnerIds() {
	return parseJson((await (await getSql())`select value from app_meta where key = 'owner_ids'`)[0]?.value, []).filter((x) => typeof x === "string");
}
async function rememberOwnerId(userId) {
	const sql = await getSql();
	const ids = await loadOwnerIds();
	if (ids.includes(userId)) return;
	ids.push(userId);
	await sql`
    insert into app_meta (key, value) values ('owner_ids', ${JSON.stringify(ids)})
    on conflict (key) do update set value = excluded.value
  `;
}
async function identitiesFor(userId) {
	const sql = await getSql();
	const out = [userId];
	const row = (await sql`select * from "user" where id = ${userId}`)[0];
	if (row) {
		for (const value of Object.values(row)) if (typeof value === "string" && value.length > 0 && value.length < 320) out.push(value);
	}
	try {
		const accounts = await sql`
      select "accountId" from "account" where "userId" = ${userId}
    `;
		for (const a of accounts) if (a.accountId) out.push(a.accountId);
	} catch {}
	return out;
}
async function isOwnerUserId(userId) {
	if ((await loadOwnerIds()).includes(userId)) return true;
	const hit = isOwnerIdentity(...await identitiesFor(userId));
	if (hit) await rememberOwnerId(userId);
	return hit;
}
async function isAdminUser(userId) {
	if (await isOwnerUserId(userId)) return true;
	return (await (await getSql())`select role from profiles where user_id = ${userId}`)[0]?.role === "admin";
}
async function ensureProfile(userId) {
	const sql = await getSql();
	const users = await sql`
    select name, email from "user" where id = ${userId}
  `;
	const admin = await isOwnerUserId(userId);
	const role = admin ? "admin" : "member";
	const existing = await sql`
    select user_id, role from profiles where user_id = ${userId}
  `;
	const rosterJson = JSON.stringify(defaultRoster());
	const enemyJson = JSON.stringify(defaultEnemy());
	if (existing.length > 0) {
		if (admin && existing[0]?.role !== "admin") await sql`update profiles set role = ${role} where user_id = ${userId}`;
		await sql`insert into arena_state (user_id, roster, enemy) values (${userId}, ${rosterJson}::jsonb, ${enemyJson}::jsonb) on conflict (user_id) do nothing`;
		return;
	}
	await sql`
    insert into profiles (user_id, display_name, role)
    values (${userId}, ${users[0]?.name ?? null}, ${role})
  `;
	await sql`insert into arena_state (user_id, roster, enemy) values (${userId}, ${rosterJson}::jsonb, ${enemyJson}::jsonb) on conflict (user_id) do nothing`;
}
async function requireAdmin(userId) {
	await ensureProfile(userId);
	if (!await isAdminUser(userId)) throw new ForbiddenError();
}
async function requireOwner(userId) {
	if (!await isOwnerUserId(userId)) throw new ForbiddenError();
}
async function actorLabel(userId) {
	const r = (await (await getSql())`
    select p.ingame_name, p.display_name, u.email, u.name
    from profiles p
    left join "user" u on u.id = p.user_id
    where p.user_id = ${userId}
  `)[0];
	return r?.ingame_name || r?.display_name || r?.name || r?.email || "Admin";
}
function compactNames(names) {
	if (names.length <= 3) return names.join(", ");
	return `${names.slice(0, 3).join(", ")} +${names.length - 3}`;
}
function eventSummary(action, names) {
	const list = compactNames(names);
	const many = names.length > 1;
	switch (action) {
		case "unit.create": return many ? `Added units · ${list}` : `Added unit · ${list}`;
		case "unit.update": return many ? `Updated units · ${list}` : `Updated unit · ${list}`;
		case "unit.icon": return many ? `Updated icons · ${list}` : `Updated icon · ${list}`;
		case "unit.delete": return many ? `Removed units · ${list}` : `Removed unit · ${list}`;
		case "recipe.save": return many ? `Updated strategies · ${list}` : `Updated strategy · ${list}`;
		case "recipe.delete": return many ? `Removed strategies · ${list}` : `Removed strategy · ${list}`;
		case "wall.save": return many ? `Updated walls · ${list}` : `Updated wall · ${list}`;
		case "wall.delete": return many ? `Removed walls · ${list}` : `Removed wall · ${list}`;
		case "member.role": return `Role · ${list}`;
		case "member.name": return `In-game name · ${list}`;
		case "idea.submit": return many ? `Logged ideas · ${list}` : `Logged idea · ${list}`;
		case "idea.status": return many ? `Reviewed ideas · ${list}` : `Reviewed idea · ${list}`;
		case "idea.delete": return many ? `Removed ideas · ${list}` : `Removed idea · ${list}`;
		default: return list || action;
	}
}
async function recordAdminEvent(actorId, action, target) {
	const sql = await getSql();
	const recent = await sql`
    select id, targets from admin_events
    where actor_id = ${actorId} and action = ${action}
      and updated_at > now() - interval '15 minutes'
    order by updated_at desc
    limit 1
  `;
	if (recent[0]) {
		const prev = parseJson(recent[0].targets, []);
		const map = new Map(prev.map((t) => [t.id, t]));
		map.set(target.id, target);
		await sql`
      update admin_events
      set targets = ${JSON.stringify([...map.values()])}::jsonb, updated_at = now()
      where id = ${recent[0].id}
    `;
		return;
	}
	await sql`
    insert into admin_events (id, actor_id, action, targets)
    values (${crypto.randomUUID()}, ${actorId}, ${action}, ${JSON.stringify([target])}::jsonb)
  `;
}
async function loadCatalog() {
	await ensureCatalog();
	const sql = await getSql();
	const heroRows = await sql`select * from heroes order by sort_order, name`;
	const recipeRows = await sql`
    select r.*,
      coalesce(nullif(p.ingame_name, ''), nullif(u.email, ''), nullif(u.name, ''), nullif(p.display_name, '')) as author
    from recipes r
    left join profiles p on p.user_id = r.created_by
    left join "user" u on u.id = r.created_by
    order by r.sort_order, r.name
  `;
	const presetRows = await sql`select * from presets order by sort_order, name`;
	return {
		heroes: heroRows.map(heroFromRow),
		recipes: recipeRows.map(recipeFromRow),
		presets: presetRows.map(presetFromRow)
	};
}
async function loadMembers() {
	return (await (await getSql())`
    select p.user_id, p.display_name, p.ingame_name, p.role, u.email, u.name
    from profiles p
    left join "user" u on u.id = p.user_id
    order by p.role asc, coalesce(u.email, p.user_id) asc
  `).map((r) => ({
		userId: r.user_id,
		displayName: r.ingame_name || r.display_name || r.name,
		ingameName: r.ingame_name,
		email: r.email,
		role: isOwnerIdentity(r.email, r.display_name, r.name) ? "admin" : r.role
	}));
}
var getCatalog_createServerFn_handler = createServerRpc({
	id: "f683033da44518010a90e4abc7865c65a2b5c8135c63f2d2ebf0345bc15180e3",
	name: "getCatalog",
	filename: "src/lib/e7/api.ts"
}, (opts) => getCatalog.__executeServer(opts));
var getCatalog = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getCatalog_createServerFn_handler, async () => loadCatalog());
var getArena_createServerFn_handler = createServerRpc({
	id: "fe4b0688430b503c34f0b773c38bdb079a7af969460739e360a85cd53dd02716",
	name: "getArena",
	filename: "src/lib/e7/api.ts"
}, (opts) => getArena.__executeServer(opts));
var getArena = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getArena_createServerFn_handler, async ({ context }) => {
	await ensureCatalog();
	await ensureProfile(context.userId);
	const sql = await getSql();
	const states = await sql`
      select vp, restrict_to_roster, enemy, last_team, roster
      from arena_state where user_id = ${context.userId}
    `;
	const profiles = await sql`
      select role, display_name, ingame_name from profiles where user_id = ${context.userId}
    `;
	const mails = await sql`
      select email, name from "user" where id = ${context.userId}
    `;
	const owner = await isOwnerUserId(context.userId);
	if (owner && profiles[0]?.role !== "admin") await sql`update profiles set role = 'admin' where user_id = ${context.userId}`;
	const role = owner || profiles[0]?.role === "admin" ? "admin" : "member";
	const matchRows = await sql`
      select id, enemy, team, won, vp_delta, note, recipe_id, recipe_name, archetype,
        (extract(epoch from created_at) * 1000)::bigint as at
      from matches
      where user_id = ${context.userId}
      order by created_at desc
      limit 80
    `;
	const row = states[0];
	const scout = unpackScout(row?.enemy);
	return {
		vp: Number(row?.vp ?? 3120),
		restrictToRoster: Boolean(row?.restrict_to_roster ?? false),
		enemy: scout.mode === "gw" ? scout.gwRound === 2 ? scout.gw2 : scout.gw : scout.arena,
		enemyArena: scout.arena,
		enemyGw: scout.gw,
		enemyGw2: scout.gw2,
		gwRound: scout.gwRound,
		scoutMode: scout.mode,
		lastTeam: padFour(asStringList(row?.last_team)),
		roster: parseJson(row?.roster, defaultRoster()),
		role,
		displayName: profiles[0]?.ingame_name || profiles[0]?.display_name || mails[0]?.name || null,
		email: mails[0]?.email ?? null,
		matches: matchRows.map((m) => ({
			id: String(m.id),
			at: Number(m.at ?? Date.now()),
			enemy: asStringList(m.enemy),
			team: asStringList(m.team),
			won: Boolean(m.won),
			vpDelta: Number(m.vp_delta ?? 0),
			note: String(m.note ?? ""),
			recipeId: m.recipe_id ? String(m.recipe_id) : void 0,
			recipeName: m.recipe_name ? String(m.recipe_name) : void 0,
			archetype: m.archetype ? String(m.archetype) : void 0
		}))
	};
});
var arenaStateSchema = object({
	vp: number().int().min(800).max(6e3),
	restrictToRoster: boolean(),
	enemy: array(string()).max(4),
	lastTeam: array(string()).max(4),
	roster: record(string(), object({
		owned: boolean(),
		built: boolean()
	})),
	scoutMode: _enum(["gw", "arena"]).optional(),
	enemyGw: array(string()).max(4).optional(),
	enemyGw2: array(string()).max(4).optional(),
	gwRound: union([literal(1), literal(2)]).optional()
});
var saveArena_createServerFn_handler = createServerRpc({
	id: "dcceba28ba76902cfe6dd91dfc4e7087ff72c9db1abd543bda0155a7ef9b7783",
	name: "saveArena",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveArena.__executeServer(opts));
var saveArena = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(arenaStateSchema).handler(saveArena_createServerFn_handler, async ({ context, data }) => {
	await ensureProfile(context.userId);
	const sql = await getSql();
	const packed = packScout(data.scoutMode === "arena" ? "arena" : "gw", data.enemy, data.enemyGw ?? [], data.enemyGw2 ?? [], data.gwRound === 2 ? 2 : 1);
	await sql`
      insert into arena_state (user_id, vp, restrict_to_roster, enemy, last_team, roster, updated_at)
      values (
        ${context.userId}, ${data.vp}, ${data.restrictToRoster},
        ${JSON.stringify(packed)}::jsonb,
        ${JSON.stringify(padFour(data.lastTeam))}::jsonb,
        ${JSON.stringify(data.roster)}::jsonb,
        now()
      )
      on conflict (user_id) do update set
        vp = excluded.vp,
        restrict_to_roster = excluded.restrict_to_roster,
        enemy = excluded.enemy,
        last_team = excluded.last_team,
        roster = excluded.roster,
        updated_at = now()
    `;
	return { ok: true };
});
var matchSchema = object({
	id: string().min(1),
	at: number().optional(),
	enemy: array(string()).max(4),
	team: array(string()).max(4),
	won: boolean(),
	vpDelta: number().int(),
	note: string().max(280).optional(),
	recipeId: string().optional(),
	recipeName: string().optional(),
	archetype: string().optional()
});
var saveMatch_createServerFn_handler = createServerRpc({
	id: "92856220f1d5d98893da5278af82961dec1ac2c6512aefe35b22ea147916f1d7",
	name: "saveMatch",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveMatch.__executeServer(opts));
var saveMatch = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(matchSchema).handler(saveMatch_createServerFn_handler, async ({ context, data }) => {
	await ensureProfile(context.userId);
	const sql = await getSql();
	const at = new Date(data.at ?? Date.now()).toISOString();
	await sql`
      insert into matches (id, user_id, enemy, team, won, vp_delta, note, recipe_id, recipe_name, archetype, created_at)
      values (
        ${data.id}, ${context.userId},
        ${JSON.stringify(data.enemy)}::jsonb, ${JSON.stringify(data.team)}::jsonb,
        ${data.won}, ${data.vpDelta}, ${data.note ?? ""},
        ${data.recipeId ?? null}, ${data.recipeName ?? null}, ${data.archetype ?? null},
        ${at}
      )
      on conflict (id) do nothing
    `;
	if (data.recipeId) {
		const win = data.won ? 1 : 0;
		const loss = data.won ? 0 : 1;
		await sql`
        insert into recipe_stats (recipe_id, wins, losses, last_at)
        values (${data.recipeId}, ${win}, ${loss}, now())
        on conflict (recipe_id) do update set
          wins = recipe_stats.wins + excluded.wins,
          losses = recipe_stats.losses + excluded.losses,
          last_at = now()
      `;
	}
	if (data.archetype) {
		const win = data.won ? 1 : 0;
		const loss = data.won ? 0 : 1;
		await sql`
        insert into wall_stats (archetype, wins, losses, last_at)
        values (${data.archetype}, ${win}, ${loss}, now())
        on conflict (archetype) do update set
          wins = wall_stats.wins + excluded.wins,
          losses = wall_stats.losses + excluded.losses,
          last_at = now()
      `;
	}
	await sql`
      update arena_state
      set vp = greatest(800, least(6000, vp + ${data.vpDelta})),
          last_team = ${JSON.stringify(padFour(data.team))}::jsonb,
          updated_at = now()
      where user_id = ${context.userId}
    `;
	return { ok: true };
});
var removeMatch_createServerFn_handler = createServerRpc({
	id: "149a27cb7d5cb563daced54b825f7aaa15db2da63e658d45111f3f9289a22ad6",
	name: "removeMatch",
	filename: "src/lib/e7/api.ts"
}, (opts) => removeMatch.__executeServer(opts));
var removeMatch = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(removeMatch_createServerFn_handler, async ({ context, data }) => {
	await (await getSql())`delete from matches where id = ${data.id} and user_id = ${context.userId}`;
	return { ok: true };
});
var clearMatches_createServerFn_handler = createServerRpc({
	id: "41ec4eb545d8a4963763581e265a1f4424b9dcf0426e00bfef088ea9830885b4",
	name: "clearMatches",
	filename: "src/lib/e7/api.ts"
}, (opts) => clearMatches.__executeServer(opts));
var clearMatches = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(clearMatches_createServerFn_handler, async ({ context }) => {
	await (await getSql())`delete from matches where user_id = ${context.userId}`;
	return { ok: true };
});
var heroSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(80),
	short: string().min(1).max(24),
	element: _enum([
		"fire",
		"ice",
		"earth",
		"light",
		"dark"
	]),
	class: _enum([
		"knight",
		"warrior",
		"mage",
		"ranger",
		"thief",
		"soulweaver"
	]),
	tier: _enum([
		"SS",
		"S",
		"A",
		"B"
	]),
	rarity: union([
		literal(3),
		literal(4),
		literal(5)
	]).optional().default(5),
	roles: array(string()).max(12),
	tags: array(string()).max(20),
	effects: array(string()).max(30).optional().default([]),
	buffs: array(string().max(48)).max(20).optional().default([]),
	debuffs: array(string().max(48)).max(20).optional().default([]),
	uniqueEffects: array(object({
		name: string().min(1).max(80),
		text: string().max(400)
	})).max(12).optional().default([]),
	kit: string().max(800),
	defense: number().int().min(0).max(10),
	offense: number().int().min(0).max(10),
	baseSpeed: number().int().min(70).max(160).optional(),
	icon: string().max(18e4).refine((v) => v === "" || v.startsWith("https://") || v.startsWith("http://") || v.startsWith("data:image/"), "Icon must be an image upload or URL").optional().default(""),
	verified: boolean().optional().default(false),
	checkedAt: string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
});
var saveHero_createServerFn_handler = createServerRpc({
	id: "cb2cdfa13d1a19d9b8e3c7c3c6604579011fb8539ae7e851ee51df95594907f6",
	name: "saveHero",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveHero.__executeServer(opts));
var saveHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(heroSchema).handler(saveHero_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const prev = await sql`
      select name, short, kit, icon from heroes where id = ${data.id}
    `;
	const checkedAt = data.verified ? todayStamp() : null;
	const rarity = data.rarity === 3 || data.rarity === 4 ? data.rarity : 5;
	await sql`
      insert into heroes (id, name, short, element, class, tier, roles, tags, effects, buffs, debuffs, unique_effects, kit, defense, offense, base_speed, icon, sort_order, verified, checked_at, rarity)
      values (
        ${data.id}, ${data.name}, ${data.short}, ${data.element}, ${data.class}, ${data.tier},
        ${JSON.stringify(data.roles)}::jsonb, ${JSON.stringify(data.tags)}::jsonb,
        ${JSON.stringify(data.effects ?? [])}::jsonb,
        ${JSON.stringify(data.buffs ?? [])}::jsonb,
        ${JSON.stringify(data.debuffs ?? [])}::jsonb,
        ${JSON.stringify(data.uniqueEffects ?? [])}::jsonb,
        ${data.kit}, ${data.defense}, ${data.offense}, ${data.baseSpeed ?? null}, ${""}, 0, ${data.verified ?? false},
        ${checkedAt}, ${rarity}
      )
      on conflict (id) do update set
        name = excluded.name,
        short = excluded.short,
        element = excluded.element,
        class = excluded.class,
        tier = excluded.tier,
        rarity = excluded.rarity,
        roles = excluded.roles,
        tags = excluded.tags,
        effects = excluded.effects,
        buffs = excluded.buffs,
        debuffs = excluded.debuffs,
        unique_effects = excluded.unique_effects,
        kit = excluded.kit,
        defense = excluded.defense,
        offense = excluded.offense,
        base_speed = excluded.base_speed,
        verified = excluded.verified,
        checked_at = excluded.checked_at
    `;
	const action = !prev[0] ? "unit.create" : "unit.update";
	await recordAdminEvent(context.userId, action, {
		id: data.id,
		name: data.short || data.name
	});
	return loadCatalog();
});
var saveHeroIcon_createServerFn_handler = createServerRpc({
	id: "cc674b6b9a4cfb55802b3f3247a3cbe0944ecb418cd8c826514b3ee7a12aa3c7",
	name: "saveHeroIcon",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveHeroIcon.__executeServer(opts));
var saveHeroIcon = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	icon: string().max(18e4).refine((v) => v === "" || v.startsWith("https://") || v.startsWith("http://") || v.startsWith("data:image/"), "Icon must be an image upload or URL")
})).handler(saveHeroIcon_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const row = await sql`
      select name, short from heroes where id = ${data.id}
    `;
	if (!row[0]) throw new Error("Unit not found");
	await sql`update heroes set icon = ${data.icon} where id = ${data.id}`;
	await recordAdminEvent(context.userId, "unit.icon", {
		id: data.id,
		name: row[0].short || row[0].name
	});
	return loadCatalog();
});
var deleteHero_createServerFn_handler = createServerRpc({
	id: "88bf1be12c130000e4bee1e58c5e5c2fb3d8b99a7faa14046df6a49b7944930b",
	name: "deleteHero",
	filename: "src/lib/e7/api.ts"
}, (opts) => deleteHero.__executeServer(opts));
var deleteHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deleteHero_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const row = await sql`select name, short from heroes where id = ${data.id}`;
	await sql`delete from heroes where id = ${data.id}`;
	const label = row[0]?.short || row[0]?.name || data.id;
	await recordAdminEvent(context.userId, "unit.delete", {
		id: data.id,
		name: label
	});
	return loadCatalog();
});
var slotSchema = object({
	label: string().min(1).max(32),
	roles: array(string()).optional(),
	tags: array(string()).optional(),
	prefer: array(string()).optional()
});
var recipeSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(80),
	vs: array(string()).max(12),
	summary: string().max(400),
	wincon: string().max(500),
	setup: string().max(500),
	pitfalls: array(string()).max(8),
	slots: array(slotSchema).min(4).max(4)
});
var saveRecipe_createServerFn_handler = createServerRpc({
	id: "b5e099a4b29d7250646d46107e9ccdcde1616d46eef205c2a258582b1041a0f5",
	name: "saveRecipe",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveRecipe.__executeServer(opts));
var saveRecipe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(recipeSchema).handler(saveRecipe_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`
      insert into recipes (id, name, vs, summary, wincon, setup, pitfalls, slots, sort_order, created_by, updated_by, source)
      values (
        ${data.id}, ${data.name},
        ${JSON.stringify(data.vs)}::jsonb, ${data.summary}, ${data.wincon}, ${data.setup},
        ${JSON.stringify(data.pitfalls)}::jsonb, ${JSON.stringify(data.slots)}::jsonb, 0,
        ${context.userId}, ${context.userId}, 'admin'
      )
      on conflict (id) do update set
        name = excluded.name,
        vs = excluded.vs,
        summary = excluded.summary,
        wincon = excluded.wincon,
        setup = excluded.setup,
        pitfalls = excluded.pitfalls,
        slots = excluded.slots,
        updated_by = excluded.updated_by,
        source = 'admin',
        created_by = coalesce(recipes.created_by, excluded.created_by)
    `;
	await recordAdminEvent(context.userId, "recipe.save", {
		id: data.id,
		name: data.name
	});
	return loadCatalog();
});
var deleteRecipe_createServerFn_handler = createServerRpc({
	id: "189d9659d3410c803d115de7444e184bedf81a9dd55aa6f5ca07637e001f4441",
	name: "deleteRecipe",
	filename: "src/lib/e7/api.ts"
}, (opts) => deleteRecipe.__executeServer(opts));
var deleteRecipe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deleteRecipe_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const row = await sql`select name from recipes where id = ${data.id}`;
	await sql`delete from recipes where id = ${data.id}`;
	await recordAdminEvent(context.userId, "recipe.delete", {
		id: data.id,
		name: row[0]?.name || data.id
	});
	return loadCatalog();
});
var presetSchema = object({
	id: string().min(1).max(64).regex(/^[a-z0-9-]+$/),
	name: string().min(1).max(40),
	heroIds: array(string()).min(1).max(4),
	blurb: string().max(200)
});
var savePreset_createServerFn_handler = createServerRpc({
	id: "58fadfe80d8abe2ab711d6b70c8d1eccfc01489e4e8bfbb0a83103780abe7435",
	name: "savePreset",
	filename: "src/lib/e7/api.ts"
}, (opts) => savePreset.__executeServer(opts));
var savePreset = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(presetSchema).handler(savePreset_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`
      insert into presets (id, name, hero_ids, blurb, sort_order)
      values (
        ${data.id}, ${data.name}, ${JSON.stringify(padFour(data.heroIds))}::jsonb, ${data.blurb}, 0
      )
      on conflict (id) do update set
        name = excluded.name,
        hero_ids = excluded.hero_ids,
        blurb = excluded.blurb
    `;
	await recordAdminEvent(context.userId, "wall.save", {
		id: data.id,
		name: data.name
	});
	return loadCatalog();
});
var deletePreset_createServerFn_handler = createServerRpc({
	id: "b78681f0d28822155787f578828bf849369a5e3811a1d5cee7de00e7a79e1fbf",
	name: "deletePreset",
	filename: "src/lib/e7/api.ts"
}, (opts) => deletePreset.__executeServer(opts));
var deletePreset = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deletePreset_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const row = await sql`select name from presets where id = ${data.id}`;
	await sql`delete from presets where id = ${data.id}`;
	await recordAdminEvent(context.userId, "wall.delete", {
		id: data.id,
		name: row[0]?.name || data.id
	});
	return loadCatalog();
});
var listMembers_createServerFn_handler = createServerRpc({
	id: "00386725c51991701de8cb3611d9e9c9b526d105bcbf16426289d870804da06a",
	name: "listMembers",
	filename: "src/lib/e7/api.ts"
}, (opts) => listMembers.__executeServer(opts));
var listMembers = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listMembers_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context.userId);
	return loadMembers();
});
var setMemberRole_createServerFn_handler = createServerRpc({
	id: "b7c6a3f3c0cbd5253e374ffb8a2714fcd1c7b8df44eaa28e36fbd76d29237c05",
	name: "setMemberRole",
	filename: "src/lib/e7/api.ts"
}, (opts) => setMemberRole.__executeServer(opts));
var setMemberRole = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	userId: string().min(1),
	role: _enum(["member", "admin"])
})).handler(setMemberRole_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	if (data.role === "member") {
		if (await isOwnerUserId(data.userId)) throw new Error("Cannot demote the owner.");
		const admins = await sql`select user_id from profiles where role = 'admin'`;
		if (admins.length <= 1 && admins.some((a) => a.user_id === data.userId)) throw new Error("Keep at least one admin.");
	}
	await sql`update profiles set role = ${data.role} where user_id = ${data.userId}`;
	const named = await sql`
      select p.ingame_name, p.display_name, u.email
      from profiles p
      left join "user" u on u.id = p.user_id
      where p.user_id = ${data.userId}
    `;
	const who = named[0]?.ingame_name || named[0]?.display_name || named[0]?.email || data.userId;
	await recordAdminEvent(context.userId, "member.role", {
		id: data.userId,
		name: `${who} → ${data.role}`
	});
	return loadMembers();
});
var setIngameName_createServerFn_handler = createServerRpc({
	id: "77c61eb14712b1ad26551bc85d18e5b4b37577529e3637bb1371c61878acb900",
	name: "setIngameName",
	filename: "src/lib/e7/api.ts"
}, (opts) => setIngameName.__executeServer(opts));
var setIngameName = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	userId: string().min(1),
	name: string().max(24)
})).handler(setIngameName_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await requireOwner(context.userId);
	const sql = await getSql();
	const name = data.name.trim().slice(0, 24) || null;
	await sql`update profiles set ingame_name = ${name} where user_id = ${data.userId}`;
	const who = name || data.userId;
	await recordAdminEvent(context.userId, "member.name", {
		id: data.userId,
		name: who
	});
	return loadMembers();
});
var listAdminLog_createServerFn_handler = createServerRpc({
	id: "149cb06951083cb0b905d0eee872b12b60d57a77458141d45b8909a1622d28dd",
	name: "listAdminLog",
	filename: "src/lib/e7/api.ts"
}, (opts) => listAdminLog.__executeServer(opts));
var listAdminLog = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listAdminLog_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context.userId);
	const rows = await (await getSql())`
      select id, actor_id, action, targets,
        (extract(epoch from updated_at) * 1000)::bigint as at
      from admin_events
      order by updated_at desc
      limit 80
    `;
	const actorIds = [...new Set(rows.map((r) => r.actor_id))];
	const labels = /* @__PURE__ */ new Map();
	for (const id of actorIds) labels.set(id, await actorLabel(id));
	return rows.map((r) => {
		const names = parseJson(r.targets, []).map((t) => t.name).filter(Boolean);
		return {
			id: r.id,
			at: Number(r.at ?? Date.now()),
			actor: labels.get(r.actor_id) || "Admin",
			summary: eventSummary(r.action, names)
		};
	});
});
var getAnalytics_createServerFn_handler = createServerRpc({
	id: "a8fd051dbaedf4960e62fa90ba783f9a0200865da2500df441c6f5188e2f09ac",
	name: "getAnalytics",
	filename: "src/lib/e7/api.ts"
}, (opts) => getAnalytics.__executeServer(opts));
var getAnalytics = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getAnalytics_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const catalog = await loadCatalog();
	const stats = await sql`
      select recipe_id, wins, losses from recipe_stats
    `;
	const byId = new Map(stats.map((s) => [s.recipe_id, s]));
	const recipes = catalog.recipes.map((r) => ({
		id: r.id,
		name: r.name,
		author: r.author || "Catalog",
		source: r.source ?? "seed",
		wins: Number(byId.get(r.id)?.wins ?? 0),
		losses: Number(byId.get(r.id)?.losses ?? 0)
	})).sort((a, b) => b.wins + b.losses - (a.wins + a.losses) || a.name.localeCompare(b.name));
	const wallsRaw = await sql`
      select archetype, wins, losses from wall_stats
    `;
	return {
		recipes,
		walls: Object.keys(ARCHETYPE_META).map((id) => {
			const row = wallsRaw.find((w) => w.archetype === id);
			return {
				archetype: id,
				title: ARCHETYPE_META[id].title,
				wins: Number(row?.wins ?? 0),
				losses: Number(row?.losses ?? 0)
			};
		})
	};
});
var IDEA_STATUSES = [
	"inbox",
	"keep",
	"skip",
	"later"
];
function ideaSnippet(body) {
	const t = body.replace(/\s+/g, " ").trim();
	return t.length <= 48 ? t : `${t.slice(0, 45)}…`;
}
async function loadIdeas() {
	const rows = await (await getSql())`
    select id, body, about, status, verdict, created_by,
      (extract(epoch from created_at) * 1000)::bigint as at
    from strategy_ideas
    order by
      case status when 'inbox' then 0 when 'later' then 1 when 'keep' then 2 else 3 end,
      created_at desc
  `;
	const labels = /* @__PURE__ */ new Map();
	for (const id of new Set(rows.map((r) => r.created_by))) labels.set(id, await actorLabel(id));
	return rows.map((r) => ({
		id: r.id,
		body: r.body,
		about: r.about ?? "",
		status: IDEA_STATUSES.includes(r.status) ? r.status : "inbox",
		verdict: r.verdict ?? "",
		author: labels.get(r.created_by) || "Admin",
		at: Number(r.at ?? Date.now())
	}));
}
var listStrategyIdeas_createServerFn_handler = createServerRpc({
	id: "97fa751e9662ce17e0bffb048db8ffc73c0468d4d96bf2b53ca2b21b81200524",
	name: "listStrategyIdeas",
	filename: "src/lib/e7/api.ts"
}, (opts) => listStrategyIdeas.__executeServer(opts));
var listStrategyIdeas = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(listStrategyIdeas_createServerFn_handler, async ({ context }) => {
	await requireAdmin(context.userId);
	return loadIdeas();
});
var saveStrategyIdea_createServerFn_handler = createServerRpc({
	id: "abce8a879533e6a74d7931828c1fe63696a63b46fa5a86bbf3eee69710b45ebc",
	name: "saveStrategyIdea",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveStrategyIdea.__executeServer(opts));
var saveStrategyIdea = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	body: string().trim().min(8).max(2e3),
	about: string().trim().max(120).optional().default("")
})).handler(saveStrategyIdea_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const id = crypto.randomUUID();
	await sql`
      insert into strategy_ideas (id, body, about, created_by)
      values (${id}, ${data.body}, ${data.about ?? ""}, ${context.userId})
    `;
	await recordAdminEvent(context.userId, "idea.submit", {
		id,
		name: ideaSnippet(data.body)
	});
	return loadIdeas();
});
var setStrategyIdeaStatus_createServerFn_handler = createServerRpc({
	id: "fc1699d567f7fbc62206b31e62155f72c5ab9b9c8d18e13e79b6a240e1c1e48e",
	name: "setStrategyIdeaStatus",
	filename: "src/lib/e7/api.ts"
}, (opts) => setStrategyIdeaStatus.__executeServer(opts));
var setStrategyIdeaStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({
	id: string().min(1).max(64),
	status: _enum([
		"inbox",
		"keep",
		"skip",
		"later"
	]),
	verdict: string().trim().max(800).optional().default("")
})).handler(setStrategyIdeaStatus_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const prev = await sql`
      select body from strategy_ideas where id = ${data.id}
    `;
	if (!prev[0]) throw new Error("Idea not found");
	await sql`
      update strategy_ideas
      set status = ${data.status},
          verdict = ${data.verdict ?? ""},
          updated_at = now()
      where id = ${data.id}
    `;
	await recordAdminEvent(context.userId, "idea.status", {
		id: data.id,
		name: ideaSnippet(prev[0].body)
	});
	return loadIdeas();
});
var deleteStrategyIdea_createServerFn_handler = createServerRpc({
	id: "2825a6eed1691f774d9843cdd385fcec9f6b3d00de7bd9f9e18f9c0c11395204",
	name: "deleteStrategyIdea",
	filename: "src/lib/e7/api.ts"
}, (opts) => deleteStrategyIdea.__executeServer(opts));
var deleteStrategyIdea = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1).max(64) })).handler(deleteStrategyIdea_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	const sql = await getSql();
	const prev = await sql`
      select body from strategy_ideas where id = ${data.id}
    `;
	if (!prev[0]) throw new Error("Idea not found");
	await sql`delete from strategy_ideas where id = ${data.id}`;
	await recordAdminEvent(context.userId, "idea.delete", {
		id: data.id,
		name: ideaSnippet(prev[0].body)
	});
	return loadIdeas();
});
//#endregion
export { clearMatches_createServerFn_handler, deleteHero_createServerFn_handler, deletePreset_createServerFn_handler, deleteRecipe_createServerFn_handler, deleteStrategyIdea_createServerFn_handler, getAnalytics_createServerFn_handler, getArena_createServerFn_handler, getCatalog_createServerFn_handler, listAdminLog_createServerFn_handler, listMembers_createServerFn_handler, listStrategyIdeas_createServerFn_handler, removeMatch_createServerFn_handler, saveArena_createServerFn_handler, saveHeroIcon_createServerFn_handler, saveHero_createServerFn_handler, saveMatch_createServerFn_handler, savePreset_createServerFn_handler, saveRecipe_createServerFn_handler, saveStrategyIdea_createServerFn_handler, setIngameName_createServerFn_handler, setMemberRole_createServerFn_handler, setStrategyIdeaStatus_createServerFn_handler };
