\*npx create-next-app\*

<!-- pages -->

*in pages folder, keep first letter of the file in small letter. And you can call function name inside in any either small or big letter.
*All pages we created will by default comes with route/r.
*we can give dynamic name to the pages by writing page number inside the [].
Ex: [pageNumber].js
*we can access page number in dynamic page by importing and using useRouter fron "next/router"
\*we can link pages using <Link>Insert Data Here</Link> tag y importing and using useRouter fron "next/link". It requires href as a prop with a link to navigate.
Ex: <Link href="https://localhost:3000/about">About</Link>

<!-- CSS -->

\*Global Level Styling\*
\*we can add css in default global.module.css file or

\*Component Level Styling\*
\*we can also write page specific code in css file with name as [pageName].module.css. And we have to also import & store the page specific css file in that page.
\*we can apply page specific css by passing classname with styles.cssKeyName inside the {}.
Ex: <h1 className={styles.headerText}>Sample text here</h1>
\*Suppose there multiple classNames assigned to an element, then we have to use template literals and $symbol. 
Ex: <h1 className={`${styles.headerText} ${styles.headerBold}`}>Sample text here</h1>

\*Inline Level Styling\*
\*we can give inline styling just like normal ReactJS inline styling means, we have to use double curly braces {{}} assigned to an object[key:"value" pair].
Ex: <h1 style={{color:"green",position:"absolute"}}>

\*there is one more way to write inline style using <style jsx>
Ex:

<style jsx>
{`
    .textBro{
        position:absolute;
        color:black
    },
    headerText:{
        size:x-large;
        font-family:"Sans"
    }
    `
}
</style>

<!-- Components -->

\*if any code is being used repetatively in the page/s, then make it as a component and re-use it

<!-- Images -->

\* Internal Images\*
*import Image component from "next/image"
*it needs width & height or layout="fill" and src as a property

\* External Images\*
\*to add external images, we need to add images key with domains as an array of image website in next.config.js
Ex: images:{
domains:["images.pexels.com","images.unsplash.com"]
}
