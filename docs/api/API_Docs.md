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
SUCCESS { "code":"200", "message":"OK", "data":[{"access_token":"123p98ug/6@7sdfoibass"}] }
```
```json
FAIL { "code":"401", "msesage":"로그인 정보가 유효하지 않습니다."}
```
