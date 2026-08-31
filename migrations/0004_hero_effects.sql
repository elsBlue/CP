alter table heroes add column if not exists effects jsonb not null default '[]'::jsonb;
