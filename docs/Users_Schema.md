# Users Schema

|Collection|Field|Type|Required|Indexed|Description|
|---|---|---|---|---|---|
|**users**|uid|string|✔︎|✔︎|Contains the value returned from `firebase.auth().uid`.|
||email|string|✔︎|✔︎|The email address of the user must be unique. If the user is anonymous, the email should be formatted `{uid}@anon`.|
||username|string|✔︎|✔︎|The username of the user must be unique. If the user is anonymous, the username is their uid.|
||last_name|string|||The last name of the user.|
||first_name|string|||The first name of the user.|
||photo_url|string|||The URL location for the user's avatar photo.|
|**{user}/admin**|type|number|✔︎||Type of authentication: (0) Anonymous, (1) Email, (2) Google.|
||is_admin|boolean|✔︎|✔︎|True/False value for whether or not this user is an admin.|
||created|string|✔︎||Date string containing the date the user was created.|
||author_uid|string|✔︎||The uid of the user who created this user.|
||license|number|✔︎|✔︎|Type of license: (0) Unverified, (1) Verified|
