alter table arena_state
  alter column restrict_to_roster set default false;

update arena_state
  set restrict_to_roster = false;
