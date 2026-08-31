alter table heroes add column if not exists buffs jsonb not null default '[]'::jsonb;
alter table heroes add column if not exists unique_effects jsonb not null default '[]'::jsonb;
