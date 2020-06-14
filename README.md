# Expense tracker 💸

## Update
* 新增註冊與登入功能
* 加入第三方登入方式
* 加入月份篩選
* 新增商家選項
* 加入甜甜圈顯示支出類別

### Try NOW
☛
[Expense tracker](https://secret-brushlands-56466.herokuapp.com/)

使用以下帳號密碼試用，或是註冊會員開始建立你的記帳本
```
user@root.com
1234
```

![index1](/public/image/index_page.png)

## **Features**

* 在首頁時點擊 LOGO 新增一筆支出
* 新增支出表格中點擊輸入框輸入支出項目
* 支出項目也可以從下拉建議選項中快速選取
* 日期預設為新增支出當天日期
* 在編輯與新增支出頁面中點擊 LOGO 返回首頁
* 可單項刪除或編輯支出內容
* 總金額會隨著支出增加到一定範圍改變不同顏色
* 註冊會員資料
* 登入管理個人支出


## Prerequisites
[Node.js](https://nodejs.org/en/) (v10.15.0)

[express](https://expressjs.com/)

[MongoDB](https://www.mongodb.com/)

[Heroku](https://dashboard.heroku.com/)


## Install to local

[Download](https://github.com/schiafang/expense-tracker/archive/master.zip) or clone repository to your local computer.
```
$ git clone https://github.com/schiafang/expense-tracker.git
```
Install express
```
$ npm i express
```


Add .env to use social website login


1. Get client Id and client secret:
 [Facebook Developers](https://developers.facebook.com/), [Google API console](https://console.developers.google.com/), [Gitgub OAuth](https://github.com/settings/applications/new) 
2. record the key and secret
3. add .env file on ./
4. Fill in the following information in .env

```
PORT=3000
MONGODB_URI=<Your mongoDB URI>
SESSION_SECRET=<Your session secret>

FACEBOOK_APP_ID=<Your Facebook app ID>
FACEBOOK_APP_SECRET=<Your Facebook app secret>
FACEBOOK_CALLBACK_URL=http://localhost:3000/auth/facebook/callback

GOOGLE_CONSUMER_KEY=<Your Google app ID>
GOOGLE_CONSUMER_SECRET=<Your Google app secret>
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

GITHUB_CLIENT_ID=<Your Github app ID>
GITHUB_CLIENT_SECRET=<Your Github app secret>
GITHUB__CALLBACK_URL=http://localhost:3000/auth/github/callback
```


Must require seeder
```
$ npm run seed
```

Execute
```
$ npm start
```

`Expense-tracker is running on http://localhost:3000`, `MongoDB connected!`

will show on terminal when server connect success.

#### Browse [http://localhost:3000](http://localhost:3000) 