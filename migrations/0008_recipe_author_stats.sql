alter table recipes add column if not exists created_by text;
alter table recipes add column if not exists updated_by text;
alter table recipes add column if not exists source text not null default 'seed';

create table if not exists recipe_stats (
  recipe_id text primary key,
  wins      integer not null default 0,
  losses    integer not null default 0,
  last_at   timestamptz not null default now()
);

create table if not exists wall_stats (
  archetype text primary key,
  wins      integer not null default 0,
  losses    integer not null default 0,
  last_at   timestamptz not null default now()
);
