insert into helo_users(username, password)
values(${user}, ${pass})
returning username, profile_pic, id;