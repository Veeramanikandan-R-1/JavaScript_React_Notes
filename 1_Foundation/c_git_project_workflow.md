# Git and Frontend Project Workflow

This note is a practical Git command reference for daily frontend work.

---

# 1. Daily Git Flow

Use this flow for most tasks:

```bash
git status
git switch main
git pull origin main
git switch -c feature/login-form

Short answer:

| `git checkout`                                    | `git switch`                                                 |
| ------------------------------------------------- | ------------------------------------------------------------ |
| Older command (does multiple things)              | Newer command (Git 2.23+) dedicated only to branch switching |
| Switch branches                                   | Switch branches only                                         |
| Can also restore files                            | Cannot restore files                                         |
| More error-prone because it has multiple purposes | Clearer and safer                                            |

### Examples

**Switch to an existing branch**

```bash
# Old
git checkout feature/login

# New (recommended)
git switch feature/login
```

**Create and switch to a new branch**

```bash
# Old
git checkout -b feature/login

# New
git switch -c feature/login
```

### Why was `git switch` introduced?

`git checkout` was overloaded:

* Switching branches
* Restoring files
* Checking out commits/tags

This often confused users. Git introduced:

* `git switch` → for **branches**
* `git restore` → for **files**

### Recommendation

For modern Git, prefer:

* ✅ `git switch` → branch operations
* ✅ `git restore` → file operations
* Use `git checkout` mainly when working with older Git versions or legacy documentation.


# make changes

git status
git diff
git add src/components/LoginForm.jsx
git diff --staged
git commit -m "Add login form validation"
git push -u origin feature/login-form
```

---

# 2. Most Used Commands

| Command | Use |
| ------- | --- |
| `git status` | See changed files and current branch |
| `git diff` | See unstaged changes |
| `git diff --staged` | See staged changes |
| `git add <file>` | Stage one file |
| `git add .` | Stage all changed files |
| `git commit -m "message"` | Save staged changes |
| `git push` | Upload commits |
| `git pull` | Download and merge remote changes |
| `git switch <branch>` | Move to another branch |
| `git switch -c <branch>` | Create and switch to a new branch |
| `git log --oneline` | See commit history |

---

# 3. Check Current State

```bash
git status
git branch
git branch -a
git log --oneline
git log --oneline --graph --decorate --all
```

Run `git status` before every commit and push.

---

# 4. Branch Commands

```bash
git switch main
git pull origin main
git switch -c feature/navbar
git switch feature/navbar
git branch -d feature/navbar
```

Practical rule:

```text
One task = one branch
```

Good branch names:

```text
feature/login-form
fix/navbar-mobile
refactor/order-card
docs/git-commands
```

---

# 5. Stage and Commit

```bash
git diff
git add README.md
git add src/App.jsx
git diff --staged
git commit -m "Add responsive navbar"
```

Good commit messages:

```text
Add login form validation
Fix mobile navbar overflow
Update React hooks notes
Refactor product card layout
```

Avoid messages like:

```text
changes
fix
update
final
```

---

# 6. Push and Pull

First push of a new branch:

```bash
git push -u origin feature/navbar
```

After that:

```bash
git push
```

Pull latest changes:

```bash
git pull origin main
```

If your team uses rebase:

```bash
git pull --rebase origin main
```

---

# 7. Undo Commands

Undo unstaged local changes:

```bash
git restore README.md
```

Unstage a file but keep changes:

```bash
git restore --staged README.md
```

Change last commit message or add missed file:

```bash
git commit --amend
```

Undo a shared commit safely:

```bash
git revert <commit-hash>
```

Simple rule:

```text
Local uncommitted change -> git restore
Shared commit -> git revert
```

---

# 8. Stash Commands

Use stash when your work is not ready to commit but you need to switch branches.

```bash
git stash
git stash list
git stash pop
```

Apply a specific stash:

```bash
git stash apply stash@{0}
```

Delete a stash:

```bash
git stash drop stash@{0}
```

stash with specific message
```bash
git stash push -m "stash message for later ref"
```
---

# 9. Sync Feature Branch with Main

Merge style:

```bash
git switch main
git pull origin main
git switch feature/navbar
git merge main
```

Rebase style:

```bash
git switch feature/navbar
git fetch origin
git rebase origin/main
```

Use the style your team follows. Do not rebase shared branches without agreement.

---

# 10. Useful Inspection Commands

```bash
git show <commit-hash>
git blame README.md
git diff main...feature/navbar
git remote -v
git fetch origin
git ls-files
```

Use these when reviewing code or finding when something changed.

---

# 11. Common Mistakes

* Committing `.env` files.
* Using `git add .` without checking changed files.
* Mixing unrelated changes in one commit.
* Working directly on `main`.
* Force pushing to a shared branch.
* Pulling without checking current branch.
* Not reading `git diff` before committing.

---

# 12. Practical Checklist Before Commit

```text
1. Run git status
2. Run git diff
3. Stage only related files
4. Run git diff --staged
5. Commit with clear message
6. Push branch
7. Open pull request
```

---

# 13. Interview Notes

### What is Git?

Git is a version control system used to track code changes and collaborate safely.

### What is a branch?

A branch is a separate line of work for a feature, fix, or experiment.

### Difference between `git merge` and `git rebase`?

`merge` combines histories with a merge commit. `rebase` moves your commits on top of another branch to create a cleaner linear history.

### Difference between `git reset` and `git revert`?

`reset` rewrites history. `revert` creates a new commit that undoes a previous commit. Use `revert` for shared commits.

### What should you do before committing?

Run `git status`, review `git diff`, stage only related files, and write a clear commit message.
