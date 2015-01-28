## Lec 2. 

####Communication

We will use 3 separate websites for this course. You need to sign-up using your [**tigermail**](https://tigermail.qcc.cuny.edu/) and **username** of your tigermail as your username. (Ex. hello12 from hello12@tigermail.qcc.cuny.edu.)

* [**http://www.piazza.com**](http://www.piazza.com) - Q&A discussion board with course materials including project, quiz and test. Download the app from [**app store**](https://itunes.apple.com/us/app/piazza/id453142230?mt=8) or [**playstore**](https://play.google.com/store/apps/details?id=com.piazza.android&hl=en).
   * For sign-up: Use this [link](http://piazza.com/queensborough_cc/spring2015/cs203d124) with access code 203 or check your tigermail.
   
* [**https://c9.io/**](https://c9.io/) - Tools for development and collaboration.
    * As an alternative option, you can use [**http://http://www.runnable.com/**](http://www.runnable.com/)
     
  
* [**http://www.github.com**](http://www.github.com) - Source management system for projects.
  
#### Git introduction
Two good references

[** Try git **](https://try.github.io/levels/1/challenges/1)

[** Git tutorial 101 **](https://www.atlassian.com/git/)

```
git init
```

```
git status
```

```
git commit -m " Your message"
```

```
git remote add [remote name] [remote url]

git remote add origin https://github.com/user/repo.git

git remote -v
```
[Adding a remote](https://help.github.com/articles/adding-a-remote/)

```
git push -u [remote name] [branch]

git push -u origin master
```
**-u** option automatically sets uo tracking between local and remote branch. [Ref](http://mislav.uniqpath.com/2010/07/git-tips/)

[Pusing to a remote](https://help.github.com/articles/pushing-to-a-remote/)
![Before pushing](https://www.atlassian.com/git/images/tutorials/collaborating/syncing/04.svg)
![After pushing](https://www.atlassian.com/git/images/tutorials/collaborating/syncing/04.svg)
```
git pull origin master
```
#### pull=fetch( Get all of branches from the repository) + [merge](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)

[**Pull**](https://www.atlassian.com/git/tutorials/syncing/git-pull)
![EX](https://www.atlassian.com/git/images/tutorials/collaborating/syncing/02.svg)

####Conflicts in merging

[Before Merging](https://www.atlassian.com/git/images/tutorials/collaborating/using-branches/08.svg)
** 3-way-merge**:the two branch tips and their common ancestor.
[After Merging](https://www.atlassian.com/git/images/tutorials/collaborating/using-branches/08.svg)

[Merge vs Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/)
Assume new commits in master is mine.
![Merge/Rebasing](https://www.atlassian.com/git/images/tutorials/advanced/merging-vs-rebasing/01.svg)

![Rebase](https://www.atlassian.com/git/images/tutorials/getting-started/rewriting-history/02.svg)


```
git diff [pointer]
```

### Forking -official and others 
![Foking](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/forking-workflow/01.svg)

#### [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
 Requesting that another developer (e.g., the project maintainer) pulls a branch from your repository into their repository.


