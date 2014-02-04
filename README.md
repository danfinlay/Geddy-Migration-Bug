# Geddy Migration Bug

With this nearly immaculate generated & scaffolded Geddy application, I'm unable to perform a simple column add migration using `psql` on `Mac OS X 10.9.1`.

The only commands I've issued were:
```
$ geddy gen app geddyTest1
$ cd geddyTest1
$ geddy gen scaffold ticket text:string
$ geddy gen scaffold comment body:string
```
I then configured the `postgres` adapter as found in `/config/development.js`.
```
$ geddy jake db:init
$ geddy gen migration commentRelation
```
At this point I edited the migration as found in `/db/migrations/20140204150025_comment_relation.js`.
```
$ geddy jake db:migrate
error: type "undefined" does not exist
    at Connection.parseE (/Users/danielfinlay/Documents/geddyTest1/node_modules/pg/lib/connection.js:546:11)
    at Connection.parseMessage (/Users/danielfinlay/Documents/geddyTest1/node_modules/pg/lib/connection.js:375:17)
    at null.<anonymous> (/Users/danielfinlay/Documents/geddyTest1/node_modules/pg/lib/connection.js:92:20)
    at Socket.EventEmitter.emit (events.js:95:17)
    at Socket.<anonymous> (_stream_readable.js:746:14)
    at Socket.EventEmitter.emit (events.js:92:17)
    at emitReadable_ (_stream_readable.js:408:10)
    at emitReadable (_stream_readable.js:404:5)
    at readableAddChunk (_stream_readable.js:165:9)
    at Socket.Readable.push (_stream_readable.js:127:10)
```
