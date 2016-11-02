#Pandora Web API

##User
###Join User
```http
POST /users
```
* _Request_

```json
{
"user_email":"yjs930915@gmail.com",
"user_name":"윤지수",
"user_password":"$TJAXCajfed;bi!skdgh;"
}
```

* _Response_

```json
SUCCESS { "code":"200", "message":"OK" } 
```
```json
FAIL { "code":"409", "message":"이미 가입된 사용자"}
```

###Login
```http
POST /users/login
```

* _Request_

```json
{
"user_email":"yjs930915@gmail.com",
"user_password":"$TJAXCajfed;bi!skdgh;"
}
```

* _Response_

```json
SUCCESS {"code":"200", "message":"OK", "data":{"access_token":"123p98ug/6@7sdfoibass"}}
```

```json
FAIL { "code":"401", "msesage":"로그인 정보가 유효하지 않습니다."}
```

###Create Relation
```http
POST /users/{user_id}/relation
```

* _Request_

```json
{"partner_phone_number":"01012345678"}
```

* _Response_

```json
SUCCESS {"code":"200", "message":"OK"}
```

```json
FAIL {"code":"404","message":"사용자를 찾을수 없음"}
```

###Delete Relation
```http
DELETE /users/{user_id}/relation
```

* _Request_


* _Response_

```json
SUCCESS {"code":"200", "message":"OK"}
```

##Date
###Create Date
```http
POST /dates
```

* _Request_

```json
[{
"date_pictures":[{imageObject},{imageObject},..],
"date_location":{locationObject},
"date_review":"넘나 비싼 것이었다",
"date_score":"3.0",
"date_price":"15000"},
{
"date_pictures":[{imageObject},{imageObject},..],
"date_location":{locationObject},
"date_review":"야경이 넘나 예쁜 것 이었다",
"date_score":"5.0",
"date_price":"0"
}]
```

* _Response_

```json
SUCCESS {"code":"200", "message":"OK"}
```

###Read Date List
```http
GET /dates
```

* _Request_

Parms Name    | description               |  Default | Optional |
------------- | ------------------------- | -------- | -------- |
size          | 가져오는 단위 ( m | d )      |     d    | true     |
page          | paging value             |     1    | true     |
type          | 전체 / 지금 연인 (all | my)  |   my     | true     |

* _Response_ 

```json
{"code":"200", "message":"OK", "data":{"date_list":[{dateObject}], "size":{number of dateObject}}}
```

###Read Date
```http
GET /dates/{date_id}
```

* _Request_


* _Response_

```json
SUCCESS {"code":"200", "message":"OK", "data":{"date" : {dateObject}}}
```
