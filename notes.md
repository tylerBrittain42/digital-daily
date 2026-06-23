*note: personal notes so a lot is copy pasted tidbits from the docs page*
https://docs.nestjs.com/first-steps

# Assorted info from intro
- typically modules should be kept in their own directories
- npm run lint and format use eslint and prettier. come preinstalled/setup and are reccomended
- nest has tool to generate various things https://docs.nestjs.com/recipes/crud-generator#crud-generator
    - `nest g resource

# Controllers
- Controllers are responsible for handling incoming requests and sending responses back to the client.
 
# Providers
- A provider is anything that is injectable by the framework
    - ex: service

# Plan of attack
## High level
1. Set up middleware logging
### DONE
1. Configure daily
    1. Just get a feel for the setup(don't worry about db)
    1. Configure DB: https://docs.docker.com/guides/databases/
1. Dev container?
1. Configure others(uncertain of order)
    1. Configure today
    1. Configure this week
    1. Configure soon
    1. Configure appointment
1. Add basic auth
1. create ugly ui