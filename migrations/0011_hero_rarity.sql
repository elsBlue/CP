alter table heroes add column if not exists rarity smallint not null default 5;
update heroes set rarity = 4 where id in (
  'crimson-armin',
  'angel-of-light-angelica',
  'adventurer-ras'
);
update heroes set rarity = 5 where rarity is null or rarity not in (3, 4, 5);
