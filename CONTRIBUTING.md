# 🤝 How to Contribute to AWS Cloud Practitioner Exam Prep

We’re thrilled that you want to contribute to **AWS Cloud Practitioner Exam Prep**! Follow these steps to make meaningful contributions:

1.  **⭐ Star the Repository**
    Show your support and stay updated with the latest changes by starring the project on GitHub.

2.  **Explore Existing Issues or Create Your Own**
    *   Check out the [Issues](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME/issues) to see where help is needed.
    *   If you have a new idea or feature request, feel free to open a new issue with a clear description.

3.  **Fork the Repository and Create a Branch**
    *   Fork the repo to your GitHub account.
    *   Create a **feature branch** for the specific issue you’re working on, e.g., `feature/your-feature-name`.

4.  **Make Changes and Test**
    *   Follow the Code Standards (ensure your code adheres to TypeScript and Tailwind CSS best practices as seen in the existing codebase).
    *   Write unit or integration tests for new features (if applicable).
    *   Test your changes thoroughly in your local environment.

5.  **Commit Changes with Clear Messages**
    *   Use Conventional Commits for descriptive commit messages, e.g., `feat: add user registration form`.

6.  **Push Your Branch and Open a Pull Request**
    *   Push your branch to your forked repository.
    *   Submit a PR with a clear title and description explaining:
        *   The problem solved
        *   Your approach
        *   Any related issues (`Closes #issue_number`)

7.  **Add Screenshots or Demos**
    *   Include images or GIFs to demonstrate UI changes or new features.
    *   This helps reviewers understand the changes quickly.

> 💡 Tip: Always be open to feedback, respond promptly, and update your PR as needed. Your contributions help make AWS Cloud Practitioner Exam Prep better for everyone! 🚀

## How to make a Pull Request

**1.** Fork the repository by clicking on the Fork symbol at the top right corner of the project's GitHub page.

**2.** Clone the forked repository to your local machine.
```bash
git clone https://github.YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
```
(Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPOSITORY_NAME` with the actual repository name, e.g., `aws-cloud-practitioner-prep`.)

**3.** Navigate to the project directory.
```bash
cd YOUR_REPOSITORY_NAME
```

**4.** Create a new branch for your changes:
```bash
git checkout -b YourBranchName
```

**5.** Make changes in the source code.

**6.** Stage your changes and commit them with a descriptive message:

```bash
git add .
git commit -m "feat: add new feature or fix bug"
```

**7.** Push your local commits to your forked repository:

```bash
git push origin YourBranchName
```

**8.** Create a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository to the `main` branch of the original repository.

**Note**: If anyone contributes to this repository, your local forked repository will not automatically reflect those changes. To keep your fork in sync:

**9.** Set up a reference (remote) to the original repository to get all the changes from the upstream.
```bash
git remote add upstream https://github.com/eccentriccoder01/SaralSeva.git
```
(You'll need to replace `eccentriccoder01/SaralSeva.git` with the actual owner/name of this project's main repository.)

**10.** Check the remotes for this repository to ensure `origin` (your fork) and `upstream` (the original repo) are configured correctly.
```bash
git remote -v
```

**11.** Fetch changes from the upstream repository:
```bash
git fetch upstream
```

**12.** Make sure that you're on your `main` branch (or the branch you want to update).
```bash
git checkout main
```

**13.** Now, merge the upstream changes into your local branch. This will bring your branch into sync with the upstream, without losing your local changes.
```bash
git merge upstream/main
```

## ✅ Tips for a Successful Pull Request

To increase the likelihood of your pull request being accepted, follow these best practices:

*   **Follow the Style Guide**
    Adhere to the existing coding style and conventions of the project (TypeScript, Tailwind CSS, shadcn/ui usage). Any linting errors should be visible when running your project’s test commands.

*   **Write and Update Tests**
    Ensure that new features are covered by **unit or integration tests** (if applicable), and update existing tests if necessary.

*   **Keep Changes Focused**
    Each pull request should address a single issue or feature. If you have multiple unrelated changes, submit them as **separate pull requests**.

*   **Write Clear Commit Messages**
    Use descriptive and concise commit messages. Refer to [this guide on writing good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).

*   **Provide Context**
    Explain the purpose of your changes, why they are needed, and any relevant background in the PR description.

*   **Include Screenshots or Demos**
    For UI changes or visual updates, include screenshots or GIFs to help reviewers understand the impact.

> Following these guidelines not only speeds up the review process but also helps maintain a clean and professional project history. 🚀

## 📚 Resources

Here are some helpful resources to guide you while contributing to **AWS Cloud Practitioner Exam Prep**:

*   [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/) – A comprehensive guide for beginners and experienced contributors.
*   [Using Pull Requests](https://help.github.com/articles/about-pull-requests/) – Learn how to create, review, and manage pull requests on GitHub.
*   [GitHub Help](https://help.github.com) – Official GitHub documentation for troubleshooting, tips, and best practices.

> 💡 Tip: Bookmark these resources—they’re invaluable when contributing to any open-source project!