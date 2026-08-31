-- Guild accounts: per-member arena progress + shared catalog (admin CRUD).

create table if not exists app_meta (
  key   text primary key,
  value text not null
);

create table if not exists profiles (
  user_id      text primary key,
  display_name text,
  role         text not null default 'member' check (role in ('member', 'admin')),
  created_at   timestamptz not null default now()
);

create table if not exists arena_state (
  user_id            text primary key,
  vp                 integer not null default 3120,
  restrict_to_roster boolean not null default true,
  enemy              jsonb not null default '["","","",""]'::jsonb,
  last_team          jsonb not null default '["","","",""]'::jsonb,
  roster             jsonb not null default '{}'::jsonb,
  updated_at         timestamptz not null default now()
);

create table if not exists matches (
  id          text primary key,
  user_id     text not null,
  enemy       jsonb not null,
  team        jsonb not null,
  won         boolean not null,
  vp_delta    integer not null,
  note        text not null default '',
  recipe_id   text,
  recipe_name text,
  archetype   text,
  created_at  timestamptz not null default now()
);
create index if not exists matches_user_id_idx on matches (user_id);
create index if not exists matches_created_at_idx on matches (user_id, created_at desc);

create table if not exists heroes (
  id         text primary key,
  name       text not null,
  short      text not null,
  element    text not null,
  class      text not null,
  tier       text not null,
  roles      jsonb not null default '[]'::jsonb,
  tags       jsonb not null default '[]'::jsonb,
  kit        text not null default '',
  defense    integer not null default 5,
  offense    integer not null default 5,
  sort_order integer not null default 0
);

create table if not exists recipes (
  id         text primary key,
  name       text not null,
  vs         jsonb not null default '[]'::jsonb,
  summary    text not null default '',
  wincon     text not null default '',
  setup      text not null default '',
  pitfalls   jsonb not null default '[]'::jsonb,
  slots      jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0
);

create table if not exists presets (
  id         text primary key,
  name       text not null,
  hero_ids   jsonb not null,
  blurb      text not null default '',
  sort_order integer not null default 0
);
