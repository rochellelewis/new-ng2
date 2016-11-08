# new-ng2
New ng2 test spin up using our new process. Simplified from Dylan's screencast, all project-specific backend logic has been stripped, leaving you with a pristine Angularific front-end for your app. Services, classes and apis will need to be created on an as-needed basis later, after this spin up.

All boilerplate code should be taken from this example, which is based totally on [Getting Started with Angular 2](https://bootcamp-coders.cnm.edu/screencasts/getting-started-with-angular2/).

# Instructions
I assume that you have Node, npm, typescript and webpack all installed and up-to-date on your laptop
~ AND ~
your Angular, TypeScript and Node plugins are installed/activated in PhpStorm. Ok? Let's get rolling!

1. Create a new github repo, add your .gitignore, clone it down, and create a new deployment!
2. Add `package.json` boilerplate code, and **update the relevant fields for YOUR project**.
3. `cd` into your project directory and run `npm install` both on your laptop (hereafter referred to as "**locally**") AND on your bootcamp-coders.cnm.edu deployment (henceforth referred to as "**remote**")
4. Add `tsconfig.json` boilerplate
NOTE: Do NOT add typings like in the screencast.

5. Add `.bootstraprc` Flip the scripts to TRUE, dammit! (jQuery is our FRIEND, Dylan!)

6. Create the `/webpack` directory in the project root, and now we'll create all your webpack files!
 - Create `helpers.js` - boilerplate code
 - Create `webpack.common.js` - boilerplate code
 - Create `webpack.live.js` - boilerplate code
 - Create the `index.php` HTML template. **Update the custom tag here with your app name**!

7. Create the `/app` directory, and we'll add all your app files in here boo.
 - Create `app/vendor.ts` - boilerplate code. (Please vote YES to TypeScript compiling in PhpStorm)
 - Create `app/polyfills.ts`- boilerplate code
 - Create `app/app.css` - you can leave this blank for now. All your custom CSS will be written here.
 - Create `app/app.ts` - boilerplate code
 - Create `app/app.module.ts` - boilerplate code
 - Create `app/app.component.ts` - Now **update your *selector* here** with your app name. See the *custom tag* you put inside your webpack/index.php file!
 - Create `app/app.routes.ts` - **Update these routes for YOUR app!** (We're just sticking to the splash page here for now!)

8. Create the `app/components` directory and create your app "Components" in here
 - Create `splash-component.ts` (We're stripping out all that pesky logic for now and keeping this bare bones here. See our sample code.)
 - **NOTE: All your TypeScript "transpiling" should now resolve! ~~**

9. Create your `/public_html/templates` directory
 - Create your base template HTML: `yourapp-app.php`
 - Create your splash/home template HTML: `splash.php`

10. add the `.htaccess` file to /public_html - boilerplate code

**Run `npm run build` both locally and remote and you should be good to go!**