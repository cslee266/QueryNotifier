# QueryNotifier

### What is this chrome extension?

This is a chrome extension to notify user when their database query is completed. This extension only work with **Hue 4 Interface by Cloudera Enterprise 5.12**.

![Sample Screenshot](http://blog.cloudera.com/wp-content/uploads/2017/08/New-Hue-editor-Layout.png)

**An example of the notification:**

![Sample Screenshot](https://github.com/limkaijie/QueryNotifier/blob/master/screenshots/screenshot1.png)

### Why use this chrome extension?

Some queries require a long time to execute due to its complexity. This chrome extension is built to notify the user when the query has returned a result, so that the user can perform other tasks in the meantime.

### How to use this chrome extension?
1. Clone this repository at your specified directory.
```
git clone https://github.com/limkaijie/QueryNotifier.git
```
2. Go to your chrome extension settings by typing chrome://extensions at chrome browser.
3. Enable developer mode.
4. Click "Load unpacked".

![Sample Screenshot](https://github.com/limkaijie/QueryNotifier/blob/master/screenshots/screenshot2.png)

5. Select the directory where you have cloned the repository.
6. Enjoy!


### NOTE

Only use **Ctrl + Enter** to run a query.


