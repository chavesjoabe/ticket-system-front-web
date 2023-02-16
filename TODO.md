## TODO

### Frontend

- [ ] Create **user registration page**

- [x] Get reference to **ticket details page** - _i'm using Cbiotec page as reference_

- [x] Create **ticket details page** - _this item is in progress_

- [x] Create a SELECT with the subject of the comment

- [x] Alert the comment insertion with a snack

- [ ] Create box that grant to attendant to assign ticket

- [ ] Create box that grant to admin attribute ticket to attendant

### Backend

- [x] Receive JWT token in findOne Request and get the logged user

  - [x] To make it i'll need create a interceptor or a middleware that take the JWT token decode it and insert the credentials in some place of the request. The QUERY object is a good idea for findOne context.

- [x] On InsertComment method the field loggedUserName will be filled by the same interceptor or middleware. with this funcionality, the front end don't need sendo to the backend this information. the loggedUserName will be taken by the JWT token.

- [ ] Create a Repository service to hide te database implementation - _in the future, if we want to change the database, all implementation will be in this service._

- [ ] Create Notification API that store the notifications to Users
