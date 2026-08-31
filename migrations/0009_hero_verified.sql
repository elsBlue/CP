alter table heroes add column if not exists verified boolean not null default false;
update heroes set verified = true where id in ('lisette', 'new-moon-luna');
