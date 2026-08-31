alter table heroes add column if not exists checked_at date;
update heroes set checked_at = '2026-08-31' where verified = true and checked_at is null;
