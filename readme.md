API Documentation: https://documenter.getpostman.com/view/21149231/2s847PJUdy

Servers endpoints:
User:

---

POST/users/register
-- request body (required);
{
"email": string,
"password": string,
"subscription": string,
}

-- responses:
201 - user created;
400 - client error
409 - conflict (user email already registered)
500 - server error

---

POST/users/login
-- request body (required);
{
"email": string,
"password": string,
}

-- responses:
200 - success;
400 - client error
401 - unauthorized
500 - server error

---

POST/users/logout
-- Authorization (required);

-- responses:
204 - success;
400 - client error
401 - unauthorized
500 - server error

---

GET/users/current
-- Authorization (required);

-- responses:
200 - success;
400 - client error
401 - unauthorized
500 - server error

---

PATCH/users
-- Authorization (required);
-- request body (required);
{
"subscription": Boolean,
}

-- responses:
200 - success;
400 - client error
401 - unauthorized
500 - server error

==============================================

contacts:

GET/contacts
-- Authorization (required);

-- responses:
200 - success;
400 - client error
401 - unauthorized
404 - not found
500 - server error

query string options:
pagination: &page=num, &limit=num;
filtration by favorite: &favorite=true

---

GET/contacts/contactId
-- Authorization (required);

-- responses:
200 - success;
400 - client error
401 - unauthorized
404 - not found
500 - server error

---

POST/contacts/contactId
-- Authorization (required);
-- body (required):
{
"name": string,
"email": string,
"phone": "string,
}

-- responses:
201 - created;
400 - client error
401 - unauthorized
404 - not found
500 - server error

---

PUT/contacts/contactId
-- Authorization (required);
-- body (required):
{
"name" (optional): string ,
"email" (optional): string,
"phone" (optional): "string,
}

-- responses:
200 - created;
400 - client error
401 - unauthorized
404 - not found
500 - server error
