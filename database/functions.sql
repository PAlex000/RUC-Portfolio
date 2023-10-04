--Need to do the insertion for the search history
--D2
drop function if exists string_search(s varchar(255));
create or replace function string_search (s varchar(255))
returns table (
		titleid varchar(255),
		plot varchar(255))
language sql as
$$
	select titleid, title
	from titlebasics natural join titleakas
	where titleakas.title like '%' || s || '%' or titleakas.plot like '%' || s || '%';
$$;
