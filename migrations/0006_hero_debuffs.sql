alter table heroes add column if not exists debuffs jsonb not null default '[]'::jsonb;
