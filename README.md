# What is this?
This application is standalone ActionCable app in Rails4.

# How to run
Just 3 steps.

```
$ redis-server redis/redis.conf
$ bundle exec puma -p 28080 cable/config.ru
$ bin/rails server
```

# How to enjoy
This application shows you how to notify server side event. When you create new book record in this app, this event will notify your browser.

An easy way to enjoy this application, just run below command in your rails console.

```ruby
Book.create! price: 5000, title: "AwesomeTitle"
```
