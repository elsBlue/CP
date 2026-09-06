create table if not exists strategy_ideas (
  id          text primary key,
  body        text not null,
  about       text not null default '',
  status      text not null default 'inbox',
  verdict     text not null default '',
  created_by  text not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint strategy_ideas_status_chk check (status in ('inbox', 'keep', 'skip', 'later'))
);
create index if not exists strategy_ideas_updated_idx on strategy_ideas (updated_at desc);
