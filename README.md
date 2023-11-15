# Free JavaScript Sticker for a Pull Request

<img src="./photos/PXL_20231115_072631595.jpeg" alt="Free JavaScript sticker - https://github.com/xallard/git-javascript-sticker" width="270"/><img src="./photos/PXL_20231115_072652446.jpeg" alt="Free JavaScript sticker - https://github.com/xallard/git-javascript-sticker" width="270"/><img src="./photos/PXL_20231115_072753008.jpeg" alt="Free JavaScript sticker - https://github.com/xallard/git-javascript-sticker" width="270"/>

## Requirements

This project uses the node-rsa library to encrypt your mailing address, so we can send your free JavaScript sticker privately and securely.

1. Node 10 and above

2. Creative branch name. Examples of branch names [BRANCH-NAMES](./BRANCH-NAMES.md)

3. Creative commit. Examples of commit messages [COMMIT-MESSAGES](./COMMIT-MESSAGES.md)

4. Creative pull request title. Examples of pull request titles [PULL-REQUEST-TITLES](./PULL-REQUEST-TITLES.md)

5. Creative pull request description. Examples of pull request descriptions [PULL-REQUEST-DESCRIPTIONS](./PULL-REQUEST-DESCRIPTIONS.md)

## Instructions

1. Fork this repository

2. Clone your forked repository to your local machine, and once inside it, install the necessary npm packages.

   ```
   git clone <your-forked-respository-git-url>
   ```

   ```
   cd <your-forked-repository-folder>
   ```

   ```
   npm install
   ```

3. create a new branch:

   ```
   git checkout -b <creative-branch-name>
   ```

4. Encrypt your mailing address by running:

   ```
   npm start
   ```

5. Create a new file name and paste in the encrypted output string:

   ```
   stickers/<your-github-username>.txt
   ```

6. Create a new commit:

   ```
   git add .
   ```

   ```
   git commit -m "<creative-commit-message>"
   ```

7. Push your new branch to your forked repository

   ```
   git push origin <creative-branch-name>
   ```

8. Open a new pull request on Github with a creative title and description.

9. That's it! Your pull request is now submitted and I will carefully review it and approve it.

## After Receiving Your Free Sticker

1. Upload a photo of your new JavaScript sticker to your favorite platform

2. Create a new pull request with a link to the photo of your sticker

3. Spread the love and excitement to your collegues about the [git-javascript-sticker](https://github.com/xallard/git-javascript-sticker) repository, and mention how they could also recieve a free JavaScript sticker!

## Keep up to date with new stickers

- Star and watch the [git-javascript-sticker](https://github.com/xallard/git-javascript-sticker) repository to keep track of new free stickers!
