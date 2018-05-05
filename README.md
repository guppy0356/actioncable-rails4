# What is this?
This application is standalone ActionCable app in Rails4.

# How to run
Just 3 steps.

```
$ redis-server redis/redis.conf
$ bundle exec puma -p 28080 cable/config.ru
$ bin/rails server
```
