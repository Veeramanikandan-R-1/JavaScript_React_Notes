# Revision Notes: Git and Frontend Project Workflow

## Daily Flow

```bash
git status
git switch main
git pull origin main
git switch -c feature/navbar

# make changes

git diff
git add <file>
git diff --staged
git commit -m "Add responsive navbar"
git push -u origin feature/navbar
```

---

# Most Used Commands

| Command | Use |
| ------- | --- |
| `git status` | See current state |
| `git diff` | See unstaged changes |
| `git add <file>` | Stage a file |
| `git commit -m "message"` | Save changes |
| `git push` | Upload commits |
| `git pull` | Download changes |
| `git switch <branch>` | Change branch |
| `git switch -c <branch>` | Create branch |
| `git log --oneline` | See history |

---

# Branch Commands

```bash
git branch
git switch main
git switch -c feature/login-form
git branch -d feature/login-form
```

---

# Undo Commands

```bash
git restore <file>
git restore --staged <file>
git commit --amend
git revert <commit-hash>
```

Rule:

```text
Local uncommitted change -> git restore
Shared commit -> git revert
```

---

# Stash Commands

```bash
git stash
git stash list
git stash pop
```

---

# Common Mistakes

* Committing `.env`.
* Using `git add .` without checking files.
* Working directly on `main`.
* Mixing unrelated changes.
* Force pushing shared branches.

---

# Interview Quick Answers

### What is Git?

Git tracks code changes and helps teams collaborate safely.

### What is a branch?

A separate line of work for a feature, bug fix, or experiment.

### Merge vs rebase?

Merge combines histories. Rebase moves your commits on top of another branch.

### Reset vs revert?

Reset rewrites history. Revert creates a new commit that undoes an old commit.
