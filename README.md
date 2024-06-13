Site status
[![Netlify Status](https://api.netlify.com/api/v1/badges/c1ef4491-f216-4554-9c01-adecf56857c9/deploy-status)](https://app.netlify.com/sites/icgliding/deploys)

# ICGC site
A digital hub for the Imperial College Gliding Club, providing information and resources for both current members and those with a keen interest in gliding.

## How to run the program

1. If you are not already in the root directory, change directory to the correct one. 
```javascript
cd ic-gliding
```

2. Run this command to install the required packages:
```javascript
npm install
```

3. Run the project:
```javascript
npm start
```
Check out your changes on [http://localhost:3000/](http://localhost:3000/).

## Branches 
#### main
 This branch is currently live. All dev changes should be merged to the main branch when ready for publishing.

#### dev
The dev branch is where all of the updates from feature/bug branches will be pushed to. When you are ready to push an update to main, you should ensure that the application has been fully tested to confirm that it is works as it should be. 

#### feature-[num]
For every new feature, it should have it's own separate branch for these changes to be implemented. The feature number will be based on the corresponding ticket number. All updates made in the main branch should be merged into the feature branch to avoid the branch from having major conflicts. Ensure that this branch is deleted once the feature has been implemented and is merged to the dev branch.

#### bug-[num]
This type of branch should be created when a bug is spotted on the main branch. The bug number will be based on the corresponding ticket number. When fixed, merge to the main branch and delete this branch. 

[Find out more about how to structure the project branches.](https://gist.github.com/digitaljhelms/4287848)

## Commits
The commit message should be written clearly and meaningfully. 
``` 
# example
feat(location): map img added to file
```
[Find out more about how to write good commit messages.](https://medium.com/front-end-weekly/how-to-write-good-git-commit-messages-like-a-pro-2c12f01569d9)

Happy coding!
