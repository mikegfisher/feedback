# Users Schema

|Collection|Field|Type|Description|
|---|---|---|---|
|**users**|uid|string|Contains the value returned from `firebase.auth().uid`.|
||email|string|The email address of the user must be unique. If the user is anonymous, the email should be formatted `{uid}@anon`.|
||username|string|The username of the user must be unique. If the user is anonymous, the username is their uid.|
||last_name|string|The last name of the user.|
||first_name|string|The first name of the user.|
||photo_url|string|The URL location for the user's avatar photo.|
||author_uid|string|The uid of the user who created this user.|
||created|string|Date string containing the date the user was created.|
||editor_uid|string|The uid of the user who last modified this user.|
||modified|string|Date string containing the date the user data was last modified.|
|**{user}/admin**|type|number|Type of authentication: (0) Anonymous, (1) Email, (2) Google.|
||license|number|Type of license: (0) Unverified, (1) Verified|
||is_admin|boolean|True/False value for whether or not this user is an admin.|
||author_uid|string|The uid of the user who created this admin data.|
||created|string|Date string containing the date this admin data was created.|
||editor_uid|string|The uid of the user who last modified this admin data.|
||modified|string|Date string containing the date the admin data was last modified.|

## Rules
```javascript
    // users collection
    match /users/{user} {
      // read rules - allow read if the user if authenticated
      allow get, list: if request.auth.uid != null;
      
      // write rules 
      allow create: if request.auth.uid == request.path[6] 
        && request.resource.data.author_uid == request.auth.uid
        && request.resource.data.keys().hasAll(['created']);
      allow update: if request.auth.uid == request.path[6] 
        && request.resource.data.editor_uid == request.auth.uid
        && request.resource.data.keys().hasAll(['modified']);
      allow delete: if request.auth.uid == request.path[6];
      
      // admin subcollection
      match /admin/{admin} {
        // read rules
        allow get, list: if request.auth.uid == request.path[6] 
          || get(/databases/$(database)/documents/users/$(request.auth.uid)/admin/$(admin)).data.is_admin == true;
        
        //write rules
        allow create: if request.auth.uid == request.path[6] 
          && request.resource.data.is_admin == false
          && request.resource.data.license == 0
          || get(/databases/$(database)/documents/users/$(request.auth.uid)/admin/$(admin)).data.is_admin == true;
        allow update: if get(/databases/$(database)/documents/users/$(request.auth.uid)/admin/$(admin)).data.is_admin == true;
        allow delete: if request.auth.uid == request.path[6];
      }
```
