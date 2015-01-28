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
![Main components](https://www.atlassian.com/git/images/tutorials/advanced/resetting-checking-out-and-reverting/01.svg)

```
git init
```

```
git status
```



```
git remote add [remote name] [remote url]

git remote add origin https://github.com/user/repo.git

git remote -v
```
[Adding a remote](https://help.github.com/articles/adding-a-remote/)

```
git commit -m " Your message"
```

```
git push -u [remote name] [branch]

git push -u origin master
```
**-u** option automatically sets uo tracking between local and remote branch. [Ref](http://mislav.uniqpath.com/2010/07/git-tips/)

[Pusing to a remote](https://help.github.com/articles/pushing-to-a-remote/)
![Before/After pushing](https://www.atlassian.com/git/images/tutorials/collaborating/syncing/04.svg)



```
git pull origin master
```
#### pull=fetch( Get all of branches from the repository) + [merge](https://www.atlassian.com/git/tutorials/using-branches/git-checkout)

[**Pull**](https://www.atlassian.com/git/tutorials/syncing/git-pull)


####Conflicts in merging

![Before/After Merging](https://www.atlassian.com/git/images/tutorials/collaborating/using-branches/08.svg)
** 3-way-merge**:the two branch tips and their common ancestor.


[Merge vs Rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/)
Assume new commits in master is mine.
![Merge/Rebasing](https://www.atlassian.com/git/images/tutorials/advanced/merging-vs-rebasing/01.svg)

![Rebase](https://www.atlassian.com/git/images/tutorials/getting-started/rewriting-history/02.svg)


#### Centralized Workflow
![Centralized](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/centralized-workflow/01.svg)

#### Forking -official and others 
![Foking](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/forking-workflow/01.svg)
![project maintaining](https://www.atlassian.com/git/images/tutorials/collaborating/comparing-workflows/forking-workflow/07.svg)
#### [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request)
 Requesting that another developer (e.g., the project maintainer) pulls a branch from your repository into their repository.

#### [branching](https://www.atlassian.com/git/tutorials/using-branches)


#### [reset/checkout/revert](https://www.atlassian.com/git/tutorials/resetting-checking-out-and-reverting)

Reset: **Remove** commits from the current branch.
![Reset](https://www.atlassian.com/git/images/tutorials/advanced/resetting-checking-out-and-reverting/02.svg)

```
git reset HEAD-2  //Backwards by two commits.(Change the satage).
```
Checkout: Change the branches/ Change the Head.
![Checkout](https://www.atlassian.com/git/images/tutorials/advanced/resetting-checking-out-and-reverting/05.svg)

```
git checkout [branch] 
git checkout HEAD-2  //(Change the working). If you want to change, make a new branch.
```
Revert:  Undo a commit by creating a new commit.(**Keep status.**)
![Revert](https://www.atlassian.com/git/images/tutorials/advanced/resetting-checking-out-and-reverting/06.svg)
![Revert/Reset](https://www.atlassian.com/git/images/tutorials/getting-started/undoing-changes/04.svg)
```
git revert HEAD-2   
```
<table data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2"><thead data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0"><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0"><th data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.0"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.0.0">Command</span></th><th data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.1.0">Scope</span></th><th data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.0.0.2.0">Common use cases</span></th></tr></thead><thead data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1"><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.0.0">git reset</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.1.0">Commit-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.0.2.0">Discard commits in a private branch or throw away uncommited changes</span></td></tr><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.0.0">git reset</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.1.0">File-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.1.2.0">Unstage a file</span></td></tr><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.0.0">git checkout</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.1.0">Commit-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.2.2.0">Switch between branches or inspect old snapshots</span></td></tr><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.0.0">git checkout</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.1.0">File-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.3.2.0">Discard changes in the working directory</span></td></tr><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.0.0">git revert</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.1.0">Commit-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.4.2.0">Undo commits in a public branch</span></td></tr><tr data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5"><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.0"><code data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.0.0">git revert</code></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.1"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.1.0">File-level</span></td><td data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.2"><span data-reactid=".0.4.0.0.$=1$tutorials:0.$=1$/git/tutorials/resetting-checking-out-and-reverting:0.0.1.0.0.3.1:2.1.5.2.0">(N/A)</span></td></tr></thead></table>
