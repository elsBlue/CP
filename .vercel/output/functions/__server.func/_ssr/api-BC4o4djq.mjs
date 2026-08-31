import { i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { a as HEROES, c as RECIPES, f as authMiddleware, h as getSql, l as SAMPLE_ROSTER, s as PRESET_DEFENSES } from "./recipes-6teBQ5tU.mjs";
import { A as boolean, D as _enum, F as object, L as record, P as number, R as string, k as array } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-BC4o4djq.js
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
		kit: String(row.kit ?? ""),
		defense: Number(row.defense ?? 5),
		offense: Number(row.offense ?? 5)
	};
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
		slots
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
function defaultEnemy() {
	return [
		"harsetti",
		"last-rider-krau",
		"belian",
		"dragon-bride-senya"
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
	if ((await sql`select value from app_meta where key = 'catalog_seeded'`)[0]?.value === "1") return;
	for (let i = 0; i < HEROES.length; i++) {
		const h = HEROES[i];
		await sql`
      insert into heroes (id, name, short, element, class, tier, roles, tags, kit, defense, offense, sort_order)
      values (
        ${h.id}, ${h.name}, ${h.short}, ${h.element}, ${h.class}, ${h.tier},
        ${JSON.stringify(h.roles)}::jsonb, ${JSON.stringify(h.tags)}::jsonb,
        ${h.kit}, ${h.defense}, ${h.offense}, ${i}
      )
      on conflict (id) do nothing
    `;
	}
	for (let i = 0; i < RECIPES.length; i++) {
		const r = RECIPES[i];
		await sql`
      insert into recipes (id, name, vs, summary, wincon, setup, pitfalls, slots, sort_order)
      values (
        ${r.id}, ${r.name},
        ${JSON.stringify(r.vs)}::jsonb, ${r.summary}, ${r.wincon}, ${r.setup},
        ${JSON.stringify(r.pitfalls)}::jsonb, ${JSON.stringify(r.slots)}::jsonb, ${i}
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
async function ensureProfile(userId) {
	const sql = await getSql();
	const existing = await sql`select user_id from profiles where user_id = ${userId}`;
	const rosterJson = JSON.stringify(defaultRoster());
	const enemyJson = JSON.stringify(defaultEnemy());
	if (existing.length > 0) {
		await sql`insert into arena_state (user_id, roster, enemy) values (${userId}, ${rosterJson}::jsonb, ${enemyJson}::jsonb) on conflict (user_id) do nothing`;
		return;
	}
	const users = await sql`select name from "user" where id = ${userId}`;
	const role = (await sql`select user_id from profiles where role = 'admin' limit 1`).length === 0 ? "admin" : "member";
	await sql`
    insert into profiles (user_id, display_name, role)
    values (${userId}, ${users[0]?.name ?? null}, ${role})
  `;
	await sql`insert into arena_state (user_id, roster, enemy) values (${userId}, ${rosterJson}::jsonb, ${enemyJson}::jsonb) on conflict (user_id) do nothing`;
}
async function requireAdmin(userId) {
	await ensureProfile(userId);
	if ((await (await getSql())`select role from profiles where user_id = ${userId}`)[0]?.role !== "admin") throw new ForbiddenError();
}
async function loadCatalog() {
	await ensureCatalog();
	const sql = await getSql();
	const heroRows = await sql`select * from heroes order by sort_order, name`;
	const recipeRows = await sql`select * from recipes order by sort_order, name`;
	const presetRows = await sql`select * from presets order by sort_order, name`;
	return {
		heroes: heroRows.map(heroFromRow),
		recipes: recipeRows.map(recipeFromRow),
		presets: presetRows.map(presetFromRow)
	};
}
async function loadMembers() {
	return (await (await getSql())`
    select p.user_id, p.display_name, p.role, u.email, u.name
    from profiles p
    left join "user" u on u.id = p.user_id
    order by p.role asc, coalesce(u.email, p.user_id) asc
  `).map((r) => ({
		userId: r.user_id,
		displayName: r.display_name ?? r.name,
		email: r.email,
		role: r.role
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
      select role, display_name from profiles where user_id = ${context.userId}
    `;
	const matchRows = await sql`
      select id, enemy, team, won, vp_delta, note, recipe_id, recipe_name, archetype,
        (extract(epoch from created_at) * 1000)::bigint as at
      from matches
      where user_id = ${context.userId}
      order by created_at desc
      limit 80
    `;
	const row = states[0];
	const storedEnemy = asStringList(row?.enemy);
	return {
		vp: Number(row?.vp ?? 3120),
		restrictToRoster: Boolean(row?.restrict_to_roster ?? true),
		enemy: padFour(storedEnemy.some(Boolean) ? storedEnemy : defaultEnemy()),
		lastTeam: padFour(asStringList(row?.last_team)),
		roster: parseJson(row?.roster, defaultRoster()),
		role: profiles[0]?.role ?? "member",
		displayName: profiles[0]?.display_name ?? null,
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
	}))
});
var saveArena_createServerFn_handler = createServerRpc({
	id: "dcceba28ba76902cfe6dd91dfc4e7087ff72c9db1abd543bda0155a7ef9b7783",
	name: "saveArena",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveArena.__executeServer(opts));
var saveArena = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(arenaStateSchema).handler(saveArena_createServerFn_handler, async ({ context, data }) => {
	await ensureProfile(context.userId);
	await (await getSql())`
      insert into arena_state (user_id, vp, restrict_to_roster, enemy, last_team, roster, updated_at)
      values (
        ${context.userId}, ${data.vp}, ${data.restrictToRoster},
        ${JSON.stringify(padFour(data.enemy))}::jsonb,
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
	roles: array(string()).max(12),
	tags: array(string()).max(20),
	kit: string().max(500),
	defense: number().int().min(0).max(10),
	offense: number().int().min(0).max(10)
});
var saveHero_createServerFn_handler = createServerRpc({
	id: "cb2cdfa13d1a19d9b8e3c7c3c6604579011fb8539ae7e851ee51df95594907f6",
	name: "saveHero",
	filename: "src/lib/e7/api.ts"
}, (opts) => saveHero.__executeServer(opts));
var saveHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(heroSchema).handler(saveHero_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`
      insert into heroes (id, name, short, element, class, tier, roles, tags, kit, defense, offense, sort_order)
      values (
        ${data.id}, ${data.name}, ${data.short}, ${data.element}, ${data.class}, ${data.tier},
        ${JSON.stringify(data.roles)}::jsonb, ${JSON.stringify(data.tags)}::jsonb,
        ${data.kit}, ${data.defense}, ${data.offense}, 0
      )
      on conflict (id) do update set
        name = excluded.name,
        short = excluded.short,
        element = excluded.element,
        class = excluded.class,
        tier = excluded.tier,
        roles = excluded.roles,
        tags = excluded.tags,
        kit = excluded.kit,
        defense = excluded.defense,
        offense = excluded.offense
    `;
	return loadCatalog();
});
var deleteHero_createServerFn_handler = createServerRpc({
	id: "88bf1be12c130000e4bee1e58c5e5c2fb3d8b99a7faa14046df6a49b7944930b",
	name: "deleteHero",
	filename: "src/lib/e7/api.ts"
}, (opts) => deleteHero.__executeServer(opts));
var deleteHero = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deleteHero_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`delete from heroes where id = ${data.id}`;
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
      insert into recipes (id, name, vs, summary, wincon, setup, pitfalls, slots, sort_order)
      values (
        ${data.id}, ${data.name},
        ${JSON.stringify(data.vs)}::jsonb, ${data.summary}, ${data.wincon}, ${data.setup},
        ${JSON.stringify(data.pitfalls)}::jsonb, ${JSON.stringify(data.slots)}::jsonb, 0
      )
      on conflict (id) do update set
        name = excluded.name,
        vs = excluded.vs,
        summary = excluded.summary,
        wincon = excluded.wincon,
        setup = excluded.setup,
        pitfalls = excluded.pitfalls,
        slots = excluded.slots
    `;
	return loadCatalog();
});
var deleteRecipe_createServerFn_handler = createServerRpc({
	id: "189d9659d3410c803d115de7444e184bedf81a9dd55aa6f5ca07637e001f4441",
	name: "deleteRecipe",
	filename: "src/lib/e7/api.ts"
}, (opts) => deleteRecipe.__executeServer(opts));
var deleteRecipe = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deleteRecipe_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`delete from recipes where id = ${data.id}`;
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
	return loadCatalog();
});
var deletePreset_createServerFn_handler = createServerRpc({
	id: "b78681f0d28822155787f578828bf849369a5e3811a1d5cee7de00e7a79e1fbf",
	name: "deletePreset",
	filename: "src/lib/e7/api.ts"
}, (opts) => deletePreset.__executeServer(opts));
var deletePreset = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator(object({ id: string().min(1) })).handler(deletePreset_createServerFn_handler, async ({ context, data }) => {
	await requireAdmin(context.userId);
	await (await getSql())`delete from presets where id = ${data.id}`;
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
		const admins = await sql`select user_id from profiles where role = 'admin'`;
		if (admins.length <= 1 && admins.some((a) => a.user_id === data.userId)) throw new Error("Keep at least one admin.");
	}
	await sql`update profiles set role = ${data.role} where user_id = ${data.userId}`;
	return loadMembers();
});
//#endregion
export { clearMatches_createServerFn_handler, deleteHero_createServerFn_handler, deletePreset_createServerFn_handler, deleteRecipe_createServerFn_handler, getArena_createServerFn_handler, getCatalog_createServerFn_handler, listMembers_createServerFn_handler, removeMatch_createServerFn_handler, saveArena_createServerFn_handler, saveHero_createServerFn_handler, saveMatch_createServerFn_handler, savePreset_createServerFn_handler, saveRecipe_createServerFn_handler, setMemberRole_createServerFn_handler };
