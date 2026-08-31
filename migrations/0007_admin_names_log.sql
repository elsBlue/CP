alter table profiles add column if not exists ingame_name text;

create table if not exists admin_events (
  id          text primary key,
  actor_id    text not null,
  action      text not null,
  targets     jsonb not null default '[]'::jsonb,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);
create index if not exists admin_events_updated_idx on admin_events (updated_at desc);
